'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
  const circleRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate title fade in
    if (titleRef.current) {
      // Set initial state
      gsap.set(titleRef.current, { opacity: 0, y: 60 });
      
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out'
          });
        },
        onLeave: () => {
          gsap.to(titleRef.current, { opacity: 0, y: 60, duration: 0.8 });
        },
        onEnterBack: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(titleRef.current, { opacity: 0, y: 60, duration: 0.8 });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

    // Animate words and icons with wave effect
    boxesRef.current.forEach((element, index) => {
      if (element) {
        const isIcon = index === 1 || index === 3 || index === 5 || index === 7;
        
        if (isIcon) {
          // Icons: scale/opacity pulse + occasional rotation
          gsap.to(element, {
            scale: 1.2,
            opacity: 0.4,
            duration: 2.5,
            delay: index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
          
          // Separate rotation animation that happens occasionally
          gsap.to(element, {
            rotation: 360,
            duration: 1.5,
            delay: index * 0.5 + 2,
            repeat: -1,
            repeatDelay: 4,
            ease: 'power2.inOut'
          });
        } else {
          // Words: just scale and opacity pulse
          gsap.to(element, {
            scale: 1.2,
            opacity: 0.8,
            duration: 2.5,
            delay: index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      }
    });

    // Animate connecting lines
    linesRef.current.forEach((line, index) => {
      if (line) {
        gsap.fromTo(line,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 0.4,
            duration: 1.5,
            delay: index * 0.3,
            repeat: -1,
            ease: 'power2.inOut'
          }
        );
      }
    });

    // Pulse center glow
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        scale: 1.3,
        opacity: 0.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);

  return (
    <section className="text-black min-h-screen flex items-center px-4 py-20 relative overflow-hidden">
      {/* Mickey Mouse Clubhouse Scene - Bottom Right */}
      <div className="hidden md:block absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Animated clouds in background */}
        <div className="absolute top-20 right-96 animate-drift">
          <svg width="100" height="50" viewBox="0 0 100 50">
            <ellipse cx="30" cy="25" rx="20" ry="15" fill="#FFF" opacity="0.7" />
            <ellipse cx="50" cy="25" rx="25" ry="18" fill="#FFF" opacity="0.7" />
            <ellipse cx="70" cy="25" rx="20" ry="15" fill="#FFF" opacity="0.7" />
          </svg>
        </div>
        <div className="absolute top-40 right-64" style={{ animation: 'drift 25s linear infinite 5s' }}>
          <svg width="80" height="40" viewBox="0 0 80 40">
            <ellipse cx="25" cy="20" rx="18" ry="12" fill="#FFF" opacity="0.6" />
            <ellipse cx="40" cy="20" rx="20" ry="15" fill="#FFF" opacity="0.6" />
            <ellipse cx="55" cy="20" rx="18" ry="12" fill="#FFF" opacity="0.6" />
          </svg>
        </div>

        {/* Rainbow in background */}
        <div className="absolute top-10 right-20 animate-rainbow-pulse">
          <svg width="200" height="100" viewBox="0 0 200 100">
            <path d="M 20,80 Q 100,20 180,80" stroke="#FF0000" strokeWidth="8" fill="none" opacity="0.6" />
            <path d="M 20,85 Q 100,25 180,85" stroke="#FFA500" strokeWidth="8" fill="none" opacity="0.6" />
            <path d="M 20,90 Q 100,30 180,90" stroke="#FFD700" strokeWidth="8" fill="none" opacity="0.6" />
            <path d="M 20,95 Q 100,35 180,95" stroke="#00FF00" strokeWidth="8" fill="none" opacity="0.6" />
            <path d="M 20,100 Q 100,40 180,100" stroke="#0000FF" strokeWidth="8" fill="none" opacity="0.6" />
          </svg>
        </div>

        {/* Clubhouse building */}
        <div className="absolute bottom-0 right-8" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <svg width="200" height="180" viewBox="0 0 200 180">
            <rect x="40" y="80" width="120" height="100" fill="#FF6B6B" />
            <polygon points="100,40 30,80 170,80" fill="#8B0000" />
            <rect x="85" y="120" width="30" height="60" fill="#8B4513" rx="15" />
            <circle cx="108" cy="150" r="3" fill="#FFD700" />
            <rect x="55" y="95" width="25" height="25" fill="#87CEEB" />
            <line x1="67.5" y1="95" x2="67.5" y2="120" stroke="#000" strokeWidth="2" />
            <line x1="55" y1="107.5" x2="80" y2="107.5" stroke="#000" strokeWidth="2" />
            <rect x="120" y="95" width="25" height="25" fill="#87CEEB" />
            <line x1="132.5" y1="95" x2="132.5" y2="120" stroke="#000" strokeWidth="2" />
            <line x1="120" y1="107.5" x2="145" y2="107.5" stroke="#000" strokeWidth="2" />
            <rect x="130" y="55" width="15" height="25" fill="#8B4513" />
          </svg>
        </div>

        {/* Smoke from chimney */}
        <div className="absolute bottom-36 right-16 animate-smoke">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8" fill="#DDD" opacity="0.6" />
          </svg>
        </div>
        <div className="absolute bottom-40 right-14" style={{ animation: 'smoke 3s ease-in-out infinite 0.5s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#CCC" opacity="0.5" />
          </svg>
        </div>

        {/* Balloons floating */}
        <div className="absolute bottom-64 right-32 animate-balloon-float">
          <svg width="60" height="100" viewBox="0 0 60 100">
            <ellipse cx="20" cy="20" rx="15" ry="20" fill="#FF69B4" />
            <line x1="20" y1="40" x2="20" y2="90" stroke="#000" strokeWidth="1" />
            <ellipse cx="40" cy="15" rx="15" ry="20" fill="#87CEEB" />
            <line x1="40" y1="35" x2="40" y2="90" stroke="#000" strokeWidth="1" />
          </svg>
        </div>

        {/* Mickey waving */}
        <div className="absolute bottom-32 right-48" style={{ animation: 'wave 2s ease-in-out infinite' }}>
          <svg width="80" height="100" viewBox="0 0 80 100">
            <circle cx="20" cy="15" r="12" fill="#000" />
            <circle cx="60" cy="15" r="12" fill="#000" />
            <circle cx="40" cy="35" r="20" fill="#000" />
            <ellipse cx="40" cy="37" rx="15" ry="17" fill="#FFD1A4" />
            <circle cx="35" cy="35" r="3" fill="#000" />
            <circle cx="45" cy="35" r="3" fill="#000" />
            <path d="M 33 42 Q 40 47 47 42" stroke="#000" strokeWidth="2" fill="none" />
            <ellipse cx="40" cy="60" rx="18" ry="15" fill="#FF0000" />
            <circle cx="40" cy="55" r="2" fill="#FFD700" />
            <circle cx="40" cy="62" r="2" fill="#FFD700" />
            <ellipse cx="20" cy="58" rx="5" ry="12" fill="#000" transform="rotate(-45 20 58)" />
            <circle cx="15" cy="50" r="6" fill="#FFF" />
          </svg>
        </div>

        {/* Donald jumping */}
        <div className="absolute bottom-36 right-80 animate-jump">
          <svg width="70" height="90" viewBox="0 0 70 90">
            <ellipse cx="35" cy="30" rx="20" ry="22" fill="#FFF" />
            <ellipse cx="35" cy="15" rx="18" ry="10" fill="#4A90E2" />
            <rect x="20" y="10" width="30" height="8" fill="#4A90E2" />
            <circle cx="30" cy="28" r="3" fill="#000" />
            <circle cx="40" cy="28" r="3" fill="#000" />
            <ellipse cx="35" cy="38" rx="8" ry="6" fill="#FFA500" />
            <ellipse cx="35" cy="55" rx="16" ry="14" fill="#4A90E2" />
            <polygon points="25,50 35,48 45,50 42,58 28,58" fill="#FFF" />
          </svg>
        </div>

        {/* Minnie dancing */}
        <div className="absolute bottom-28 right-4 animate-spin-dance">
          <svg width="70" height="90" viewBox="0 0 70 90">
            <circle cx="18" cy="12" r="10" fill="#000" />
            <circle cx="52" cy="12" r="10" fill="#000" />
            <ellipse cx="52" cy="10" rx="12" ry="8" fill="#FF69B4" />
            <circle cx="35" cy="28" r="16" fill="#000" />
            <ellipse cx="35" cy="30" rx="12" ry="14" fill="#FFD1A4" />
            <circle cx="30" cy="28" r="2" fill="#000" />
            <circle cx="40" cy="28" r="2" fill="#000" />
            <ellipse cx="35" cy="50" rx="14" ry="12" fill="#FF69B4" />
            <circle cx="30" cy="45" r="2" fill="#FFF" />
            <circle cx="40" cy="47" r="2" fill="#FFF" />
          </svg>
        </div>

        {/* Goofy doing cartwheel */}
        <div className="absolute bottom-24 right-56 animate-cartwheel">
          <svg width="60" height="80" viewBox="0 0 60 80">
            <ellipse cx="30" cy="20" rx="15" ry="18" fill="#8B5A3C" />
            <ellipse cx="20" cy="25" rx="5" ry="12" fill="#8B5A3C" transform="rotate(-20 20 25)" />
            <ellipse cx="40" cy="25" rx="5" ry="12" fill="#8B5A3C" transform="rotate(20 40 25)" />
            <ellipse cx="30" cy="10" rx="14" ry="8" fill="#6BBF59" />
            <ellipse cx="30" cy="45" rx="12" ry="15" fill="#FF8C42" />
          </svg>
        </div>

        {/* Pluto running */}
        <div className="absolute bottom-16 right-64" style={{ animation: 'run 3s linear infinite' }}>
          <svg width="90" height="60" viewBox="0 0 90 60">
            <ellipse cx="45" cy="35" rx="25" ry="15" fill="#FFA500" />
            <circle cx="30" cy="25" r="12" fill="#FFA500" />
            <ellipse cx="28" cy="22" rx="4" ry="8" fill="#8B4513" transform="rotate(-20 28 22)" />
            <ellipse cx="32" cy="22" rx="4" ry="8" fill="#8B4513" transform="rotate(20 32 22)" />
            <circle cx="27" cy="25" r="2" fill="#000" />
            <circle cx="33" cy="25" r="2" fill="#000" />
            <ellipse cx="30" cy="30" rx="3" ry="2" fill="#000" />
          </svg>
        </div>

        {/* Musical notes */}
        <div className="absolute top-48 right-16 animate-music-note">
          <svg width="40" height="60" viewBox="0 0 40 60">
            <ellipse cx="15" cy="50" rx="8" ry="6" fill="#000" />
            <rect x="22" y="20" width="3" height="30" fill="#000" />
            <ellipse cx="30" cy="45" rx="6" ry="5" fill="#000" />
            <rect x="35" y="15" width="3" height="30" fill="#000" />
          </svg>
        </div>

        {/* Floating stars and sparkles */}
        <div className="absolute top-10 right-20" style={{ animation: 'twinkle 2s ease-in-out infinite' }}>
          <svg width="30" height="30" viewBox="0 0 30 30">
            <polygon points="15,2 18,12 28,15 18,18 15,28 12,18 2,15 12,12" fill="#FFD700" />
          </svg>
        </div>
        <div className="absolute top-32 right-40" style={{ animation: 'twinkle 2s ease-in-out infinite 0.7s' }}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <polygon points="10,1 12,8 19,10 12,12 10,19 8,12 1,10 8,8" fill="#FFD700" />
          </svg>
        </div>
        <div className="absolute top-56 right-72" style={{ animation: 'twinkle 2s ease-in-out infinite 1.4s' }}>
          <svg width="25" height="25" viewBox="0 0 25 25">
            <polygon points="12,1 15,10 24,12 15,14 12,24 9,14 1,12 9,10" fill="#FF69B4" />
          </svg>
        </div>
        <div className="absolute bottom-72 right-96" style={{ animation: 'twinkle 2s ease-in-out infinite 0.3s' }}>
          <svg width="22" height="22" viewBox="0 0 22 22">
            <polygon points="11,1 13,9 21,11 13,13 11,21 9,13 1,11 9,9" fill="#87CEEB" />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="text-black font-bold text-sm tracking-widest uppercase border border-black px-4 py-2">
                US Remote
              </span>
            </div>
            <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-6 leading-none font-[family-name:var(--font-quicksand)]">
              MCL<br/>
              <span className="text-black">Interactive</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
              AI-Powered Web Solutions
            </p>
            <p className="text-lg text-gray-600 max-w-xl mb-10 leading-relaxed">
              We build intelligent digital experiences that transform businesses. 
              Custom development meets artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-[family-name:var(--font-quicksand)]"
              >
                START A PROJECT
              </a>
              <a 
                href="#services" 
                className="border border-black text-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 font-[family-name:var(--font-quicksand)]"
              >
                OUR SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
