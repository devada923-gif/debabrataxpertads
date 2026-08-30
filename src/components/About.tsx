import React from 'react';
import { BUSINESS_INFO } from '../data/websiteData';
import {
  Compass,
  MessageSquare,
  Wrench,
  Eye,
  RefreshCw,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  Building,
} from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const corePillars = [
    {
      title: 'Personalized Strategy',
      desc: 'Crafting tailored marketing roadmaps aligned with your specific business goals, budget, and local market conditions.',
      icon: <Compass className="w-5 h-5 text-sky-600" />,
    },
    {
      title: 'Direct Communication',
      desc: 'You work directly with me from day one. Enjoy fast responses, clear discussions, and zero account manager bureaucracy.',
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
    },
    {
      title: 'Practical Solutions',
      desc: 'Focusing on actionable marketing tactics that generate real customer inquiries, phone calls, and conversions.',
      icon: <Wrench className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Transparent Approach',
      desc: 'Complete clarity on ad spends, campaign setups, and deliverables. You maintain full ownership of your accounts.',
      icon: <Eye className="w-5 h-5 text-cyan-600" />,
    },
    {
      title: 'Continuous Optimization',
      desc: 'Regularly reviewing campaign metrics, refining targeting, eliminating wasted spend, and scaling what works.',
      icon: <RefreshCw className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Freelancer Identity Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md relative overflow-hidden">
              {/* Subtle top decorative ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600" />

              {/* Profile Header */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-extrabold text-2xl shadow-sm flex-shrink-0">
                  DB
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-100 mb-1">
                    <UserCheck className="w-3 h-3" />
                    <span>Independent Specialist</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                    {BUSINESS_INFO.owner}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600">
                    Founder, DebabrataXpertAds
                  </p>
                </div>
              </div>

              {/* Location & Contact pill */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Based in Sampur, Bhubaneswar, Odisha, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Serving Local Businesses, Startups & Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Dedicated 1-on-1 Freelancer Partnership</span>
                </div>
              </div>

              {/* Value Quote Box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "My mission is simple: eliminate marketing confusion and build clear, high-performing digital channels that bring genuine business inquiries to your door."
              </div>

              {/* Work With Me Button */}
              <div className="mt-6">
                <button
                  id="about-work-with-me-btn"
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 shadow-sm hover:shadow transition-all"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 5 Core Pillars */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                About DebabrataXpertAds
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Digital Marketing Focused on Your Business Growth
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-800">
                Hi, I'm Debabrata Barik, an independent freelancer providing digital marketing and online business growth solutions from Bhubaneswar, Odisha.
              </p>
              <p>
                My focus is helping businesses improve their visibility, generate qualified leads, build a strong online presence, and grow through practical, results-oriented digital strategies. Rather than treating marketing as generic posts or vanity metrics, I align every campaign directly with business objectives: phone inquiries, WhatsApp chats, store visits, and revenue.
              </p>
            </div>

            {/* 5 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-colors ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-sky-50 border border-sky-100">
                      {pillar.icon}
                    </div>
                    <h3 className="font-bold text-sm text-slate-900">{pillar.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-1">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Local Guarantee */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-50/80 p-3 rounded-xl border border-sky-200">
              <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span>
                Available for local meetings in Bhubaneswar, Cuttack & online across Odisha and India.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
