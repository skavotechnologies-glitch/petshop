import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Calendar, ShoppingBag, ArrowRight, ChevronDown, Heart, Star, Box, Video, Play, Pause } from 'lucide-react';
import { ASSETS } from '../assets';
import { FloatingItem, MagneticButton } from './MotionHelpers';
import Hero3DScene from './Hero3DScene';

export default function Hero() {
  const [viewMode, setViewMode] = useState('cinematic'); // 'cinematic' | '3d-mascot'
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Mouse Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transform layers
  const layer1X = useTransform(smoothMouseX, [-500, 500], [-15, 15]);
  const layer1Y = useTransform(smoothMouseY, [-500, 500], [-15, 15]);
  const layer2X = useTransform(smoothMouseX, [-500, 500], [25, -25]);
  const layer2Y = useTransform(smoothMouseY, [-500, 500], [20, -20]);
  const layer3X = useTransform(smoothMouseX, [-500, 500], [-35, 35]);
  const layer3Y = useTransform(smoothMouseY, [-500, 500], [-30, 30]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A] text-white pt-20 pb-16 lg:py-0"
    >
      {/* ── 1. Edge-to-Edge Cinematic Background Video ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={ASSETS.videos.hero.poster}
          className="w-full h-full object-cover scale-105 filter brightness-95"
        >
          <source src={ASSETS.videos.hero.mp4} type="video/mp4" />
        </video>

        {/* Cinematic Multi-layer Gradient Overlays for Readability & Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F0] via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[#234C3D]/25 mix-blend-multiply" />
      </div>

      {/* ── 2. Floating Ambient Glow Orbs ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF784F]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD66B]/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── 3. Main Hero Content Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-12">
          
          {/* Left Column: Headlines & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD66B] text-xs font-bold tracking-wide shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#FF784F] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#FFD66B]" />
              <span>Award-Winning Pet Care & Luxury Grooming Sanctuary</span>
            </div>

            {/* Cinematic Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-display text-white">
              Where Every Paw{' '}
              <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#FF784F] via-[#FFA382] to-[#FFD66B]">
                Finds Its Happy Place.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD66B]/80"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Everything your best friend deserves. From everyday essentials to extraordinary little moments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <MagneticButton>
                <a
                  href="#shop"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF784F] to-[#E85F36] hover:from-[#E85F36] hover:to-[#FF784F] text-white font-extrabold text-base shadow-warm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2.5 group"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#booking"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#234C3D] font-extrabold text-base border-2 border-white/30 hover:border-white shadow-soft transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5 hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5 text-[#FFD66B]" />
                  <span>Meet Your Best Friend</span>
                </a>
              </MagneticButton>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/80">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" alt="Pet Parent" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Pet Parent" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Pet Parent" className="w-6 h-6 rounded-full border border-white object-cover" />
                </div>
                <span className="font-bold text-white">500+ Happy Families</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <div className="flex text-[#FFD66B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFD66B]" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5 Rating</span>
              </div>

              {/* Mode Switcher Pill */}
              <button
                onClick={() => setViewMode(viewMode === 'cinematic' ? '3d-mascot' : 'cinematic')}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF784F]/30 hover:bg-[#FF784F] text-[#FFD66B] hover:text-white border border-[#FF784F]/40 text-[11px] font-bold transition-all shadow-sm"
              >
                {viewMode === 'cinematic' ? (
                  <>
                    <Box className="w-3.5 h-3.5" />
                    <span>Switch to Interactive 3D Mascot</span>
                  </>
                ) : (
                  <>
                    <Video className="w-3.5 h-3.5" />
                    <span>Switch to Cinematic Video</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Floating Pet Composition OR Live R3F Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {viewMode === '3d-mascot' ? (
              /* Live Interactive WebGL R3F Canvas Mascot */
              <div className="w-full relative rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden p-2 animate-fadeIn">
                <Hero3DScene />
              </div>
            ) : (
              /* Multi-layered 3D Floating Pet Visual Composition */
              <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">
                
                {/* Layer 1: Main Large Dog in 3D Depth Card with Parallax */}
                <motion.div
                  style={{ x: layer1X, y: layer1Y }}
                  className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/30 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm group z-10"
                >
                  <img
                    src={ASSETS.floating.dogHero.src}
                    alt={ASSETS.floating.dogHero.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Bottom Highlight inside card */}
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD66B] bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                      Pawora Sanctuary
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-1">Milo The Retriever</h3>
                    <p className="text-xs text-white/80">Pampered with Love & Care</p>
                  </div>
                </motion.div>

                {/* Layer 2: Floating Cat Bubble with Independent Counter-Parallax */}
                <motion.div
                  style={{ x: layer2X, y: layer2Y }}
                  className="absolute -top-6 -left-6 sm:-left-10 z-20"
                >
                  <FloatingItem duration={4.5} yOffset={10} rotateOffset={4}>
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white/90 backdrop-blur-md">
                      <img
                        src={ASSETS.floating.catHero.src}
                        alt={ASSETS.floating.catHero.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </FloatingItem>
                </motion.div>

                {/* Layer 3: Floating Card - "Professional Grooming" */}
                <motion.div
                  style={{ x: layer3X, y: layer3Y }}
                  className="absolute -bottom-6 -left-8 sm:-left-12 z-20"
                >
                  <FloatingItem duration={5.5} yOffset={8} rotateOffset={2} delay={0.6}>
                    <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-elevated border border-gray-100 flex items-center gap-3 text-gray-900 max-w-[220px]">
                      <div className="w-10 h-10 rounded-xl bg-[#FFF0EC] text-[#FF784F] flex items-center justify-center font-bold text-lg">
                        ✂️
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-[#234C3D]">Royal Grooming</p>
                        <p className="text-[10px] text-gray-500">Aromatic hydrobath & precision trims</p>
                      </div>
                    </div>
                  </FloatingItem>
                </motion.div>

                {/* Layer 4: Floating Badge - "Happy Pets, Happy Parents" */}
                <motion.div
                  style={{ x: layer1X, y: layer2Y }}
                  className="absolute top-1/2 -right-6 sm:-right-10 z-20 hidden sm:block"
                >
                  <FloatingItem duration={4} yOffset={10} rotateOffset={3} delay={1}>
                    <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-elevated border border-gray-100 flex items-center gap-2.5 text-gray-900">
                      <div className="w-8 h-8 rounded-lg bg-[#FFD66B] flex items-center justify-center text-sm">
                        💖
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#252525]">100% Gentle</p>
                        <p className="text-[9px] text-emerald-600 font-bold">Fear-Free Standards</p>
                      </div>
                    </div>
                  </FloatingItem>
                </motion.div>

                {/* Floating Paw & Star Decorative Accents */}
                <div className="absolute -top-3 right-6 text-2xl animate-spin duration-10000 pointer-events-none opacity-80">
                  ✨
                </div>
                <div className="absolute bottom-16 -right-4 text-2xl animate-bounce duration-3000 pointer-events-none opacity-80">
                  🐾
                </div>

              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── 4. Animated Scroll-Down Indicator ── */}
      <a
        href="#categories"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#FFD66B]">
          Scroll to Explore
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#FF784F]"
          />
        </div>
      </a>
    </section>
  );
}
