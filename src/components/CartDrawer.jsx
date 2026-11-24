import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotal,
    shippingFee,
    isFreeShipping,
    shippingProgress,
    amountNeededForFreeShipping,
    grandTotal
  } = useCart();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      {/* Flyout Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FAF6EE]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E8927C] text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#1B3329]">Your Shopping Bag</h3>
              <p className="text-xs text-gray-500 font-medium">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3.5 bg-[#E8EFEA] border-b border-[#1B3329]/10">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-[#1B3329] flex items-center gap-1.5">
              <span>🚚</span>
              {isFreeShipping ? (
                <span className="text-emerald-700 font-extrabold">You unlocked Free Delivery!</span>
              ) : (
                <span>Add ₹{amountNeededForFreeShipping} more for Free Delivery</span>
              )}
            </span>
            <span className="font-bold text-[#1B3329]">{shippingProgress}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/70 overflow-hidden">
            <div
              className="h-full bg-[#E8927C] rounded-full transition-all duration-300"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {cart.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#FAF6EE] text-4xl flex items-center justify-center mx-auto shadow-inner">
                🐾
              </div>
              <h4 className="text-base font-bold text-[#1B3329]">Your bag is feeling light</h4>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Explore our gourmet nutrition, dental chews, and cozy pet beds to spoil your furry companion.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#E8927C] text-white text-xs font-bold shadow-peach hover:bg-[#D97760] transition-colors"
              >
                Browse Pet Store
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-[#FAF6EE]/60 border border-gray-100 flex items-center gap-3.5"
              >
                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover bg-white shrink-0 shadow-sm"
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-gray-900 truncate">{item.name}</h5>
                  <p className="text-[11px] text-[#E8927C] font-bold">₹{item.price}</p>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-xs font-bold"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-xs font-bold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-extrabold text-[#1B3329] ml-auto">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                  className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout Button */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-white space-y-3.5 shadow-lg">
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-bold text-gray-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sanitized Delivery</span>
                <span className="font-bold">
                  {isFreeShipping ? (
                    <span className="text-emerald-600 font-extrabold uppercase text-[10px]">FREE</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#1B3329] pt-2 border-t border-gray-100">
                <span>Estimated Total</span>
                <span className="font-display">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full py-4 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white font-extrabold text-sm shadow-peach hover:shadow-elevated transition-all flex items-center justify-center gap-2 group"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-[10px] text-gray-400 text-center">
              🐾 100% Genuine Pet Care Guarantee • Easy 7-Day Returns
            </p>
          </div>
        )}

      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}