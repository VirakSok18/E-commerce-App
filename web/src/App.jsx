import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  Download,
  Search,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  Package,
  Layers,
  Smartphone,
  ShieldCheck,
  Store,
  ArrowRight,
  ExternalLink,
  X
} from 'lucide-react';

const INITIAL_PRODUCTS = [
  {
    id: '101',
    name: 'Nike Air Jordan 1 Retro High',
    category: 'Fashion & Clothing',
    price: 185.00,
    stock: 14,
    shop: 'Aura Streetwear',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80',
    description: 'Iconic high-top silhouette in premium leather with Air-Sole cushioning and signature styling.'
  },
  {
    id: '102',
    name: 'Sony WH-1000XM5 Wireless',
    category: 'Electronics',
    price: 349.99,
    stock: 22,
    shop: 'TechSphere Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    description: 'Industry-leading noise canceling headphones with dual processors and 30-hour battery life.'
  },
  {
    id: '103',
    name: 'Oversized Heavyweight Hoodie',
    category: 'Fashion & Clothing',
    price: 68.00,
    stock: 35,
    shop: 'Aura Streetwear',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80',
    description: '450 GSM luxury French terry cotton hoodie with dropped shoulders and double-layered hood.'
  },
  {
    id: '104',
    name: 'Minimalist Mechanical Keyboard',
    category: 'Electronics',
    price: 129.50,
    stock: 18,
    shop: 'TechSphere Audio',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    description: '75% layout aluminum chassis with hot-swappable switches, RGB backlight and PBT keycaps.'
  },
  {
    id: '105',
    name: 'Ceramic Pour-Over Coffee Mug',
    category: 'Home & Living',
    price: 24.00,
    stock: 40,
    shop: 'Nordic Living',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
    description: 'Handcrafted ceramic mug with ergonomic handle and heat-retaining speckled matte glaze.'
  },
  {
    id: '106',
    name: 'Touch Sensor LED Desk Lamp',
    category: 'Home & Living',
    price: 48.00,
    stock: 16,
    shop: 'Nordic Living',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=600&q=80',
    description: 'Dimmable warm-to-cool LED desk light with wireless fast-charging phone base and timer.'
  },
  {
    id: '107',
    name: 'Waterproof Commuter Backpack',
    category: 'Sports & Fitness',
    price: 89.00,
    stock: 25,
    shop: 'Aura Streetwear',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    description: 'Weatherproof Cordura nylon with 16-inch padded laptop sleeve and hidden security pocket.'
  },
  {
    id: '108',
    name: 'Botanical Hydrating Facial Serum',
    category: 'Beauty & Health',
    price: 36.00,
    stock: 30,
    shop: 'Nordic Living',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
    description: 'Pure botanical elixir with hyaluronic acid, vitamin C and niacinamide for radiant skin.'
  }
];

const CATEGORIES = [
  'All',
  'Electronics',
  'Fashion & Clothing',
  'Home & Living',
  'Sports & Fitness',
  'Beauty & Health'
];

const MOBILE_SCREENSHOTS = [
  {
    title: 'Home Discovery Feed',
    subtitle: 'Featured products, categories & search',
    file: '/screenshots/Screenshot 2025-10-07 232136.png'
  },
  {
    title: 'Product Details & Specs',
    subtitle: 'High-res gallery, pricing & stock',
    file: '/screenshots/Screenshot 2025-10-07 233802.png'
  },
  {
    title: 'Dynamic Shopping Cart',
    subtitle: 'Quantity controls & subtotal calculation',
    file: '/screenshots/Screenshot 2025-10-07 233821.png'
  },
  {
    title: 'Order Status & Tracking',
    subtitle: 'Processing, Shipped, Delivered history',
    file: '/screenshots/Screenshot 2025-10-07 233828.png'
  },
  {
    title: 'Vendor Storefront View',
    subtitle: 'Merchant profile and product inventory',
    file: '/screenshots/Screenshot 2025-10-07 233835.png'
  },
  {
    title: 'Product Creation Dialog',
    subtitle: 'Category picker, pricing and upload',
    file: '/screenshots/Screenshot 2025-10-07 233842.png'
  },
  {
    title: 'Account & Profile Management',
    subtitle: 'Personal details and credentials',
    file: '/screenshots/Screenshot 2025-10-07 233850.png'
  },
  {
    title: 'Authentication & Sign In',
    subtitle: 'Secure token authentication flow',
    file: '/screenshots/Screenshot 2025-10-07 233911.png'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([
    {
      id: '101',
      name: 'Nike Air Jordan 1 Retro High',
      price: 185.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80',
      shop: 'Aura Streetwear'
    },
    {
      id: '105',
      name: 'Ceramic Pour-Over Coffee Mug',
      price: 24.00,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
      shop: 'Nordic Living'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderSuccessToast, setOrderSuccessToast] = useState(false);
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' | 'gallery' | 'architecture'

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter((product) => {
      const matchCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shop.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Cart Calculations
  const cartItemCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
          shop: product.shop
        }
      ];
    });
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleSimulateCheckout = () => {
    if (cart.length === 0) return;
    setCart([]);
    setIsCartOpen(false);
    setOrderSuccessToast(true);
    setTimeout(() => setOrderSuccessToast(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-950 selection:text-white">
      {/* Top Notification Toast */}
      {orderSuccessToast && (
        <div className="fixed top-6 right-6 z-50 bg-slate-950 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="text-xs font-bold">Order Placed Successfully</div>
            <div className="text-[11px] text-slate-400">Order #ORD-9422 has been recorded.</div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-black text-base shadow-sm">
              A
            </div>
            <div>
              <div className="text-base font-black tracking-tight text-slate-950 flex items-center gap-1.5">
                <span>AURA</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  Mobile
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">Flutter E-Commerce Platform</div>
            </div>
          </div>

          {/* Nav Pills */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 text-xs font-bold">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'catalog'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Interactive Catalog
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'gallery'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              UI Showcase ({MOBILE_SCREENSHOTS.length})
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'architecture'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Architecture
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-slate-950 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Download APK */}
            <a
              href="/ecommerce.apk"
              download="ecommerce.apk"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold mb-6">
            <Smartphone className="w-3.5 h-3.5 text-slate-950" />
            <span>Standalone Mobile Application Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl mx-auto mb-5">
            Modern Mobile Shopping Experience.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Complete client-side shopping application built with Flutter. Clean typography, dynamic carts, order tracking, and vendor shop management.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/ecommerce.apk"
              download="ecommerce.apk"
              className="flex items-center gap-2.5 bg-slate-950 hover:bg-slate-800 text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Android APK</span>
            </a>

            <button
              onClick={() => setActiveTab('gallery')}
              className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-3.5 rounded-full font-bold text-sm shadow-sm transition-all"
            >
              <Smartphone className="w-4 h-4 text-slate-600" />
              <span>View App Screens</span>
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-100 text-left">
            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Frontend</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">Flutter 3.9+</div>
            </div>
            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mode</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">Offline-Ready Demo</div>
            </div>
            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Architecture</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">Local State Store</div>
            </div>
            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Dependencies</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">Zero Backend Required</div>
            </div>
          </div>
        </section>

        {/* Tab 1: Interactive Product Catalog */}
        {activeTab === 'catalog' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-black text-slate-950 tracking-tight">Interactive Product Showcase</h2>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Interact with real-time cart calculations and catalog filtering.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products or shops..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-xs">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-1">
                        {product.shop}
                      </div>
                      <h3 className="text-sm font-bold text-slate-950 tracking-tight line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 font-medium block">Price</span>
                        <span className="text-base font-black text-slate-950">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex items-center gap-1.5 bg-slate-950 hover:bg-slate-800 text-white px-3.5 py-2 rounded-full text-xs font-bold shadow-xs active:scale-95 transition-all"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <Package className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <div className="text-sm font-bold text-slate-800">No products found</div>
                <div className="text-xs text-slate-500 mt-1">Try adjusting your search query or category filter.</div>
              </div>
            )}
          </section>
        )}

        {/* Tab 2: Mobile UI Gallery */}
        {activeTab === 'gallery' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Mobile Application Views</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Visual walkthrough of the application's mobile interface running on Flutter.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOBILE_SCREENSHOTS.map((screen, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:shadow-lg transition-all"
                >
                  {/* Phone frame simulation */}
                  <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md aspect-[9/19] relative">
                    <img
                      src={screen.file}
                      alt={screen.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="pt-4">
                    <div className="text-xs font-black text-slate-950">{screen.title}</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">{screen.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 3: Key Architecture */}
        {activeTab === 'architecture' && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Technical Specifications</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Standalone engineering architecture designed for resilience and demonstration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <Smartphone className="w-8 h-8 text-slate-950 mb-4" />
                <h3 className="text-lg font-black text-slate-950 mb-2">Native Flutter Frontend</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Compiled natively for Android ARM64 and universal architectures. Features responsive UI layouts, gesture controls, smooth hero transitions, and Material 3 design system.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <Layers className="w-8 h-8 text-slate-950 mb-4" />
                <h3 className="text-lg font-black text-slate-950 mb-2">Local State Persistence</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Decoupled from external databases. The application maintains an in-memory repository with Flutter Secure Storage to track cart items, newly created products, and order histories locally.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <Store className="w-8 h-8 text-slate-950 mb-4" />
                <h3 className="text-lg font-black text-slate-950 mb-2">Merchant Storefront Workflow</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enables users to manage storefront profiles, upload and catalog new inventory items, and test complete seller interactions without server overhead.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <ShoppingBag className="w-8 h-8 text-slate-950 mb-4" />
                <h3 className="text-lg font-black text-slate-950 mb-2">Dynamic Cart & Order Engine</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calculates line-item quantities, subtotal calculations, shipping estimations, and transitions orders through lifecycle states: Processing, In Transit, and Delivered.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Slide-out Interactive Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-slate-950" />
                  <span className="font-black text-slate-950 text-base">Your Cart</span>
                  <span className="text-xs text-slate-400 font-bold">({cartItemCount} items)</span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover shrink-0 bg-white"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {item.shop}
                        </div>
                        <div className="text-xs font-bold text-slate-950 line-clamp-1">{item.name}</div>
                        <div className="text-xs font-black text-slate-900 mt-0.5">${item.price.toFixed(2)}</div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-2 py-1">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="p-0.5 text-slate-600 hover:text-slate-950"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-black px-1.5">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="p-0.5 text-slate-600 hover:text-slate-950"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {cart.length === 0 && (
                  <div className="text-center py-24 text-slate-400">
                    <ShoppingBag className="w-12 h-12 mx-auto mb-2 opacity-30" />
                    <div className="text-xs font-bold text-slate-600">Your cart is currently empty</div>
                    <div className="text-[11px] text-slate-400 mt-1">Add items from the catalog above.</div>
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Subtotal</span>
                      <span className="font-bold text-slate-900">${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Estimated Shipping</span>
                      <span className="font-bold text-emerald-600">Free</span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-slate-950 pt-2 border-t border-slate-200/80">
                      <span>Total</span>
                      <span>${cartSubtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateCheckout}
                    className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Place Simulated Order (${cartSubtotal.toFixed(2)})
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Minimalist Footer */}
      <footer className="border-t border-slate-100 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-black text-slate-900">AURA</span>
            <span>—</span>
            <span>Standalone Mobile E-Commerce Experience</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/ecommerce.apk"
              download="ecommerce.apk"
              className="text-slate-700 hover:text-slate-950 font-bold transition-colors"
            >
              Download APK
            </a>
            <a
              href="https://github.com/VirakSok18/E-commerce-App"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-slate-950 font-bold flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
