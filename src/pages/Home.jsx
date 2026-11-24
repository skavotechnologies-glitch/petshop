import React, { useState } from 'react';
import Hero from '../components/Hero';
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

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForBooking(serviceTitle);
  };

  return (
    <main>
      {/* 1. 3D Interactive Hero Section */}
      <Hero />

      {/* 2. Trust & Highlights Section */}
      <TrustHighlights />

      {/* 3. About Us Section */}
      <AboutSection />

      {/* 4. Grooming Services Catalogue with 3D Tilt */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 5. Cinematic Video & Interactive Before-After Transformation Showcase */}
      <VideoExperienceSection />

      {/* 6. Interactive Online Booking Form */}
      <BookingForm preselectedService={selectedServiceForBooking} />

      {/* 7. Pet Products E-Commerce Store with 3D 360° Inspection */}
      <ShopSection />

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Pet Moments Gallery with Lightbox */}
      <GallerySection />

      {/* 10. Customer Testimonials */}
      <TestimonialsSection />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. Contact Section */}
      <ContactSection />
    </main>
  );
}
