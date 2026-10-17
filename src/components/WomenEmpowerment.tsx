import React from 'react';
import { Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface WomenEmpowermentProps {
  onOpenVolunteer: () => void;
  onOpenDonate: () => void;
}

export const WomenEmpowerment: React.FC<WomenEmpowermentProps> = ({
  onOpenVolunteer,
  onOpenDonate,
}) => {
  return (
    <section id="women-empowerment" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Gender Equity & Inclusion</span>
            <span aria-hidden="true">·</span>
            <span>WBYEF Special Mission</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-2">
            {WBYEF_DATA.womenEmpowerment.heading}
          </h2>

          {/* Exact Motto */}
          <p className="font-serif text-xl sm:text-2xl text-amber-900/90 font-medium italic mb-4">
            {WBYEF_DATA.womenEmpowerment.motto}
          </p>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Women’s empowerment is pivotal to Bengal’s economic future. We dismantle structural and social barriers, fostering financial self-reliance, leadership voice, and equal opportunities in professional sectors.
          </p>
        </div>

        {/* 9 Women-Focused Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WBYEF_DATA.womenEmpowerment.initiatives.map((init, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:border-amber-400 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-700 mb-3">
                  <span className="font-bold text-amber-800">Initiative 0{idx + 1}</span>
                  <span className="text-emerald-700 font-semibold">Active Track</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {init}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Specialized curriculum designed for adolescent girls and young women to build skills, self-esteem, and career momentum.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700">
                <span>Free Access for Enrolled Women</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 mb-2">
              Empowering a young woman transforms generations.
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Join us in sponsoring self-reliance bootcamps, civil exam prep, and digital literacy for girls in rural and urban Bengal.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenDonate()}
              className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer shadow-sm"
            >
              Sponsor Women's Cohort
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
