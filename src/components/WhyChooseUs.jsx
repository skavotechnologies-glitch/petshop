import React from 'react';
import { Heart, Sparkles, Award, UserCheck, Shield, Check } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Heart,
      title: "Gentle & Loving Care",
      desc: "We treat every dog and cat as if they were our own. From warm towel snuggles to calming acoustic playlists, pets feel relaxed and secure.",
      badge: "Fear-Free Certified",
      color: "bg-[#FDF0EC] text-[#E8927C]"
    },
    {
      icon: Sparkles,
      title: "Premium Quality Products",
      desc: "We exclusively formulate and curate cruelty-free, all-natural botanical shampoos, organic conditioners, and zero-additive gourmet treats.",
      badge: "100% Organic",
      color: "bg-[#FAF6EE] text-[#E8927C]"
    },
    {
      icon: Award,
      title: "Professional Master Grooming",
      desc: "Our stylists hold international certified master grooming credentials with continuous training in feline behavior and modern breed trims.",
      badge: "Certified Stylists",
      color: "bg-[#E8EFEA] text-[#1B3329]"
    },
    {
      icon: UserCheck,
      title: "Personalized Pet Attention",
      desc: "Zero rushed assembly lines. We schedule generous 1-on-1 time slots to understand your pet's skin sensitivities, fears, and unique styling preferences.",
      badge: "1-on-1 Dedicated",
      color: "bg-[#FAF6EE] text-[#1B3329]"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>The PAWS & POLISH Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Why Pet Parents <span className="text-[#E8927C]">Trust Us.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1A2420]/75 leading-relaxed">
            We hold ourselves to the highest standards of safety, hygiene, and unconditional pet love in every grooming wash and product we deliver.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card3DTilt key={index}>
                <div
                  className="p-8 rounded-3xl bg-[#FAF6EE] border border-gray-200/80 hover:border-[#E8927C]/40 shadow-soft hover:shadow-peach transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 border border-black/5`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#1B3329] shadow-sm border border-gray-100">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#1B3329] group-hover:text-[#E8927C] transition-colors mb-3 font-display">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#1A2420]/75 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-[#1B3329]">
                    <Check className="w-4 h-4 text-[#E8927C]" />
                    <span>Guaranteed Gentle Experience</span>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}