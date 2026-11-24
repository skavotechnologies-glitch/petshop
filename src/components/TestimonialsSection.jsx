import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, Sparkles, Quote, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/80 hover:border-[#E8927C]/50 shadow-soft hover:shadow-peach transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#F3C87A]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F3C87A]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E8927C]/30" />
                </div>

                {/* Review Paragraph */}
                <p className="text-xs text-[#1A2420]/85 leading-relaxed italic">
                  "{review.content}"
                </p>

                {/* Service Tag */}
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF6EE] border border-gray-200 text-[10px] font-bold text-[#1B3329]">
                  🐾 {review.service}
                </span>
              </div>

              {/* Author & Pet */}
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-extrabold text-[#1B3329] truncate">{review.name}</h4>
                  <p className="text-[11px] text-[#E8927C] font-bold truncate">
                    Parent of {review.petName}
                  </p>
                  <p className="text-[10px] text-gray-400 truncate">{review.petBreed}</p>
                </div>
              </div>
            </div>
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