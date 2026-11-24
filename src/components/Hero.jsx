import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Calendar, ShoppingBag, ArrowRight, Star, Box, Video } from 'lucide-react';
import { ASSETS } from '../assets';
import { FloatingItem, MagneticButton } from './MotionHelpers';
import Hero3DScene from './Hero3DScene';

export default function Hero() {
  const [viewMode, setViewMode] = useState('cinematic'); // 'cinematic' | '3d-mascot'

  // Mouse Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transform layers
  const dogX = useTransform(smoothMouseX, [-500, 500], [-12, 12]);
  const dogY = useTransform(smoothMouseY, [-500, 500], [-10, 10]);
  const trailX = useTransform(smoothMouseX, [-500, 500], [20, -20]);
  const trailY = useTransform(smoothMouseY, [-500, 500], [15, -15]);
  const badge1X = useTransform(smoothMouseX, [-500, 500], [-25, 25]);
  const badge1Y = useTransform(smoothMouseY, [-500, 500], [-20, 20]);
  const badge2X = useTransform(smoothMouseX, [-500, 500], [30, -30]);
  const badge2Y = useTransform(smoothMouseY, [-500, 500], [22, -22]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  // Floating bubbles data
  const bubbles = [
    { size: 68, top: '18%', left: '46%', delay: 0, duration: 6.5 },
    { size: 92, top: '28%', left: '78%', delay: 1.2, duration: 7.2 },
    { size: 48, top: '65%', left: '42%', delay: 0.8, duration: 5.8 },
    { size: 56, top: '75%', left: '85%', delay: 2.1, duration: 6.8 },
    { size: 36, top: '15%', left: '88%', delay: 1.6, duration: 5.2 },
    { size: 76, top: '50%', left: '92%', delay: 2.5, duration: 7.5 }
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#12241D] via-[#1B362B] to-[#142921] text-white pt-24 pb-16 lg:py-0"
    >
      {/* ── 1. Background Video Layer with Dark Sage Overlays ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={ASSETS.videos.hero.poster}
          className="w-full h-full object-cover scale-105 opacity-25 mix-blend-screen filter saturate-150"
        >
          <source src={ASSETS.videos.hero.mp4} type="video/mp4" />
        </video>

        {/* Ambient Radial Depth Lighting (Matching Reference) */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#142921]/60 to-[#0F1D17]/95" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#5F7161]/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[650px] h-[650px] bg-[#E8927C]/15 rounded-full blur-[140px]" />
      </div>

      {/* ── 2. Glowing Curved Light Trail (Signature Reference Visual) ── */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-85"
        >
          <defs>
            <linearGradient id="glowTrail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8927C" stopOpacity="0" />
              <stop offset="35%" stopColor="#E8927C" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#FAF6EE" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#E8927C" stopOpacity="0" />
            </linearGradient>
            <filter id="trailBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Wide Glow Ribbon */}
          <path
            d="M 520,780 C 720,680 780,480 880,360 C 980,240 1140,280 1280,180"
            stroke="url(#glowTrail)"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#trailBlur)"
            className="animate-trail-glow"
          />

          {/* Crisp Inner Light Core */}
          <path
            d="M 520,780 C 720,680 780,480 880,360 C 980,240 1140,280 1280,180"
            stroke="#FFFDF9"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="18 12"
            opacity="0.85"
          />
        </svg>
      </motion.div>

      {/* ── 3. Translucent Floating Spa Bubbles (Reference Match) ── */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {bubbles.map((b, idx) => (
          <div
            key={idx}
            style={{
              top: b.top,
              left: b.left,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`
            }}
            className="absolute rounded-full bubble-floating backdrop-blur-[2px] border border-white/40 shadow-sm"
          >
            {/* Iridescent Bubble Fill with Refraction */}
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.15) 30%, rgba(232,146,124,0.18) 70%, rgba(255,255,255,0.4) 100%)'
              }}
            />
            {/* Specular White Highlight */}
            <div className="absolute top-2 left-2.5 w-3 h-2 rounded-full bg-white/80 rotate-[-25deg]" />
          </div>
        ))}
      </div>

      {/* ── 4. Main Hero Grid Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-8">
          
          {/* Left Column: Reference Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left pt-6 lg:pt-0"
          >
            {/* Small Label Pill: "PREMIUM PET CARE" (Matches Reference) */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF6EE] text-xs font-extrabold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
              <span>PREMIUM PET CARE</span>
            </div>

            {/* Main Headline: "HAPPY PETS. FRESH LOOKS." (Exact Reference Headline) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04] font-display text-white">
              HAPPY PETS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FAF6EE] to-[#E8927C]">
                FRESH LOOKS.
              </span>
            </h1>

            {/* Subtitle (Exact Reference Text) */}
            <p className="text-base sm:text-lg text-[#FAF6EE]/85 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Because your best friend deserves the very best care, comfort and style. Handled with certified Fear-Free compassion.
            </p>

            {/* CTA Buttons (Warm Peach Primary CTA from Reference) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <MagneticButton>
                <a
                  href="#booking"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white font-extrabold text-sm shadow-peach hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2.5 group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Grooming</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#shop"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#1B3329] font-extrabold text-sm border border-white/30 hover:border-white shadow-soft transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5 hover:-translate-y-1"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explore Collection</span>
                </a>
              </MagneticButton>
            </div>

            {/* Trust Proof Metrics & View Switcher */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-white/80">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" alt="Pet Parent" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Pet Parent" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Pet Parent" className="w-6 h-6 rounded-full border border-white object-cover" />
                </div>
                <span className="font-bold text-white">500+ Happy Families</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5 Rating</span>
              </div>

              {/* Mode Switcher Pill */}
              <button
                onClick={() => setViewMode(viewMode === 'cinematic' ? '3d-mascot' : 'cinematic')}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[#E8927C] text-white hover:text-white border border-white/20 text-[11px] font-bold transition-all shadow-sm"
              >
                {viewMode === 'cinematic' ? (
                  <>
                    <Box className="w-3.5 h-3.5 text-[#E8927C]" />
                    <span>3D Mascot View</span>
                  </>
                ) : (
                  <>
                    <Video className="w-3.5 h-3.5 text-[#E8927C]" />
                    <span>Reference View</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Large Golden Retriever with Layered Depth & Parallax */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {viewMode === '3d-mascot' ? (
              /* Live Interactive WebGL Mascot */
              <div className="w-full relative rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden p-2 animate-fadeIn">
                <Hero3DScene />
              </div>
            ) : (
              /* Reference Video Visual: Large Golden Retriever with Cutout & Glowing Atmosphere */
              <div className="relative w-full max-w-[540px] aspect-[4/4.5] flex items-center justify-center">
                
                {/* Ambient Soft Backdrop Glow under the dog */}
                <div className="absolute inset-10 rounded-full bg-gradient-to-t from-[#E8927C]/30 to-transparent blur-3xl pointer-events-none" />

                {/* Main Golden Retriever Cutout Image (Layer 4) with Floating & Parallax */}
                <motion.div
                  style={{ x: dogX, y: dogY }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  className="relative z-20 w-full h-full flex items-center justify-center drop-shadow-[0_25px_40px_rgba(0,0,0,0.65)]"
                >
                  <img
                    src={ASSETS.pets.goldenPuppyHero}
                    alt="Golden Retriever Puppy - Paws & Polish"
                    className="w-full h-auto max-h-[500px] object-contain select-none"
                    loading="eager"
                  />
                </motion.div>

                {/* Floating Badge 1 (Left): "Bath & Blow-Dry" (Matches Reference) */}
                <motion.div
                  style={{ x: badge1X, y: badge1Y }}
                  className="absolute bottom-16 -left-4 sm:-left-8 z-30"
                >
                  <FloatingItem duration={5} yOffset={8} rotateOffset={2}>
                    <div className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md text-[#1A2420] shadow-elevated border border-[#FAF6EE] flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-[#FDF0EC] text-[#E8927C] flex items-center justify-center text-xs font-bold">
                        🛁
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-[#1B3329]">Bath & Blow-Dry</p>
                        <p className="text-[10px] text-gray-500 font-medium">Aromatic hydrobath</p>
                      </div>
                    </div>
                  </FloatingItem>
                </motion.div>

                {/* Floating Badge 2 (Right): "Haircut & Styling" (Matches Reference) */}
                <motion.div
                  style={{ x: badge2X, y: badge2Y }}
                  className="absolute top-20 -right-2 sm:-right-6 z-30"
                >
                  <FloatingItem duration={6} yOffset={10} rotateOffset={-2} delay={0.6}>
                    <div className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md text-[#1A2420] shadow-elevated border border-[#FAF6EE] flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-[#EAF0EB] text-[#234C3D] flex items-center justify-center text-xs font-bold">
                        ✂️
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-[#1B3329]">Haircut & Styling</p>
                        <p className="text-[10px] text-gray-500 font-medium">Teddy bear trims</p>
                      </div>
                    </div>
                  </FloatingItem>
                </motion.div>

              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── 5. Scroll Down Indicator ── */}
      <a
        href="#grooming"
        aria-label="Scroll to explore"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#FAF6EE]">
          Scroll to Explore
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#E8927C]"
          />
        </div>
      </a>
    </section>
  );
}
