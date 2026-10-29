import 'package:image_picker/image_picker.dart';
import 'mock_data.dart';

class ProductService {
  static const String baseUrl = 'http://localhost:5000';

  // CREATE PRODUCT
  static Future<Map<String, dynamic>> createProduct({
    required String productName,
    required double price,
    required String category,
    String? description,
    int? stock,
    required XFile productImage,
  }) async {
    try {
      final newId = (100 + MockData.products.length + 1).toString();
      final newProduct = {
        'product_id': newId,
        'user_id': MockData.user['user_id'] ?? 1,
        'owner_id': MockData.user['user_id'] ?? 1,
        'shop_name': MockData.user['shop_name'] ?? 'Aura Streetwear',
        'shop_picture': MockData.user['shop_picture'] ?? 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80',
        'product_name': productName,
        'price': price,
        'stock': stock ?? 10,
        'category': category,
        'description': description ?? 'New premium arrival available in store.',
        'product_image': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
        'is_deleted': 0,
        'created_at': DateTime.now().toIso8601String(),
      };

      MockData.products.insert(0, newProduct);

      return {
        'success': true,
        'data': {'productId': newId, 'message': 'Product created successfully'}
      };
    } catch (e) {
      return {'success': false, 'message': 'Failed to create product: $e'};
    }
  }

  // GET MY PRODUCTS
  static Future<Map<String, dynamic>> getMyProducts() async {
    final myUserId = MockData.user['user_id'] ?? 1;
    final myProducts = MockData.products
        .where((p) => p['user_id'] == myUserId && p['is_deleted'] == 0)
        .toList();
    return {'success': true, 'products': myProducts};
  }

  // GET ALL PRODUCTS
  static Future<Map<String, dynamic>> getAllProducts() async {
    final active = MockData.products.where((p) => p['is_deleted'] == 0).toList();
    return {'success': true, 'products': active};
  }

  // GET PRODUCTS BY CATEGORY
  static Future<Map<String, dynamic>> getProductsByCategory(String category) async {
    if (category.toLowerCase() == 'all') {
      return getAllProducts();
    }
    final filtered = MockData.products
        .where((p) =>
            p['is_deleted'] == 0 &&
            p['category'].toString().toLowerCase() == category.toLowerCase())
        .toList();
    return {'success': true, 'products': filtered};
  }

  // GET PRODUCT BY ID
  static Future<Map<String, dynamic>> getProductById(String productId) async {
    final found = MockData.products.firstWhere(
      (p) => p['product_id'].toString() == productId.toString(),
      orElse: () => MockData.products.first,
    );
    return {'success': true, 'product': found};
  }

  // UPDATE PRODUCT
  static Future<Map<String, dynamic>> updateProduct({
    required String productId,
    String? productName,
    double? price,
    String? category,
    String? description,
    int? stock,
    XFile? productImage,
  }) async {
    for (var i = 0; i < MockData.products.length; i++) {
      if (MockData.products[i]['product_id'].toString() == productId.toString()) {
        if (productName != null) MockData.products[i]['product_name'] = productName;
        if (price != null) MockData.products[i]['price'] = price;
        if (category != null) MockData.products[i]['category'] = category;
        if (description != null) MockData.products[i]['description'] = description;
        if (stock != null) MockData.products[i]['stock'] = stock;
        return {'success': true, 'data': MockData.products[i]};
      }
    }
    return {'success': false, 'message': 'Product not found'};
  }

  // DELETE PRODUCT
  static Future<Map<String, dynamic>> deleteProduct(String productId) async {
    MockData.products.removeWhere(
      (p) => p['product_id'].toString() == productId.toString(),
    );
    return {'success': true, 'message': 'Product deleted successfully'};
  }
}
