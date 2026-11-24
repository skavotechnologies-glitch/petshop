import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Smile, Sparkles } from 'lucide-react';

export default function TrustHighlights() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Professional Pet Care",
      desc: "Fear-free certified handling with veterinary-grade sanitation standards.",
      bgColor: "bg-[#E8EFEA]",
      iconColor: "text-[#1B3329]"
    },
    {
      icon: Award,
      title: "Experienced Grooming Team",
      desc: "Master stylists skilled across all dog breeds and gentle feline coat care.",
      bgColor: "bg-[#1B3329]",
      iconColor: "text-[#E8927C]"
    },
    {
      icon: Sparkles,
      title: "Quality Pet Products",
      desc: "100% genuine organic nutrition, hypoallergenic shampoos, and safe toys.",
      bgColor: "bg-[#FAF6EE]",
      iconColor: "text-[#E8927C]"
    },
    {
      icon: HeartHandshake,
      title: "Pet-Friendly Experience",
      desc: "Cage-free environment, soothing acoustic playlists, and endless cuddles.",
      bgColor: "bg-[#1B3329]",
      iconColor: "text-[#E8927C]"
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-[#1B3329]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-[#FAF6EE] hover:bg-white border border-gray-200/80 hover:border-[#E8927C] transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-peach flex flex-col items-start gap-4 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-black/5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#1B3329] mb-1.5 group-hover:text-[#E8927C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}