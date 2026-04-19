'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function Projects() {
  const projectsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const projects: Project[] = [
    {
      title: 'Stock Agent',
      description: 'AI-powered stock analysis dashboard featuring LangGraph multi-agent orchestration with 5 specialized agents. Implements batch processing and model pre-caching for performance optimization, achieving sub-3-second analysis.',
      tech: ['LangGraph', 'FinBERT', 'GPT-4o', 'ChromaDB', 'Polygon.io'],
      link: 'https://stock-agent.mariaclima.ai/'
    },
    {
      title: 'US Constitution Assistant',
      description: 'AI-powered conversational chatbot that answers questions about the US Constitution using RAG. Features PDF document processing with automatic text chunking, OpenAI embeddings, and MemoryVectorStore for similarity-based retrieval with conversation memory.',
      tech: ['RAG', 'OpenAI Embeddings', 'MemoryVectorStore', 'PDF Processing'],
      link: 'https://constitution-assistant.mariaclima.ai/'
    },
    {
      title: 'Research Outline Generator',
      description: 'Multi-agent AI research system that autonomously investigates topics and generates comprehensive outlines. Features LangGraph orchestration of specialized agents for web discovery, content extraction, and synthesis.',
      tech: ['LangGraph', 'Tavily API', 'Multi-Agent', 'RAG'],
      link: 'https://research-assistant.mariaclima.ai/'
    },
    {
      title: 'Catalyst AI',
      description: 'AI-powered business intelligence assistant leveraging RAG to analyze business data and generate actionable insights. Features interactive visualizations and LangSmith-powered model evaluation.',
      tech: ['RAG', 'FAISS', 'LangSmith', 'Data Visualization'],
      link: 'https://business-assistant.mariaclima.ai/'
    },
    {
      title: 'Image Generator',
      description: 'AI-powered image generation tool using OpenAI\'s GPT Image 1 to create custom posters, banners, and visual content from text prompts. Features intuitive interface for prompt engineering and real-time image generation with high-quality output.',
      tech: ['OpenAI GPT Image 1', 'Image Generation', 'Prompt Engineering', 'Responsive Design'],
      link: 'https://images.mariaclima.ai/'
    },
    {
      title: 'NewsGenie',
      description: 'AI-powered news assistant combining real-time updates with conversational AI. Features smart query classification and LangGraph workflow orchestration for intelligent routing.',
      tech: ['LangGraph', 'GNews API', 'Tavily', 'NLP'],
      link: 'https://news-genie.mariaclima.ai/'
    }
  ];

  useEffect(() => {
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

      // Animate button
      if (buttonRef.current) {
        gsap.set(buttonRef.current, { opacity: 0, y: 30 });
        
        ScrollTrigger.create({
          trigger: buttonRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          onEnter: () => {
            gsap.to(buttonRef.current, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out'
            });
          },
          onLeave: () => {
            gsap.to(buttonRef.current, { opacity: 0, y: 30, duration: 0.8 });
          },
          onEnterBack: () => {
            gsap.to(buttonRef.current, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out'
            });
          },
          onLeaveBack: () => {
            gsap.to(buttonRef.current, { opacity: 0, y: 30, duration: 0.8 });
          }
        });
      }

      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(project,
            { opacity: 0, y: -120 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              delay: (index % 3) * 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: project,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="text-black font-bold text-sm tracking-widest uppercase">AI PORTFOLIO</div>
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-black mt-4 mb-6 font-[family-name:var(--font-quicksand)] relative inline-block overflow-visible">
              Featured Projects
              <span className="absolute -top-32 -right-8 md:-top-40 md:right-8" style={{ zIndex: -1, animation: 'bounce-wiggle 2s ease-in-out infinite 0.3s' }}>
                <svg width="120" height="180" viewBox="0 0 100 180" className="transform">
                  {/* Donald Duck full body */}
                  {/* Head */}
                  <ellipse cx="50" cy="45" rx="32" ry="35" fill="#FFF" />
                  {/* Blue sailor hat */}
                  <ellipse cx="50" cy="18" rx="30" ry="15" fill="#4A90E2" />
                  <rect x="20" y="10" width="60" height="15" fill="#4A90E2" />
                  <rect x="25" y="22" width="50" height="4" fill="#000" />
                  {/* Eyes */}
                  <ellipse cx="40" cy="40" rx="8" ry="10" fill="#FFF" />
                  <ellipse cx="60" cy="40" rx="8" ry="10" fill="#FFF" />
                  <circle cx="40" cy="42" r="4" fill="#000" />
                  <circle cx="60" cy="42" r="4" fill="#000" />
                  <circle cx="41" cy="40" r="2" fill="#FFF" />
                  <circle cx="61" cy="40" r="2" fill="#FFF" />
                  {/* Orange beak */}
                  <ellipse cx="50" cy="58" rx="15" ry="12" fill="#FFA500" />
                  <line x1="35" y1="58" x2="65" y2="58" stroke="#000" strokeWidth="2" />
                  <path d="M 40 58 Q 50 65 60 58" stroke="#000" strokeWidth="2" fill="none" />
                  {/* Neck */}
                  <rect x="42" y="72" width="16" height="8" fill="#FFF" />
                  {/* Blue sailor shirt */}
                  <ellipse cx="50" cy="100" rx="28" ry="22" fill="#4A90E2" />
                  {/* Sailor collar */}
                  <polygon points="30,85 50,75 70,85 65,95 35,95" fill="#FFF" />
                  <line x1="50" y1="75" x2="50" y2="95" stroke="#4A90E2" strokeWidth="2" />
                  {/* Red bow tie */}
                  <polygon points="35,80 45,85 35,90" fill="#FF0000" />
                  <polygon points="65,80 55,85 65,90" fill="#FF0000" />
                  <circle cx="50" cy="85" r="4" fill="#FF0000" />
                  {/* Arms */}
                  <ellipse cx="22" cy="100" rx="7" ry="18" fill="#FFF" transform="rotate(-25 22 100)" />
                  <ellipse cx="78" cy="100" rx="7" ry="18" fill="#FFF" transform="rotate(25 78 100)" />
                  {/* Legs */}
                  <ellipse cx="38" cy="135" rx="9" ry="20" fill="#FFF" />
                  <ellipse cx="62" cy="135" rx="9" ry="20" fill="#FFF" />
                  {/* Orange webbed feet */}
                  <ellipse cx="35" cy="158" rx="14" ry="10" fill="#FFA500" />
                  <ellipse cx="65" cy="158" rx="14" ry="10" fill="#FFA500" />
                  <line x1="28" y1="158" x2="42" y2="158" stroke="#000" strokeWidth="1.5" />
                  <line x1="58" y1="158" x2="72" y2="158" stroke="#000" strokeWidth="1.5" />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Cutting-edge AI solutions showcasing expertise in machine learning, natural language processing, and intelligent automation
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => { projectsRef.current[index] = el; }}
              className="group bg-[#FAF7F0] border border-black p-10 hover:border-black hover:bg-[#F0EDE3] relative overflow-hidden"
              style={{ opacity: 1 }}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-black text-xl group-hover:text-black transition-colors duration-300 font-[family-name:var(--font-quicksand)]">
                    {project.title}
                  </h3>
                  <svg className="w-5 h-5 text-black opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-bold text-black bg-gray-200 px-2 py-1 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            ref={buttonRef}
            href="https://www.mariaclima.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-block bg-black text-white px-8 py-4 font-bold uppercase tracking-widest overflow-hidden font-[family-name:var(--font-quicksand)]"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              View Full AI Portfolio
              <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="absolute inset-0 border-2 border-black transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
