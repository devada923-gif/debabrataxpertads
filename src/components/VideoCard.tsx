import React, { useState, useRef } from 'react';
import { Play, Pause, Video, Eye, Sparkles, VolumeX } from 'lucide-react';

interface VideoCardProps {
  videoSrc?: string;
  posterSrc: string;
  title: string;
  category?: string;
  badge?: string;
  duration?: string;
  onClick?: () => void;
  className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  videoSrc,
  posterSrc,
  title,
  category = 'Video Creative',
  badge = 'Demo Concept',
  duration = '0:15',
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoSrc) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay on hover might be restricted by browser policy
        });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && videoSrc) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 cursor-pointer ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <img
            src={posterSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
          />
        )}

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-xs">
            <Video className="w-3.5 h-3.5 text-sky-600" />
            <span>{category}</span>
          </span>

          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-xs">
            {badge}
          </span>
        </div>

        {/* Center Play Indicator when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Playing indicator */}
        {isPlaying && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>Previewing</span>
          </div>
        )}

        {/* Bottom Details */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none z-10">
          <div className="pr-2">
            <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1 drop-shadow-xs">
              {title}
            </h4>
            <span className="text-[11px] text-slate-300 font-mono">
              Hover to preview • {duration}
            </span>
          </div>

          <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 shadow-md">
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
