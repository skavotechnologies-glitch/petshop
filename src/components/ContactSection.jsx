import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Question',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>Connect with Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            We'd Love to Hear From <span className="text-[#E8927C]">You & Your Pet.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1A2420]/75 leading-relaxed">
            Have questions about custom breed cuts, feline grooming, or bulk pet food delivery? Drop by our boutique salon or send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info & Placeholders & Stylized Map */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-[#1B3329] font-display">
                Salon Headquarters & Flagship Boutique
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-soft">
                  <MapPin className="w-5 h-5 text-[#E8927C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1B3329] block">Physical Address</span>
                    <span className="text-gray-600">42 Blossom Pet Boulevard, 100 Feet Road, Indiranagar, Bengaluru, 560038</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-soft">
                  <Phone className="w-5 h-5 text-[#E8927C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1B3329] block">Phone & Appointments</span>
                    <span className="text-gray-600">+91 98765 43210 / +91 98765 01234</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-soft">
                  <Mail className="w-5 h-5 text-[#E8927C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1B3329] block">Email Enquiries</span>
                    <span className="text-gray-600">care@pawsandpolish.com • concierge@pawsandpolish.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-soft">
                  <Clock className="w-5 h-5 text-[#E8927C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1B3329] block">Salon & Store Hours</span>
                    <span className="text-gray-600">Monday to Sunday: 9:00 AM – 8:30 PM (All 7 Days)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919876543210?text=Hello%20PAWS%20%26%20POLISH%20Team!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat Directly on WhatsApp (+91 98765 43210)</span>
                </a>
              </div>
            </div>

            {/* Flagship Boutique Map Location */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-soft aspect-[16/9] relative bg-white flex flex-col items-center justify-center p-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FAF6EE] shadow-sm text-[#E8927C] flex items-center justify-center text-xl">
                📍
              </div>
              <p className="text-xs font-bold text-[#1B3329]">PAWS & POLISH Flagship Boutique Map Location</p>
              <p className="text-[11px] text-gray-500">Indiranagar, Bengaluru • Complimentary Valet Pet Parking</p>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-card">
              <h3 className="text-2xl font-extrabold text-[#1B3329] mb-2 font-display">
                Send Us a Message
              </h3>
              <p className="text-xs text-gray-600 mb-6">
                Our pet care coordinators respond to every inquiry within 2 business hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF6EE] border border-emerald-200 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#E8EFEA] text-[#1B3329] flex items-center justify-center mx-auto text-2xl">
                    <CheckCircle2 className="w-6 h-6 text-[#E8927C]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1B3329]">Message Sent Successfully!</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you for reaching out to PAWS & POLISH. Our front desk team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#E8927C] text-white text-xs font-bold mt-2 shadow-peach hover:bg-[#D97760] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Verma"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C] bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C] bg-white"
                      >
                        <option value="General Question">General Question</option>
                        <option value="Grooming Consultation">Grooming Consultation</option>
                        <option value="Nutrition Advice">Nutrition Advice</option>
                        <option value="Bulk Order">Bulk Pet Products</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your pet, specific grooming requirements, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C] bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-extrabold shadow-peach hover:shadow-elevated transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to PAWS & POLISH</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}