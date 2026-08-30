import React from 'react';
import { BUSINESS_INFO } from '../data/websiteData';
import { HeroVideo } from './HeroVideo';
import { AnimatedBackground } from './AnimatedBackground';
import {
  MessageSquare,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  MapPin,
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F5F9FF] to-[#EEF6FF] text-slate-900 border-b border-sky-100"
    >
      {/* Background Subtle Motion & Soft Ambient Glows */}
      <AnimatedBackground variant="light" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Premium Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs sm:text-sm font-bold tracking-tight shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Digital Marketing Freelancer in Bhubaneswar</span>
            </div>

            {/* Main Large H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Grow Your Business <br className="hidden sm:inline" />
              With{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Smarter Digital Marketing
              </span>
            </h1>

            {/* Subheadline Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Helping businesses build a stronger online presence, generate qualified leads and grow through smarter digital marketing strategies.
            </p>

            {/* Action Buttons Grid */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              {/* Primary CTA */}
              <button
                id="hero-primary-cta"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 group cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </button>

              {/* Secondary CTA: WhatsApp */}
              <a
                id="hero-whatsapp-cta"
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all duration-200 text-sm sm:text-base shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Me</span>
              </a>

              {/* Secondary CTA: Call Now */}
              <a
                id="hero-call-cta"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all duration-200 text-sm sm:text-base shadow-xs"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Direct Value Trust Strip */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>1-on-1 Direct Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>No Lock-In Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>Odisha Local Expertise</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bright Modern SaaS Marketing Dashboard */}
          <div className="lg:col-span-6">
            <HeroVideo onOpenConsultation={onOpenConsultation} />
          </div>
        </div>
      </div>
    </section>
  );
};
