import React, { useState } from 'react';
import Hero from '../components/Hero';
import CategorySection3D from '../components/CategorySection3D';
import PetExperienceSection from '../components/PetExperienceSection';
import TrustHighlights from '../components/TrustHighlights';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import VideoExperienceSection from '../components/VideoExperienceSection';
import BookingForm from '../components/BookingForm';
import ShopSection from '../components/ShopSection';
import WhyChooseUs from '../components/WhyChooseUs';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');
  const [selectedShopCategory, setSelectedShopCategory] = useState('All Products');

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForBooking(serviceTitle);
  };

  const handleSelectCategory = (categoryName) => {
    setSelectedShopCategory(categoryName);
  };

  return (
    <main>
      {/* 1. 3D Interactive Hero Section with Cinematic Video & Three.js Mascot */}
      <Hero />

      {/* 2. Interactive 3D Category Exploration */}
      <CategorySection3D onSelectCategory={handleSelectCategory} />

      {/* 3. Interactive Pet Experience: Dogs vs Cats Dynamic Showcase */}
      <PetExperienceSection
        onSelectCategory={handleSelectCategory}
        onSelectService={handleSelectService}
      />

      {/* 4. Trust & Highlights Section */}
      <TrustHighlights />

      {/* 5. 3D Brand Story Section */}
      <AboutSection />

      {/* 6. Grooming Services Catalogue with 3D Tilt */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 7. Cinematic Video & Interactive Before-After Transformation Showcase */}
      <VideoExperienceSection />

      {/* 8. Interactive Online Booking Form */}
      <BookingForm preselectedService={selectedServiceForBooking} />

      {/* 9. Pet Products E-Commerce Store with 3D 360° Inspection */}
      <ShopSection preselectedCategory={selectedShopCategory} />

      {/* 10. Why Choose Us */}
      <WhyChooseUs />

      {/* 11. Pet Moments Gallery with Lightbox */}
      <GallerySection />

      {/* 12. Customer Testimonials */}
      <TestimonialsSection />

      {/* 13. FAQ Section */}
      <FAQSection />

      {/* 14. Contact Section */}
      <ContactSection />
    </main>
  );
}
