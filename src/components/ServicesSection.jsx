import React from 'react';
import { services } from '../data/services';
import { Clock, Check, Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="grooming" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EC] text-[#FF784F] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Grooming Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#234C3D] tracking-tight font-display">
            Give Your Pet the <span className="text-[#FF784F]">Royal Treatment.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed">
            Crafted for pure relaxation, skin hygiene, and dazzling coats. Handled with fear-free certified compassion by our master pet stylists.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl bg-[#FFF9F0] border-2 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden group shadow-soft hover:shadow-card ${
                service.popular ? 'border-[#FF784F]' : 'border-transparent hover:border-gray-200'
              }`}
            >
              {/* Card Image with Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-extrabold text-[#234C3D] shadow-sm">
                    {service.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#FFD66B]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl font-extrabold text-[#234C3D] group-hover:text-[#FF784F] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-[#FF784F] mb-2">{service.tagline}</p>
                  <p className="text-xs text-[#252525]/75 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="mt-4 pt-4 border-t border-gray-200/60 space-y-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Book Action */}
                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider block">Pricing</span>
                    <span className="text-lg font-extrabold text-[#234C3D] font-display">
                      {service.priceLabel}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    onClick={() => onSelectService && onSelectService(service.title)}
                    className="px-5 py-2.5 rounded-full bg-[#234C3D] group-hover:bg-[#FF784F] text-white text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#234C3D] to-[#1A392E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#FFD66B] flex items-center justify-center sm:justify-start gap-2">
              <span>🐱 Special Gentle Cat Hours Available</span>
            </h4>
            <p className="text-xs text-white/80 max-w-xl">
              Does your cat dislike barking dogs? We reserve quiet Tuesday & Thursday mornings exclusively for peaceful feline spa visits.
            </p>
          </div>
          <a
            href="#booking"
            className="px-6 py-3 rounded-full bg-[#FF784F] hover:bg-[#E85F36] text-white font-bold text-xs shrink-0 shadow-md transition-all"
          >
            Schedule Cat Slot
          </a>
        </div>

      </div>
    </section>
  );
}
