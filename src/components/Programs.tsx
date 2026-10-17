import React, { useState } from 'react';
import { BookOpen, GraduationCap, Laptop, Sparkles, Check, ArrowRight } from 'lucide-react';
import { ACADEMY_DATA, Program } from '../data/academyData.ts';

interface ProgramsProps {
  onOpenDonate: (amount?: number) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenDonate }) => {
  const [selectedProgram, setSelectedProgram] = useState<string>(ACADEMY_DATA.programs[0].id);

  const activeProg = ACADEMY_DATA.programs.find((p) => p.id === selectedProgram) || ACADEMY_DATA.programs[0];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Our Pedagogical Model</span>
            <span aria-hidden="true">·</span>
            <span>Sustainable Impact</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            Transformative Educational Programs
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            From early childhood literacy to secondary board preparation and youth digital careers, our structured programs nurture long-term generational upliftment.
          </p>
        </div>

        {/* 2-Column Institutional Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Program Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {ACADEMY_DATA.programs.map((prog, idx) => {
              const isSelected = prog.id === activeProg.id;
              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => setSelectedProgram(prog.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-400 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-amber-800">
                      0{idx + 1} · {prog.beneficiaries}
                    </span>
                    <span className="text-stone-700 font-medium">{prog.ageGroup}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2">
                    {prog.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Program Feature Card */}
          <div className="lg:col-span-7 bg-[#F8F7F3] rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-md">
                {activeProg.beneficiaries}
              </span>
              <span className="text-xs text-stone-700 font-semibold">
                Cohort: {activeProg.ageGroup}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
              {activeProg.title}
            </h3>

            <p className="text-sm sm:text-base font-medium text-amber-900/90 mb-4 italic">
              “{activeProg.tagline}”
            </p>

            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              {activeProg.description}
            </p>

            <div className="bg-white p-5 rounded-xl border border-stone-200 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                Key Deliverables & Measured Milestones
              </h4>
              <ul className="space-y-2.5">
                {activeProg.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200/80">
              <div className="text-xs text-stone-500">
                100% Free Tuition & Study Materials Provided
              </div>
              <button
                type="button"
                onClick={() => onOpenDonate(1000)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs shadow-xs transition-colors cursor-pointer"
              >
                Sponsor a Student in this Program
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
