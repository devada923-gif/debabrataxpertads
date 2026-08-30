import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_PROJECTS, BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  MessageSquare,
  Smartphone,
  Zap,
} from 'lucide-react';

interface WebsitesPortfolioPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const WebsitesPortfolioPage: React.FC<WebsitesPortfolioPageProps> = ({ onOpenConsultation }) => {
  const websiteProjects = PORTFOLIO_PROJECTS.filter((p) => p.category === 'website');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Website Design & Development Portfolio | DebabrataXpertAds',
    description:
      'Explore responsive business websites and landing page case studies built by DebabrataXpertAds in Bhubaneswar, Odisha.',
    url: 'https://debabrataxpertads.com/portfolio/websites',
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Website Design Portfolio | Web Projects in Bhubaneswar | DebabrataXpertAds"
        description="Browse responsive, fast, and conversion-focused business website and landing page case studies created by DebabrataXpertAds in Bhubaneswar."
        canonicalPath="/portfolio/websites"
        schema={schema}
      />

      <Breadcrumbs
        items={[
          { name: 'Portfolio', url: '/portfolio' },
          { name: 'Website Design Projects', url: '/portfolio/websites' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Web Development Portfolio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Website Design & Development Projects
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Clean typography, responsive mobile layouts, fast loading times, and direct conversion hooks built for businesses across healthcare, retail, real estate, and services in Bhubaneswar.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs text-white border border-white/10">
                        Website Project
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                        Outcome & Implementation:
                      </div>
                      <p className="text-xs text-emerald-700 font-medium bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                        ✓ {project.results}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenConsultation(`Website project similar to ${project.title}`)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                  >
                    <span>Request Similar Website</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Want a Custom Website Like These For Your Business?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Discuss your page requirements, layout preferences, and launch schedule directly with Debabrata Barik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Website Design & Development')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Get Website Consultation
            </button>
            <Link
              to="/services/website-design"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              Learn More About Web Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
