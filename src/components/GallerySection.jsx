import React, { useState } from 'react';
import { galleryImages } from '../data/gallery';
import { Sparkles, Maximize2, X, Heart, Eye } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>Visual Diary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Little Moments. <span className="text-[#E8927C]">Big Happiness.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1A2420]/75 leading-relaxed">
            Real snaps from our salon floor: clean coats, joyful tail wags, peaceful cats, and warm hugs between groomers and pets.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-soft hover:shadow-peach transition-all duration-300 hover:-translate-y-1.5 border-2 border-white bg-gray-100"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase">
                    {img.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-extrabold">{img.title}</h4>
                  <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">{img.caption}</p>
                </div>
              </div>

              {/* Category Pill always visible on mobile */}
              <div className="sm:hidden absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold">
                {img.title}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-white flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FAF6EE] text-[#1B3329] text-xs font-bold uppercase tracking-wider">
                  {selectedImage.badge}
                </span>
                <h3 className="text-xl font-extrabold text-[#1B3329] mt-2 font-display">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{selectedImage.caption}</p>
              </div>

              <a
                href="#booking"
                onClick={() => setSelectedImage(null)}
                className="px-5 py-2.5 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-bold shadow-peach transition-all whitespace-nowrap"
              >
                Book This Look
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}