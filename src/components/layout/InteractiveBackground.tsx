"use client";

import { useState, useEffect } from 'react';
import { useTheme } from '@/components/providers/theme-provider';

export function InteractiveBackground() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const maskStyle = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
    maskImage: 'radial-gradient(ellipse 400px 400px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(ellipse 400px 400px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%)',
  };
  
  const gridColor = theme === 'dark' ? '#ffffff0d' : '#4f4f4f2e';

  const gridStyle = {
    '--grid-color': gridColor,
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '36px 36px',
  };

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full"
      style={{ ...gridStyle, ...maskStyle }}
    />
  );
}
