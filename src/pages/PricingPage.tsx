import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Tag,
  Check,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Globe,
  TrendingUp,
  Video,
  Star,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';

interface PricingPageProps {
  onOpenConsultation: (service?: string) => void;
}

interface PricingCardData {
  tier: 'BASIC' | 'STANDARD' | 'PREMIUM';
  title: string;
  price: string;
  period: string;
  badge?: string;
  isPopular?: boolean;
  isPremium?: boolean;
  features: string[];
}

interface PricingCategory {
  id: string;
  categoryTitle: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  cards: PricingCardData[];
}

const PRICING_SECTIONS: PricingCategory[] = [
  {
    id: 'website-design',
    categoryTitle: '1. WEBSITE DESIGN & DEVELOPMENT',
    subtitle: 'High-performance, modern, and conversion-optimized websites built for high growth.',
    icon: Globe,
    cards: [
      {
        tier: 'BASIC',
        title: 'BASIC WEBSITE',
        price: '₹9,999',
        period: 'One-Time',
        features: [
          'Up to 5 Pages',
          'Responsive Design',
          'Professional UI',
          'Contact Form',
          'WhatsApp Integration',
          'Google Maps',
          'Social Media Integration',
          'Basic SEO',
          'Google Analytics',
          'Search Console',
          'SSL Ready',
          'Speed Optimization',
          '1 Revision',
        ],
      },
      {
        tier: 'STANDARD',
        title: 'STANDARD WEBSITE',
        price: '₹14,999',
        period: 'One-Time',
        badge: 'MOST POPULAR',
        isPopular: true,
        features: [
          'Up to 10 Pages',
          'Premium Responsive Design',
          'Custom UI/UX',
          'Contact & Lead Forms',
          'WhatsApp + Call Integration',
          'Google Maps',
          'Social Media Integration',
          'Advanced On-Page SEO',
          'GA4',
          'Search Console',
          'Conversion-Focused Design',
          'Schema Markup',
          'Open Graph',
          'Speed Optimization',
          'Blog Setup',
          '2 Revisions',
        ],
      },
      {
        tier: 'PREMIUM',
        title: 'PREMIUM WEBSITE',
        price: '₹19,999',
        period: 'One-Time',
        badge: 'ENTERPRISE GRADE',
        isPremium: true,
        features: [
          'Up to 20 Pages',
          'Custom UI/UX',
          'Advanced Responsive Design',
          'Conversion Rate Optimization',
          'Advanced SEO',
          'Technical SEO',
          'GA4 + Search Console',
          'Multiple Lead Forms',
          'WhatsApp Integration',
          'Google Maps',
          'Social Integration',
          'Advanced Schema',
          'Open Graph',
          'Performance Optimization',
          'Image Optimization',
          'Blog Section',
          'Advanced CTA Strategy',
          '3 Revisions',
        ],
      },
    ],
  },
  {
    id: 'digital-marketing',
    categoryTitle: '2. DIGITAL MARKETING',
    subtitle: 'Data-driven SEO, Google Ads, and Meta advertising designed to generate high-intent qualified leads.',
    icon: TrendingUp,
    cards: [
      {
        tier: 'BASIC',
        title: 'BASIC DIGITAL MARKETING',
        price: '₹4,999',
        period: '/ MONTH',
        features: [
          'SEO Up to 5 Keywords',
          'Google Business Profile Optimization',
          'Facebook Management',
          'Instagram Management',
          '8 Social Posts / Month',
          'Local SEO',
          'Competitor Research',
          'Content Strategy',
          'Meta Ads Setup',
          'Monthly Report',
          'Monthly Consultation',
        ],
      },
      {
        tier: 'STANDARD',
        title: 'STANDARD DIGITAL MARKETING',
        price: '₹9,999',
        period: '/ MONTH',
        badge: 'MOST POPULAR',
        isPopular: true,
        features: [
          'SEO Up to 12 Keywords',
          'Google Business Profile Management',
          'Local SEO',
          'Facebook Management',
          'Instagram Management',
          '12 Social Posts / Month',
          '2 Promotional Videos',
          'Competitor Analysis',
          'Content Strategy',
          'Google Ads Setup',
          'Meta Ads Management',
          'Lead Generation Strategy',
          'Monthly Report',
          'Strategy Call',
        ],
      },
      {
        tier: 'PREMIUM',
        title: 'PREMIUM DIGITAL MARKETING',
        price: '₹19,999',
        period: '/ MONTH',
        badge: 'FULL-SCALE GROWTH',
        isPremium: true,
        features: [
          'SEO Up to 20 Keywords',
          'Advanced Local SEO',
          'Google Business Profile Management',
          'Facebook Management',
          'Instagram Management',
          '15 Social Posts / Month',
          'Video Content Creation',
          'Google Ads Management',
          'Meta Ads Management',
          'Lead Generation',
          'Conversion Optimization',
          'Competitor Analysis',
          'Advanced Content Strategy',
          'Remarketing Strategy',
          'Monthly Report',
          'Monthly Growth Strategy',
          'Dedicated Support',
        ],
      },
    ],
  },
  {
    id: 'video-editing',
    categoryTitle: '3. VIDEO EDITING & CONTENT CREATION',
    subtitle: 'High-retention Reels, YouTube Shorts, and promotional video content that builds brand authority.',
    icon: Video,
    cards: [
      {
        tier: 'BASIC',
        title: 'BASIC VIDEO PLAN',
        price: '₹4,999',
        period: '/ MONTH',
        features: [
          '4 Short Videos / Month',
          'Reels / Shorts Editing',
          'Basic Cuts',
          'Transitions',
          'Background Music',
          'Text Animation',
          'Basic Color Correction',
          'Captions',
          '1 Revision / Video',
        ],
      },
      {
        tier: 'STANDARD',
        title: 'STANDARD VIDEO PLAN',
        price: '₹9,999',
        period: '/ MONTH',
        badge: 'MOST POPULAR',
        isPopular: true,
        features: [
          '8 Short Videos / Month',
          'Reels / Shorts Editing',
          'Professional Transitions',
          'Motion Graphics',
          'Text Animation',
          'Color Correction',
          'Music + Sound Effects',
          'Captions',
          'Hook Optimization',
          'Thumbnail Design',
          'Multiple Formats',
          '2 Revisions / Video',
        ],
      },
      {
        tier: 'PREMIUM',
        title: 'PREMIUM VIDEO PLAN',
        price: '₹19,999',
        period: '/ MONTH',
        badge: 'MAXIMUM ENGAGEMENT',
        isPremium: true,
        features: [
          '12 Short Videos / Month',
          'Premium Reels & Shorts Editing',
          'Advanced Motion Graphics',
          'Professional Color Grading',
          'Sound Design',
          'Custom Animation',
          'Branded Templates',
          'Captions',
          'Hook & Retention Optimization',
          'Thumbnail Design',
          'YouTube Video Editing',
          'Instagram Reels',
          'Facebook Video',
          'Multiple Aspect Ratios',
          '3 Revisions / Video',
          'Content Strategy Support',
        ],
      },
    ],
  },
];

const WHATSAPP_NUMBER = '8249312058';
const PHONE_NUMBER = '8249312058';

export const PRICING_FAQS = [
  {
    question: 'How much does website design and development cost in Bhubaneswar?',
    answer:
      'Website design packages at DebabrataXpertAds start at ₹9,999 for a Basic 5-page responsive website, ₹14,999 for a Standard 10-page website with advanced SEO & GA4 setup, and ₹19,999 for a Premium 20-page conversion-focused custom website.',
  },
  {
    question: 'What are your monthly digital marketing package rates?',
    answer:
      'Our monthly digital marketing plans start from ₹4,999/month for Basic local SEO (5 keywords) & social media management, ₹9,999/month for Standard (12 keywords, 12 social posts, 2 videos, Google & Meta Ads setup), up to ₹19,999/month for full-scale growth marketing.',
  },
  {
    question: 'What is the pricing for video editing and content creation?',
    answer:
      'Video editing packages start at ₹4,999/month for 4 short videos (Reels/Shorts), ₹9,999/month for 8 short videos with motion graphics and hook optimization, and ₹19,999/month for 12 short videos with sound design and YouTube/Reels editing.',
  },
  {
    question: 'Are there any hidden costs or recurring annual fees for websites?',
    answer:
      'No. All website packages are transparent, one-time investments with clearly defined deliverables and milestones. Third-party domain registration and cloud hosting are owned directly by your business without hidden markups.',
  },
  {
    question: 'What are your payment terms and milestones for projects?',
    answer:
      'For website development projects, we work on structured milestone payments (advance deposit, development preview, and final launch approval). Digital marketing and video editing retainers are billed on a flexible month-to-month basis with zero lock-in contracts.',
  },
  {
    question: 'Can I request a custom package tailored to my business needs?',
    answer:
      'Yes, absolutely. If your business requires a custom combination (e.g., custom web development + Google Ads management + video Reels), we can prepare a bespoke quotation tailored precisely to your growth goals and budget.',
  },
  {
    question: 'How soon can we start once I choose a pricing package?',
    answer:
      'We can usually kick off within 24 to 48 hours of onboarding and project briefing. You can click "Get Started" on any package, or connect directly on WhatsApp / Phone at +91 8249312058.',
  },
];

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenConsultation }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pricingFaqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://debabrataxpertads.com/pricing#webpage',
          name: 'Pricing & Packages | Website Design, Digital Marketing & Video Editing | DebabrataXpertAds',
          description:
            'Clear, transparent pricing for Website Design & Development, Digital Marketing, and Video Editing in Bhubaneswar. 9 transparent packages with zero hidden fees.',
          url: 'https://debabrataxpertads.com/pricing',
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://debabrataxpertads.com/pricing#faq',
          mainEntity: PRICING_FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
        {
          '@type': 'PriceSpecification',
          name: 'DebabrataXpertAds Pricing & Packages',
          description:
            'Transparent pricing for Website Design & Development, Digital Marketing, and Video Editing & Content Creation in Bhubaneswar, Odisha.',
          priceCurrency: 'INR',
          minPrice: '4999',
          maxPrice: '19999',
        },
        {
          '@type': 'ProfessionalService',
          '@id': 'https://debabrataxpertads.com/#service',
          name: 'DebabrataXpertAds',
          founder: 'Debabrata Barik',
          telephone: '+918249312058',
          priceRange: '₹4,999 - ₹19,999',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'Plot No. 588/6040, Annapurna Niwas, Laxmi Mandap, Sampur High School, Near SUM Hospital Road, Sampur',
            addressLocality: 'Bhubaneswar',
            postalCode: '751003',
            addressRegion: 'Odisha',
            addressCountry: 'India',
          },
        },
      ],
    }),
    []
  );

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Pricing & Packages | Website Design, Digital Marketing & Video Editing | DebabrataXpertAds"
        description="Clear, transparent pricing for Website Design & Development, Digital Marketing, and Video Editing in Bhubaneswar. 9 transparent packages with zero hidden fees."
        canonicalPath="/pricing"
        schema={pricingFaqSchema}
      />

      <Breadcrumbs items={[{ name: 'Pricing & Packages', url: '/pricing' }]} />

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-gradient-to-b from-sky-50/80 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              <span>Transparent & Honest Pricing</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Pricing Plans & <span className="text-blue-600">Service Packages</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              No hidden agency markups or complex retainer contracts. Explore our structured packages across Web Design, Digital Marketing, and Video Content Creation.
            </p>
          </div>

          {/* Category Navigation Pills */}
          <div className="mt-8 sm:mt-12 pt-6 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-bold text-slate-700 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Jump to Service Category:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('website-design')}
                className="px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-blue-50 text-blue-900 border-2 border-blue-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
                id="nav-btn-website"
              >
                <Globe className="w-4 h-4 text-blue-600" />
                <span>Website Design</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('digital-marketing')}
                className="px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-blue-50 text-blue-900 border-2 border-blue-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
                id="nav-btn-marketing"
              >
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>Digital Marketing</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('video-editing')}
                className="px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-blue-50 text-blue-900 border-2 border-blue-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
                id="nav-btn-video"
              >
                <Video className="w-4 h-4 text-blue-600" />
                <span>Video Editing</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main 3 Pricing Sections */}
      <div className="space-y-16 sm:space-y-24 py-12 sm:py-20">
        {PRICING_SECTIONS.map((section, sIndex) => {
          const SectionIcon = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Section Header */}
              <div className="mb-10 sm:mb-14 text-center sm:text-left border-b border-slate-200/90 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center shadow-xs">
                      <SectionIcon className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {section.categoryTitle}
                    </h2>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 self-center sm:self-auto">
                    3 Transparent Tiers (Basic • Standard • Premium)
                  </span>
                </div>
                <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl">
                  {section.subtitle}
                </p>
              </div>

              {/* 3 Cards Grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {section.cards.map((card) => {
                  const whatsappMessage = encodeURIComponent(
                    `Hi Debabrata, I am interested in the ${card.title} (${card.price} ${card.period}). Please share details and let's get started.`
                  );
                  const whatsappHref = `https://wa.me/91${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

                  return (
                    <div
                      key={card.title}
                      className={`relative bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                        card.isPopular
                          ? 'border-2 border-blue-600 shadow-xl shadow-blue-500/10 ring-4 ring-blue-50'
                          : card.isPremium
                          ? 'border-2 border-sky-400 bg-gradient-to-b from-sky-50/50 via-white to-white shadow-lg shadow-sky-500/10'
                          : 'border-2 border-slate-200/90 hover:border-blue-300 shadow-md shadow-slate-200/50'
                      }`}
                    >
                      {/* Top Badges */}
                      {card.isPopular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                          <span>MOST POPULAR</span>
                        </div>
                      )}

                      {card.isPremium && !card.isPopular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-extrabold text-[10px] uppercase tracking-wider shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{card.badge || 'PREMIUM CHOICE'}</span>
                        </div>
                      )}

                      <div>
                        {/* Header Details */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                                card.isPopular
                                  ? 'bg-blue-100 text-blue-700'
                                  : card.isPremium
                                  ? 'bg-sky-100 text-sky-800'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {card.tier} TIER
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                            {card.title}
                          </h3>
                        </div>

                        {/* Price Block */}
                        <div className="pt-4 pb-5 my-4 border-y border-slate-100 flex items-baseline gap-1.5">
                          <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            {card.price}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                            {card.period}
                          </span>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 pt-2">
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                            Included in this plan:
                          </div>

                          <ul className="space-y-2.5">
                            {card.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                <div
                                  className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                    card.isPopular
                                      ? 'bg-blue-100 text-blue-600'
                                      : card.isPremium
                                      ? 'bg-sky-100 text-sky-600'
                                      : 'bg-slate-100 text-slate-600'
                                  }`}
                                >
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="text-slate-700 font-medium leading-tight">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="pt-6 mt-8 border-t border-slate-100 space-y-2.5">
                        <button
                          type="button"
                          onClick={() =>
                            onOpenConsultation(`${card.title} (${card.price} ${card.period})`)
                          }
                          className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                            card.isPopular
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg'
                              : card.isPremium
                              ? 'bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white shadow-md shadow-sky-500/20'
                              : 'bg-slate-900 hover:bg-blue-600 text-white'
                          }`}
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-2xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp Me ({WHATSAPP_NUMBER})</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Direct Contact & Support Strip */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Support</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Need a Custom Package or Quick Consultation?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Speak directly with Debabrata Barik to tailor a customized growth plan for your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:+91${PHONE_NUMBER}`}
              className="px-5 py-2.5 rounded-xl bg-white border-2 border-slate-300 hover:border-blue-500 text-slate-900 font-bold text-xs sm:text-sm shadow-2xs transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call: +91 {PHONE_NUMBER}</span>
            </a>

            <a
              href={`https://wa.me/91${WHATSAPP_NUMBER}?text=Hi%20Debabrata,%20I%20have%20a%20question%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {WHATSAPP_NUMBER}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenConsultation('Custom Pricing Consultation')}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Commercial Terms & Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-50 via-blue-50/50 to-white rounded-3xl p-8 sm:p-12 text-slate-900 border border-sky-200 relative overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Transparency Guaranteed
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Honest Deliverables & Staged Milestones
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every package includes clear milestone deliverables, regular progress reports, and direct developer/strategist communication without intermediary layers.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation('Custom Scope & Quotation')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-white font-bold text-xs sm:text-sm hover:from-sky-600 hover:to-blue-800 shadow-md transition-colors cursor-pointer"
                  >
                    Request Custom Quotation
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-sky-200/80 shadow-2xs space-y-3.5 text-xs text-slate-700">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">
                  Our Commercial Terms
                </h3>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Milestone-Based Payments:</strong> Transparent staged deliverables for website development.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No Locked Retainers:</strong> Flexible month-to-month marketing & video agreements.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Owner Access:</strong> Direct communication with Debabrata Barik (+91 8249312058).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="pricing-faq" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pricing FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Pricing
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Everything you need to know about our package deliverables, payment terms, revisions, and customized scope.
            </p>
          </div>

          <div className="space-y-3">
            {PRICING_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'border-blue-300 shadow-md ring-1 ring-blue-100'
                      : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 text-xs flex items-center justify-center font-black flex-shrink-0">
                        Q
                      </span>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform flex-shrink-0 duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <div className="pt-2 pl-7 flex items-start gap-2">
                        <span className="font-bold text-blue-600 text-xs uppercase tracking-wider flex-shrink-0">
                          Ans:
                        </span>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600 font-medium">
              Have a specific question not listed here?
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}?text=Hi%20Debabrata,%20I%20have%20a%20pricing%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ask on WhatsApp</span>
              </a>
              <span className="text-slate-300">•</span>
              <Link to="/faq" className="font-bold text-blue-600 hover:underline">
                View Full FAQ Knowledge Base →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Have Questions About What's Included?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Book a free 15-minute consultation to discuss which package best matches your business goals and marketing budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors cursor-pointer"
            >
              Get Free Consultation
            </button>
            <Link
              to="/faq"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              Browse Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
