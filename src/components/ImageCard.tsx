import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles } from 'lucide-react';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  badge?: string;
  category?: string;
  onClick?: () => void;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  badge = 'Demo Concept',
  category,
  onClick,
  className = '',
  aspectRatio = 'video',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : 'aspect-video';

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 cursor-pointer ${className}`}
    >
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-slate-100`}>
        {/* Placeholder shimmer while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center text-slate-400 text-xs">
            Loading preview...
          </div>
        )}

        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {category && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-xs">
              {category}
            </span>
          )}
          {badge && (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-xs">
              {badge}
            </span>
          )}
        </div>

        {/* Bottom Content & Hover Trigger */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
          <div className="pr-2">
            <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1 drop-shadow-xs">
              {title}
            </h4>
          </div>
          <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 shadow-md">
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
