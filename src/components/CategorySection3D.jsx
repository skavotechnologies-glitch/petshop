import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import Card3DTilt from './Card3DTilt';
import { ASSETS } from '../assets';

export default function CategorySection3D({ onSelectCategory }) {
  const categories = [
    {
      id: 'dogs',
      title: 'Dogs & Pups',
      filterName: 'Dog Food',
      tagline: 'Playful Companions',
      count: '35+ Essentials',
      image: ASSETS.categories.dogs,
      gradient: 'from-[#FF784F]/20 via-[#FFF0EC] to-white',
      accentColor: '#FF784F',
      badge: 'Bestseller World'
    },
    {
      id: 'cats',
      title: 'Feline Royalty',
      filterName: 'Cat Food',
      tagline: 'Quiet Purrs & Spa',
      count: '28+ Curations',
      image: ASSETS.categories.cats,
      gradient: 'from-[#234C3D]/15 via-[#E6F1E9] to-white',
      accentColor: '#234C3D',
      badge: 'Feline Approved'
    },
    {
      id: 'food',
      title: 'Food & Nutrition',
      filterName: 'Dog Food',
      tagline: '100% Grain-Free',
      count: '40+ Gourmet Feasts',
      image: ASSETS.categories.food,
      gradient: 'from-[#FFD66B]/25 via-[#FFF9F0] to-white',
      accentColor: '#D97706',
      badge: 'Vet Formulated'
    },
    {
      id: 'toys',
      title: 'Interactive Toys',
      filterName: 'Toys',
      tagline: 'Cognitive Brain Play',
      count: '24+ Power Chewers',
      image: ASSETS.categories.toys,
      gradient: 'from-[#FF784F]/15 via-[#FFF8E7] to-white',
      accentColor: '#FF784F',
      badge: 'Safe Natural Rubber'
    },
    {
      id: 'grooming',
      title: 'Salon Grooming',
      filterName: 'Grooming Products',
      tagline: 'Botanical Tear-Free',
      count: '18+ Formulations',
      image: ASSETS.categories.grooming,
      gradient: 'from-[#E6F1E9] via-[#F0FDF4] to-white',
      accentColor: '#059669',
      badge: 'Organic Shampoos'
    },
    {
      id: 'beds',
      title: 'Beds & Comfort',
      filterName: 'Beds & Comfort',
      tagline: 'Orthopedic Calming',
      count: '16+ Loungers',
      image: ASSETS.categories.beds,
      gradient: 'from-[#234C3D]/10 via-[#F3E8FF] to-white',
      accentColor: '#7E22CE',
      badge: 'Memory Foam'
    }
  ];

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#FFF9F0] relative overflow-hidden">
      {/* 3D Ambient Blur Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FFD66B]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF784F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F1E9] text-[#234C3D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF784F]" />
            <span>Curated Worlds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#234C3D] tracking-tight font-display">
            Explore by <span className="text-[#FF784F]">Category.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed">
            Immersive 3D environments crafted for your pet’s every daily rhythm — from nourishing feasts to cozy naps.
          </p>
        </div>

        {/* 6 3D Category Cards Grid with Depth & Tilts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Card3DTilt key={cat.id} className="h-full">
              <a
                href="#shop"
                onClick={() => onSelectCategory && onSelectCategory(cat.filterName)}
                className={`group block rounded-3xl p-6 bg-gradient-to-br ${cat.gradient} border border-white shadow-soft hover:shadow-elevated transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between`}
              >
                {/* Background Shimmer Glow on Hover */}
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div>
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-white text-[10px] font-extrabold uppercase tracking-wider text-[#234C3D] shadow-sm">
                      {cat.badge}
                    </span>
                    <span className="text-xs font-bold text-gray-500">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#234C3D] group-hover:text-[#FF784F] transition-colors font-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-600 mt-1">
                    {cat.tagline}
                  </p>
                </div>

                {/* Floating 3D Image with Depth Lift on Hover */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-6 shadow-md border-2 border-white bg-white group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Explore Action Button */}
                <div className="pt-2 flex items-center justify-between text-xs font-extrabold text-[#234C3D] group-hover:text-[#FF784F] transition-colors">
                  <span>Explore Collection</span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#FF784F] text-[#234C3D] group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </Card3DTilt>
          ))}
        </div>

      </div>
    </section>
  );
}
