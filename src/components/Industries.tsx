import React, { useState, useEffect, useRef } from 'react';
import industriesBannerPng from '../assets/images/industries-banner.png';
import industriesBannerWebp from '../assets/images/industries-banner.webp';

interface IndustriesProps {
  onOpenConsultation?: (industryName?: string) => void;
}

export const Industries: React.FC<IndustriesProps> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation style: opacity: 0 -> 1, translateY(20px) -> translateY(0), 600ms duration
  const animationClasses = prefersReducedMotion
    ? 'opacity-100 translate-y-0'
    : isVisible
    ? 'opacity-100 translate-y-0 transition-all duration-[600ms] ease-out'
    : 'opacity-0 translate-y-[20px] transition-all duration-[600ms] ease-out';

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-sky-50/20 to-slate-50/40 border-b border-slate-200/80"
      id="industries-section"
    >
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase"
            id="industries-heading"
          >
            Digital Solutions for <br className="hidden sm:inline" />
            <span className="text-blue-600">Every Business</span>
          </h2>

          <p
            className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
            id="industries-subtitle"
          >
            Digital marketing solutions tailored for businesses across diverse industries.
          </p>
        </div>

        {/* Main Visual Image Container */}
        <div
          ref={containerRef}
          className={`w-full max-w-[1400px] mx-auto ${animationClasses}`}
          id="industries-illustration-container"
        >
          <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white border border-sky-100/90 shadow-sm shadow-sky-950/5 overflow-hidden p-2 sm:p-5 lg:p-6">
            {/* Scrollable Container on Small Screens to preserve readability, fluid responsive on tablet/desktop */}
            <div className="w-full overflow-x-auto sm:overflow-visible scrollbar-none">
              <div className="min-w-[680px] sm:min-w-0 w-full flex items-center justify-center">
                <picture className="w-full block">
                  <source srcSet={industriesBannerWebp} type="image/webp" />
                  <source srcSet={industriesBannerPng} type="image/png" />
                  <img
                    src={industriesBannerPng}
                    alt="Digital marketing solutions across all industries: Industry, Financial, Healthcare, Security, Education, E-Commerce, Real Estate, Hospitality, Entertainment, Travel, and Beauty"
                    width={2400}
                    height={1020}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain block mx-auto rounded-xl select-none"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                    id="industries-banner-image"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

