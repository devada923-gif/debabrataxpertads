import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/websiteData';
import { Search, FileText, Layers, Rocket, BarChart2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-sky-600" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-cyan-600" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Search className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Structured 5-Step Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How I Help Your Business Grow
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            A clear, systematic process from initial market research to revenue scaling.
          </p>
        </div>

        {/* Desktop Step Flow with Progress Bar & Connecting Line */}
        <div className="relative mb-12">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-br from-sky-600 via-blue-600 to-blue-700 text-white border-blue-600 shadow-xl shadow-blue-500/20 scale-[1.03]'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-sky-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isSelected
                            ? 'bg-sky-500 text-slate-950 shadow-xs'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {getStepIcon(step.icon)}
                      </div>
                      <span
                        className={`text-lg font-black tracking-wider ${
                          isSelected ? 'text-sky-400' : 'text-slate-300'
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-base font-extrabold mb-1 ${
                        isSelected ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {step.title}
                    </h3>

                    <div
                      className={`text-[11px] font-semibold mb-2 ${
                        isSelected ? 'text-sky-300' : 'text-sky-700'
                      }`}
                    >
                      {step.subtitle}
                    </div>

                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet points for active or on hover */}
                  <div
                    className={`mt-4 pt-3 border-t space-y-1.5 ${
                      isSelected ? 'border-slate-800' : 'border-slate-100'
                    }`}
                  >
                    {step.keyPoints.slice(0, 2).map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className={`flex items-center gap-1.5 text-[11px] ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3 h-3 flex-shrink-0 ${
                            isSelected ? 'text-sky-400' : 'text-sky-600'
                          }`}
                        />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed View Spotlight */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Step Spotlight: 0{activeStepIndex + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {PROCESS_STEPS[activeStepIndex].title} — {PROCESS_STEPS[activeStepIndex].subtitle}
              </h3>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-xs"
            >
              <span>Start at Step 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm text-slate-700">
            {PROCESS_STEPS[activeStepIndex].keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/70">
                <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                  {idx + 1}
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
