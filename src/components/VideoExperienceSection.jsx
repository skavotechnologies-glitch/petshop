import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Scissors, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import Card3DTilt from './Card3DTilt';
import { ASSETS } from '../assets';

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
    <section className="py-24 lg:py-32 bg-[#1A2621] text-white relative overflow-hidden">
      {/* 3D Ambient Lighting Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF784F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#FFD66B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: "Little Moments. Big Love." */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFD66B] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Brand Film</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white">
            Little Moments.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF784F] to-[#FFD66B]">
              Big Love.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            Behind every gentle purr and joyful tail wag is a lifelong story of companionship. We create calm, fear-free sanctuaries where pets are pampered like the royalty they are.
          </p>
        </div>

        {/* Video Player & Interactive Transformation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: High-End Cinematic Video Player */}
          <div className="lg:col-span-7">
            <Card3DTilt>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/20 aspect-[16/10] bg-black group">
                {/* Responsive HTML5 Pet Video Loop */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster={ASSETS.videos.cinematic.poster}
                  className="w-full h-full object-cover scale-105"
                >
                  <source src={ASSETS.videos.cinematic.mp4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                {/* Video Controls Bar */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-20">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause film' : 'Play film'}
                      className="w-11 h-11 rounded-full bg-white/20 hover:bg-[#FF784F] backdrop-blur-md text-white flex items-center justify-center transition-all shadow-md"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      className="w-11 h-11 rounded-full bg-white/20 hover:bg-[#FF784F] backdrop-blur-md text-white flex items-center justify-center transition-all shadow-md"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-xs font-bold text-white/90 hidden sm:inline-block tracking-wide">
                      CINEMATIC SALON FILM • 4K
                    </span>
                  </div>

                  <a
                    href="#booking"
                    className="px-4 py-2 rounded-full bg-[#FF784F] hover:bg-[#E85F36] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Reserve Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Fear-Free Certified Suites</span>
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
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FFD66B] shrink-0" />
                <span className="text-xs font-semibold">Tearless Shampoos</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
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
