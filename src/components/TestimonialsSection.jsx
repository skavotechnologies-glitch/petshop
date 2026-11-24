import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, Sparkles, Quote, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F1E9] text-[#234C3D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF784F]" />
            <span>Pet Parent Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#234C3D] tracking-tight font-display">
            Pet Parents Have <span className="text-[#FF784F]">Something to Say.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed">
            Read heartfelt stories from local pet families who trust PAWORA for regular stress-free grooming and healthy pet food.
          </p>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFF9F0] border border-gray-200/80 hover:border-[#FF784F]/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#FFD66B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD66B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FF784F]/30" />
                </div>

                {/* Review Paragraph */}
                <p className="text-xs text-[#252525]/85 leading-relaxed italic">
                  "{review.content}"
                </p>

                {/* Service Tag */}
                <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-gray-200 text-[10px] font-bold text-[#234C3D]">
                  🐾 {review.service}
                </span>
              </div>

              {/* Author & Pet */}
              <div className="pt-5 mt-5 border-t border-gray-200/60 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-extrabold text-[#234C3D] truncate">{review.name}</h4>
                  <p className="text-[11px] text-[#FF784F] font-bold truncate">
                    Parent of {review.petName}
                  </p>
                  <p className="text-[10px] text-gray-400 truncate">{review.petBreed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrative Demo Notice */}
        <div className="mt-12 text-center text-[11px] text-gray-400">
          ✨ Sample client stories created for demonstration and showcase purposes.
        </div>

      </div>
    </section>
  );
}
