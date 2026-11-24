import React from 'react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#1B3329] text-white text-xs font-extrabold shadow-peach border-2 border-[#E8927C] animate-slideDown">
      <span className="text-[#E8927C]">🐾</span>
      <span>{toastMessage}</span>
    </div>
  );
}