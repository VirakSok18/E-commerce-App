class MockData {
  static Map<String, dynamic> user = {
    'user_id': 1,
    'username': 'Virak Sok',
    'email': 'virak.sok@example.com',
    'phone': '+855 12 345 678',
    'has_shop': 1,
    'shop_name': 'Night Market',
    'shop_picture': 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80',
    'profile_picture': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  };

  static List<Map<String, dynamic>> shops = [
    {
      'shop_name': 'Night Market',
      'owner_id': 1,
      'owner_picture': 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80',
      'product_count': 4,
    },
    {
      'shop_name': 'TechSphere Audio',
      'owner_id': 2,
      'owner_picture': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
      'product_count': 3,
    },
    {
      'shop_name': 'Nordic Living',
      'owner_id': 3,
      'owner_picture': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80',
      'product_count': 3,
    },
  ];

  static List<Map<String, dynamic>> products = [
    {
      'product_id': '101',
      'user_id': 1,
      'owner_id': 1,
      'shop_name': 'Night Market',
      'shop_picture': 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80',
      'product_name': 'Nike Air Jordan 1 Retro High',
      'price': 185.00,
      'stock': 14,
      'category': 'Fashion & Clothing',
      'description': 'Iconic high-top silhouette in premium leather with Air-Sole cushioning and signature styling.',
      'product_image': 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80',
      'is_deleted': 0,
      'created_at': DateTime.now().subtract(const Duration(days: 2)).toIso8601String(),
    },
    {
      'product_id': '102',
      'user_id': 2,
      'owner_id': 2,
      'shop_name': 'TechSphere Audio',
      'shop_picture': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
      'product_name': 'Sony WH-1000XM5 Wireless',
      'price': 349.99,
      'stock': 22,
      'category': 'Electronics',
      'description': 'Industry-leading noise canceling headphones with dual processors and 30-hour battery life.',
      'product_image': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      'is_deleted': 0,
      'created_at': DateTime.now().subtract(const Duration(days: 3)).toIso8601String(),
    },
    {
      'product_id': '103',
      'user_id': 1,
      'owner_id': 1,
      'shop_name': 'Night Market',
      'shop_picture': 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80',
      'product_name': 'Oversized Washed Heavyweight Hoodie',
      'price': 68.00,
      'stock': 35,
      'category': 'Fashion & Clothing',
      'description': '450 GSM luxury French terry cotton hoodie with dropped shoulders and double-layered hood.',
      'product_image': 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80',
      'is_deleted': 0,
      'created_at': DateTime.now().subtract(const Duration(days: 4)).toIso8601String(),
    },
    {
      'product_id': '104',
      'user_id': 2,
      'owner_id': 2,
      'shop_name': 'TechSphere Audio',
      'shop_picture': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
      'product_name': 'Minimalist Mechanical Keyboard',
      'price': 129.50,
      'stock': 18,
      'category': 'Electronics',
      'description': '75% layout aluminum chassis with hot-swappable switches, RGB backlight and PBT keycaps.',
      'product_image': 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
      'is_deleted': 0,
      'created_at': DateTime.now().subtract(const Duration(days: 5)).toIso8601String(),
    },
    {
      'product_id': '105',
      'user_id': 3,
      'owner_id': 3,
      'shop_name': 'Nordic Living',
      'shop_picture': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80',
      'product_name': 'Ceramic Matte Pour-Over Coffee Mug',
      'price': 24.00,
      'stock': 40,
      'category': 'Home & Living',
      'description': 'Handcrafted ceramic mug with ergonomic handle and heat-retaining speckled matte glaze.',
      'product_image': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
      'is_deleted': 0,
      'created_at': DateTime.now().subtract(const Duration(days: 6)).toIso8601String(),
    },
    {
      'product_id': '106',
      'user_id': 3,
      'owner_id': 3,
      'shop_name': 'Nordic Living',
      'shop_picture': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80',
      'product_name': 'Modern Touch LED Desk Lamp',
      'price': 48.00,
      'stock': 16,
      'category': 'Home & Living',
      'description': 'Dimmable warm-to-cool LED desk light with wireless fast-charging phone base and timer.',
      'product_image': 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=600&q=80',
      'is_deleted': 0,
      'created_at': DateTime.now().subtract(const Duration(days: 7)).toIso8601String(),
    },
    {
      'product_id': '107',
      'user_id': 1,
      'owner_id': 1,
      'shop_name': 'Night Market',
      'shop_picture': 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80',
      'product_name': 'Everyday Waterproof Commuter Backpack',
      'price': 89.00,
      'stock': 25,
      'category': 'Sports & Fitness',
      'description': 'Weatherproof Cordura nylon with 16-inch padded laptop sleeve and hidden security pocket.',
      'product_image': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
      'is_deleted': 0,
      'created_at': DateTime.now().subtract(const Duration(days: 8)).toIso8601String(),
    },
    {
      'product_id': '108',
      'user_id': 3,
      'owner_id': 3,
      'shop_name': 'Nordic Living',
      'shop_picture': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80',
      'product_name': 'Hydrating Botanical Facial Serum',
      'price': 36.00,
      'stock': 30,
      'category': 'Beauty & Health',
      'description': 'Pure botanical elixir with hyaluronic acid, vitamin C and niacinamide for radiant skin.',
      'product_image': 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
      'is_deleted': 0,
      'created_at': DateTime.now().subtract(const Duration(days: 9)).toIso8601String(),
    },
  ];

  static List<Map<String, dynamic>> cart = [];

  static List<Map<String, dynamic>> orders = [
    {
      'order_id': 'ORD-9421',
      'id': 'ORD-9421',
      'order_date': DateTime.now().subtract(const Duration(days: 1)).toIso8601String(),
      'status': 'Delivered',
      'total_price': 129.50,
      'items': [
        {
          'product_name': 'Minimalist Mechanical Keyboard',
          'price': 129.50,
          'quantity': 1,
          'product_image': 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
          'shop_name': 'TechSphere Audio',
        }
      ]
    },
    {
      'order_id': 'ORD-8930',
      'id': 'ORD-8930',
      'order_date': DateTime.now().subtract(const Duration(days: 4)).toIso8601String(),
      'status': 'In Transit',
      'total_price': 349.99,
      'items': [
        {
          'product_name': 'Sony WH-1000XM5 Wireless',
          'price': 349.99,
          'quantity': 1,
          'product_image': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
          'shop_name': 'TechSphere Audio',
        }
      ]
    }
  ];

  static double get cartTotal {
    double total = 0.0;
    for (var item in cart) {
      final p = double.tryParse(item['price'].toString()) ?? 0.0;
      final q = int.tryParse(item['quantity'].toString()) ?? 1;
      total += p * q;
    }
    return double.parse(total.toStringAsFixed(2));
  }
}
