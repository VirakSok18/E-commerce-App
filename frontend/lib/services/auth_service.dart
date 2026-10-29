import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';
import 'mock_data.dart';

class AuthService {
  static const String baseUrl = 'http://localhost:5000';
  static const _secureStorage = FlutterSecureStorage();
  static String? _accessToken = 'mock_demo_jwt_token_12345';

  // REGISTER with optional profile picture
  static Future<Map<String, dynamic>> register({
    required String username,
    required String email,
    required String password,
    String? phone,
    String? shopName,
    XFile? profilePicture,
  }) async {
    MockData.user['username'] = username;
    MockData.user['email'] = email;
    if (phone != null) MockData.user['phone'] = phone;
    if (shopName != null) {
      MockData.user['has_shop'] = 1;
      MockData.user['shop_name'] = shopName;
    }
    return {
      'success': true,
      'data': {
        'userId': MockData.user['user_id'],
        'username': MockData.user['username'],
        'accessToken': _accessToken,
        'refreshToken': 'mock_refresh_token',
      }
    };
  }

  // LOGIN
  static Future<Map<String, dynamic>> login({
    required String email,
    required String password,
  }) async {
    MockData.user['email'] = email;
    return {
      'success': true,
      'data': {
        'userId': MockData.user['user_id'],
        'username': MockData.user['username'],
        'accessToken': _accessToken,
        'refreshToken': 'mock_refresh_token',
      }
    };
  }

  // REFRESH ACCESS TOKEN
  static Future<bool> refreshAccessToken() async {
    return true;
  }

  // LOGOUT
  static Future<void> logout() async {
    // Keep user logged in or reset to demo
    await _secureStorage.deleteAll();
  }

  // AUTHENTICATED REQUEST HELPER (Simulated local response)
  static Future<http.Response> authenticatedRequest({
    required String method,
    required String endpoint,
    Map<String, String>? headers,
    dynamic body,
  }) async {
    final cleanEndpoint = endpoint.toLowerCase();

    // 1. Get user by ID / profile
    if (cleanEndpoint.contains('/api/users/')) {
      return http.Response(jsonEncode(MockData.user), 200);
    }

    // 2. Orders endpoints
    if (cleanEndpoint.contains('/getcarttotal')) {
      return http.Response(
        jsonEncode({
          'cartItems': MockData.cart,
          'cartTotal': MockData.cartTotal,
        }),
        200,
      );
    }
    if (cleanEndpoint.contains('/getorders')) {
      return http.Response(jsonEncode(MockData.cart), 200);
    }
    if (cleanEndpoint.contains('/my-orders')) {
      return http.Response(jsonEncode({'orders': MockData.orders}), 200);
    }
    if (cleanEndpoint.contains('/add-to-cart')) {
      return http.Response(jsonEncode({'message': 'Added to cart'}), 200);
    }
    if (cleanEndpoint.contains('/updatecartitem')) {
      return http.Response(jsonEncode({'message': 'Updated cart'}), 200);
    }
    if (cleanEndpoint.contains('/removefromcart')) {
      return http.Response(jsonEncode({'message': 'Removed from cart'}), 200);
    }
    if (cleanEndpoint.contains('/buyproduct')) {
      return http.Response(
        jsonEncode({'message': 'Order placed', 'orderId': 'ORD-9999'}),
        200,
      );
    }

    // 3. Products
    if (cleanEndpoint.contains('/my-products')) {
      final myProducts = MockData.products
          .where((p) => p['user_id'] == MockData.user['user_id'] && p['is_deleted'] == 0)
          .toList();
      return http.Response(jsonEncode(myProducts), 200);
    }

    // Default fallback
    return http.Response(jsonEncode({'success': true, 'message': 'OK'}), 200);
  }

  // UPDATE PROFILE
  static Future<Map<String, dynamic>> updateProfile({
    String? username,
    String? phone,
    String? shopName,
    XFile? profilePicture,
  }) async {
    if (username != null) MockData.user['username'] = username;
    if (phone != null) MockData.user['phone'] = phone;
    if (shopName != null) {
      MockData.user['has_shop'] = 1;
      MockData.user['shop_name'] = shopName;
    }
    return {'success': true, 'data': MockData.user};
  }

  // GET USER BY ID
  static Future<Map<String, dynamic>> getUserById(String userId) async {
    return {'success': true, 'data': MockData.user};
  }

  // GETTERS
  static String? getAccessToken() => _accessToken;

  static Future<String?> getRefreshToken() async => 'mock_refresh_token';

  static Future<bool> isLoggedIn() async => true; // Always logged in for showcase

  static Future<String?> getUserId() async => (MockData.user['user_id'] ?? 1).toString();

  static Future<String?> getUsername() async => MockData.user['username'] ?? 'Virak Sok';

  static Future<String?> getProfilePicture() async => MockData.user['profile_picture'];
}
