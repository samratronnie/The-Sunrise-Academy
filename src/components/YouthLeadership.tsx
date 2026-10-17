import React from 'react';
import { Sparkles, Trophy, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface YouthLeadershipProps {
  onOpenVolunteer: () => void;
}

export const YouthLeadership: React.FC<YouthLeadershipProps> = ({ onOpenVolunteer }) => {
  return (
    <section id="youth-leadership" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Leadership & Civic Agency</span>
            <span aria-hidden="true">·</span>
            <span>Youth Incubator</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-2">
            {WBYEF_DATA.youthLeadership.heading}
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-amber-900/90 font-medium italic mb-4">
            {WBYEF_DATA.youthLeadership.tagline}
          </p>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            True empowerment goes beyond individual employment—it cultivates leaders who solve community problems, articulate vision, and build collaborative solutions.
          </p>
        </div>

        {/* Leadership Engagement Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WBYEF_DATA.youthLeadership.activities.map((act, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-amber-700 font-bold text-xs mb-4">
                  0{idx + 1}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {act}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  Experiential opportunities to build confidence, teamwork, critical debate, and grassroots project execution skills.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-700">
                <span className="font-semibold text-stone-800">Engagement</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Join Leadership CTA */}
        <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-stone-900">
              Are you between 18–28 years old in West Bengal?
            </h4>
            <p className="text-xs text-stone-600">
              Apply to join our annual Youth Leadership Cohort and represent your district in statewide forums.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenVolunteer}
            className="px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs whitespace-nowrap transition-colors cursor-pointer"
          >
            Apply for Leadership Track
          </button>
        </div>

      </div>
    </section>
  );
};
