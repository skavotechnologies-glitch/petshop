import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustHighlights from '../components/TrustHighlights';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BookingForm from '../components/BookingForm';
import ShopSection from '../components/ShopSection';
import WhyChooseUs from '../components/WhyChooseUs';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForBooking(serviceTitle);
  };

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Highlights Section */}
      <TrustHighlights />

      {/* 3. About Us Section */}
      <AboutSection />

      {/* 4. Grooming Services Catalogue */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 5. Interactive Online Booking Form */}
      <BookingForm preselectedService={selectedServiceForBooking} />

      {/* 6. Pet Products E-Commerce Store */}
      <ShopSection />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Pet Moments Gallery with Lightbox */}
      <GallerySection />

      {/* 9. Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. FAQ Section */}
      <FAQSection />

      {/* 11. Contact Section */}
      <ContactSection />
    </main>
  );
}
