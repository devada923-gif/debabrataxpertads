import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Search,
  Sparkles,
  Megaphone,
  Target,
  Zap,
  Activity,
  ArrowUpRight,
  MessageSquare,
  Globe,
  Layers,
} from 'lucide-react';

interface MarketingDashboardProps {
  onOpenConsultation?: (service?: string) => void;
  variant?: 'hero' | 'compact' | 'light';
}

export const MarketingDashboard: React.FC<MarketingDashboardProps> = ({
  onOpenConsultation,
  variant = 'hero',
}) => {
  const [activeChannel, setActiveChannel] = useState<'all' | 'seo' | 'google-ads' | 'meta-ads' | 'funnels'>('all');
  const [leadCounter, setLeadCounter] = useState(84);
  const [livePulse, setLivePulse] = useState(0);

  // Subtle live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse((prev) => (prev + 1) % 4);
      setLeadCounter((prev) => (prev >= 98 ? 84 : prev + 1));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full select-none" id="interactive-marketing-dashboard">
      {/* Subtle Soft Blue Glow behind Dashboard */}
      <div
        className="absolute -inset-3 bg-gradient-to-tr from-sky-400/25 via-blue-500/20 to-cyan-300/25 rounded-3xl blur-2xl opacity-80 pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Mini Card: WhatsApp Inquiries (Top Right) */}
      <div className="hidden sm:flex absolute -top-4 -right-3 z-30 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-lg shadow-emerald-500/10 text-xs font-semibold text-slate-800 animate-bounce duration-1000" style={{ animationDuration: '4s' }}>
        <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
          <MessageSquare className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-medium">WhatsApp Funnel</div>
          <div className="text-emerald-700 font-bold text-xs flex items-center gap-1">
            <span>+1 Qualified Lead</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </div>
        </div>
      </div>

      {/* Floating Mini Card: Google Ads ROAS (Bottom Left) */}
      <div className="hidden sm:flex absolute -bottom-3 -left-3 z-30 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-200/90 shadow-lg shadow-sky-500/10 text-xs font-semibold text-slate-800">
        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-xs">
          <TrendingUp className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-medium">Google Ads ROAS</div>
          <div className="text-sky-700 font-bold text-xs">4.6x High Intent</div>
        </div>
      </div>

      {/* Main Bright White Dashboard Card Container */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-sky-100 shadow-xl shadow-sky-900/5 overflow-hidden text-slate-800">
        {/* Top Window Control Bar */}
        <div className="bg-[#F8FAFC] px-4 py-3 sm:px-6 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Activity className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
              <span>DebabrataXpertAds Growth Engine</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
              <span>Live Campaign Demo</span>
            </span>
          </div>
        </div>

        {/* Channel Navigation Switcher */}
        <div className="bg-white border-b border-slate-100 px-3 py-2 sm:px-5 flex items-center justify-between overflow-x-auto scrollbar-none gap-2">
          <div className="flex space-x-1.5 text-xs">
            {[
              { id: 'all', label: 'All Channels', icon: Layers },
              { id: 'seo', label: 'SEO & Maps', icon: Search },
              { id: 'google-ads', label: 'Google Ads', icon: Sparkles },
              { id: 'meta-ads', label: 'Meta Ads', icon: Megaphone },
              { id: 'funnels', label: 'WhatsApp Funnels', icon: MessageSquare },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeChannel === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveChannel(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-sm shadow-sky-500/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <span className="text-[11px] text-slate-500 font-mono hidden md:inline">
            Status: <span className="text-emerald-600 font-bold">OPTIMIZED</span>
          </span>
        </div>

        {/* Metric Cards Grid */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Top 3 High-Impact Growth Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Card 1: Traffic Quality */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-b from-sky-50/50 to-white border border-sky-100 hover:border-sky-300 transition-all shadow-2xs group">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Search Intent</span>
                <Search className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 flex items-baseline gap-1">
                <span>Top #1 Ranking</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-sky-700 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                <span>Bhubaneswar Local SEO</span>
              </div>
            </div>

            {/* Card 2: Direct Lead Funnel */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-100 hover:border-emerald-300 transition-all shadow-2xs group">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Inquiry Funnel</span>
                <Target className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 flex items-baseline gap-1">
                <span>{leadCounter}+ Leads/mo</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Buyer Intent</span>
              </div>
            </div>

            {/* Card 3: ROAS Optimization */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 hover:border-blue-300 transition-all shadow-2xs group">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Ad Efficiency</span>
                <Zap className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 flex items-baseline gap-1">
                <span>-38% Wasted Spend</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>Negative Keyword Shield</span>
              </div>
            </div>
          </div>

          {/* Dynamic Animated Curve Visualization on Crisp Light Grid */}
          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 relative overflow-hidden shadow-inner">
            {/* Background Light Grid inside graph */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="flex items-center justify-between text-xs mb-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-ping" />
                <span className="font-bold text-slate-900">
                  {activeChannel === 'all' && 'Growth & Conversion Trajectory'}
                  {activeChannel === 'seo' && 'Organic Keyword & Local Pack Visibility'}
                  {activeChannel === 'google-ads' && 'Google Search Qualified Conversion Rate'}
                  {activeChannel === 'meta-ads' && 'Meta Ads Engagement & Retargeting Curve'}
                  {activeChannel === 'funnels' && '1-Click WhatsApp Lead Acquisition Rate'}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">
                Audit → Campaign → Scale
              </span>
            </div>

            {/* SVG Animated Curves with Light Gradient Fill */}
            <div className="h-28 sm:h-32 w-full relative z-10">
              <svg className="w-full h-full" viewBox="0 0 400 110" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lightCurveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
                    <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lightSecondaryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Secondary Baseline Curve */}
                <path
                  d="M 0 95 Q 80 88 150 78 T 280 55 T 400 35 L 400 110 L 0 110 Z"
                  fill="url(#lightSecondaryGradient)"
                />
                <path
                  d="M 0 95 Q 80 88 150 78 T 280 55 T 400 35"
                  stroke="#10B981"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.7"
                />

                {/* Primary Growth Path Curve */}
                <path
                  d="M 0 90 Q 70 82 130 65 T 260 38 T 350 20 L 400 12 L 400 110 L 0 110 Z"
                  fill="url(#lightCurveGradient)"
                />
                <path
                  d="M 0 90 Q 70 82 130 65 T 260 38 T 350 20 L 400 12"
                  stroke="#0284C7"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Interactive Pulse Nodes */}
                <circle cx="130" cy="65" r="4" fill="#0284C7" />
                <circle cx="260" cy="38" r="4.5" fill="#0284C7" />
                <circle cx="350" cy="20" r="5" fill="#0284C7" />
                <circle cx="400" cy="12" r="6" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Timeline Milestones */}
            <div className="flex justify-between items-center text-[10px] text-slate-600 border-t border-slate-200 pt-2 relative z-10 font-semibold">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>1. Setup</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>2. Target</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>3. Optimize</span>
              </span>
              <span className="flex items-center gap-1 text-sky-700 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>4. Revenue Scale</span>
              </span>
            </div>
          </div>

          {/* Strategy In Action Grid */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>Strategy In Action</span>
              <span className="text-[10px] text-sky-700 font-semibold">4 Active Growth Pillars</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 truncate">Local SEO & Google Maps</div>
                  <div className="text-[10px] text-slate-500">Top 3-Pack Bhubaneswar Optimization</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 truncate">WhatsApp Lead Routing</div>
                  <div className="text-[10px] text-slate-500">Instant Customer Inquiries</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-100">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 truncate">Google Search Ads (PPC)</div>
                  <div className="text-[10px] text-slate-500">Exact Match & Negative Keyword Shield</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 truncate">High-Speed Web UI</div>
                  <div className="text-[10px] text-slate-500">Sub-Second Mobile Conversion Design</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive CTA button inside dashboard */}
          {onOpenConsultation && (
            <div className="pt-1">
              <button
                type="button"
                onClick={() => onOpenConsultation('Digital Strategy Audit')}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 transition-all shadow-md shadow-sky-500/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Custom Marketing Growth Blueprint</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
