import React from 'react';
import {
  Download,
  Smartphone,
  ShieldCheck,
  Store,
  Layers,
  ShoppingBag,
  ExternalLink,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import NightMarketLogo from './components/NightMarketLogo';

const APP_SCREENS = [
  {
    title: 'Discovery & Home',
    desc: 'Banners, categories, and trending products',
    file: '/screenshots/Screenshot 2025-10-07 232136.png'
  },
  {
    title: 'Product Specifications',
    desc: 'High-res gallery, pricing, and stock',
    file: '/screenshots/Screenshot 2025-10-07 233802.png'
  },
  {
    title: 'Shopping Cart',
    desc: 'Quantity controls and live subtotal',
    file: '/screenshots/Screenshot 2025-10-07 233821.png'
  },
  {
    title: 'Order Status & Tracking',
    desc: 'Processing, In Transit, and Delivered',
    file: '/screenshots/Screenshot 2025-10-07 233828.png'
  },
  {
    title: 'Vendor Storefront',
    desc: 'Merchant profile and store inventory',
    file: '/screenshots/Screenshot 2025-10-07 233835.png'
  },
  {
    title: 'Inventory Management',
    desc: 'Product creation, categories, and pricing',
    file: '/screenshots/Screenshot 2025-10-07 233842.png'
  },
  {
    title: 'User Profile & Account',
    desc: 'Personal details and credentials',
    file: '/screenshots/Screenshot 2025-10-07 233850.png'
  },
  {
    title: 'Authentication',
    desc: 'Fast sign in and secure registration',
    file: '/screenshots/Screenshot 2025-10-07 233911.png'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2C3E50] font-sans selection:bg-[#FF6B35] selection:text-white">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Top-Left: ONLY Logo and Name */}
          <div className="flex items-center gap-3">
            <NightMarketLogo size={36} />
            <span className="text-xl font-black tracking-tight text-[#2C3E50]">
              Night Market
            </span>
          </div>

          {/* Navigation Links & Action */}
          <div className="flex items-center gap-6">
            <a
              href="#screens"
              className="hidden sm:inline-block text-xs font-bold text-slate-600 hover:text-[#FF6B35] transition-colors"
            >
              Screens
            </a>
            <a
              href="#features"
              className="hidden sm:inline-block text-xs font-bold text-slate-600 hover:text-[#FF6B35] transition-colors"
            >
              Features
            </a>
            <a
              href="#install"
              className="hidden sm:inline-block text-xs font-bold text-slate-600 hover:text-[#FF6B35] transition-colors"
            >
              Installation
            </a>

            {/* Direct Download Button */}
            <a
              href="/ecommerce.apk"
              download="nightmarket.apk"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E85924] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-28 pb-20">
        <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#2C3E50] tracking-tight leading-[1.08] mb-6">
            Night Market
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            A standalone mobile e-commerce platform built with Flutter. Clean typography, dynamic shopping carts, order tracking, and vendor shop management.
          </p>

          {/* Primary Download Button & Spec Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="/ecommerce.apk"
              download="nightmarket.apk"
              className="flex items-center justify-center gap-3 bg-[#FF6B35] hover:bg-[#E85924] text-white px-9 py-4 rounded-full font-black text-sm shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Download Android APK</span>
            </a>

            <a
              href="#screens"
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#2C3E50] border border-slate-200/90 px-7 py-4 rounded-full font-bold text-sm shadow-sm transition-all"
            >
              <Smartphone className="w-4 h-4 text-[#FF6B35]" />
              <span>Explore App Views</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] font-semibold text-slate-400">
            <span>Version 1.0.0</span>
            <span>•</span>
            <span>Size: ~17.9 MB</span>
            <span>•</span>
            <span>Android 8.0 or higher</span>
          </div>

          {/* Spec Badges Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16 text-left">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Technology</div>
              <div className="text-sm font-black text-[#2C3E50] mt-1">Flutter Mobile SDK</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Architecture</div>
              <div className="text-sm font-black text-[#2C3E50] mt-1">Standalone Showcase</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Backend Required</div>
              <div className="text-sm font-black text-[#FF6B35] mt-1">Zero Dependencies</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Performance</div>
              <div className="text-sm font-black text-[#2C3E50] mt-1">60 FPS Native UI</div>
            </div>
          </div>
        </section>

        {/* Mobile UI Screen Showcase */}
        <section id="screens" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-[#2C3E50] tracking-tight">
              Mobile Application Screens
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
              Browse the actual mobile user interface running on the Flutter release build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APP_SCREENS.map((screen, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="rounded-2xl overflow-hidden bg-[#2C3E50] border border-slate-800 shadow-md aspect-[9/19] relative">
                  <img
                    src={screen.file}
                    alt={screen.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="pt-4 px-1">
                  <div className="text-xs font-black text-[#2C3E50]">{screen.title}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">{screen.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-[#2C3E50] tracking-tight">
              Core Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
              Engineered for seamless offline demonstration and high-performance browsing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF6B35] flex items-center justify-center mb-5">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#2C3E50] mb-2">Dynamic Shopping Cart</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Add, increment, and remove items with real-time price and subtotal updates. Checkout immediately creates and records local orders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF6B35] flex items-center justify-center mb-5">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#2C3E50] mb-2">Vendor Storefront</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Vendors can view storefront profiles, manage listed inventory, and add new products with categories, pricing, and photo upload.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF6B35] flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#2C3E50] mb-2">Order Lifecycle Tracking</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Visual timeline tracking for customer purchases across Processing, In Transit, and Delivered status milestones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF6B35] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#2C3E50] mb-2">Zero Server Dependencies</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Pre-loaded with mock datasets, product photography, and client-side persistence so the application runs without needing local servers or databases.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section id="install" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-[#2C3E50] tracking-tight mb-3">
              How to Install on Android
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-10 max-w-lg mx-auto">
              Follow these simple steps to install the Night Market APK on your Android device.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200/60">
                <div className="w-8 h-8 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-black text-xs mb-3">
                  1
                </div>
                <div className="text-xs font-black text-[#2C3E50] mb-1">Download APK</div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Tap the download button to save the Night Market APK file to your device.
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200/60">
                <div className="w-8 h-8 rounded-full bg-[#2C3E50] text-white flex items-center justify-center font-black text-xs mb-3">
                  2
                </div>
                <div className="text-xs font-black text-[#2C3E50] mb-1">Allow Unknown Sources</div>
                <p className="text-[11px] text-slate-500 font-medium">
                  If prompted by Android, grant permission to install applications from your browser.
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200/60">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs mb-3">
                  3
                </div>
                <div className="text-xs font-black text-[#2C3E50] mb-1">Open & Enjoy</div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Tap the completed download to install and launch Night Market directly.
                </p>
              </div>
            </div>

            <a
              href="/ecommerce.apk"
              download="nightmarket.apk"
              className="inline-flex items-center gap-2.5 bg-[#FF6B35] hover:bg-[#E85924] text-white px-8 py-3.5 rounded-full font-black text-xs shadow-md hover:shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Night Market APK (17.9 MB)</span>
            </a>
          </div>
        </section>
      </main>

      {/* Minimalist Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <NightMarketLogo size={24} />
            <span className="font-black text-[#2C3E50]">Night Market</span>
            <span>—</span>
            <span>Mobile E-Commerce Platform</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/ecommerce.apk"
              download="nightmarket.apk"
              className="text-[#FF6B35] hover:text-[#E85924] font-bold transition-colors"
            >
              Download APK
            </a>
            <a
              href="https://github.com/VirakSok18/E-commerce-App"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-[#2C3E50] font-bold flex items-center gap-1 transition-colors"
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
