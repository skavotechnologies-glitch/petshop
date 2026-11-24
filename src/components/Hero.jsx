import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ShoppingBag, Heart, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FFD66B]/20 via-[#FF784F]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#E6F1E9] rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#FF784F]/20 text-[#FF784F] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FF784F] animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Fear-Free Pet Salon & Boutique</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#234C3D] tracking-tight leading-[1.15] font-display">
              Because Every Paw Deserves a Little{' '}
              <span className="relative whitespace-nowrap text-[#FF784F]">
                Extra Love.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD66B]"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#252525]/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From professional grooming to everyday essentials, everything your furry family member needs is right here.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#grooming"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF784F] hover:bg-[#E85F36] text-white font-bold text-base shadow-warm hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#shop"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#FFF9F0] text-[#234C3D] font-bold text-base border-2 border-[#234C3D]/15 hover:border-[#234C3D] shadow-soft hover:shadow-card transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-[#FF784F]" />
                <span>Shop for Your Pet</span>
              </a>
            </div>

            {/* Mini Trust Row */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#252525]/70">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" alt="Customer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Customer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Customer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                </div>
                <span className="font-bold text-[#234C3D]">500+ Happy Pet Families</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#FFD66B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFD66B]" />
                  ))}
                </div>
                <span className="font-bold text-[#234C3D]">4.9 / 5 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Collage with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Main Hero Dog Image in Rounded Decorative Frame */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#FFD66B]/30 to-[#FF784F]/20">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80"
                alt="Happy Golden Retriever being pampered"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Smaller Secondary Cat Picture Bubble */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80"
                alt="Cute calm cat"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Card 1: Professional Grooming */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-5 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-elevated border border-gray-100 flex items-center gap-3 z-20 max-w-[210px] sm:max-w-[230px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E6F1E9] flex items-center justify-center text-[#234C3D] shrink-0 font-bold text-lg">
                ✂️
              </div>
              <div>
                <p className="text-xs font-extrabold text-[#234C3D]">Professional Grooming</p>
                <p className="text-[10px] text-gray-500 font-medium">Spa bath, precision trims & coat pampering</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Happy Pets, Happy Parents */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-6 sm:-right-10 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-elevated border border-gray-100 hidden sm:flex items-center gap-2.5 z-20 max-w-[200px]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FFD66B] flex items-center justify-center text-[#252525] shrink-0 text-sm">
                💖
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#252525]">Happy Pets, Happy Parents</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>100% Gentle</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3: Loved by Pet Families */}
            <div className="absolute top-6 -left-4 sm:-left-6 bg-[#234C3D] text-white px-3.5 py-2 rounded-full shadow-lg text-[11px] font-bold flex items-center gap-1.5 z-20">
              <span className="text-sm">🐾</span>
              <span>Loved by Pet Families</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
