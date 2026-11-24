import React, { useState } from 'react';
import { products, productCategories } from '../data/products';
import ProductCard from './ProductCard';
import Product3DViewerModal from './Product3DViewerModal';
import { Sparkles, ArrowUpDown, Truck } from 'lucide-react';

export default function ShopSection({ preselectedCategory }) {
  const [activeCategory, setActiveCategory] = useState(preselectedCategory || "All Products");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedProduct3D, setSelectedProduct3D] = useState(null);

  React.useEffect(() => {
    if (preselectedCategory) {
      setActiveCategory(preselectedCategory);
    }
  }, [preselectedCategory]);

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
    <section id="shop" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Matches Reference Video Frame 7s) */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] text-[#1B3329] text-xs font-extrabold uppercase tracking-widest border border-[#1B3329]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>CURATED LIFESTYLE ESSENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Beautiful Pet Essentials
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Thoughtfully selected for the pets you love. Wholesome organic bowls, orthopedic loungers, and botanical grooming formulas.
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
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 whitespace-nowrap shadow-sm ${
                  activeCategory === category
                    ? 'bg-[#1B3329] text-white shadow-soft ring-2 ring-[#1B3329]/20'
                    : 'bg-[#FAF6EE] text-gray-700 hover:bg-gray-200/80 border border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#E8927C]" />
              <span>Sort by:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3.5 py-2 rounded-xl bg-[#FAF6EE] border border-gray-200 text-xs font-bold text-[#1B3329] focus:outline-none focus:border-[#E8927C] shadow-sm"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onInspect3D={(p) => setSelectedProduct3D(p)}
            />
          ))}
        </div>

        {/* Bottom Banner on Free Delivery */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border border-gray-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF0EC] text-[#E8927C] flex items-center justify-center text-2xl shrink-0">
              🚚
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#1B3329]">Complimentary Express Delivery on Orders ₹999+</h4>
              <p className="text-xs text-gray-600 mt-0.5">Dispatched in sanitized, eco-friendly temperature-controlled packaging.</p>
            </div>
          </div>
          <a
            href="#booking"
            className="px-6 py-3 rounded-full bg-[#1B3329] hover:bg-[#14261E] text-white text-xs font-extrabold transition-all shrink-0"
          >
            Combine with Grooming
          </a>
        </div>

      </div>

      {/* 3D Product Interactive 360° Modal */}
      {selectedProduct3D && (
        <Product3DViewerModal
          product={selectedProduct3D}
          onClose={() => setSelectedProduct3D(null)}
        />
      )}
    </section>
  );
}
