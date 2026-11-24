import React from 'react';
import { Heart, Star, ShoppingBag, Box } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Card3DTilt from './Card3DTilt';

export default function ProductCard({ product, onInspect3D }) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.id);

  return (
    <Card3DTilt className="h-full">
      <div className="rounded-3xl bg-[#FAF6EE]/50 hover:bg-white border border-gray-200/80 hover:border-[#E8927C]/50 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
        
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-white p-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#1B3329] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm z-10">
              {product.badge}
            </span>
          )}

          {/* Wishlist Heart Icon */}
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label="Add to Wishlist"
            className={`absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 z-10 ${
              wishlisted
                ? 'bg-red-50 text-red-500'
                : 'bg-white/90 text-gray-500 hover:text-red-500 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </button>

          {/* 3D Inspect Button Overlay on Hover */}
          <button
            onClick={() => onInspect3D && onInspect3D(product)}
            className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-white/90 hover:bg-[#E8927C] text-[#1B3329] hover:text-white text-[11px] font-bold shadow-md transition-all flex items-center gap-1.5 z-10 backdrop-blur-sm"
            title="Inspect in 3D"
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D View</span>
          </button>

          {/* Weight / Size Tag */}
          {product.weight && (
            <span className="absolute bottom-6 left-6 px-2.5 py-0.5 rounded-md bg-white/90 text-gray-600 text-[10px] font-bold shadow-sm z-10">
              {product.weight}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-[11px] font-extrabold text-[#E8927C] tracking-wide uppercase">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-700">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span>{product.rating}</span>
                <span className="text-gray-400 font-normal">({product.reviews})</span>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-sm font-extrabold text-[#1B3329] group-hover:text-[#E8927C] transition-colors line-clamp-1 mb-1 font-display">
              {product.name}
            </h4>

            {/* Short description */}
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price & Action */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-[#1B3329] font-display">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-extrabold shadow-sm hover:shadow-peach transition-all duration-200 flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>
          </div>

        </div>

      </div>
    </Card3DTilt>
  );
}
