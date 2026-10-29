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
  ArrowRight,
  Sparkles
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
    desc: 'High-res gallery, pricing, and stock details',
    file: '/screenshots/Screenshot 2025-10-07 233802.png'
  },
  {
    title: 'Shopping Cart',
    desc: 'Quantity controls and dynamic subtotal calculation',
    file: '/screenshots/Screenshot 2025-10-07 233821.png'
  },
  {
    title: 'Order Status & Tracking',
    desc: 'Processing, In Transit, and Delivered milestones',
    file: '/screenshots/Screenshot 2025-10-07 233828.png'
  },
  {
    title: 'Vendor Storefront',
    desc: 'Merchant profile and catalog inventory',
    file: '/screenshots/Screenshot 2025-10-07 233835.png'
  },
  {
    title: 'Inventory Management',
    desc: 'Product creation, category assignment, and pricing',
    file: '/screenshots/Screenshot 2025-10-07 233842.png'
  },
  {
    title: 'User Profile & Account',
    desc: 'Customer credentials and personal preferences',
    file: '/screenshots/Screenshot 2025-10-07 233850.png'
  },
  {
    title: 'Authentication',
    desc: 'Streamlined sign-in and account registration',
    file: '/screenshots/Screenshot 2025-10-07 233911.png'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#09090B] font-sans selection:bg-[#FF6B35] selection:text-white">
      {/* Sticky Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Top-Left: ONLY Logo and Name */}
          <div className="flex items-center gap-3">
            <NightMarketLogo size={36} />
            <span className="text-xl font-black tracking-tight text-[#09090B]">
              Night Market
            </span>
          </div>

          {/* Clean Navigation Links & Action */}
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
              Capabilities
            </a>
            <a
              href="#install"
              className="hidden sm:inline-block text-xs font-bold text-slate-600 hover:text-[#FF6B35] transition-colors"
            >
              Installation
            </a>

            {/* Direct Download Button */}
            <a
              href="/nightmarket.apk"
              download="nightmarket.apk"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E85924] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/80 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
            <span className="text-xs font-bold text-[#FF6B35] tracking-wide">
              Night Market v1.0.0 • Native Android Build
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#09090B] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
            Smart Mobile Shopping for Modern Streetwear.
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            A native Flutter e-commerce application engineered for speed, offline catalog browsing, real-time cart calculations, and merchant store management.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="/nightmarket.apk"
              download="nightmarket.apk"
              className="flex items-center justify-center gap-3 bg-[#FF6B35] hover:bg-[#E85924] text-white px-9 py-4 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Download Android APK (17.1 MB)</span>
            </a>

            <a
              href="#screens"
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 px-7 py-4 rounded-full font-bold text-sm shadow-sm transition-all"
            >
              <Smartphone className="w-4 h-4 text-[#FF6B35]" />
              <span>Browse App Screens</span>
            </a>
          </div>

          {/* Spec Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
            <span>Version 1.0.0</span>
            <span>•</span>
            <span>17.1 MB Standalone APK</span>
            <span>•</span>
            <span>Android 8.0 or Higher</span>
            <span>•</span>
            <span>Flutter 3 & Material Design</span>
          </div>

          {/* Interactive Kiosk Mockup Card (Styled like FaceTrack DTR) */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="bg-slate-100/70 p-3 sm:p-5 rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/60">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 flex flex-col md:flex-row items-center gap-8 text-left">
                {/* Mobile Screen Preview Device Bezel */}
                <div className="relative w-full md:w-72 aspect-[9/18.5] bg-[#09090B] rounded-2xl overflow-hidden p-2 shadow-2xl border border-slate-800 shrink-0 flex flex-col justify-between">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                    <img
                      src="/screenshots/Screenshot 2025-10-07 232136.png"
                      alt="Night Market Home UI"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-[10px] font-black text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>App Live</span>
                    </div>
                  </div>
                </div>

                {/* Device Specifications & Capabilities Side */}
                <div className="flex-1 space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                      <span className="text-xs font-black uppercase tracking-wider text-[#FF6B35]">
                        Night Market Showcase
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#09090B] tracking-tight">
                      Engineered for 60 FPS Native Performance
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                      Pre-packaged with complete mock inventories, dynamic shopping carts, order status tracking, and merchant controls without external server dependencies.
                    </p>
                  </div>

                  {/* 4 Feature Specification Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#F8FAFC] border border-slate-200/80 p-3.5 rounded-xl">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Dynamic Cart
                      </div>
                      <div className="text-xs font-black text-[#0F172A] mt-0.5 flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5 text-[#FF6B35]" />
                        <span>Live Calculation</span>
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-slate-200/80 p-3.5 rounded-xl">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Storefront
                      </div>
                      <div className="text-xs font-black text-[#0F172A] mt-0.5 flex items-center gap-1.5">
                        <Store className="w-3.5 h-3.5 text-[#0F172A]" />
                        <span>Merchant Mode</span>
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-slate-200/80 p-3.5 rounded-xl">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Order Lifecycle
                      </div>
                      <div className="text-xs font-black text-[#0F172A] mt-0.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#FF6B35]" />
                        <span>Milestone Tracking</span>
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-slate-200/80 p-3.5 rounded-xl">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Zero Backend
                      </div>
                      <div className="text-xs font-black text-emerald-600 mt-0.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Offline Demo</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Card Action */}
                  <div className="pt-2">
                    <a
                      href="/nightmarket.apk"
                      download="nightmarket.apk"
                      className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-sm transition-all"
                    >
                      <Download className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>Download Android Package</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile UI Screen Showcase */}
        <section id="screens" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-[#09090B] tracking-tight">
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
                <div className="rounded-2xl overflow-hidden bg-[#0F172A] border border-slate-800 shadow-md aspect-[9/19] relative">
                  <img
                    src={screen.file}
                    alt={screen.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="pt-4 px-1">
                  <div className="text-xs font-black text-[#09090B]">{screen.title}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">{screen.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-[#09090B] tracking-tight">
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
              <h3 className="text-lg font-black text-[#09090B] mb-2">Dynamic Shopping Cart</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Add, increment, and remove items with real-time price and subtotal updates. Checkout immediately creates and records local orders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0F172A] flex items-center justify-center mb-5">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#09090B] mb-2">Vendor Storefront</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Vendors can view storefront profiles, manage listed inventory, and add new products with categories, pricing, and photo upload.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF6B35] flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#09090B] mb-2">Order Lifecycle Tracking</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Visual timeline tracking for customer purchases across Processing, In Transit, and Delivered status milestones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#09090B] mb-2">Zero Server Dependencies</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Pre-loaded with mock datasets, product photography, and client-side persistence so the application runs without needing local servers or databases.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section id="install" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-[#09090B] tracking-tight mb-3">
              How to Install on Android
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-10 max-w-lg mx-auto">
              Follow these simple steps to install the Night Market APK on your Android device.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/60">
                <div className="w-8 h-8 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-black text-xs mb-3">
                  1
                </div>
                <div className="text-xs font-black text-[#09090B] mb-1">Download APK</div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Tap the download button to save the Night Market APK file to your device.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/60">
                <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-black text-xs mb-3">
                  2
                </div>
                <div className="text-xs font-black text-[#09090B] mb-1">Allow Unknown Sources</div>
                <p className="text-[11px] text-slate-500 font-medium">
                  If prompted by Android, grant permission to install applications from your browser.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/60">
                <div className="w-8 h-8 rounded-full bg-[#09090B] text-white flex items-center justify-center font-black text-xs mb-3">
                  3
                </div>
                <div className="text-xs font-black text-[#09090B] mb-1">Open & Enjoy</div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Tap the completed download notification to install and launch Night Market directly.
                </p>
              </div>
            </div>

            <a
              href="/nightmarket.apk"
              download="nightmarket.apk"
              className="inline-flex items-center gap-2.5 bg-[#FF6B35] hover:bg-[#E85924] text-white px-8 py-3.5 rounded-full font-bold text-xs shadow-md hover:shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Night Market APK (17.1 MB)</span>
            </a>
          </div>
        </section>
      </main>

      {/* Minimalist Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <NightMarketLogo size={24} />
            <span className="font-black text-[#09090B]">Night Market</span>
            <span>—</span>
            <span>Mobile E-Commerce Platform</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/nightmarket.apk"
              download="nightmarket.apk"
              className="text-[#FF6B35] hover:text-[#E85924] font-bold transition-colors"
            >
              Download APK
            </a>
            <a
              href="https://github.com/VirakSok18/E-commerce-App"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-[#09090B] font-bold flex items-center gap-1 transition-colors"
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
