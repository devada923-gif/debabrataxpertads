import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  Sparkles,
  CheckCircle2,
  Target,
  Zap,
  Filter,
  BarChart2,
  ArrowRight,
  Phone,
  MessageSquare,
  Search,
} from 'lucide-react';

interface GoogleAdsPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const GoogleAdsPage: React.FC<GoogleAdsPageProps> = ({ onOpenConsultation }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Google Ads & PPC Campaign Management',
    provider: {
      '@type': 'ProfessionalService',
      name: 'DebabrataXpertAds',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No. 588/6040, Annapurna Niwas, Laxmi Mandap, Sampur High School, Near SUM Hospital Road, Sampur',
        addressLocality: 'Bhubaneswar',
        postalCode: '751003',
        addressRegion: 'Odisha',
        addressCountry: 'India',
      },
    },
    description:
      'High-converting Google Search Ads, Display Ads, and Lead Generation PPC management in Bhubaneswar, Odisha by Debabrata Barik.',
  };

  const adFeatures = [
    {
      title: 'Google Search Campaigns',
      desc: 'Show your business at the very top of Google when prospects search with commercial intent.',
      icon: Search,
    },
    {
      title: 'Negative Keyword Filtering',
      desc: 'Aggressively filter out irrelevant, non-converting search terms to prevent wasted ad budget.',
      icon: Filter,
    },
    {
      title: 'Display & Banner Retargeting',
      desc: 'Re-engage previous website visitors across Google Display Network to keep your brand top-of-mind.',
      icon: Target,
    },
    {
      title: 'Conversion Tracking Setup',
      desc: 'End-to-end Google Tag Manager, Google Analytics 4, and conversion action tracking for calls & forms.',
      icon: Zap,
    },
    {
      title: 'Landing Page Optimization',
      desc: 'Align ad messaging with landing page headlines to improve Quality Score and lower Cost-Per-Click (CPC).',
      icon: CheckCircle2,
    },
    {
      title: 'Bid & Budget Optimization',
      desc: 'Smart bidding strategies calibrated to maximize high-intent customer inquiries within your budget.',
      icon: BarChart2,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Google Ads Freelancer in Bhubaneswar | PPC Management | DebabrataXpertAds"
        description="Targeted Google Search & Display Ads management in Bhubaneswar, Odisha. High Quality Scores, negative keyword filtering, and qualified lead generation by Debabrata Barik."
        canonicalPath="/services/google-ads"
        schema={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Google Ads Management', url: '/services/google-ads' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Paid Search & PPC Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Google Ads Management in Bhubaneswar
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Capture in-market prospects at the exact moment they search for your products and services. Precision keyword matching, compelling ad copy, and zero wasted ad spend.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Google Ads Management')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
                id="google-ads-hero-cta"
              >
                Discuss Google Ads
              </button>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              PPC Strategy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Optimize Your Google Ads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500/50 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Generate High-Intent Inquiries with Google Ads?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Discuss your target keywords, daily ad budget, and expected return on investment directly with Debabrata Barik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Google Ads Management')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Discuss Google Ads
            </button>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              View Google Ads Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
