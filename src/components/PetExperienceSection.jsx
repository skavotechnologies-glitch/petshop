import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Award, ShieldCheck, ShoppingBag, Calendar } from 'lucide-react';
import Card3DTilt from './Card3DTilt';
import { ASSETS } from '../assets';

export default function PetExperienceSection({ onSelectCategory, onSelectService }) {
  const [activeTab, setActiveTab] = useState('dogs'); // 'dogs' | 'cats'

  const content = {
    dogs: {
      title: 'For the Faithful Tail-Waggers',
      badge: 'Canine Care Sanctuary',
      tagline: 'High-energy outdoor sprints, hearty organic bowls & fluffy teddy-bear trims.',
      image: ASSETS.floating?.puppyPlay?.src || ASSETS.pets.puppyPlay,
      accentColor: '#E8927C',
      bgGradient: 'from-[#FAF6EE] via-[#FDFBF7] to-white',
      themeClass: 'text-[#1A2420]',
      recommendations: [
        {
          title: 'Full Royal Grooming',
          type: 'Grooming Service',
          desc: 'Aromatic bath, breed haircut, ear clean & paw butter massage.',
          action: () => onSelectService && onSelectService('Full Royal Grooming'),
          actionText: 'Book Dog Spa'
        },
        {
          title: 'Royal Canine Feast (2.5kg)',
          type: 'Gourmet Nutrition',
          desc: 'Grain-free balanced protein enriched with omega fatty acids.',
          action: () => onSelectCategory && onSelectCategory('Dog Food'),
          actionText: 'Shop Dog Food'
        },
        {
          title: 'Brain Puzzle Treat Maze',
          type: 'Cognitive Toy',
          desc: 'Reduces separation boredom with interactive treat puzzles.',
          action: () => onSelectCategory && onSelectCategory('Toys'),
          actionText: 'Shop Dog Toys'
        }
      ],
      funFact: 'Did you know? A dog’s sense of smell is about 40 times greater than ours! That’s why our salon uses gentle, all-natural organic botanical scents.'
    },
    cats: {
      title: 'For Feline Aristocrats',
      badge: 'Feline Zen Sanctuary',
      tagline: 'Peaceful quiet hours, salmon broths, delicate brushing & cozy sisal scratchers.',
      image: ASSETS.floating?.catPlay?.src || ASSETS.pets.catEditorial,
      accentColor: '#1B3329',
      bgGradient: 'from-[#1B3329] via-[#14261E] to-[#0F1C16] text-white',
      themeClass: 'text-[#E8927C]',
      recommendations: [
        {
          title: 'Gentle Feline Spa & Brush',
          type: 'Grooming Service',
          desc: 'Stress-free de-shedding & ear hygiene in a quiet, dog-free suite.',
          action: () => onSelectService && onSelectService('Aromatic Bath & Blow Dry'),
          actionText: 'Book Cat Session'
        },
        {
          title: 'Salmon Delights Cat Pack',
          type: 'Gourmet Nutrition',
          desc: 'Wild Atlantic salmon pate with cranberry for urinary health.',
          action: () => onSelectCategory && onSelectCategory('Cat Food'),
          actionText: 'Shop Cat Food'
        },
        {
          title: 'Multi-Level Sisal Scratching Post',
          type: 'Furniture & Play',
          desc: 'Natural fibrous sisal rope to protect furniture and stretch claws.',
          action: () => onSelectCategory && onSelectCategory('Beds & Comfort'),
          actionText: 'Shop Cat Gear'
        }
      ],
      funFact: 'Did you know? Cats spend roughly 30% to 50% of their day grooming themselves, but our feline spa sessions keep them completely free of hairballs!'
    }
  };

  const current = content[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Interactive Tab Selector */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-extrabold uppercase tracking-wider border border-[#1B3329]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>Interactive Tailored Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Who's Making Your <span className="text-[#E8927C]">Day Better?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#1A2420]/75 leading-relaxed">
            Select your companion to see personalized grooming rituals, organic nutrition recommendations, and luxury lifestyle gear.
          </p>

          {/* Toggle Buttons: Dogs vs Cats */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#1B3329]/15 shadow-soft">
            <button
              onClick={() => setActiveTab('dogs')}
              className={`px-8 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'dogs'
                  ? 'bg-[#E8927C] text-white shadow-peach'
                  : 'text-[#1A2420]/70 hover:text-[#1B3329]'
              }`}
            >
              <span>🐶 Dogs & Puppies</span>
            </button>
            <button
              onClick={() => setActiveTab('cats')}
              className={`px-8 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'cats'
                  ? 'bg-[#1B3329] text-white shadow-soft'
                  : 'text-[#1A2420]/70 hover:text-[#1B3329]'
              }`}
            >
              <span>🐱 Cats & Kittens</span>
            </button>
          </div>
        </div>

        {/* Dynamic Animated Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className={`rounded-3xl p-8 sm:p-12 bg-gradient-to-br ${current.bgGradient} border border-gray-200/80 shadow-card`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Visual with 3D Depth Card */}
              <div className="lg:col-span-5">
                <Card3DTilt>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="px-3 py-1 rounded-full bg-[#E8927C] text-[10px] font-black uppercase tracking-wider text-white">
                        {current.badge}
                      </span>
                      <h4 className="text-xl font-extrabold text-white mt-1">{current.title}</h4>
                    </div>
                  </div>
                </Card3DTilt>
              </div>

              {/* Right Column: Tailored Recommendations */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold font-display ${activeTab === 'cats' ? 'text-white' : 'text-[#1B3329]'}`}>
                    {current.title}
                  </h3>
                  <p className={`text-sm mt-2 leading-relaxed ${activeTab === 'cats' ? 'text-white/80' : 'text-gray-600'}`}>
                    {current.tagline}
                  </p>
                </div>

                {/* 3 Tailored Recommendation Cards */}
                <div className="space-y-3">
                  {current.recommendations.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group ${
                        activeTab === 'cats'
                          ? 'bg-white/10 backdrop-blur-md border-white/10 text-white'
                          : 'bg-white/95 backdrop-blur-sm border-gray-100 text-[#1B3329]'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] font-extrabold text-[#E8927C] uppercase tracking-wider block">
                          {item.type}
                        </span>
                        <h5 className={`text-sm font-extrabold group-hover:text-[#E8927C] transition-colors ${activeTab === 'cats' ? 'text-white' : 'text-[#1B3329]'}`}>
                          {item.title}
                        </h5>
                        <p className={`text-xs mt-0.5 ${activeTab === 'cats' ? 'text-white/70' : 'text-gray-500'}`}>{item.desc}</p>
                      </div>

                      <a
                        href={item.actionText.includes('Book') ? '#booking' : '#shop'}
                        onClick={item.action}
                        className="px-5 py-2.5 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-extrabold transition-all whitespace-nowrap self-start sm:self-center shrink-0 flex items-center gap-1.5 shadow-peach"
                      >
                        <span>{item.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Fun Pet Fact Callout */}
                <div className={`p-4 rounded-2xl border text-xs flex items-start gap-3 ${
                  activeTab === 'cats'
                    ? 'bg-white/5 border-white/10 text-white/90'
                    : 'bg-white/80 border-gray-200/80 text-gray-700'
                }`}>
                  <span className="text-lg">💡</span>
                  <div>
                    <span className="font-extrabold block text-[#1B3329]">Furry Fact</span>
                    <p className="text-[11px] opacity-80 mt-0.5">{current.funFact}</p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}