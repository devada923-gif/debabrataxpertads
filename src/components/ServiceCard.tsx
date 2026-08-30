import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';
import {
  Globe,
  Search,
  Sparkles,
  Megaphone,
  Share2,
  UserCheck,
  MapPin,
  ShoppingBag,
  Palette,
  ArrowRight,
  Check,
  ExternalLink,
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 transition-transform duration-300 group-hover:scale-110' };
    switch (iconName) {
      case 'Globe':
        return <Globe {...props} className="w-6 h-6 text-sky-500" />;
      case 'Search':
        return <Search {...props} className="w-6 h-6 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles {...props} className="w-6 h-6 text-amber-500" />;
      case 'Megaphone':
        return <Megaphone {...props} className="w-6 h-6 text-indigo-500" />;
      case 'Share2':
        return <Share2 {...props} className="w-6 h-6 text-pink-500" />;
      case 'UserCheck':
        return <UserCheck {...props} className="w-6 h-6 text-emerald-500" />;
      case 'MapPin':
        return <MapPin {...props} className="w-6 h-6 text-cyan-500" />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} className="w-6 h-6 text-teal-500" />;
      case 'Palette':
        return <Palette {...props} className="w-6 h-6 text-purple-500" />;
      default:
        return <Sparkles {...props} className="w-6 h-6 text-sky-500" />;
    }
  };

  const getServiceRoute = (id: string) => {
    const routeMap: Record<string, string> = {
      'website-design': '/services/website-design',
      'digital-marketing': '/services/digital-marketing',
      'seo': '/services/seo',
      'google-ads': '/services/google-ads',
      'meta-ads': '/services/meta-ads',
      'social-media': '/services/social-media-marketing',
      'lead-generation': '/services/lead-generation',
      'local-seo': '/services/seo',
      'branding-creatives': '/services/branding',
      'ecommerce-growth': '/services/website-design',
    };
    return routeMap[id] || `/services`;
  };

  return (
    <div
      id={`service-card-${service.id}`}
      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Accent Gradient Border on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-sky-50 group-hover:border-sky-200 flex items-center justify-center transition-colors">
            {getIcon(service.iconName)}
          </div>
          {service.badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-sky-50 group-hover:text-sky-700 group-hover:border-sky-200 transition-colors">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors leading-snug">
          <Link to={getServiceRoute(service.id)} className="hover:underline">
            {service.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {service.shortDesc}
        </p>

        {/* Feature List */}
        <div className="space-y-2.5 pt-4 pb-6 border-t border-slate-100">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Key Deliverables
          </div>
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
              <span className="w-4 h-4 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dual CTA: Learn More Page & Direct Consultation */}
      <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
        <Link
          to={getServiceRoute(service.id)}
          className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <button
          type="button"
          onClick={() => onSelectService(service.title)}
          className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
};
