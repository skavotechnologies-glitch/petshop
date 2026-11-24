import React from 'react';
import { Heart, Sparkles, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { statistics } from '../data/testimonials';
import Card3DTilt from './Card3DTilt';
import { ASSETS } from '../assets';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-[#FAF6EE]">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#E8927C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#5F7161]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Editorial Photography Composition (Matching Reference) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <Card3DTilt>
                  <div className="rounded-3xl overflow-hidden shadow-card border-2 border-white aspect-[4/5] bg-[#E8EFEA] group">
                    <img
                      src={ASSETS.floating?.catPlay?.src || ASSETS.pets.catEditorial}
                      alt={ASSETS.floating?.catPlay?.alt || "Luxury Cat Grooming"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Card3DTilt>

                <div className="p-6 rounded-3xl bg-[#1B3329] text-white shadow-card border border-white/10">
                  <div className="text-3xl font-extrabold text-[#E8927C] mb-1 font-display">100%</div>
                  <p className="text-xs font-semibold text-white/90">Fear-Free Handling</p>
                  <p className="text-[11px] text-white/60 mt-1">Zero cages, zero harsh chemicals, endless love.</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 pt-8">
                <div className="p-6 rounded-3xl bg-[#E8927C] text-white shadow-peach border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#1B3329] flex items-center justify-center mb-2">
                    <Heart className="w-5 h-5 text-[#E8927C] fill-[#E8927C]" />
                  </div>
                  <h4 className="text-sm font-black">Clean & Organic</h4>
                  <p className="text-[11px] font-medium text-white/90 mt-1">All shampoos are botanical, paraben-free and tearless.</p>
                </div>

                <Card3DTilt>
                  <div className="rounded-3xl overflow-hidden shadow-card border-2 border-white aspect-[4/5] bg-[#E8EFEA] group">
                    <img
                      src={ASSETS.floating?.puppyPlay?.src || ASSETS.pets.puppyPlay}
                      alt={ASSETS.floating?.puppyPlay?.alt || "Happy Puppy Playtime"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Card3DTilt>
              </div>
            </div>

            {/* Central Stamp Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-elevated border-4 border-[#1B3329] flex flex-col items-center justify-center text-center p-2 z-20">
              <span className="text-xl sm:text-2xl">🐾</span>
              <span className="text-[9px] font-black uppercase tracking-tighter text-[#1B3329] leading-none mt-1">
                Since 2018
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Luxury Brand Story (Reference Section 5) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-extrabold uppercase tracking-wider border border-[#1B3329]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
              <span>Our Brand Philosophy</span>
            </div>

            {/* Script Accent + Headline matching Reference Frame 8s/9s */}
            <div>
              <span className="font-serif italic text-2xl sm:text-3xl text-[#E8927C] block mb-1 font-normal tracking-wide">
                Pawfam Signature
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight leading-tight font-display">
                THE BEST CARE FOR <br />
                <span className="text-[#E8927C]">YOUR BEST FRIEND.</span>
              </h2>
            </div>

            <p className="text-base text-[#1A2420]/80 leading-relaxed font-normal">
              We believe pets deserve the very best. Our passion is to make every pet feel comfortable, healthy and loved through quality products and professional care.
            </p>

            <p className="text-sm text-[#1A2420]/70 leading-relaxed">
              Founded by passionate pet parents and certified master groomers, PAWS & POLISH was created to reimagine pet wellness. We replaced sterile clinical tables with warm wooden interiors, soothing aromatherapy, and unhurried styling sessions where pets can play, relax, and leave looking their absolute best.
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
                <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[#1B3329]">
                  <CheckCircle2 className="w-4 h-4 text-[#E8927C] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 3 Highlight Statistics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1B3329]/15">
              {statistics.slice(0, 3).map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E8927C] font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-extrabold text-[#1B3329] mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-[#1A2420]/50 hidden sm:block">{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1B3329] hover:text-[#E8927C] transition-colors group"
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