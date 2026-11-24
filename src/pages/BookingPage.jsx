import React from 'react';
import BookingForm from '../components/BookingForm';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQSection from '../components/FAQSection';

export default function BookingPage() {
  return (
    <div className="pt-10">
      <BookingForm />
      <WhyChooseUs />
      <FAQSection />
    </div>
  );
}
