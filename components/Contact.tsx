'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xgoryyjq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div>
            <div className="text-black font-bold text-sm tracking-widest uppercase">GET IN TOUCH</div>
            <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-black mt-4 mb-8 font-[family-name:var(--font-quicksand)] relative inline-block overflow-visible">
              Let's Build<br/>
              <span className="text-black">Something Great</span>
              <span className="absolute -top-32 -right-8 md:-top-40 md:right-8" style={{ zIndex: -1, animation: 'bounce-wiggle 2s ease-in-out infinite 0.6s' }}>
                <svg width="120" height="180" viewBox="0 0 100 180" className="transform">
                  {/* Goofy full body */}
                  {/* Green hat */}
                  <ellipse cx="50" cy="15" rx="28" ry="12" fill="#6BBF59" />
                  <rect x="25" y="10" width="50" height="12" fill="#6BBF59" />
                  {/* Long floppy ears */}
                  <ellipse cx="20" cy="35" rx="8" ry="22" fill="#8B5A3C" transform="rotate(-25 20 35)" />
                  <ellipse cx="80" cy="35" rx="8" ry="22" fill="#8B5A3C" transform="rotate(25 80 35)" />
                  {/* Head */}
                  <ellipse cx="50" cy="50" rx="28" ry="32" fill="#8B5A3C" />
                  {/* Long snout */}
                  <ellipse cx="50" cy="65" rx="18" ry="20" fill="#D4A574" />
                  {/* Eyes */}
                  <ellipse cx="42" cy="45" rx="7" ry="10" fill="#FFF" />
                  <ellipse cx="58" cy="45" rx="7" ry="10" fill="#FFF" />
                  <circle cx="42" cy="47" r="4" fill="#000" />
                  <circle cx="58" cy="47" r="4" fill="#000" />
                  <circle cx="43" cy="45" r="2" fill="#FFF" />
                  <circle cx="59" cy="45" r="2" fill="#FFF" />
                  {/* Big black nose */}
                  <ellipse cx="50" cy="62" rx="8" ry="6" fill="#000" />
                  {/* Big goofy teeth */}
                  <rect x="44" y="72" width="6" height="10" fill="#FFF" />
                  <rect x="50" y="72" width="6" height="10" fill="#FFF" />
                  {/* Goofy smile */}
                  <path d="M 32 72 Q 50 85 68 72" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  {/* Orange vest */}
                  <ellipse cx="50" cy="105" rx="26" ry="22" fill="#FF8C42" />
                  {/* Black turtleneck */}
                  <rect x="38" y="82" width="24" height="12" fill="#000" />
                  {/* Arms */}
                  <ellipse cx="24" cy="105" rx="7" ry="20" fill="#8B5A3C" transform="rotate(-20 24 105)" />
                  <ellipse cx="76" cy="105" rx="7" ry="20" fill="#8B5A3C" transform="rotate(20 76 105)" />
                  {/* White gloves */}
                  <circle cx="20" cy="125" r="9" fill="#FFF" />
                  <circle cx="80" cy="125" r="9" fill="#FFF" />
                  {/* Blue pants */}
                  <ellipse cx="38" cy="140" rx="10" ry="22" fill="#4A90E2" />
                  <ellipse cx="62" cy="140" rx="10" ry="22" fill="#4A90E2" />
                  {/* Big brown shoes */}
                  <ellipse cx="35" cy="165" rx="14" ry="10" fill="#8B5A3C" />
                  <ellipse cx="65" cy="165" rx="14" ry="10" fill="#8B5A3C" />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to transform your business with technology? Let's discuss your project.
            </p>
            
            <div className="space-y-8">
              <div className="border-l border-black pl-6">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:maria@mclinteractive.com" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors font-[family-name:var(--font-quicksand)]">
                  maria@mclinteractive.com
                </a>
              </div>
              
              <div className="border-l border-black pl-6">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Phone</p>
                <a href="tel:202-630-9487" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors font-[family-name:var(--font-quicksand)]">
                  202-630-9487
                </a>
              </div>

              <div className="p-8 mt-12">
                <h4 className="font-bold text-black text-xl mb-4 uppercase font-[family-name:var(--font-quicksand)]">Why Work With Us?</h4>
                <ul className="space-y-3">
                  {['Proven track record', 'Clear communication', 'Tailored solutions', 'Ongoing partnership'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#F0EDE3] border border-black p-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-600 uppercase tracking-widest mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-black text-black focus:border-black outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-600 uppercase tracking-widest mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-black text-black focus:border-black outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-600 uppercase tracking-widest mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-black text-black focus:border-black outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-600 uppercase tracking-widest mb-2">
                Your Project *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-0 py-3 bg-transparent border-b border-black text-black focus:border-black outline-none resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full bg-transparent text-black py-4 px-8 font-bold uppercase tracking-widest overflow-hidden border border-black mt-8 font-[family-name:var(--font-quicksand)]"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-2 w-full group-hover:text-white transition-colors duration-500">
                Send Message
                <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center font-bold">Thank you! We'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center font-bold">Something went wrong. Please try again or email us directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
