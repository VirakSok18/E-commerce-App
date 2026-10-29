# AURA — Mobile E-Commerce Platform

A high-performance, standalone mobile e-commerce platform built with Flutter, complemented by a modern web showcase ready for Vercel deployment.

---

## Overview

The platform features an interactive mobile shopping experience with client-side state persistence:
- **Standalone Mobile Application (Flutter)**: Runs completely decoupled from external databases with simulated local catalog, cart, orders, and vendor storefront management.
- **Web Showcase Platform (React + Vite + Tailwind CSS)**: Minimalist product showcase with interactive cart calculations, UI screenshot walkthroughs, and direct Android APK distribution.

---

## Key Features

- **Product Discovery**: Filter by categories (Electronics, Fashion & Clothing, Home & Living, Sports & Fitness, Beauty & Health) with real-time text search.
- **Dynamic Shopping Cart**: Increment/decrement item quantities, remove items, and live subtotal/tax recalculation.
- **Order Tracking**: Simulated order checkout with lifecycle tracking (Processing, In Transit, Delivered).
- **Merchant Storefront**: Vendor storefront view with inventory management and product creation dialogs.
- **Zero Backend Dependencies**: Operates offline or online with pre-populated showcase datasets and high-resolution product photography.

---

## Project Structure

```text
├── frontend/            # Flutter mobile application
│   ├── lib/
│   │   ├── screens/     # Application UI views (Home, Cart, Shop, Profile, Orders)
│   │   ├── services/    # Client-side state store and mock service layer
│   │   └── main.dart    # Mobile entry point
├── web/                 # React + Vite web showcase platform
│   ├── src/             # Interactive catalog, cart drawer, and screenshot gallery
│   └── public/          # Compiled Android APK (ecommerce.apk) and assets
├── vercel.json          # Vercel deployment configuration
└── package.json         # Root orchestration build script
```

---

## Running Locally

### Mobile App (Flutter)
```bash
cd frontend
flutter pub get
flutter run
```

### Web Showcase (Vercel Ready)
```bash
cd web
npm install
npm run dev
```

### Building Release APK
```bash
cd frontend
flutter build apk --release --target-platform android-arm64
```
