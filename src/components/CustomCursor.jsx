import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);
  const requestRef = useRef();

  useEffect(() => {
    // Hide on mobile touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      // Add gentle paw dust particle on movement occasionally
      if (Math.random() > 0.85) {
        setParticles((prev) => [
          ...prev.slice(-12),
          {
            id: Math.random(),
            x: e.clientX + (Math.random() * 12 - 6),
            y: e.clientY + (Math.random() * 12 - 6),
            size: Math.random() * 6 + 4,
            opacity: 0.6
          }
        ]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smooth spring trailing follower
  useEffect(() => {
    const follow = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      requestRef.current = requestAnimationFrame(follow);
    };
    requestRef.current = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  // Clean up particles
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 400);
    return () => clearTimeout(timer);
  }, [particles]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Floating Sparkle Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
          }}
          className="absolute rounded-full bg-[#E8927C] shadow-sm pointer-events-none"
        />
      ))}

      {/* Trailing Outer Glow Ring */}
      <div
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : isClicking ? 0.8 : 1})`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s'
        }}
        className={`absolute w-10 h-10 rounded-full border-2 pointer-events-none transition-colors duration-200 ${
          isHovered
            ? 'border-[#E8927C] bg-[#E8927C]/20 backdrop-blur-[1px]'
            : 'border-[#1B3329]/30 bg-transparent'
        }`}
      />

      {/* Center Paw Dot */}
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
        }}
        className="absolute w-4 h-4 rounded-full bg-[#E8927C] text-white border border-[#1B3329] shadow-peach pointer-events-none flex items-center justify-center text-[9px] font-bold"
      >
        🐾
      </div>
    </div>
  );
}