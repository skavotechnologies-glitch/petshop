import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Respect prefers-reduced-motion
export const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

/**
 * ParallaxLayer — scrolls children at a different speed than normal scroll
 */
export function ParallaxLayer({ speed = 0.3, className = '', children, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/**
 * MagneticButton — button that subtly pulls toward the mouse cursor
 */
export function MagneticButton({ children, className = '', strength = 0.25, ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * FloatingItem — continuous smooth gentle floating with idle oscillation and mouse parallax
 */
export function FloatingItem({
  children,
  className = '',
  duration = 4,
  yOffset = 12,
  rotateOffset = 3,
  delay = 0,
  ...props
}) {
  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotate: [-rotateOffset, rotateOffset, -rotateOffset]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * RevealText — animates text into view with clean masked line-by-line or word-by-word reveal
 */
export function RevealText({ text, className = '', delay = 0 }) {
  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.05
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
