import React, { useState } from 'react';
import { galleryImages } from '../data/gallery';
import { Sparkles, Maximize2, X, Heart, Eye } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFF9F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EC] text-[#FF784F] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Diary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#234C3D] tracking-tight font-display">
            Little Moments. <span className="text-[#FF784F]">Big Happiness.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed">
            Real snaps from our salon floor: clean coats, joyful tail wags, peaceful cats, and warm hugs between groomers and pets.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 border-2 border-white bg-gray-100"
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

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFF0EC] text-[#FF784F] text-[10px] font-extrabold uppercase">
                    {selectedImage.category}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 font-semibold">{selectedImage.badge}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#234C3D]">{selectedImage.title}</h3>
                <p className="text-xs text-[#252525]/80 leading-relaxed">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
