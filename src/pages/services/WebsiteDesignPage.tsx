import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  Globe,
  CheckCircle2,
  Zap,
  Smartphone,
  Search,
  TrendingUp,
  Layout,
  ShoppingBag,
  ArrowRight,
  Phone,
  MessageSquare,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';

interface WebsiteDesignPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const WebsiteDesignPage: React.FC<WebsiteDesignPageProps> = ({ onOpenConsultation }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design & Development',
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
    areaServed: 'Bhubaneswar, Odisha, India',
    description:
      'Fast, mobile-responsive, conversion-focused business websites and landing pages designed by DebabrataXpertAds in Bhubaneswar.',
  };

  const features = [
    {
      title: 'Corporate & Business Websites',
      desc: 'Clean, modern multi-page company websites that establish trust and clearly convey your service offerings.',
      icon: Layout,
    },
    {
      title: 'High-Converting Landing Pages',
      desc: 'Single-minded lead capture and sales landing pages tailored specifically for Google Ads & Meta ad campaigns.',
      icon: TrendingUp,
    },
    {
      title: 'E-commerce & Store Architecture',
      desc: 'Product catalogs, simple checkout flows, and catalog management for retail brands and shops in Odisha.',
      icon: ShoppingBag,
    },
    {
      title: '100% Mobile-First Responsive Design',
      desc: 'Seamless user experience across smartphones, tablets, laptops, and ultra-wide desktops.',
      icon: Smartphone,
    },
    {
      title: 'SEO-Friendly Technical Structure',
      desc: 'Semantic HTML5, clean heading hierarchy, schema markup, Open Graph tags, and crawlable URL architecture.',
      icon: Search,
    },
    {
      title: 'Speed & Core Web Vitals Optimization',
      desc: 'Lightweight assets, optimized code, and rapid loading times so visitors never bounce due to lag.',
      icon: Zap,
    },
  ];

  const websiteFaqs = [
    {
      q: 'How long does it take to design and develop a business website?',
      a: 'A standard business website or landing page typically takes 7 to 14 days depending on page count, content readiness, and specific feature integrations.',
    },
    {
      q: 'Will my website work well on mobile phones?',
      a: 'Yes, absolutely. Over 80% of local traffic comes from smartphones, so every website I build is crafted mobile-first with touch-friendly navigation and rapid tap-to-call / WhatsApp triggers.',
    },
    {
      q: 'Do you include SEO in website development?',
      a: 'Yes. All websites include foundational on-page SEO, semantic headings, meta descriptions, image alt tags, XML sitemap generation, and Google Search Console readiness.',
    },
    {
      q: 'Can customers contact me directly via WhatsApp from the site?',
      a: 'Yes. I integrate custom 1-click WhatsApp buttons with pre-filled inquiry messages so prospective buyers can connect with you instantly.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Website Design Freelancer in Bhubaneswar | DebabrataXpertAds"
        description="Responsive, modern, and conversion-focused business websites and landing pages in Bhubaneswar, Odisha. Fast speeds, SEO-ready structure, and direct WhatsApp integrations."
        canonicalPath="/services/website-design"
        schema={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Website Design & Development', url: '/services/website-design' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Conversion-Focused Web Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Website Design & Development in Bhubaneswar
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Transform your digital storefront into a customer-generating asset. Fast, secure, mobile-friendly websites designed for maximum conversions and local search visibility.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Website Design & Development')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
                id="web-hero-cta"
              >
                Get a Website Consultation
              </button>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* The Problem */}
            <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-red-600">
                The Common Problem
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Why Most Business Websites Fail to Generate Inquiries
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Slow loading speeds that cause over 50% of mobile visitors to bounce before the page even renders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Confusing navigation, cluttered layouts, and hidden contact numbers that frustrate potential customers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Zero on-page SEO structure, making it invisible when customers search on Google in Bhubaneswar.</span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                The DebabrataXpertAds Solution
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Websites Engineered for Speed, Clarity & Action
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sub-second page speeds with modern, clean code and optimized media.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Prominent 1-click WhatsApp and Call triggers placed strategically on every screen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Semantic HTML5, local schema tags, and keyword architecture built-in from day one.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Website Features Grid */}
      <section className="py-16 sm:py-24 bg-white" id="web-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Website Features & Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-400/60 transition-colors space-y-3"
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

      {/* FAQ Accordion */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Website Design FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {websiteFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Build a High-Performing Website for Your Business?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Discuss your design preferences, required pages, and launch timeline directly with Debabrata Barik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Website Design & Development')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Get a Website Consultation
            </button>
            <Link
              to="/portfolio/websites"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              View Website Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
