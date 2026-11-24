import React, { useState } from 'react';
import { products, productCategories } from '../data/products';
import ProductCard from './ProductCard';
import { Sparkles, ShoppingBag, Filter, ArrowUpDown } from 'lucide-react';

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("popular");

  // Filter products by category
  let filtered = activeCategory === "All Products"
    ? products
    : products.filter((p) => p.category === activeCategory);

  // Sort
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  return (
    <section id="shop" className="py-20 lg:py-28 bg-[#FFF9F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F1E9] text-[#234C3D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF784F]" />
            <span>Curated Pet Boutique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#234C3D] tracking-tight font-display">
            Everything Your Furry Friend <span className="text-[#FF784F]">Needs.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed">
            Wholesome nutrition, intelligent cognitive toys, orthopedic beds, and salon-grade grooming formulas handpicked by our veterinarians.
          </p>
        </div>

        {/* Categories Bar & Filter Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 scrollbar-none">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap shadow-sm ${
                  activeCategory === category
                    ? 'bg-[#234C3D] text-white shadow-soft'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort by:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-[#234C3D] focus:outline-none focus:border-[#FF784F] shadow-sm"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner on Free Delivery */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0EC] text-[#FF784F] flex items-center justify-center text-2xl shrink-0">
              🚚
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#234C3D]">Complimentary Express Shipping on Orders ₹999+</h4>
              <p className="text-xs text-gray-500 mt-0.5">Dispatched in sanitized, eco-friendly temperature-controlled packaging.</p>
            </div>
          </div>
          <a
            href="#booking"
            className="px-6 py-3 rounded-full bg-[#234C3D] hover:bg-[#1A392E] text-white text-xs font-bold transition-all shrink-0"
          >
            Combine with Grooming
          </a>
        </div>

      </div>
    </section>
  );
}
