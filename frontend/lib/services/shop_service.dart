import 'package:image_picker/image_picker.dart';
import 'mock_data.dart';

class ShopService {
  static const String baseUrl = 'http://localhost:5000';

  // CREATE SHOP
  static Future<Map<String, dynamic>> createShop({
    required String shopName,
    XFile? shopImage,
  }) async {
    MockData.user['has_shop'] = 1;
    MockData.user['shop_name'] = shopName;
    return {
      'success': true,
      'data': {
        'message': 'Shop created successfully',
        'shop_name': shopName,
      }
    };
  }

  // UPDATE SHOP
  static Future<Map<String, dynamic>> updateShop({
    String? shopName,
    XFile? shopImage,
  }) async {
    if (shopName != null) MockData.user['shop_name'] = shopName;
    return {
      'success': true,
      'data': {
        'message': 'Shop updated successfully',
        'shop_name': MockData.user['shop_name'],
      }
    };
  }

  // DELETE SHOP
  static Future<Map<String, dynamic>> deleteShop() async {
    MockData.user['has_shop'] = 0;
    return {'success': true, 'message': 'Shop deleted successfully'};
  }

  // GET USER SHOP INFO (from user profile)
  static Future<Map<String, dynamic>> getUserShopInfo() async {
    return {
      'success': true,
      'hasShop': (MockData.user['has_shop'] == 1),
      'shopName': MockData.user['shop_name'] ?? 'Aura Streetwear',
      'shopPicture': MockData.user['shop_picture'],
    };
  }
}
