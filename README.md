# 🐾 PAWORA — Luxury Pet Care & Grooming Sanctuary

A world-class, premium, modern, and conversion-focused **Pet Store & Pet Grooming Web Application** built with **React.js, Vite, Tailwind CSS, Framer Motion, and Lucide Icons**.

---

## 🎨 Design Vision & Brand Identity

- **Brand Name**: **PAWORA** (Fictional luxury pet-care brand)
- **Tagline**: *"Because Every Paw Deserves a Little Extra Love."*
- **Color Palette**:
  - **Primary**: `#FF784F` (Vibrant warm coral/orange)
  - **Secondary**: `#234C3D` (Deep forest green)
  - **Background**: `#FFF9F0` (Warm organic cream)
  - **Accent**: `#FFD66B` (Soft honey yellow)
  - **Text**: `#252525` (Charcoal black)
  - **Soft Green**: `#E6F1E9` (Calming pastel green)
- **Typography**: Google Font **Plus Jakarta Sans** with bold expressive headings and clean readable paragraphs.

---

## ✨ Features & Architecture

### 1. 🌟 Hero Section
- Bold headline: *"Because Every Paw Deserves a Little Extra Love."*
- Supporting copy: *"From professional grooming to everyday essentials, everything your furry family member needs is right here."*
- CTAs: **"Explore Our Services"** & **"Shop for Your Pet"**.
- Large, high-resolution dog and cat imagery with floating highlight cards (*"Professional Grooming"*, *"Happy Pets, Happy Parents"*, *"Loved by 500+ Pet Families"*).

### 2. 🛡️ Trust & Highlights Section
- Four key trust pillars:
  1. **Professional Pet Care** (Veterinary-grade hygiene standards)
  2. **Experienced Grooming Team** (Fear-free certified master stylists)
  3. **Quality Pet Products** (Organic nutrition & hypoallergenic formulas)
  4. **Pet-Friendly Experience** (Cage-free, calm acoustic ambiance)

### 3. 🏡 About Us Section
- Headline: *"More Than a Pet Store. A Place That Feels Like Home."*
- Brand story, fear-free philosophy, and 3 key statistics:
  - **500+** Happy Pet Families
  - **1,000+** Grooming Sessions
  - **100%** Love for Pets

### 4. ✂️ Grooming Services Menu (6 Service Cards)
- **Full Grooming** (₹999 onwards) — Complete makeover with organic bath, haircut & styling.
- **Bath & Blow Dry** (₹499 onwards) — Aromatic warm bath, gentle fluff dry & brush.
- **Haircut & Styling** (₹699 onwards) — Breed-specific customized scissor trims.
- **Nail Clipping & Buffing** (₹199 onwards) — Safe, painless trimming & diamond buffing.
- **Ear Cleaning & Hygiene** (₹199 onwards) — Botanical antibacterial wash & check.
- **Luxury Spa Treatment** (₹1,299 onwards) — Dead sea mud wrap, blueberry facial & paw massage.
- Each card includes duration, features checklist, price, and one-click pre-selection for the booking form.

### 5. 📅 Interactive Appointment Booking Form
- **All 10 required fields**:
  1. Customer Name
  2. Phone Number
  3. Email Address
  4. Pet Name
  5. Pet Type (Dog / Cat / Other)
  6. Breed / Size
  7. Select Grooming Service (with dynamic estimated price)
  8. Preferred Date (with past-date prevention)
  9. Preferred Time Slot
  10. Special Instructions / Temperament notes
- **Features**:
  - Live price calculation
  - Client-side validation
  - Celebratory confetti on confirmation
  - Generates unique reference code (e.g. `PWR-2026-4821`)
  - LocalStorage persistence
  - Direct WhatsApp enquiry button with pre-filled message

### 6. 🛍️ Curated Pet Store & Product Catalog
- 14 realistic sample products across 6 categories:
  - Dog Food, Cat Food, Toys, Accessories, Grooming Products, Beds & Comfort
- Interactive category filtering, sorting (Popular, Rating, Price: Low-to-High, High-to-Low)
- Product cards with star ratings, badges, discount price comparisons, Add to Bag, and Wishlist heart toggling.

### 7. 🛒 Shopping Bag & Simulated Checkout
- Flyout slide-over cart drawer with free delivery progress bar (orders over ₹999 get free shipping).
- Quantity controls (`+` / `-`), item removal, live tax & shipping breakdown.
- Simulated checkout modal collecting delivery details with zero real payment risk.

### 8. 📸 Pet Moments Gallery & Lightbox
- High-res images of dogs enjoying baths, calm cats, breed haircuts, and happy pet parents.
- Interactive modal lightbox preview with descriptions and category pills.

### 9. 💬 Customer Testimonials & ❓ FAQs
- 4 heartfelt pet parent stories with pet names, breeds, and star ratings.
- Interactive FAQ accordion answering top customer questions (services, booking, cats & dogs, what to bring).

### 10. 📞 Contact Section & 💬 Floating WhatsApp
- Address, phone numbers, email, opening hours, Google Maps placeholder preview, and instant contact form.
- Floating WhatsApp button with hover tooltip and pre-filled chat link.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📂 Project Structure

```
petshop/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── CartContext.jsx
    ├── data/
    │   ├── products.js
    │   ├── services.js
    │   ├── testimonials.js
    │   ├── faqs.js
    │   └── gallery.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── TrustHighlights.jsx
    │   ├── AboutSection.jsx
    │   ├── ServicesSection.jsx
    │   ├── BookingForm.jsx
    │   ├── ShopSection.jsx
    │   ├── ProductCard.jsx
    │   ├── CartDrawer.jsx
    │   ├── CheckoutModal.jsx
    │   ├── WhyChooseUs.jsx
    │   ├── GallerySection.jsx
    │   ├── TestimonialsSection.jsx
    │   ├── FAQSection.jsx
    │   ├── ContactSection.jsx
    │   ├── SearchModal.jsx
    │   ├── WhatsAppButton.jsx
    │   └── Toast.jsx
    └── pages/
        ├── Home.jsx
        ├── ServicesPage.jsx
        ├── ShopPage.jsx
        └── BookingPage.jsx
```
