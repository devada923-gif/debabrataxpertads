import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'auto',
  showTagline = true,
}) => {
  // Dimensions according to size prop
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const taglineSizes = {
    sm: 'text-[7px] tracking-[0.2em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.22em]',
    lg: 'text-[11px] sm:text-[13px] tracking-[0.26em]',
    xl: 'text-[13px] sm:text-[15px] tracking-[0.3em]',
  };

  // Text color classes based on variant
  const debabrataColorClass =
    variant === 'light'
      ? 'text-white'
      : variant === 'dark'
      ? 'text-slate-900'
      : 'text-slate-900 dark:text-white';

  const taglineColorClass =
    variant === 'light'
      ? 'text-slate-300'
      : variant === 'dark'
      ? 'text-slate-500'
      : 'text-slate-500 dark:text-slate-400';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Monogram Mark */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-label="DebabrataXpertAds Logo Icon"
        >
          <defs>
            {/* Gradient matching the uploaded logo icon */}
            <linearGradient id="brandLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="45%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            
            <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </linearGradient>

            <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0284C7" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* D Outer Ring with top-right opening and modern geometry */}
          <path
            d="M 16 10 
               L 52 10 
               C 78 10 94 28 94 50 
               C 94 72 78 90 52 90 
               L 16 90 
               Z 
               M 32 26 
               L 32 74 
               L 50 74 
               C 66 74 76 64 76 50 
               C 76 36 66 26 50 26 
               Z"
            fill="url(#brandLogoGrad)"
            fillRule="evenodd"
          />

          {/* Precision Gap in the 'D' top right notch matching uploaded graphic */}
          <path
            d="M 68 44 L 98 44 L 98 56 L 68 56 Z"
            fill="transparent"
          />

          {/* Inner Upward Growth Arrow shooting through 'D' */}
          <g filter="url(#subtleGlow)">
            {/* Arrow Stem */}
            <path
              d="M 16 88 
                 L 44 60 
                 L 40 48 
                 L 64 36 
                 L 76 18 
                 L 60 22 
                 L 76 18 
                 L 72 34 
                 Z"
              fill="url(#arrowGrad)"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Growth Arrowhead Sharp Peak */}
            <polygon
              points="76,16 60,23 66,29 52,43 57,48 71,34 77,40"
              fill="#FFFFFF"
              stroke="#0284C7"
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col leading-none">
        <div className={`font-extrabold tracking-tight flex items-baseline ${textSizes[size]}`}>
          <span className={`transition-colors duration-200 ${debabrataColorClass}`}>
            Debabrata
          </span>
          <span className="bg-gradient-to-r from-[#00D2FF] via-[#0284C7] to-[#1D4ED8] bg-clip-text text-transparent ml-0.5 font-black">
            XpertAds
          </span>
        </div>

        {showTagline && (
          <div
            className={`font-semibold uppercase mt-0.5 sm:mt-1 transition-colors duration-200 ${taglineSizes[size]} ${taglineColorClass}`}
          >
            DIGITAL MARKETING <span className="opacity-40 px-0.5">|</span> BUSINESS GROWTH
          </div>
        )}
      </div>
    </div>
  );
};
