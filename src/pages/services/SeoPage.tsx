import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  Search,
  CheckCircle2,
  MapPin,
  FileText,
  Layers,
  BarChart3,
  ArrowRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe,
} from 'lucide-react';

interface SeoPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const SeoPage: React.FC<SeoPageProps> = ({ onOpenConsultation }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Search Engine Optimization (SEO) & Local SEO',
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
      'Ethical, white-hat SEO services in Bhubaneswar, Odisha. Technical SEO, on-page optimization, keyword research, and Google Business Profile local rankings.',
  };

  const seoPillars = [
    {
      title: 'Keyword Research & Commercial Intent',
      desc: 'Identifying the exact search terms your customers type into Google when they are ready to purchase or book services.',
      icon: Search,
    },
    {
      title: 'On-Page SEO & Content Optimization',
      desc: 'Optimizing title tags, meta descriptions, semantic H1-H3 headings, internal linking, and body copy for search clarity.',
      icon: FileText,
    },
    {
      title: 'Technical SEO & Core Web Vitals',
      desc: 'Fixing crawl errors, XML sitemaps, canonical tags, mobile responsiveness, and page load speeds for search bots.',
      icon: Zap,
    },
    {
      title: 'Local SEO & Google Business Profile',
      desc: 'Optimizing your Google Maps presence to rank in the local 3-pack for searches in Bhubaneswar, Cuttack, and Odisha.',
      icon: MapPin,
    },
    {
      title: 'SEO Audit & Competitor Gap Analysis',
      desc: 'Thorough technical and content audit comparing your site against top ranking competitors in your industry.',
      icon: Layers,
    },
    {
      title: 'Transparent Performance Tracking',
      desc: 'Monitoring search impressions, average position, clicks, and organic lead inquiries via Google Search Console.',
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="SEO Freelancer in Bhubaneswar | Search Engine Optimization | DebabrataXpertAds"
        description="Rank higher on Google organically. Transparent On-Page, Technical, and Local SEO services in Bhubaneswar, Odisha by Debabrata Barik. Data-driven search optimization."
        canonicalPath="/services/seo"
        schema={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Search Engine Optimization (SEO)', url: '/services/seo' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Search className="w-3.5 h-3.5" />
              <span>Organic Search Growth & Local Visibility</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              SEO Services in Bhubaneswar, Odisha
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Build sustainable, long-term organic visibility on Google. We optimize your website architecture, content, and Google Maps listing so your business gets discovered by high-intent local buyers.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Search Engine Optimization (SEO)')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
                id="seo-hero-cta"
              >
                Discuss SEO Strategy
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

      {/* Ethical SEO Statement */}
      <section className="py-12 bg-sky-50 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-sky-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                Ethical, White-Hat SEO Methodology
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe in genuine search optimization backed by data, proper site architecture, and user-first content. We never make artificial guarantees or practice spammy tactics that risk Google penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Pillars Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              The Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive SEO Execution Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500/50 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local SEO in Bhubaneswar Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 via-blue-50/50 to-white text-slate-900 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Google Maps & Local Search
              </span>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight text-slate-900">
                Dominate Local Search & Google Maps in Bhubaneswar & Odisha
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When nearby customers search for "near me" or localized services in Bhubaneswar, Google features local businesses prominently. We optimize your categories, business descriptions, location markers, reviews workflow, and citations to maximize local discovery.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Local SEO & Google Maps')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
                >
                  Get Local SEO Audit
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-2xs space-y-3 text-xs text-slate-700">
              <div className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">
                Key Local SEO Deliverables
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Google Business Profile complete verification & category optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Geo-tagged image uploads & weekly local post scheduling</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Name, Address, Phone (NAP) citation consistency</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Review collection strategy & professional responses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Grow Your Organic Search Rankings?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Contact Debabrata Barik for a comprehensive SEO audit of your website and local search profile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Search Engine Optimization (SEO)')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Discuss SEO Strategy
            </button>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              View SEO Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
