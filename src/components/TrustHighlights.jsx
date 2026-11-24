import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Smile, Sparkles } from 'lucide-react';

export default function TrustHighlights() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Professional Pet Care",
      desc: "Fear-free certified handling with veterinary-grade sanitation standards.",
      bgColor: "bg-[#FFF0EC]",
      iconColor: "text-[#FF784F]"
    },
    {
      icon: Award,
      title: "Experienced Grooming Team",
      desc: "Master stylists skilled across all dog breeds and gentle feline coat care.",
      bgColor: "bg-[#E6F1E9]",
      iconColor: "text-[#234C3D]"
    },
    {
      icon: Sparkles,
      title: "Quality Pet Products",
      desc: "100% genuine organic nutrition, hypoallergenic shampoos, and safe toys.",
      bgColor: "bg-[#FFF8E7]",
      iconColor: "text-[#D97706]"
    },
    {
      icon: HeartHandshake,
      title: "Pet-Friendly Experience",
      desc: "Cage-free environment, soothing acoustic playlists, and endless cuddles.",
      bgColor: "bg-[#F0FDF4]",
      iconColor: "text-[#059669]"
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-[#FFF9F0]/60 hover:bg-[#FFF9F0] border border-gray-200/60 hover:border-[#FF784F]/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-card flex flex-col items-start gap-4 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#234C3D] mb-1.5 group-hover:text-[#FF784F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#252525]/70 leading-relaxed font-normal">
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
