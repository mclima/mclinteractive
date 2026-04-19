'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function BackgroundDotsCSS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [dots, setDots] = useState<Array<{ id: number; size: number; top: number; left: number }>>([]);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setContainerHeight(document.documentElement.scrollHeight);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      const dotCount = 300;

      for (let i = 0; i < dotCount; i++) {
        const size = Math.random() * 3 + 1; // 1-3px (same as FlashingDots)
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        newDots.push({
          id: i,
          size,
          top,
          left
        });
      }
      return newDots;
    };

    setDots(generateDots());
  }, []);

  useEffect(() => {
    if (dots.length === 0) return;

    const dotElements = dotsRef.current;
    const animations: gsap.core.Tween[] = [];

    dotElements.forEach((dot) => {
      if (dot) {
        const anim = gsap.fromTo(dot, 
          {
            opacity: 0.1
          },
          {
            opacity: 1,
            duration: Math.random() * 1.5 + 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: Math.random() * 2
          }
        );
        animations.push(anim);
      }
    });

    return () => {
      animations.forEach(anim => anim.kill());
    };
  }, [dots]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full pointer-events-none" style={{ zIndex: -1, height: `${containerHeight}px` }}>
      {dots.map((dot) => (
        <div
          key={dot.id}
          ref={(el) => { dotsRef.current[dot.id] = el; }}
          className="absolute bg-black rounded-full"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.top}%`,
            left: `${dot.left}%`
          }}
        />
      ))}
    </div>
  );
}
