import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/gallery';
import { Sparkles, Maximize2, X, Heart, Eye, ArrowRight } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Dog Grooming', 'Cat Care', 'Styling', 'Happy Pets'];

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#FAF6EE] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#E8927C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1B3329]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>Visual Diary & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Little Moments. <span className="text-[#E8927C]">Big Happiness.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1A2420]/75 leading-relaxed">
            Real snapshots from our salon floor: silky coats, joyful tail wags, peaceful feline spa treatments, and warm cuddles.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === cat
                    ? 'bg-[#E8927C] text-white shadow-peach'
                    : 'bg-white text-gray-600 hover:text-[#1B3329] hover:bg-[#FAF6EE] border border-gray-200/80 shadow-soft'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img, index) => {
              // Asymmetric sizing: index 0 and 4 span larger in responsive grid
              const isLarge = index === 0 || index === 4;

              return (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className={isLarge ? 'sm:col-span-2 lg:col-span-2' : ''}
                >
                  <Card3DTilt>
                    <div
                      onClick={() => setSelectedImage(img)}
                      className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-soft hover:shadow-peach transition-all duration-500 border-2 border-white bg-gray-100 ${
                        isLarge ? 'aspect-[16/9]' : 'aspect-square'
                      }`}
                    >
                      <img
                        src={img.image}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />

                      {/* Floating Badge Top-Left */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-[#1B3329] shadow-sm border border-black/5">
                          {img.badge}
                        </span>
                      </div>

                      {/* Expand Action Icon Top-Right */}
                      <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#1B3329] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      {/* Editorial Gradient Overlay with Caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8927C]">
                          {img.category}
                        </span>
                        <h4 className="text-lg font-extrabold text-white font-display mt-0.5">{img.title}</h4>
                        <p className="text-xs text-white/80 line-clamp-2 mt-1">{img.caption}</p>
                      </div>

                      {/* Always visible label on touch/mobile */}
                      <div className="sm:hidden absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-sm text-white text-xs font-bold truncate">
                        {img.title}
                      </div>
                    </div>
                  </Card3DTilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FAF6EE] text-[#E8927C] text-xs font-extrabold uppercase tracking-wider">
                  {selectedImage.badge} • {selectedImage.category}
                </span>
                <h3 className="text-2xl font-extrabold text-[#1B3329] mt-2 font-display">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">{selectedImage.caption}</p>
              </div>

              <a
                href="#booking"
                onClick={() => setSelectedImage(null)}
                className="px-6 py-3 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-extrabold shadow-peach transition-all whitespace-nowrap self-start sm:self-center flex items-center gap-2"
              >
                <span>Book This Look</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}