import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Scissors, Heart, ShieldCheck } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

export default function VideoExperienceSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [sliderPos, setSliderPos] = useState(50);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1B362B] text-white relative overflow-hidden">
      {/* 3D Ambient Lighting Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF784F]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FFD66B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFD66B] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Salon Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            Watch the <span className="text-[#FF784F]">Magic Happen.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            Take a peek inside our tranquil INDIRANAGAR salon. Gentle warm hydro-massages, zero-cage drying, and endless loving tail wags.
          </p>
        </div>

        {/* Video Player & Interactive Transformation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: High-End Cinematic Video Player */}
          <div className="lg:col-span-7">
            <Card3DTilt>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 aspect-[16/10] bg-black group">
                {/* Responsive HTML5 Pet Video Loop */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80"
                  className="w-full h-full object-cover"
                >
                  {/* High quality royalty-free pet grooming video streams */}
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-little-dog-getting-groomed-43093-large.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Video Controls Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#FF784F] backdrop-blur-md text-white flex items-center justify-center transition-all shadow-md"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#FF784F] backdrop-blur-md text-white flex items-center justify-center transition-all shadow-md"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-xs font-bold text-white/90 hidden sm:inline-block">
                      LIVE SALON FEED • PURE PET JOY
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#FF784F] text-white text-[10px] font-extrabold uppercase tracking-wider">
                    4K Ultra HD
                  </span>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Fear-Free Certified Suite</span>
                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Interactive Before & After Slider */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-[#FFD66B] uppercase tracking-wider flex items-center gap-1.5">
                <Scissors className="w-4 h-4" />
                <span>Interactive Transformation</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                Drag to See the Grooming Makeover
              </h3>
              <p className="text-xs text-white/70">
                Slide left and right to inspect Milo's coat before and after our signature Teddy Bear Full Grooming.
              </p>
            </div>

            {/* Before / After Interactive Split Comparison */}
            <div
              onMouseMove={handleSliderMove}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 select-none cursor-ew-resize group"
            >
              {/* "After" Image (Full background) */}
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
                alt="After Royal Grooming - Fluffy Clean"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-bold text-[#FFD66B]">
                ✨ AFTER: Royal Spa Fluff
              </span>

              {/* "Before" Image (Clipped by slider position) */}
              <div
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                className="absolute inset-0 w-full h-full overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
                  alt="Before Grooming - Tangled Coat"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-bold text-white/90">
                  🌧️ BEFORE: Tangled Fur
                </span>
              </div>

              {/* Divider Line & Circular Drag Handle */}
              <div
                style={{ left: `${sliderPos}%` }}
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none flex items-center justify-center -translate-x-1/2"
              >
                <div className="w-9 h-9 rounded-full bg-[#FF784F] border-2 border-white text-white flex items-center justify-center text-xs font-black shadow-lg">
                  ↔
                </div>
              </div>
            </div>

            {/* Quick Benefits Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FFD66B] shrink-0" />
                <span className="text-xs font-semibold">Tearless Shampoos</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-[#FF784F] shrink-0 fill-[#FF784F]" />
                <span className="text-xs font-semibold">Zero Sedation / Fear-Free</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
