import React from 'react';
import { Target, Compass, Sparkles, ArrowRight, BookOpen, Briefcase, Laptop, Rocket, Users, HeartHandshake, Trees } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

export const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Guiding Principles & Commitments</span>
            <span aria-hidden="true">·</span>
            <span>WBYEF Charter</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Vision & Mission
          </h2>
        </div>

        {/* Vision & Mission 2-Column Institutional Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          
          {/* Card 1: Our Vision */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
                <Target className="w-3.5 h-3.5" />
                <span>{WBYEF_DATA.visionMission.visionHeading}</span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-amber-100 font-medium leading-relaxed italic mb-6">
                {WBYEF_DATA.visionMission.visionQuote}
              </blockquote>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                {WBYEF_DATA.visionMission.visionSubtext}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span>Goal: Statewide Youth Inclusion</span>
              <span className="text-amber-400 font-medium">All 23 Districts</span>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-6 border border-amber-200">
                <Compass className="w-3.5 h-3.5 text-amber-700" />
                <span>{WBYEF_DATA.visionMission.missionHeading}</span>
              </div>

              <div className="text-lg sm:text-xl font-bold text-stone-900 mb-4 tracking-tight">
                {WBYEF_DATA.visionMission.missionPillars}
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {WBYEF_DATA.visionMission.missionContent}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between text-xs text-stone-700">
              <span className="font-semibold text-stone-800">Action Oriented</span>
              <span className="text-emerald-700 font-bold">100% Free Youth Services</span>
            </div>
          </div>

        </div>

        {/* CORE FOCUS AREAS Heading & Grid */}
        <div className="pt-6">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
              Core Focus Areas
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Where We Drive Sustainable Transformation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WBYEF_DATA.visionMission.focusAreas.map((area, idx) => (
              <div
                key={area.id}
                className="group p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:border-amber-400 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-xl mb-4 group-hover:scale-105 transition-transform">
                    {area.icon}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {area.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-stone-700 group-hover:text-amber-800">
                  <span>Priority Area</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
