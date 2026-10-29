import 'mock_data.dart';

class OrderService {
  static const String baseUrl = 'http://localhost:5000';

  // ADD TO CART
  static Future<Map<String, dynamic>> addToCart({
    required String productId,
    required int quantity,
  }) async {
    try {
      // Find matching product in catalog
      final product = MockData.products.firstWhere(
        (p) => p['product_id'].toString() == productId.toString(),
        orElse: () => MockData.products.first,
      );

      // Check if already in cart
      final existingIndex = MockData.cart.indexWhere(
        (item) => item['product_id'].toString() == productId.toString(),
      );

      if (existingIndex >= 0) {
        final currentQty = int.tryParse(MockData.cart[existingIndex]['quantity'].toString()) ?? 1;
        MockData.cart[existingIndex]['quantity'] = currentQty + quantity;
      } else {
        MockData.cart.insert(0, {
          'cart_id': 'c_${DateTime.now().millisecondsSinceEpoch}',
          'id': 'c_${DateTime.now().millisecondsSinceEpoch}',
          'product_id': product['product_id'],
          'product_name': product['product_name'],
          'price': product['price'],
          'quantity': quantity,
          'stock': product['stock'] ?? 20,
          'product_image': product['product_image'],
          'shop_name': product['shop_name'] ?? 'Aura Streetwear',
        });
      }

      return {'success': true, 'message': 'Added to cart successfully'};
    } catch (e) {
      return {'success': false, 'message': 'Failed to add to cart: $e'};
    }
  }

  // GET CART ITEMS
  static Future<Map<String, dynamic>> getCart() async {
    return {'success': true, 'cartItems': List.from(MockData.cart)};
  }

  // GET CART TOTAL
  static Future<Map<String, dynamic>> getCartTotal() async {
    return {
      'success': true,
      'cartItems': List.from(MockData.cart),
      'cartTotal': MockData.cartTotal,
    };
  }

  // UPDATE CART ITEM
  static Future<Map<String, dynamic>> updateCartItem({
    required String cartId,
    required int quantity,
  }) async {
    for (var item in MockData.cart) {
      if (item['cart_id'].toString() == cartId.toString() ||
          item['id'].toString() == cartId.toString()) {
        item['quantity'] = quantity;
        return {'success': true, 'message': 'Cart updated'};
      }
    }
    return {'success': false, 'message': 'Cart item not found'};
  }

  // DELETE CART ITEM
  static Future<Map<String, dynamic>> deleteCartItem(String cartId) async {
    MockData.cart.removeWhere(
      (item) =>
          item['cart_id'].toString() == cartId.toString() ||
          item['id'].toString() == cartId.toString(),
    );
    return {'success': true, 'message': 'Item removed from cart'};
  }

  // GET USER ORDERS
  static Future<Map<String, dynamic>> getUserOrders() async {
    return {'success': true, 'orders': List.from(MockData.orders)};
  }

  // BUY PRODUCTS (Checkout selected items)
  static Future<Map<String, dynamic>> buyProducts({
    required List<String> cartIds,
  }) async {
    try {
      final purchasedItems = MockData.cart
          .where((item) =>
              cartIds.contains(item['cart_id'].toString()) ||
              cartIds.contains(item['id'].toString()))
          .toList();

      if (purchasedItems.isEmpty && MockData.cart.isNotEmpty) {
        purchasedItems.addAll(MockData.cart);
      }

      double total = 0.0;
      for (var item in purchasedItems) {
        final p = double.tryParse(item['price'].toString()) ?? 0.0;
        final q = int.tryParse(item['quantity'].toString()) ?? 1;
        total += p * q;
      }

      final newOrderId = 'ORD-${1000 + MockData.orders.length + 1}';
      final newOrder = {
        'order_id': newOrderId,
        'id': newOrderId,
        'order_date': DateTime.now().toIso8601String(),
        'status': 'Processing',
        'total_price': double.parse(total.toStringAsFixed(2)),
        'items': List.from(purchasedItems),
      };

      MockData.orders.insert(0, newOrder);

      // Remove purchased items from cart
      MockData.cart.removeWhere((item) =>
          cartIds.contains(item['cart_id'].toString()) ||
          cartIds.contains(item['id'].toString()));

      return {
        'success': true,
        'message': 'Order placed successfully!',
        'orderId': newOrderId,
      };
    } catch (e) {
      return {'success': false, 'message': 'Checkout failed: $e'};
    }
  }
}
