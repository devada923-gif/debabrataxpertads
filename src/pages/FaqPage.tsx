import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS, BUSINESS_INFO } from '../data/websiteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  Phone,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface FaqPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Freelance' },
    { id: 'website', label: 'Website Design' },
    { id: 'marketing', label: 'Marketing & Ads' },
    { id: 'pricing', label: 'Pricing & Timelines' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Frequently Asked Questions (FAQ) | DebabrataXpertAds Bhubaneswar"
        description="Find answers to common questions about digital marketing, SEO, website design timelines, Google Ads, Meta Ads, and pricing with Debabrata Barik in Bhubaneswar."
        canonicalPath="/faq"
        schema={faqSchema}
      />

      <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clarity & Transparency</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Frequently Asked Questions
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Find transparent answers regarding our digital marketing methodologies, project timelines, deliverables, and commercial working terms.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any question (e.g. SEO, website timeline, WhatsApp ads)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-16 sm:py-24 bg-white" id="faq-accordion-list">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="text-sm text-slate-500">No questions found matching your search term.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-bold text-sky-600 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = expandedIndex === index;
                return (
                  <div
                    key={faq.id || index}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-sky-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Direct WhatsApp Question Prompt */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Have a Different Question?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Don't hesitate to reach out directly. Debabrata Barik is available on WhatsApp to answer your specific marketing and technical questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask via WhatsApp ({BUSINESS_INFO.phone})</span>
            </a>

            <button
              onClick={() => onOpenConsultation('General Inquiry / Question')}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Send an Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
