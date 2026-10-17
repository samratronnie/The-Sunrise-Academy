import React from 'react';
import { Trees, Compass, CheckCircle2, Quote, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface RuralBengalInitiativeProps {
  onOpenVolunteer: () => void;
  onOpenDonate: () => void;
}

export const RuralBengalInitiative: React.FC<RuralBengalInitiativeProps> = ({
  onOpenVolunteer,
  onOpenDonate,
}) => {
  return (
    <section id="rural-initiative" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>{WBYEF_DATA.ruralInitiative.title}</span>
            <span aria-hidden="true">·</span>
            <span>Gram Panchayat Outreach</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            {WBYEF_DATA.ruralInitiative.heading}
          </h2>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-stone-800 mb-6">
            <span className="font-bold text-amber-900 block text-xs uppercase tracking-wider mb-1">
              Our Objective
            </span>
            <p className="text-sm sm:text-base font-medium text-stone-800">
              {WBYEF_DATA.ruralInitiative.objective}
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Featured Quote & Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Featured Quote & Rural Camp Visual */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white p-8 sm:p-10 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-8 border border-white/10">
                <Trees className="w-3.5 h-3.5" />
                <span>Grassroots Bengal</span>
              </div>

              {/* Exact Featured Quote */}
              <Quote className="w-12 h-12 text-amber-400/40 mb-4" />
              <blockquote className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug italic mb-8">
                {WBYEF_DATA.ruralInitiative.quote}
              </blockquote>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Rural students across Purulia, Bankura, Sundarbans, Jalpaiguri, and Malda often lack awareness of scholarships, government exams, and skill opportunities. We take mentors, digital tools, and counsellors directly to their doorsteps.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                160+ Villages Covered
              </span>
              <span className="text-amber-400 font-semibold">100% Free Rural Camps</span>
            </div>
          </div>

          {/* Right: Activities Checklist Cards */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Rural Camp Activities & Field Interventions
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Each Rural Bengal Camp brings a structured multi-track intervention into community centers, rural schools, and panchayat bhavans:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {WBYEF_DATA.ruralInitiative.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-stone-900 block leading-snug">
                        {act}
                      </span>
                      <span className="text-[11px] text-stone-500">
                        Conducted on-site by certified volunteer mentors
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-600 font-medium">
                Want to bring a WBYEF career camp to your village or school?
              </span>
              <button
                type="button"
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Join as Rural Volunteer
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
