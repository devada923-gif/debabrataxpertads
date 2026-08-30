import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { MarketingDashboard } from './MarketingDashboard';

interface HeroVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  onOpenConsultation?: (service?: string) => void;
  title?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  videoSrc,
  posterSrc = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  onOpenConsultation,
  title = 'Digital Marketing & Growth Infrastructure',
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [mode, setMode] = useState<'dashboard' | 'video'>(videoSrc ? 'video' : 'dashboard');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl">
      {/* Switcher Header Pill if video is configured */}
      {videoSrc && (
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 p-1 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-xs shadow-md">
          <button
            onClick={() => setMode('dashboard')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              mode === 'dashboard'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setMode('video')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              mode === 'video'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Video Reel
          </button>
        </div>
      )}

      {/* Mode 1: Video Container with Clean Frame */}
      {mode === 'video' && videoSrc ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-sky-100 shadow-xl bg-slate-900">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Overlay Controls */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center backdrop-blur-md shadow-md transition-colors"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center backdrop-blur-md shadow-md transition-colors"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-bold text-white block">{title}</span>
              <span className="text-[10px] text-slate-200">Interactive High-Definition Preview</span>
            </div>
          </div>
        </div>
      ) : (
        /* Mode 2: Bright White Animated Marketing Dashboard */
        <MarketingDashboard onOpenConsultation={onOpenConsultation} />
      )}
    </div>
  );
};
