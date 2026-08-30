import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 px-4 sm:px-6 bg-slate-50/80 border-y border-slate-200/80 text-xs sm:text-sm text-slate-600 ${className}`}
      id="site-breadcrumbs"
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 sm:gap-2">
        <Link
          to="/"
          className="inline-flex items-center gap-1 hover:text-sky-600 font-medium transition-colors"
          title="Return to Home"
          id="breadcrumb-home"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {isLast || !item.url ? (
                <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-sky-600 font-medium transition-colors truncate max-w-[150px] sm:max-w-none"
                  id={`breadcrumb-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
