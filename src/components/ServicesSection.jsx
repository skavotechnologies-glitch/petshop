import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';
import { Clock, Check, Sparkles, Calendar, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { ASSETS } from '../assets';
import Card3DTilt from './Card3DTilt';

export default function ServicesSection({ onSelectService }) {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [petSize, setPetSize] = useState('Medium'); // 'Small' | 'Medium' | 'Large'

  const activeService = services.find((s) => s.id === selectedServiceId) || services[0];

  // Dynamic price adjustment based on pet size
  const sizeMultiplier = petSize === 'Small' ? 0.85 : petSize === 'Large' ? 1.25 : 1.0;
  const calculatedPrice = Math.round(activeService.price * sizeMultiplier);

  const handleCardClick = (service) => {
    setSelectedServiceId(service.id);
    if (onSelectService) {
      onSelectService(service.title);
    }
  };

  const bubbles = [
    { size: 40, top: '15%', left: '15%', delay: 0 },
    { size: 55, top: '25%', left: '78%', delay: 1 },
    { size: 35, top: '70%', left: '20%', delay: 1.8 },
    { size: 48, top: '75%', left: '72%', delay: 2.2 },
    { size: 28, top: '40%', left: '88%', delay: 0.5 }
  ];

  return (
    <section id="grooming" className="py-24 lg:py-32 bg-[#FAF6EE] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#E8927C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1B3329]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matches Reference Video Frame 6s) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1B3329] text-xs font-extrabold uppercase tracking-widest shadow-sm border border-[#1B3329]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>PET GROOMING RITUALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display uppercase">
            CHOOSE YOUR PET'S GROOM
          </h2>

          <p className="text-sm sm:text-base text-[#1A2420]/75 font-normal">
            A little care, a lot of confidence. Stress-free styling tailored to your pet's comfort.
          </p>
        </div>

        {/* 3-Column Interactive Grooming Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ── Left Column: Configurator & Details Panel ── */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id + petSize}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-[#FAF6EE] space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#FDF0EC] text-[#E8927C] text-[10px] font-extrabold uppercase tracking-wider">
                      {activeService.badge}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E8927C]" />
                      <span>{activeService.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#1B3329] font-display">
                    {activeService.title}
                  </h3>
                  <p className="text-xs font-bold text-[#E8927C] mt-1">{activeService.tagline}</p>
                  <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Pet Size Selector */}
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wider block mb-2">
                    Select Pet Size:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {['Small', 'Medium', 'Large'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setPetSize(size)}
                        className={`py-2 rounded-xl text-xs font-extrabold transition-all ${
                          petSize === size
                            ? 'bg-[#1B3329] text-white shadow-sm'
                            : 'bg-[#FAF6EE] text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inclusions Checklist */}
                <div className="pt-2 border-t border-gray-100 space-y-2">
                  <span className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wider block mb-1">
                    What's Included:
                  </span>
                  {activeService.features.slice(0, 4).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <Check className="w-3.5 h-3.5 text-[#E8927C] shrink-0 font-bold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Action Button */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Est. Total</span>
                    <span className="text-2xl font-extrabold text-[#1B3329] font-display">
                      ₹{calculatedPrice}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    onClick={() => onSelectService && onSelectService(activeService.title)}
                    className="px-6 py-3 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-extrabold shadow-peach hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Center Column: Large Realistic Dog Image with Floating Spa Bubbles ── */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
            {/* Ambient circular soft backdrop */}
            <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-t from-[#E8927C]/20 via-[#FAF6EE] to-white/40 blur-xl pointer-events-none" />

            {/* Floating Soap Bubbles */}
            {bubbles.map((b, i) => (
              <div
                key={i}
                style={{
                  top: b.top,
                  left: b.left,
                  width: `${b.size}px`,
                  height: `${b.size}px`,
                  animationDelay: `${b.delay}s`
                }}
                className="absolute rounded-full bubble-floating pointer-events-none z-20 border border-white/60 shadow-sm"
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 30%, rgba(232,146,124,0.2) 70%, rgba(255,255,255,0.5) 100%)'
                  }}
                />
              </div>
            ))}

            {/* Center Realistic Dog Visual (Animated on selection) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative z-10 w-full max-w-[340px] drop-shadow-[0_20px_35px_rgba(27,51,41,0.25)]"
              >
                <img
                  src={ASSETS.pets.goldenGroomingCenter}
                  alt="Dog ready for grooming - Paws & Polish"
                  className="w-full h-auto object-contain select-none"
                />

                {/* Floating "Fear-Free Certified" Stamp */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-white shadow-elevated border border-gray-100 flex items-center gap-1.5 whitespace-nowrap text-xs font-extrabold text-[#1B3329]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Fear-Free Sanctuary</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right Column: Interactive Grooming Service Cards ── */}
          <div className="lg:col-span-4 order-3 space-y-3.5">
            {services.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => handleCardClick(service)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center gap-3.5 border-2 ${
                    isSelected
                      ? 'bg-white border-[#E8927C] shadow-card scale-[1.02] ring-2 ring-[#E8927C]/20'
                      : 'bg-white/80 hover:bg-white border-transparent hover:border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Service Thumbnail Image */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-gray-100 shadow-inner">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Title & Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className={`text-sm font-extrabold truncate ${isSelected ? 'text-[#E8927C]' : 'text-[#1B3329]'}`}>
                        {service.title}
                      </h4>
                      <span className="text-xs font-extrabold text-[#1B3329] shrink-0">
                        {service.priceLabel}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate mt-0.5">
                      {service.tagline}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-semibold mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#E8927C]" />
                        {service.duration}
                      </span>
                      <span>•</span>
                      <span>Fear-Free</span>
                    </div>
                  </div>

                  {/* Radio indicator */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'border-[#E8927C] bg-[#E8927C]' : 'border-gray-300 bg-transparent'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Gentle Feline Spa Callout Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1B3329] to-[#2E5A44] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-extrabold text-[#FAF6EE] flex items-center justify-center sm:justify-start gap-2">
              <span>🐱 Special Gentle Cat Hours Available</span>
            </h4>
            <p className="text-xs text-white/80 max-w-xl">
              Does your feline companion dislike barking dogs? We reserve quiet Tuesday & Thursday mornings exclusively for peaceful, dog-free cat spa visits.
            </p>
          </div>
          <a
            href="#booking"
            className="px-6 py-3 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white font-extrabold text-xs shrink-0 shadow-peach transition-all"
          >
            Schedule Cat Slot
          </a>
        </div>

      </div>
    </section>
  );
}
