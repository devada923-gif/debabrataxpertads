import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  Palette,
  CheckCircle2,
  FileText,
  Image,
  Award,
  Layers,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
} from 'lucide-react';

interface BrandingPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const BrandingPage: React.FC<BrandingPageProps> = ({ onOpenConsultation }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Branding & Creative Design',
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
      'Professional brand identity, logo design, marketing collateral, social media banners, and graphic design in Bhubaneswar, Odisha by DebabrataXpertAds.',
  };

  const brandingPillars = [
    {
      title: 'Logo Design & Visual Identity',
      desc: 'Memorable, modern logos with balanced typography, scalable vector assets, and clean iconography.',
      icon: Palette,
    },
    {
      title: 'Paid Ad Creatives & Banners',
      desc: 'High-converting display ad banners and Meta ad creatives built with eye-catching hooks to stop the scroll.',
      icon: Image,
    },
    {
      title: 'Social Media Templates',
      desc: 'Consistent Instagram carousel and post templates adhering strictly to your brand colors and font guidelines.',
      icon: Sparkles,
    },
    {
      title: 'Brand Style Guidelines',
      desc: 'Color palettes, font pairings, spacing rules, and usage standards to maintain visual consistency everywhere.',
      icon: Layers,
    },
    {
      title: 'Business Cards & Stationery',
      desc: 'Print-ready vector business cards, letterheads, and digital invoice templates.',
      icon: Award,
    },
    {
      title: 'Brochures & Marketing Flyers',
      desc: 'Digital PDF and print-ready product brochures, price sheets, and promotional flyers for client presentations.',
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Branding & Creative Design in Bhubaneswar | DebabrataXpertAds"
        description="Build a standout visual identity. Professional logo design, social media creatives, ad banners, and marketing brochures in Bhubaneswar, Odisha by DebabrataXpertAds."
        canonicalPath="/services/branding"
        schema={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Branding & Creative Design', url: '/services/branding' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Palette className="w-3.5 h-3.5" />
              <span>Visual Identity & Creative Design</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Branding & Creative Design in Bhubaneswar
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Elevate your business above the competition. We craft distinctive visual identities, logos, marketing banners, and social creatives that project credibility and command attention.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Branding & Creative Design')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
              >
                Discuss Branding & Design
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
              Creative Deliverables
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What We Design For Your Brand
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingPillars.map((pillar, idx) => {
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

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Refresh Your Brand's Visual Identity?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Discuss your design requirements, logo concepts, and ad creative needs directly with Debabrata Barik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Branding & Creative Design')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Discuss Branding & Design
            </button>
            <Link
              to="/portfolio/branding"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              View Branding Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
