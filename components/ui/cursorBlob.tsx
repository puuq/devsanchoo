// components/CursorBlob.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorBlob() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX - 48, y: ev.clientY - 48 }); // offset to center blob
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-24 h-24 bg-[hsl(var(--pixel-primary))]/20 rounded-full pointer-events-none z-50 blur-2xl"
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  );
}
