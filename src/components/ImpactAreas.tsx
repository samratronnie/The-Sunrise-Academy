import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface ImpactAreasProps {
  onLearnMore?: () => void;
}

export const ImpactAreas: React.FC<ImpactAreasProps> = ({ onLearnMore }) => {
  return (
    <section id="impact-areas" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Core Pillars of Action</span>
            <span aria-hidden="true">·</span>
            <span>Statewide Youth Impact</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            Our Impact Vision
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            WBYEF focuses on eight interrelated impact pillars to unlock potential, remove barriers, and build a flourishing generation of leaders, professionals, and change-makers in West Bengal.
          </p>
        </div>

        {/* 8 Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WBYEF_DATA.impactAreas.map((area, idx) => (
            <div
              key={area.id}
              className="group p-6 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-2xl mb-5 shadow-xs group-hover:scale-105 transition-transform">
                  {area.icon}
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Pillar 0{idx + 1}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold text-stone-700 group-hover:text-amber-800">
                <span>Active Initiative</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
