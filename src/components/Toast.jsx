import React from 'react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#234C3D] text-white text-xs font-bold shadow-elevated border border-white/10 animate-slideDown">
      <span>{toastMessage}</span>
    </div>
  );
}
