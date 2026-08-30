import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search, PhoneCall, HelpCircle, MessageSquare } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/websiteData';

interface NotFoundPageProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <SEOHead
        title="404 Page Not Found | DebabrataXpertAds"
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        canonicalPath="/404"
      />

      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-blue-50 border border-blue-200 text-blue-600 mb-8 shadow-md">
          <span className="text-4xl font-black tracking-tight">404</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you are looking for. It might have been moved or does not exist.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200 shadow-2xs transition-all"
          >
            <Search className="w-4 h-4 text-blue-600" />
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Helpful navigation cards */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs text-left">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Popular Pages & Quick Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/portfolio"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-colors group text-sm font-medium text-slate-700"
            >
              <span>View Portfolio & Work</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/pricing"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-colors group text-sm font-medium text-slate-700"
            >
              <span>Check Transparent Pricing</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/faq"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-colors group text-sm font-medium text-slate-700"
            >
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Frequently Asked Questions
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-colors group text-sm font-medium text-slate-700"
            >
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                Contact Debabrata
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span>Direct WhatsApp: {BUSINESS_INFO.phoneFormatted}</span>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
