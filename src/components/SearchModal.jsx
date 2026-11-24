import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, ShoppingBag, Calendar, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { services } from '../data/services';
import { useCart } from '../context/CartContext';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingProducts = trimmed.length > 0
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingServices = trimmed.length > 0
    ? services.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmed) ||
          s.tagline.toLowerCase().includes(trimmed) ||
          s.description.toLowerCase().includes(trimmed)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF6EE] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#1B3329]/10 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-200/80 bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#E8927C] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dog food, cat treats, shampoo, full grooming..."
            className="w-full bg-transparent text-[#1A2420] placeholder-gray-400 text-base font-medium focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-5 overflow-y-auto space-y-6">
          {trimmed.length === 0 ? (
            <div className="py-8 text-center space-y-4">
              <span className="text-4xl">🐾</span>
              <h4 className="text-base font-bold text-[#1B3329]">Looking for something special?</h4>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try searching for "Adult Dog Food", "Spa Treatment", "Chew Toy", or "Haircut".
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['Dog Food', 'Cat Nutrition', 'Spa Treatment', 'Chew Toy', 'Nail Clip', 'Beds'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-gray-700 hover:bg-[#E8927C] hover:text-white transition-colors border border-gray-200 shadow-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : matchingProducts.length === 0 && matchingServices.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <span className="text-4xl">😿</span>
              <h4 className="text-base font-bold text-gray-800">No results found for "{query}"</h4>
              <p className="text-xs text-gray-500">Check spelling or try browsing our categories below.</p>
            </div>
          ) : (
            <>
              {/* Grooming Services Matches */}
              {matchingServices.length > 0 && (
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#1B3329] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E8927C]" />
                    <span>Grooming Services ({matchingServices.length})</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchingServices.map((srv) => (
                      <div
                        key={srv.id}
                        className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 hover:border-[#E8927C]/40 transition-colors"
                      >
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-14 h-14 rounded-xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h6 className="text-sm font-bold text-gray-900 truncate">{srv.title}</h6>
                          <p className="text-xs text-[#E8927C] font-bold">{srv.priceLabel}</p>
                          <a
                            href="#booking"
                            onClick={onClose}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B3329] hover:text-[#E8927C] mt-1"
                          >
                            <span>Book Now</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Matches */}
              {matchingProducts.length > 0 && (
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#1B3329] flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-[#E8927C]" />
                    <span>Pet Products ({matchingProducts.length})</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchingProducts.map((p) => (
                      <div
                        key={p.id}
                        className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 hover:border-[#E8927C]/40 transition-colors"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h6 className="text-xs font-bold text-gray-900 truncate">{p.name}</h6>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs font-bold text-[#E8927C]">₹{p.price}</span>
                            <span className="text-[10px] text-gray-400 line-through">₹{p.originalPrice}</span>
                          </div>
                          <button
                            onClick={() => {
                              addToCart(p);
                              onClose();
                            }}
                            className="mt-1 px-2.5 py-1 rounded-lg bg-[#E8EFEA] text-[#1B3329] text-[10px] font-bold hover:bg-[#E8927C] hover:text-white transition-colors"
                          >
                            + Add to Bag
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}