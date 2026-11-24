import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Truck, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export default function CheckoutModal({ isOpen, onClose }) {
  const { cart, subtotal, shippingFee, isFreeShipping, grandTotal, clearCart, setIsCartOpen } = useCart();

  const [shippingInfo, setShippingInfo] = useState({
    name: 'Priya Sharma',
    phone: '9876543210',
    address: 'Apartment 4B, Greenwood Heights, 12th Main',
    city: 'Bengaluru',
    pincode: '560038',
    paymentMethod: 'cod'
  });

  const [orderComplete, setOrderComplete] = useState(null);

  if (!isOpen) return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const orderRef = `ORD-PNP-${Math.floor(100000 + Math.random() * 900000)}`;

    const orderData = {
      orderRef,
      items: cart,
      shippingInfo,
      subtotal,
      shippingFee,
      grandTotal,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setOrderComplete(orderData);
    clearCart();
  };

  const handleFinish = () => {
    setOrderComplete(null);
    onClose();
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 bg-[#FAF6EE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐾</span>
            <h3 className="text-base font-extrabold text-[#1B3329]">
              {orderComplete ? 'Order Confirmed' : 'Checkout'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-500 shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {orderComplete ? (
          /* Order Confirmation View */
          <div className="p-8 text-center space-y-6 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-[#E8EFEA] text-[#1B3329] flex items-center justify-center mx-auto text-3xl shadow-sm">
              <CheckCircle2 className="w-9 h-9 text-[#E8927C]" />
            </div>

            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-[#FAF6EE] text-[#1B3329] text-xs font-bold border border-[#1B3329]/15">
                Order Placed Successfully
              </span>
              <h4 className="text-2xl font-extrabold text-[#1B3329]">Thank You for Spoiling Your Pet!</h4>
              <p className="text-xs text-gray-500">Order Reference: <strong>{orderComplete.orderRef}</strong></p>
            </div>

            {/* Receipt */}
            <div className="bg-[#FAF6EE] rounded-2xl p-5 text-left text-xs border border-gray-200 space-y-3">
              <div className="flex justify-between text-gray-500 pb-2 border-b border-gray-200">
                <span>Ship to: {orderComplete.shippingInfo.name}</span>
                <span>{orderComplete.createdAt}</span>
              </div>

              <div className="space-y-2">
                {orderComplete.items.map((i) => (
                  <div key={i.id} className="flex justify-between items-center text-gray-700">
                    <span>{i.quantity}x {i.name}</span>
                    <span className="font-bold">₹{i.price * i.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-gray-200 flex justify-between font-extrabold text-[#1B3329] text-sm">
                <span>Grand Total Paid</span>
                <span>₹{orderComplete.grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-bold transition-all shadow-peach"
            >
              Continue Exploring PAWS & POLISH
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handlePlaceOrder} className="p-6 overflow-y-auto space-y-5">
            {/* Delivery Address */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#E8927C] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Delivery Address</span>
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.name}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C]"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C]"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Postal Code (PIN)</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.pincode}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#E8927C]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#E8927C]">
                Payment Method
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <label className="p-3 rounded-xl border-2 border-[#E8927C] bg-[#FAF6EE] flex items-center gap-2 cursor-pointer text-xs font-bold text-[#1B3329]">
                  <input type="radio" name="payment" defaultChecked className="accent-[#E8927C]" />
                  <span>💵 Cash on Delivery</span>
                </label>
                <label className="p-3 rounded-xl border border-gray-200 hover:border-gray-300 flex items-center gap-2 cursor-pointer text-xs font-bold text-gray-600">
                  <input type="radio" name="payment" className="accent-[#E8927C]" />
                  <span>⚡ UPI / QR Scan</span>
                </label>
              </div>
            </div>

            {/* Order Total & Submit */}
            <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-gray-500">Total Due:</span>
                <div className="text-lg font-extrabold text-[#1B3329]">₹{grandTotal}</div>
              </div>

              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-bold shadow-peach transition-all"
              >
                Place Order
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}