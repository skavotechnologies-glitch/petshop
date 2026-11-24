# 🐾 PAWORA — Luxury 3D Pet Care & Grooming Sanctuary

A world-class, premium, modern, and conversion-focused **3D Animated Pet Store & Pet Grooming Web Application** built with **React.js, Three.js, React Three Fiber, Drei, Lenis Smooth Scroll, Tailwind CSS, Framer Motion, and Lucide Icons**.

---

## 🎨 Design Vision & Brand Identity

- **Brand Name**: **PAWORA** (*Fictional Luxury Pet Sanctuary & Boutique*)
- **Tagline**: *"Because Every Paw Deserves a Little Extra Love."*
- **Color Palette**:
  - **Primary**: `#FF784F` (Vibrant warm coral/orange)
  - **Secondary**: `#234C3D` (Deep royal forest green)
  - **Background**: `#FFF9F0` (Warm organic cream)
  - **Accent**: `#FFD66B` (Soft honey yellow)
  - **Text**: `#252525` (Charcoal)
  - **Soft Green**: `#E6F1E9` (Calming pastel green)
- **Typography**: Google Font **Plus Jakarta Sans** with expressive headings and clean readable paragraphs.

---

## ✨ 3D & High-Animation Features

### 1. 🐕 Live Interactive 3D Hero Mascot (`Hero3DScene.jsx`)
- Built with **Three.js & React Three Fiber**:
  - Stylized 3D Golden Puppy mascot whose head and eyes **track the user's mouse cursor in real-time**!
  - Floppy ear physics with harmonic bounce.
  - Continuously wagging tail with natural sinusoidal swing.
  - Floating 3D metallic dog bone, sparkle star, and iridescent spa bubbles with refractive materials.
  - **Interactive Click**: Tap on the puppy to trigger a 360° backflip spin, celebratory heart particles, and speech bubble!

### 2. 🌊 Lenis Kinetic Smooth Scrolling (`SmoothScroll.jsx`)
- Premium 60–120 FPS kinetic inertia scroll smoothing for an Awwwards-style feel without scroll stutter.

### 3. 🐾 Custom Interactive Pet Cursor & Ambient Particles (`CustomCursor.jsx`)
- Custom magnetic cursor with a trailing outer glow ring that reacts to buttons, links, and cards.
- Emits playful glowing paw particles as you move your mouse across the website.

### 4. 🎴 3D Gyroscopic Card Tilt with Specular Glare (`Card3DTilt.jsx`)
- Custom 3D perspective tilt (`rotateX`, `rotateY`) on all **Grooming Service Cards** and **Product Cards**.
- Dynamic specular glass glare sheen that moves across the card as you tilt it.

### 5. 🎬 Cinematic Video Showcase & Interactive Makeover Slider (`VideoExperienceSection.jsx`)
- High-definition video player showing live salon pet pampering sessions with play/pause and audio controls.
- **Interactive Before & After Makeover Slider**: Drag the slider left and right to inspect a tangled puppy transformed into an impeccably styled show dog!

### 6. 📦 3D 360° Product Inspection Viewer (`Product3DViewerModal.jsx`)
- Click **"3D View"** on any product in the boutique to open an interactive 3D OrbitControls canvas.
- Rotate packaging 360°, inspect textures and ingredients, toggle auto-spin, and add to bag directly from the 3D viewer!

---

## 🌟 Comprehensive Sections

1. **Sticky Navigation Bar** ([src/components/Navbar.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/Navbar.jsx))
2. **Interactive 3D Hero Section** ([src/components/Hero.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/Hero.jsx))
3. **Trust & Highlights** ([src/components/TrustHighlights.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/TrustHighlights.jsx))
4. **About Us Section** ([src/components/AboutSection.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/AboutSection.jsx))
5. **Grooming Services Catalogue** ([src/components/ServicesSection.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/ServicesSection.jsx))
6. **Cinematic Video & Before/After Experience** ([src/components/VideoExperienceSection.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/VideoExperienceSection.jsx))
7. **Online Appointment Booking with Confetti** ([src/components/BookingForm.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/BookingForm.jsx))
8. **Pet Products Store with 3D Preview** ([src/components/ShopSection.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/ShopSection.jsx))
9. **Shopping Bag & Simulated Checkout** ([src/components/CartDrawer.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/CartDrawer.jsx) & [src/components/CheckoutModal.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/CheckoutModal.jsx))
10. **Why Choose Us Section** ([src/components/WhyChooseUs.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/WhyChooseUs.jsx))
11. **Gallery with Modal Lightbox** ([src/components/GallerySection.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/GallerySection.jsx))
12. **Customer Testimonials & FAQ Accordion** ([src/components/TestimonialsSection.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/TestimonialsSection.jsx) & [src/components/FAQSection.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/FAQSection.jsx))
13. **Contact Details & Floating WhatsApp** ([src/components/ContactSection.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/ContactSection.jsx) & [src/components/WhatsAppButton.jsx](file:///c:/Users/PALANI%20KATHIRVEL/OneDrive/Desktop/petshop/src/components/WhatsAppButton.jsx))

---

## 🚀 How to Run

```bash
# 1. Start the Vite development server
npm run dev

# 2. Or build for production
npm run build
```

Open **`http://localhost:3000`** in your browser.
