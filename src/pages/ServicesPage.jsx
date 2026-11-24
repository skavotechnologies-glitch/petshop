import React, { useState } from 'react';
import ServicesSection from '../components/ServicesSection';
import BookingForm from '../components/BookingForm';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQSection from '../components/FAQSection';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="pt-6">
      <ServicesSection onSelectService={(title) => setSelectedService(title)} />
      <BookingForm preselectedService={selectedService} />
      <WhyChooseUs />
      <FAQSection />
    </div>
  );
}
