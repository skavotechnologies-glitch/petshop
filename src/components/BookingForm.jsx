import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Phone, Sparkles, AlertCircle, MessageCircle, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { services } from '../data/services';

const STORAGE_KEY = 'paws_and_polish_bookings_v1';

export default function BookingForm({ preselectedService }) {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    petName: '',
    petType: 'Dog',
    petSize: 'Medium',
    breed: '',
    service: preselectedService || 'Full Royal Grooming',
    date: today,
    timeSlot: '10:00 AM - 11:30 AM',
    instructions: ''
  });

  const [errors, setErrors] = useState({});
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Time Slots
  const timeSlots = [
    '09:30 AM - 10:45 AM',
    '11:00 AM - 12:30 PM',
    '01:30 PM - 03:00 PM',
    '03:30 PM - 05:00 PM',
    '05:30 PM - 07:00 PM',
    '07:00 PM - 08:15 PM'
  ];

  // Update preselected service if prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Find price estimate with size multiplier
  const currentServiceObj = services.find((s) => s.title === formData.service) || services[0];
  const sizeMultiplier = formData.petSize === 'Small' ? 0.85 : formData.petSize === 'Large' ? 1.25 : 1.0;
  const calculatedPrice = Math.round(currentServiceObj.price * sizeMultiplier);

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please enter a valid email address';
    if (!formData.petName.trim()) newErrors.petName = 'Please enter your pet’s name';
    if (!formData.breed.trim()) newErrors.breed = 'Please specify your pet’s breed or type';
    if (!formData.date) newErrors.date = 'Please pick a preferred date';
    if (formData.date < today) newErrors.date = 'Cannot select a date in the past';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Generate unique reference code
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const bookingRef = `PNP-${new Date().getFullYear()}-${randomDigits}`;

    const bookingRecord = {
      ...formData,
      bookingRef,
      servicePrice: `₹${calculatedPrice}`,
      createdAt: new Date().toISOString()
    };

    // Save in LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      existing.unshift(bookingRecord);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 20)));
    } catch (e) {
      console.error('Failed to save booking in localStorage', e);
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setConfirmedBooking(bookingRecord);
  };

  const handleCopyRef = () => {
    if (confirmedBooking?.bookingRef) {
      navigator.clipboard.writeText(confirmedBooking.bookingRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      petName: '',
      petType: 'Dog',
      breed: '',
      service: 'Full Royal Grooming',
      date: today,
      timeSlot: '10:00 AM - 11:30 AM',
      instructions: ''
    });
  };

  // WhatsApp Enquiry Click
  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello PAWS & POLISH! I would like to book a ${formData.service} for my ${formData.petType} (${formData.petName}) on ${formData.date} at ${formData.timeSlot}. Please confirm availability!`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-extrabold uppercase tracking-wider border border-[#1B3329]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>Instant Salon Reservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Book Your Pet's <span className="text-[#E8927C]">Pampering Session.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1A2420]/75 max-w-xl mx-auto">
            Choose a date and convenient time slot. Our team ensures zero waiting times and gentle, stress-free care.
          </p>
        </div>

        {/* Confirmation Screen */}
        {confirmedBooking ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border-2 border-[#1B3329]/20 text-center animate-fadeIn space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#E8EFEA] text-[#1B3329] flex items-center justify-center mx-auto text-3xl shadow-sm">
              <CheckCircle2 className="w-9 h-9 text-[#E8927C]" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#FAF6EE] text-[#1B3329] text-xs font-extrabold uppercase tracking-wide border border-[#1B3329]/20">
                Reservation Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B3329]">
                We Can't Wait to Pamper {confirmedBooking.petName}!
              </h3>
              <p className="text-xs sm:text-sm text-[#1A2420]/70 max-w-md mx-auto">
                Your reservation request has been confirmed. Our master stylists are preparing a calm, fear-free suite.
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="bg-[#FAF6EE] rounded-2xl p-6 border border-gray-200 text-left max-w-lg mx-auto space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <span className="text-xs text-gray-500 font-semibold">Reference ID</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-extrabold text-[#1B3329] bg-white px-2.5 py-1 rounded-lg border border-gray-300">
                    {confirmedBooking.bookingRef}
                  </span>
                  <button
                    onClick={handleCopyRef}
                    className="p-1 text-gray-500 hover:text-black transition-colors"
                    title="Copy reference"
                  >
                    {copiedRef ? <Check className="w-4 h-4 text-[#E8927C]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 block font-medium">Pet & Breed</span>
                  <span className="font-bold text-gray-800">{confirmedBooking.petName} ({confirmedBooking.breed})</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-medium">Pet Parent</span>
                  <span className="font-bold text-gray-800">{confirmedBooking.customerName}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-medium">Scheduled Service</span>
                  <span className="font-extrabold text-[#E8927C]">{confirmedBooking.service}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-medium">Est. Price</span>
                  <span className="font-extrabold text-[#1B3329]">{confirmedBooking.servicePrice}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-medium">Date & Slot</span>
                  <span className="font-bold text-gray-800">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
                </div>
                <div>
                  <span className="text-gray-400 block font-medium">Contact Phone</span>
                  <span className="font-bold text-gray-800">{confirmedBooking.phone}</span>
                </div>
              </div>

              {confirmedBooking.instructions && (
                <div className="pt-2 border-t border-gray-200 text-xs">
                  <span className="text-gray-400 block font-medium">Special Notes</span>
                  <span className="text-gray-700 italic">"{confirmedBooking.instructions}"</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm via WhatsApp Enquiry</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-[#1B3329] border border-gray-200 text-xs font-bold transition-all"
              >
                Book Another Pet
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-gray-200/80">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Pet Details Group */}
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1B3329] mb-4 flex items-center gap-2">
                  <span>🐾 Step 1: Tell Us About Your Pet</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Pet Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Pet Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      placeholder="e.g. Milo, Bella"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        errors.petName ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#E8927C]'
                      }`}
                    />
                    {errors.petName && <p className="text-[10px] text-red-500 mt-1">{errors.petName}</p>}
                  </div>

                  {/* Pet Type */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Pet Type</label>
                    <select
                      value={formData.petType}
                      onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C] bg-white"
                    >
                      <option value="Dog">Dog 🐶</option>
                      <option value="Cat">Cat 🐱</option>
                      <option value="Other">Other Pet 🐰</option>
                    </select>
                  </div>

                  {/* Breed */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Breed / Weight <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                      placeholder="e.g. Golden Retriever / Persian"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        errors.breed ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#E8927C]'
                      }`}
                    />
                    {errors.breed && <p className="text-[10px] text-red-500 mt-1">{errors.breed}</p>}
                  </div>
                </div>

                {/* Pet Size Selection */}
                <div className="mt-4">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Pet Size & Weight Category
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'Small', label: 'Small (<10 kg)' },
                      { id: 'Medium', label: 'Medium (10–25 kg)' },
                      { id: 'Large', label: 'Large (25+ kg)' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, petSize: s.id })}
                        className={`py-2 px-3 rounded-xl text-xs font-extrabold border transition-all ${
                          formData.petSize === s.id
                            ? 'bg-[#1B3329] text-white border-[#1B3329] shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="pt-2 border-t border-gray-100">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1B3329] mb-4 flex items-center gap-2">
                  <span>✂️ Step 2: Select Grooming Service</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {services.map((srv) => (
                    <label
                      key={srv.id}
                      className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        formData.service === srv.title
                          ? 'border-[#E8927C] bg-[#FAF6EE] shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-extrabold text-xs text-[#1B3329]">{srv.title}</span>
                        <input
                          type="radio"
                          name="service"
                          value={srv.title}
                          checked={formData.service === srv.title}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="accent-[#E8927C] mt-0.5"
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] mt-2 pt-2 border-t border-gray-200/50">
                        <span className="text-gray-500">{srv.duration}</span>
                        <span className="font-extrabold text-[#E8927C]">{srv.priceLabel}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="pt-2 border-t border-gray-100">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1B3329] mb-4 flex items-center gap-2">
                  <span>📅 Step 3: Date & Preferred Slot</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        errors.date ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#E8927C]'
                      }`}
                    />
                    {errors.date && <p className="text-[10px] text-red-500 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Available Slot</label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C] bg-white"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent Details */}
              <div className="pt-2 border-t border-gray-100">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1B3329] mb-4 flex items-center gap-2">
                  <span>👤 Step 4: Pet Parent Information</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        errors.customerName ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#E8927C]'
                      }`}
                    />
                    {errors.customerName && <p className="text-[10px] text-red-500 mt-1">{errors.customerName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      maxLength={10}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#E8927C]'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#E8927C]'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Special Instructions / Pet Temperament
                  </label>
                  <textarea
                    rows={2}
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                    placeholder="e.g. Milo is slightly shy around hair dryers, sensitive skin, prefers nail buffing over clipping..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C]"
                  ></textarea>
                </div>
              </div>

              {/* Estimated Price summary & Submit */}
              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-gray-500">Selected Service:</span>
                  <div className="font-extrabold text-sm text-[#1B3329]">
                    {formData.service} <span className="text-[#E8927C]">(₹{calculatedPrice} • {formData.petSize})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#1B3329] text-[#E8927C] hover:bg-[#14261E] transition-colors shrink-0"
                    title="Quick WhatsApp Booking"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>

                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-8 py-3.5 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-extrabold shadow-peach hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Pampering Booking</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}