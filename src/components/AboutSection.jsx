import React from 'react';
import { Heart, Sparkles, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { statistics } from '../data/testimonials';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-[#FFF9F0]">
      {/* Decorative background paw */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-card border-2 border-white aspect-[4/5] bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=700&q=80"
                    alt="Veterinarian & Stylist grooming cat"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 rounded-3xl bg-[#234C3D] text-white shadow-card">
                  <div className="text-3xl font-extrabold text-[#FFD66B] mb-1 font-display">100%</div>
                  <p className="text-xs font-semibold text-white/90">Fear-Free Handling</p>
                  <p className="text-[11px] text-white/60 mt-1">Zero cages, zero harsh chemicals, endless love.</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 pt-8">
                <div className="p-5 rounded-3xl bg-[#FF784F] text-white shadow-card">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center mb-2">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <h4 className="text-sm font-extrabold">Clean & Organic</h4>
                  <p className="text-[11px] text-white/80 mt-1">All shampoos are paraben-free and tearless.</p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-card border-2 border-white aspect-[4/5] bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=700&q=80"
                    alt="Groomed playful pup"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Central Stamp Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-elevated border-4 border-[#FFF9F0] flex flex-col items-center justify-center text-center p-2 z-20">
              <span className="text-xl sm:text-2xl">🐾</span>
              <span className="text-[9px] font-black uppercase tracking-tighter text-[#234C3D] leading-none mt-1">
                Since 2018
              </span>
            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F1E9] text-[#234C3D] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FF784F]" />
              <span>Our Brand Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#234C3D] tracking-tight leading-tight font-display">
              More Than a Pet Store.{' '}
              <span className="text-[#FF784F]">A Place That Feels Like Home.</span>
            </h2>

            <p className="text-base text-[#252525]/80 leading-relaxed font-normal">
              We believe pets deserve the very best. Our passion is to make every pet feel comfortable, healthy and loved through quality products and professional care.
            </p>

            <p className="text-sm text-[#252525]/70 leading-relaxed">
              Founded by passionate pet parents and certified master groomers, PAWORA was created to reimagine pet wellness. We replaced sterile clinical tables with warm wooden interiors, soothing aromatherapy, and unhurried styling sessions where pets can play, relax, and leave looking their absolute best.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Certified Fear-Free Master Stylists",
                "100% Tear-Free Botanical Shampoos",
                "Personalized 1-on-1 Attention",
                "Veterinarian Recommended Hygiene",
                "Cage-Free Warm Drying Suites",
                "Organic Nutrition Consultation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-[#234C3D]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF784F] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 3 Highlight Statistics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-200">
              {statistics.slice(0, 3).map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FF784F] font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#234C3D] mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-gray-500 hidden sm:block">{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#234C3D] hover:text-[#FF784F] transition-colors group"
              >
                <span>Book a Consultation & Salon Tour</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
