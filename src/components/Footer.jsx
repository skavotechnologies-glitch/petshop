import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Youtube, ShieldCheck, Sparkles, PawPrint } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#162E25] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative background paw patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#E8927C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E8927C] to-[#D97760] flex items-center justify-center text-white shadow-peach">
                <span className="text-2xl select-none">🐾</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-display">
                PAWS & POLISH
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Dedicated to pampering your beloved dogs and cats with compassionate master grooming, clean organic nutrition, and joyful pet lifestyle essentials.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-2 text-xs text-white/70 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span>42 Blossom Pet Boulevard, Indiranagar, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span>+91 98765 43210 (Toll-Free Reception)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span>care@pawsandpolish.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span>Mon – Sun: 9:00 AM – 8:30 PM (All 7 Days)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a href="#social" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8927C] flex items-center justify-center text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#social" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8927C] flex items-center justify-center text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#social" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8927C] flex items-center justify-center text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wider text-xs text-[#E8927C]">
              Quick Exploration
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><a href="/" className="hover:text-[#E8927C] transition-colors">Home Sanctuary</a></li>
              <li><a href="#about" className="hover:text-[#E8927C] transition-colors">Our Brand Philosophy</a></li>
              <li><a href="#grooming" className="hover:text-[#E8927C] transition-colors">Grooming Packages</a></li>
              <li><a href="#shop" className="hover:text-[#E8927C] transition-colors">Curated Pet Store</a></li>
              <li><a href="#gallery" className="hover:text-[#E8927C] transition-colors">Pet Happiness Gallery</a></li>
              <li><a href="#booking" className="hover:text-[#E8927C] transition-colors">Book Pampering Session</a></li>
              <li><a href="#faq" className="hover:text-[#E8927C] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Grooming Services */}
          <div className="space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wider text-xs text-[#E8927C]">
              Grooming Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><a href="#grooming" className="hover:text-[#E8927C] transition-colors">Full Royal Grooming</a></li>
              <li><a href="#grooming" className="hover:text-[#E8927C] transition-colors">Aromatic Bath & Blow Dry</a></li>
              <li><a href="#grooming" className="hover:text-[#E8927C] transition-colors">Breed Haircut & Styling</a></li>
              <li><a href="#grooming" className="hover:text-[#E8927C] transition-colors">Gentle Nail Clipping</a></li>
              <li><a href="#grooming" className="hover:text-[#E8927C] transition-colors">Ear Hygiene & Cleaning</a></li>
              <li><a href="#grooming" className="hover:text-[#E8927C] transition-colors">Luxury Mineral Mud Spa</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wider text-xs text-[#E8927C]">
              Paws Club Newsletter
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Get seasonal grooming advice, special privilege codes, and wholesome pet care tips delivered to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-white/10 border border-[#E8927C]/30 text-white text-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E8927C]" />
                <span>Welcome to the Paws & Polish Family! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#E8927C] transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#E8927C] hover:bg-[#D97760] text-white transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-white/50">Zero spam. Only pure pet love & exclusive benefits.</p>
              </form>
            )}

            {/* Satisfaction Badge */}
            <div className="pt-2 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8927C]/20 flex items-center justify-center text-[#E8927C]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-[11px] text-white/80">
                <span className="font-bold text-white">Certified Stylists</span>
                <p className="text-white/60">Fear-free & gentle touch guaranteed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} PAWS & POLISH Luxury Pet Care & Boutique Grooming Sanctuary. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#E8927C] fill-[#E8927C]" /> for dogs & cats
            </span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}