import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart, Calendar, Phone, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen, wishlist } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Grooming', path: '/#grooming' },
    { name: 'Shop', path: '/#shop' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft border-b border-[#234C3D]/10 py-3'
            : 'bg-[#FFF9F0] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#FF784F] to-[#E85F36] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                <span className="text-xl sm:text-2xl select-none">🐾</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-2xl font-extrabold tracking-tight text-[#234C3D] flex items-center gap-1 font-display">
                  PAWORA
                  <span className="w-2 h-2 rounded-full bg-[#FF784F] inline-block animate-pulse"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#FF784F] tracking-wider uppercase -mt-1">
                  Pet Care & Grooming
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isHash = link.path.startsWith('/#');
                return isHash ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-[15px] font-semibold text-[#252525] hover:text-[#FF784F] transition-colors relative py-1 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF784F] transition-all duration-200 group-hover:w-full rounded-full"></span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[15px] font-semibold text-[#252525] hover:text-[#FF784F] transition-colors relative py-1 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF784F] transition-all duration-200 group-hover:w-full rounded-full"></span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & CTA */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              {/* Search Icon */}
              <button
                onClick={onOpenSearch}
                aria-label="Search products and services"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#252525] hover:text-[#FF784F] hover:bg-white/80 transition-all border border-transparent hover:border-[#FF784F]/20"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Bag Button with Live Badge */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="View shopping bag"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#252525] hover:text-[#FF784F] hover:bg-white/80 transition-all relative border border-transparent hover:border-[#FF784F]/20"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF784F] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-scale">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              {/* Book Appointment CTA */}
              <a
                href="#booking"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#234C3D] hover:bg-[#1A392E] text-white text-sm font-bold shadow-soft hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#FFD66B]" />
                <span>Book Appointment</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#252525] hover:bg-white transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-[#FF784F]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#234C3D]/10 px-6 py-6 animate-fadeIn shadow-lg">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-[#252525] hover:text-[#FF784F] py-1 border-b border-gray-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-gray-400">🐾</span>
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-[#FF784F] hover:bg-[#E85F36] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Grooming Session</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
