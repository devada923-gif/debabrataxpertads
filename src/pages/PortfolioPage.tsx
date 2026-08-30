import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_PROJECTS, BUSINESS_INFO } from '../data/websiteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PortfolioModal, PortfolioModalItem } from '../components/PortfolioModal';
import {
  Briefcase,
  Globe,
  TrendingUp,
  Palette,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  Sparkles,
  Layers,
  Eye,
  Video,
  Info,
} from 'lucide-react';

interface PortfolioPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'website' | 'marketing' | 'branding'>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioModalItem | null>(null);

  const filteredProjects =
    selectedFilter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedFilter);

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Work Portfolio & Case Studies | DebabrataXpertAds',
    description:
      'Explore real website designs, digital marketing campaigns, and branding projects crafted by DebabrataXpertAds in Bhubaneswar, Odisha.',
    url: 'https://debabrataxpertads.com/portfolio',
    provider: {
      '@type': 'ProfessionalService',
      name: 'DebabrataXpertAds',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Portfolio & Case Studies | Digital Marketing & Web Design | DebabrataXpertAds"
        description="View our portfolio of responsive business websites, high-intent PPC campaigns, and branding identities built for businesses in Bhubaneswar and Odisha."
        canonicalPath="/portfolio"
        schema={portfolioSchema}
      />

      <Breadcrumbs items={[{ name: 'Portfolio', url: '/portfolio' }]} />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Demonstrated Execution & Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Selected Work & Project Case Studies
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Explore practical examples of how we help businesses in Bhubaneswar and Odisha establish professional online identities, capture search intent, and generate qualified inquiries.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 font-medium">
              <Info className="w-3.5 h-3.5 flex-shrink-0 text-amber-600" />
              <span>Representative Demo Concepts demonstrating architectural depth and creative execution.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subpage Deep Links */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Dedicated Portfolio Categories:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                to="/portfolio/websites"
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold hover:border-sky-500 hover:text-sky-600 shadow-2xs transition-colors inline-flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>Websites Portfolio →</span>
              </Link>
              <Link
                to="/portfolio/digital-marketing"
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold hover:border-sky-500 hover:text-sky-600 shadow-2xs transition-colors inline-flex items-center gap-1.5"
              >
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>Digital Marketing Portfolio →</span>
              </Link>
              <Link
                to="/portfolio/branding"
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold hover:border-sky-500 hover:text-sky-600 shadow-2xs transition-colors inline-flex items-center gap-1.5"
              >
                <Palette className="w-3.5 h-3.5 text-amber-600" />
                <span>Branding Portfolio →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-16 sm:py-24 bg-white" id="portfolio-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Projects ({PORTFOLIO_PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('website')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'website'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Websites & Landing Pages
            </button>
            <button
              onClick={() => setSelectedFilter('marketing')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'marketing'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Digital Marketing & Ads
            </button>
            <button
              onClick={() => setSelectedFilter('branding')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'branding'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Branding & Creative Design
            </button>
          </div>

          {/* Projects Grid with Interactive Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                id={`project-${project.id}`}
              >
                <div>
                  {/* Image Preview with Hover Zoom and Modal Trigger */}
                  <div
                    onClick={() =>
                      setActiveModalItem({
                        id: project.id,
                        title: project.title,
                        category: project.category,
                        badge: 'Demo Concept',
                        description: project.description,
                        results: project.results,
                        image: project.image,
                        tags: project.tags,
                      })
                    }
                    className="relative aspect-video overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900/85 backdrop-blur-md text-sky-400 border border-slate-700">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                        Demo Concept
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-4 py-2 rounded-full text-xs font-bold bg-white text-slate-900 shadow-xl flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                        <Eye className="w-4 h-4 text-sky-600" />
                        <span>Inspect Case Study</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h3
                      onClick={() =>
                        setActiveModalItem({
                          id: project.id,
                          title: project.title,
                          category: project.category,
                          badge: 'Demo Concept',
                          description: project.description,
                          results: project.results,
                          image: project.image,
                          tags: project.tags,
                        })
                      }
                      className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                        Key Deliverables & Results:
                      </div>
                      <p className="text-xs text-emerald-800 font-medium bg-emerald-50 p-3 rounded-xl border border-emerald-200/80 leading-relaxed">
                        ✓ {project.results}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 grid grid-cols-2 gap-2 mt-4">
                  <button
                    onClick={() =>
                      setActiveModalItem({
                        id: project.id,
                        title: project.title,
                        category: project.category,
                        badge: 'Demo Concept',
                        description: project.description,
                        results: project.results,
                        image: project.image,
                        tags: project.tags,
                      })
                    }
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>View Modal</span>
                  </button>

                  <button
                    onClick={() => onOpenConsultation(`Similar project to ${project.title}`)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal Presentation */}
      <PortfolioModal
        item={activeModalItem}
        isOpen={!!activeModalItem}
        onClose={() => setActiveModalItem(null)}
        onOpenConsultation={onOpenConsultation}
      />

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Have a Specific Project in Mind?
          </h2>
          <p className="text-sm sm:text-base text-sky-100 max-w-xl mx-auto leading-relaxed">
            Discuss your requirements, reference designs, and business goals directly with Debabrata Barik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-blue-900 font-bold text-sm shadow-lg transition-all cursor-pointer"
            >
              Get Free Project Consultation
            </button>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-blue-800/80 hover:bg-blue-800 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
