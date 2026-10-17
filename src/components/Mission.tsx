import React from 'react';
import { BookOpen, Laptop, Apple, Users, ArrowUpRight } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';

interface MissionProps {
  onLearnMore?: () => void;
  onOpenDonate?: () => void;
}

export const Mission: React.FC<MissionProps> = ({ onLearnMore, onOpenDonate }) => {
  const pillarIcons = [
    <BookOpen className="w-5 h-5 text-amber-700" key="p1" />,
    <Laptop className="w-5 h-5 text-blue-700" key="p2" />,
    <Apple className="w-5 h-5 text-emerald-700" key="p3" />,
    <Users className="w-5 h-5 text-purple-700" key="p4" />,
  ];

  return (
    <section id="mission" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Our Foundation & Purpose</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2016</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-5 text-balance">
            {ACADEMY_DATA.mission.heading}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed">
            {ACADEMY_DATA.mission.leadParagraph}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_DATA.mission.pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group p-6 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                  {pillarIcons[idx]}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Pillar 0{idx + 1}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold text-stone-500 group-hover:text-amber-700">
                <span>Core Initiative</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Mission Bottom Institutional Manifesto Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 mb-2">
              Every child carries boundless potential.
            </h4>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              We eliminate socioeconomic barriers so children from marginalized communities can realize their dreams through education, mentorship, and self-belief.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-4">
            {onOpenDonate && (
              <button
                type="button"
                onClick={() => onOpenDonate(1000)}
                className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition-colors shadow-sm"
              >
                Sponsor a Child’s Month
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
