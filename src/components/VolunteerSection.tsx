import React from 'react';
import { HeartHandshake, Users, ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface VolunteerSectionProps {
  onOpenVolunteer: () => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({ onOpenVolunteer }) => {
  return (
    <section id="volunteer" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Volunteer With Us</span>
            <span aria-hidden="true">·</span>
            <span>People-Powered Change</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            {WBYEF_DATA.volunteer.heading}
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {WBYEF_DATA.volunteer.subHeading}
          </p>
        </div>

        {/* Highlight Banner: One Volunteer. One Student. One Transformation. */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 text-white shadow-md mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-100 block mb-2">
              Our Core Creed
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              {WBYEF_DATA.volunteer.banner}
            </h3>
            <p className="text-xs sm:text-sm text-amber-50 leading-relaxed">
              Whether you are an educator, corporate executive, civil service officer, or university student, your mentorship opens doors that change lives forever.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenVolunteer}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-amber-900 font-bold text-sm shadow-sm transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            Become a Volunteer
          </button>
        </div>

        {/* 8 Volunteer Activities Grid */}
        <div className="mb-16">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-6">
            Ways You Can Contribute
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WBYEF_DATA.volunteer.activities.map((act, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-amber-400 transition-all flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug">
                    {act}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUR APPROACH: Sustainable Empowerment Framework & Impact Metrics */}
        <div id="approach" className="pt-10 border-t border-stone-200">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
              Our Approach
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Sustainable Empowerment Framework
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              A systematic, closed-loop methodology ensuring no youth is left unguided from first contact through sustained livelihood.
            </p>
          </div>

          {/* Sequential Framework Flow */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs mb-12 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[700px] gap-2">
              {WBYEF_DATA.approach.framework.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-stone-50 border border-stone-200/80 w-24">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                      Step 0{idx + 1}
                    </span>
                    <span className="font-serif text-sm font-bold text-stone-900 mt-1">
                      {step}
                    </span>
                  </div>
                  {idx < WBYEF_DATA.approach.framework.length - 1 && (
                    <span className="text-stone-400 font-bold text-sm select-none">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Impact Metrics Section */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-6">
              Verified Impact Metrics Across West Bengal
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {WBYEF_DATA.approach.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-stone-200 shadow-2xs"
                >
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight tabular-nums mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-stone-800 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
