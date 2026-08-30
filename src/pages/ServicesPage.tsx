import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/websiteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Globe,
  TrendingUp,
  Search,
  Sparkles,
  Megaphone,
  Share2,
  UserCheck,
  Palette,
  MapPin,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Layers,
  Phone,
  MessageSquare,
} from 'lucide-react';

interface ServicesPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const servicesList = [
    {
      id: 'website-design',
      title: 'Website Design & Development',
      path: '/services/website-design',
      badge: 'Core Foundation',
      shortDesc:
        'Responsive, fast-loading, and conversion-optimized websites and landing pages built to turn visitors into paying customers.',
      benefits: [
        'Mobile-first responsive UX/UI',
        'Lightning-fast page load speeds',
        'Direct WhatsApp & click-to-call links',
        'Search engine-friendly architecture',
      ],
      icon: Globe,
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Strategy',
      path: '/services/digital-marketing',
      badge: 'Full Funnel',
      shortDesc:
        'Holistic multi-channel marketing campaigns combining SEO, paid advertising, and conversion funnels to drive revenue.',
      benefits: [
        'Custom marketing roadmaps',
        'Multi-channel synergy (Google + Meta + SEO)',
        'Budget optimization & waste reduction',
        'Bi-weekly & monthly performance audits',
      ],
      icon: TrendingUp,
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      path: '/services/seo',
      badge: 'Organic Authority',
      shortDesc:
        'Comprehensive On-Page, Technical, and Local SEO strategies to rank your business for high-intent search queries.',
      benefits: [
        'Keyword intent research & mapping',
        'Technical crawlability & Core Web Vitals',
        'Local SEO & Google Business Profile setup',
        'Content structure & internal linking',
      ],
      icon: Search,
    },
    {
      id: 'google-ads',
      title: 'Google Ads (Search & Display PPC)',
      path: '/services/google-ads',
      badge: 'High Intent',
      shortDesc:
        'Targeted Google Search, Display, and Remarketing ad campaigns engineered to capture active in-market buyers.',
      benefits: [
        'Phrase & exact keyword match structures',
        'Negative keyword lists to stop wasted spend',
        'High-converting ad copies & extensions',
        'End-to-end conversion pixel tracking',
      ],
      icon: Sparkles,
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads (Facebook & Instagram)',
      path: '/services/meta-ads',
      badge: 'Targeted Reach',
      shortDesc:
        'Precision audience targeting, mobile ad creatives, and instant lead form funnels to acquire customers across Meta platforms.',
      benefits: [
        'Local demographic & interest targeting',
        'High-converting Instant Lead Forms',
        'Meta Pixel & Conversion API setup',
        'A/B split testing of hooks & visuals',
      ],
      icon: Megaphone,
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      path: '/services/social-media-marketing',
      badge: 'Brand Credibility',
      shortDesc:
        'Structured social media presence management, monthly content calendar, and branded creatives to maintain top-of-mind recall.',
      benefits: [
        'Monthly content & carousel planning',
        'Consistent brand visual styling',
        'Community engagement & DM workflows',
        'Audience growth & profile optimization',
      ],
      icon: Share2,
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation Funnels',
      path: '/services/lead-generation',
      badge: 'Conversion Focused',
      shortDesc:
        'Systematic lead acquisition funnels utilizing dedicated landing pages, WhatsApp click-to-chat, and qualified lead forms.',
      benefits: [
        'High-converting landing page frameworks',
        'Direct 1-click WhatsApp lead routing',
        'Form qualification & spam protection',
        'Drop-off minimization & funnel testing',
      ],
      icon: UserCheck,
    },
    {
      id: 'branding',
      title: 'Branding & Creative Design',
      path: '/services/branding',
      badge: 'Visual Identity',
      shortDesc:
        'Cohesive logos, brand identity guidelines, ad creative banners, and digital marketing graphics that build trust.',
      benefits: [
        'High-impact paid ad creative banners',
        'Social media post templates',
        'Digital brochures, flyers & catalogues',
        'Color palette & typography systems',
      ],
      icon: Palette,
    },
    {
      id: 'local-seo',
      title: 'Local SEO & Google Business Profile',
      path: '/services/seo',
      badge: 'Local Discovery',
      shortDesc:
        'Dominate Google Maps 3-Pack and nearby search results in Bhubaneswar, Cuttack, and Odisha to drive local calls and visits.',
      benefits: [
        'Complete Google Business Profile optimization',
        'Local citation consistency roadmap',
        'Review generation & response strategies',
        'Geo-tagged photo & post management',
      ],
      icon: MapPin,
    },
    {
      id: 'ecommerce-marketing',
      title: 'E-commerce & Store Marketing',
      path: '/services/website-design',
      badge: 'Retail Growth',
      shortDesc:
        'Boost online store discoverability, product page conversions, and cart completion rates for your e-commerce products.',
      benefits: [
        'Product title & description optimization',
        'Catalog structuring & category navigation',
        'Shopping ads & retargeting strategies',
        'Checkout friction reduction tips',
      ],
      icon: ShoppingBag,
    },
  ];

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing & Business Growth Services',
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
    areaServed: 'Odisha, India',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services Catalog',
      itemListElement: servicesList.map((item, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.title,
          description: item.shortDesc,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Digital Marketing & Business Growth Services in Bhubaneswar | DebabrataXpertAds"
        description="Explore comprehensive digital marketing services: Website Design, SEO, Google Ads, Meta Ads, Social Media, Lead Generation, and Branding by DebabrataXpertAds in Bhubaneswar."
        canonicalPath="/services"
        schema={servicesSchema}
      />

      <Breadcrumbs items={[{ name: 'Services', url: '/services' }]} />

      {/* Hero Header */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Marketing Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Digital Marketing & Business Growth Services
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Every service is engineered around one central principle: creating measurable value for your business through increased brand discovery, qualified customer inquiries, and sustainable conversion funnels.
            </p>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Select A Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Dedicated Service Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any service card below to view its complete process, deliverables, features, and tailored roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  id={`card-${service.id}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                        Key Deliverables:
                      </div>
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={service.path}
                      className="text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                      id={`btn-view-${service.id}`}
                    >
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenConsultation(service.title)}
                      className="text-xs font-semibold text-sky-600 hover:text-sky-700"
                    >
                      Consult →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Not Sure Which Service Your Business Needs?
          </h2>
          <p className="text-xs sm:text-base text-sky-100 max-w-xl mx-auto">
            Book a free 1-on-1 discovery consultation with Debabrata Barik. We'll audit your current digital footprint and suggest the most cost-effective path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Get Free Consultation
            </button>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              View Pricing Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
