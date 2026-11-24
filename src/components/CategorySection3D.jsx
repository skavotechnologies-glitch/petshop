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
      gradient: 'from-[#FAF6EE] via-[#FDFBF7] to-white',
      accentColor: '#E8927C',
      badge: 'Bestseller World'
    },
    {
      id: 'cats',
      title: 'Feline Royalty',
      filterName: 'Cat Food',
      tagline: 'Quiet Purrs & Spa',
      count: '28+ Curations',
      image: ASSETS.categories.cats,
      gradient: 'from-[#1B3329] to-[#14261E] text-white',
      accentColor: '#E8927C',
      badge: 'Feline Approved'
    },
    {
      id: 'food',
      title: 'Food & Nutrition',
      filterName: 'Dog Food',
      tagline: '100% Grain-Free',
      count: '40+ Gourmet Feasts',
      image: ASSETS.categories.food,
      gradient: 'from-[#FAF6EE] via-white to-white',
      accentColor: '#1B3329',
      badge: 'Vet Formulated'
    },
    {
      id: 'toys',
      title: 'Interactive Toys',
      filterName: 'Toys',
      tagline: 'Cognitive Brain Play',
      count: '24+ Power Chewers',
      image: ASSETS.categories.toys,
      gradient: 'from-[#E8EFEA] via-[#FAF6EE] to-white',
      accentColor: '#E8927C',
      badge: 'Safe Natural Rubber'
    },
    {
      id: 'grooming',
      title: 'Salon Grooming',
      filterName: 'Grooming Products',
      tagline: 'Botanical Tear-Free',
      count: '18+ Formulations',
      image: ASSETS.categories.grooming,
      gradient: 'from-[#FAF6EE] via-white to-white border-2 border-gray-100',
      accentColor: '#1B3329',
      badge: 'Organic Shampoos'
    },
    {
      id: 'beds',
      title: 'Beds & Comfort',
      filterName: 'Beds & Comfort',
      tagline: 'Orthopedic Calming',
      count: '16+ Loungers',
      image: ASSETS.categories.beds,
      gradient: 'from-[#1B3329] to-[#14261E] text-white',
      accentColor: '#E8927C',
      badge: 'Memory Foam'
    }
  ];

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden">
      {/* 3D Ambient Blur Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#E8927C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#5F7161]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-extrabold uppercase tracking-wider border border-[#1B3329]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>Curated Worlds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Explore by <span className="text-[#E8927C]">Category.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1A2420]/75 leading-relaxed">
            Immersive boutique environments crafted for your pet’s every daily rhythm — from nourishing organic feasts to cozy orthopedic loungers.
          </p>
        </div>

        {/* 6 3D Category Cards Grid with Depth & Tilts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Card3DTilt className="h-full">
                <a
                  href="#shop"
                  onClick={() => onSelectCategory && onSelectCategory(cat.filterName)}
                  className={`group block rounded-3xl p-6 bg-gradient-to-br ${cat.gradient} border border-gray-200/70 shadow-soft hover:shadow-peach transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between`}
                >
                  {/* Background Shimmer Glow on Hover */}
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#E8927C]/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  <div>
                    {/* Top Header inside Card */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#E8927C] text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                        {cat.badge}
                      </span>
                      <span className="text-xs font-bold text-gray-400">
                        {cat.count}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold transition-colors font-display">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold opacity-75 mt-1">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Explore Action Button */}
                  <div className="pt-2 flex items-center justify-between text-xs font-extrabold transition-colors">
                    <span>Explore Collection</span>
                    <div className="w-8 h-8 rounded-full bg-[#1B3329] group-hover:bg-[#E8927C] text-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </Card3DTilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}