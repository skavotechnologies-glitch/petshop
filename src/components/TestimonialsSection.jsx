import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 5.5 seconds unless paused by hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-24 lg:py-32 bg-[#FAF6EE] relative overflow-hidden"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#E8927C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#1B3329]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>Pet Parent Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Pet Parents Have <span className="text-[#E8927C]">Something to Say.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1A2420]/75 leading-relaxed">
            Read heartfelt stories from local pet families who trust PAWS & POLISH for regular stress-free grooming and clean organic nutrition.
          </p>
        </div>

        {/* Featured Testimonial Hero Card + Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card3DTilt>
                <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-gray-200/80 shadow-card hover:shadow-peach transition-all duration-300 relative overflow-hidden">
                  {/* Decorative oversized quotation mark in background */}
                  <Quote className="absolute -top-4 -right-4 w-32 h-32 text-[#FAF6EE] pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    {/* Stars and Service Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-[#F59E0B]">
                          {[...Array(current.rating)].map((_, i) => (
                            <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-[#F59E0B]" />
                          ))}
                        </div>
                        <span className="text-xs font-extrabold text-[#1B3329] ml-1">5.0 Star Experience</span>
                      </div>

                      <span className="px-3.5 py-1.5 rounded-full bg-[#FAF6EE] border border-gray-200 text-xs font-extrabold text-[#1B3329]">
                        🐾 {current.service}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="text-base sm:text-xl lg:text-2xl text-[#1B3329] font-medium leading-relaxed font-serif italic">
                      "{current.content}"
                    </blockquote>

                    {/* Pet Parent & Pet Info */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={current.avatar}
                          alt={current.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md shrink-0"
                        />
                        <div>
                          <h4 className="text-base font-extrabold text-[#1B3329] font-display">{current.name}</h4>
                          <p className="text-xs text-[#E8927C] font-bold">
                            Devoted parent of <span className="underline decoration-wavy underline-offset-2">{current.petName}</span> ({current.petBreed})
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5">Verified Client Review • Indiranagar Salon</p>
                        </div>
                      </div>

                      {/* Navigation Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          aria-label="Previous testimonial"
                          className="w-11 h-11 rounded-full bg-[#FAF6EE] hover:bg-[#E8927C] hover:text-white text-[#1B3329] transition-all flex items-center justify-center shadow-sm"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNext}
                          aria-label="Next testimonial"
                          className="w-11 h-11 rounded-full bg-[#FAF6EE] hover:bg-[#E8927C] hover:text-white text-[#1B3329] transition-all flex items-center justify-center shadow-sm"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-2.5 bg-[#E8927C]'
                    : 'w-2.5 h-2.5 bg-[#1B3329]/20 hover:bg-[#1B3329]/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 4 Quick Client Teaser Pills below */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
          {testimonials.map((review, i) => (
            <button
              key={review.id}
              onClick={() => setCurrentIndex(i)}
              className={`p-3.5 rounded-2xl text-left border transition-all flex items-center gap-3 ${
                i === currentIndex
                  ? 'bg-white border-[#E8927C] shadow-peach ring-2 ring-[#E8927C]/20'
                  : 'bg-white/70 border-gray-200/60 hover:bg-white text-gray-600'
              }`}
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs font-extrabold text-[#1B3329] truncate">{review.name}</p>
                <p className="text-[10px] text-[#E8927C] font-semibold truncate">{review.petName} ({review.petBreed})</p>
              </div>
            </button>
          ))}
        </div>

        {/* Verified Community Note */}
        <div className="mt-12 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
          <span>✨</span>
          <span>Verified pet parent reviews from the PAWS & POLISH community.</span>
        </div>

      </div>
    </section>
  );
}