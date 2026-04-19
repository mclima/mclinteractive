'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export default function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const services: Service[] = [
    {
      number: '01',
      icon: (
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2">
          <polygon points="12,2 2,7 2,17 12,22 22,17 22,7"/>
          <polyline points="2,7 12,12 22,7"/>
          <line x1="12" y1="22" x2="12" y2="12"/>
          <path d="M7 9.5L12 12L17 9.5"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      title: 'Custom Web Applications',
      description: 'Professional websites and web applications that grow with your business',
      benefits: [
        'Responsive design',
        'Fast & secure',
        'User-friendly',
        'System integration',
        'Ongoing support'
      ]
    },
    {
      number: '02',
      icon: (
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2 L12 12 L20 16"/>
          <circle cx="12" cy="12" r="6"/>
          <path d="M12 6 L12 12 L16 14"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <line x1="12" y1="2" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="22" y2="12"/>
        </svg>
      ),
      title: 'Data & AI Analytics',
      description: 'Understand your customers and make smarter decisions with AI-powered data analysis',
      benefits: [
        'Sentiment analysis for feedback',
        'Predictive analytics & forecasting',
        'Custom dashboards & visualizations',
        'Trend detection & reporting',
        'Data-driven recommendations'
      ]
    },
    {
      number: '03',
      icon: (
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1" fill="currentColor"/>
          <circle cx="12" cy="10" r="1" fill="currentColor"/>
          <circle cx="15" cy="10" r="1" fill="currentColor"/>
          <path d="M9 14h6"/>
          <rect x="6" y="6" width="12" height="10" rx="1" opacity="0.1" fill="currentColor"/>
        </svg>
      ),
      title: 'AI Applications & Chatbots',
      description: 'Build intelligent chatbots and AI tools that work 24/7 for your business',
      benefits: [
        'Smart chatbots for customer support',
        'Document Q&A systems',
        'Industry-specific AI assistants',
        'Automated content generation',
        'Intelligent search & recommendations'
      ]
    }
  ];

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Animate title
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play reverse play reverse'
              }
            }
          );
        }
      });

      numbersRef.current.forEach((number, index) => {
        if (number) {
          gsap.set(number, { scale: 0, rotation: -45 });
          
          ScrollTrigger.create({
            trigger: number,
            start: 'top 85%',
            end: 'bottom 15%',
            onEnter: () => {
              gsap.to(number, {
                scale: 1,
                rotation: 0,
                duration: 1.2,
                delay: index * 0.2 + 0.3,
                ease: 'elastic.out(1, 0.5)'
              });
            },
            onLeave: () => {
              gsap.to(number, { scale: 0, rotation: -45, duration: 0.5 });
            },
            onEnterBack: () => {
              gsap.to(number, {
                scale: 1,
                rotation: 0,
                duration: 1.2,
                delay: index * 0.2 + 0.3,
                ease: 'elastic.out(1, 0.5)'
              });
            },
            onLeaveBack: () => {
              gsap.to(number, { scale: 0, rotation: -45, duration: 0.5 });
            }
          });
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="services" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div>
            <div className="text-black font-bold text-sm tracking-widest uppercase">WHAT WE DO</div>
            <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-black mt-4 mb-8 font-[family-name:var(--font-quicksand)] relative inline-block overflow-visible">
              Our Services
              <span className="absolute -top-32 -right-8 md:-top-40 md:right-8" style={{ zIndex: -1, animation: 'bounce-wiggle 2s ease-in-out infinite' }}>
              <svg width="120" height="180" viewBox="0 0 100 180" className="transform">
                {/* Mickey Mouse full body */}
                {/* Left Ear */}
                <circle cx="25" cy="25" r="20" fill="#000" />
                {/* Right Ear */}
                <circle cx="75" cy="25" r="20" fill="#000" />
                {/* Head */}
                <circle cx="50" cy="60" r="35" fill="#000" />
                {/* Face */}
                <ellipse cx="50" cy="65" rx="28" ry="30" fill="#FFD1A4" />
                {/* Eyes */}
                <ellipse cx="40" cy="60" rx="8" ry="12" fill="#FFF" />
                <ellipse cx="60" cy="60" rx="8" ry="12" fill="#FFF" />
                <circle cx="40" cy="62" r="4" fill="#000" />
                <circle cx="60" cy="62" r="4" fill="#000" />
                <circle cx="41" cy="60" r="2" fill="#FFF" />
                <circle cx="61" cy="60" r="2" fill="#FFF" />
                {/* Nose */}
                <ellipse cx="50" cy="72" rx="6" ry="5" fill="#000" />
                {/* Smile */}
                <path d="M 35 75 Q 50 85 65 75" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Tongue */}
                <ellipse cx="50" cy="80" rx="8" ry="4" fill="#FF6B9D" />
                {/* Body - Red shirt */}
                <ellipse cx="50" cy="115" rx="30" ry="25" fill="#FF0000" />
                {/* Yellow buttons */}
                <circle cx="50" cy="105" r="4" fill="#FFD700" />
                <circle cx="50" cy="120" r="4" fill="#FFD700" />
                {/* Arms */}
                <ellipse cx="20" cy="110" rx="8" ry="20" fill="#000" transform="rotate(-30 20 110)" />
                <ellipse cx="80" cy="110" rx="8" ry="20" fill="#000" transform="rotate(30 80 110)" />
                {/* White gloves */}
                <circle cx="15" cy="125" r="10" fill="#FFF" />
                <circle cx="85" cy="125" r="10" fill="#FFF" />
                {/* Legs - Black pants */}
                <ellipse cx="38" cy="150" rx="10" ry="22" fill="#000" />
                <ellipse cx="62" cy="150" rx="10" ry="22" fill="#000" />
                {/* Yellow shoes */}
                <ellipse cx="35" cy="172" rx="12" ry="8" fill="#FFD700" />
                <ellipse cx="65" cy="172" rx="12" ry="8" fill="#FFD700" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Technology solutions that drive real business results
          </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-[#FAF7F0] text-black p-10 hover:bg-[#F0EDE3] border-b border-black relative overflow-hidden"
              style={{ opacity: 1 }}
            >
              <div 
                ref={(el) => { numbersRef.current[index] = el; }}
                className="absolute top-2 right-4 text-black pointer-events-none select-none"
              >
                <div className="text-8xl font-bold" style={{ opacity: 0.10 }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-black group-hover:text-black font-bold text-sm tracking-widest uppercase mb-4 block">
                  
                </span>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-black transition-colors duration-500 min-h-[5rem] font-[family-name:var(--font-quicksand)]">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 mb-6 transition-colors duration-500">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black group-hover:bg-black transition-colors duration-500"></div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
