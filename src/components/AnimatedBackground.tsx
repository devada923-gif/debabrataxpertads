import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'light' | 'dark' | 'glow' | 'grid';
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'light',
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Dynamic Ambient Blur Glows on Light Canvas */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '7s' }}
      />
      <div
        className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '9s', animationDelay: '2s' }}
      />
      <div
        className="absolute -bottom-20 right-1/4 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '8s', animationDelay: '1s' }}
      />

      {/* Subtle Micro-Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#0284C7 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};

