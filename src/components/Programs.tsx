import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, Laptop, CheckCircle2, ArrowRight, BookOpen, School, Sparkles } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface ProgramsProps {
  onOpenDonate: (amount?: number) => void;
  onOpenVolunteer: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    WBYEF_DATA.programmes.categories[0].id
  );

  const currentCategory =
    WBYEF_DATA.programmes.categories.find((c) => c.id === activeCategory) ||
    WBYEF_DATA.programmes.categories[0];

  return (
    <section id="programmes" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Our Flagship Initiative</span>
            <span aria-hidden="true">·</span>
            <span>Career Advancement</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-2">
            {WBYEF_DATA.programmes.title}
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-amber-900/90 font-medium italic mb-4">
            {WBYEF_DATA.programmes.tagline}
          </p>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            A comprehensive, multi-track development initiative designed to transition young students from academic theory into competitive government service, high-growth corporate careers, and higher education.
          </p>
        </div>

        {/* 3 Main Programme Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Track Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {WBYEF_DATA.programmes.categories.map((cat, idx) => {
              const isSelected = cat.id === currentCategory.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50/80 border-amber-400 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-amber-800">
                      Track 0{idx + 1}
                    </span>
                    <span className="text-stone-700 font-semibold">{cat.items.length} Modules</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-stone-600">
                    {cat.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Program Feature Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-md">
                100% Free Coaching & Mentorship
              </span>
              <span className="text-xs text-stone-700 font-semibold">
                Bengal Youth Cohort
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              {currentCategory.title}
            </h3>

            <p className="text-sm font-medium text-amber-900/90 mb-6 italic">
              {currentCategory.tagline}
            </p>

            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200/90 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3.5">
                Key Focus Disciplines & Subjects
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCategory.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="font-medium text-stone-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
              <div className="text-xs text-stone-700">
                Weekly Mock Tests · Expert Faculty · Study Material Kits
              </div>
              <button
                type="button"
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs shadow-xs transition-colors cursor-pointer"
              >
                Volunteer as a Mentor / Educator
              </button>
            </div>
          </div>

        </div>

        {/* Dedicated Facilities Anchor & Campus Infrastructure */}
        <div id="facilities" className="pt-8">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
              Learning Facilities & Centers
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Modern Infrastructure for Equal Opportunity
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Equipped with high-speed internet, dedicated examination terminals, and quiet study rooms accessible to all enrolled youth in Behala, Kolkata and affiliated district hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Digital Computer & Testing Lab
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Workstations for online mock tests (SSC, Banking, Railways), typing speed drills, and digital literacy certifications.
              </p>
              <div className="text-[11px] font-semibold text-stone-700 pt-3 border-t border-stone-100">
                25 Online Testing Terminals · Power Backup
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Competitive Exam Reference Library
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Curated reference books, previous years’ solved papers, current affairs periodicals, and quiet study alcoves.
              </p>
              <div className="text-[11px] font-semibold text-stone-700 pt-3 border-t border-stone-100">
                2,000+ Exam Volumes · Daily Reading Space
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <School className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Career Counselling & Interview Pods
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Private chambers for one-on-one aptitude evaluation, mock personal interview panels, and university admission guidance.
              </p>
              <div className="text-[11px] font-semibold text-stone-700 pt-3 border-t border-stone-100">
                Dedicated Mentoring Rooms · Panel Tables
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
