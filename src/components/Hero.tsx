import React from 'react';
import { Heart, Users, Sparkles, CheckCircle2, ArrowRight, Compass } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface HeroProps {
  onOpenDonate: (presetAmount?: number) => void;
  onOpenVolunteer: () => void;
  onJoinMission: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDonate,
  onOpenVolunteer,
  onJoinMission,
}) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-stone-200"
    >
      {/* Subtle Warm Background Ambient Circles */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subheading, CTAs & Proof Points */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Curatorial Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1.5 rounded-md mb-6 border border-amber-200/60">
              <span>Youth Empowerment</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span>Across All 23 Districts of Bengal</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span>80G Tax-Exempt</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.14] mb-6 text-balance">
              {WBYEF_DATA.hero.mainHeading}
            </h1>

            {/* Sub Heading */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8">
              {WBYEF_DATA.hero.subHeading}
            </p>

            {/* Hero Action Buttons: Join Our Mission, Become a Volunteer, Donate Now */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onJoinMission}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm sm:text-base shadow-sm transition-all duration-150 active:scale-95 cursor-pointer"
                aria-label="Join Our Mission"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Join Our Mission</span>
              </button>

              <button
                type="button"
                onClick={onOpenVolunteer}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm sm:text-base border border-stone-300 shadow-sm transition-all duration-150 hover:border-stone-400 active:scale-95 cursor-pointer"
                aria-label="Become a Volunteer"
              >
                <Users className="w-4 h-4 text-amber-700" />
                <span>Become a Volunteer</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm sm:text-base shadow-sm transition-all duration-150 hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Donate Now"
              >
                <Heart className="w-4 h-4 fill-white/20 text-white" />
                <span>Donate Now</span>
              </button>
            </div>

            {/* Trust Points / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-stone-200/80 w-full max-w-xl">
              {WBYEF_DATA.hero.highlights.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-stone-700">{point}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Showcase depicting Rural & Urban youth learning, Career counselling & Mentorship */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-2.5 bg-gradient-to-br from-amber-200/50 via-white to-stone-200/60 shadow-lg border border-stone-200">
              
              {/* Main Visual Display Card */}
              <div className="relative overflow-hidden rounded-xl bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-900 to-amber-950 flex flex-col justify-between p-6">
                  
                  {/* Visual Header Tag */}
                  <div className="flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      Youth Career & Skill Camp · Bengal
                    </span>
                    <span className="text-xs text-stone-300 font-medium bg-black/40 px-2.5 py-1 rounded-md">
                      Free Youth Initiative
                    </span>
                  </div>

                  {/* SVG Illustration depicting Youth Learning, Career Guidance & Mentorship */}
                  <div className="my-auto py-3 flex items-center justify-center">
                    <svg
                      viewBox="0 0 400 220"
                      className="w-full h-auto max-h-48 drop-shadow-md"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Illustration of rural and urban youth in skill development and career mentoring"
                    >
                      {/* Sunrise over Bengal landscape */}
                      <circle cx="200" cy="100" r="46" fill="#F59E0B" fillOpacity="0.8" />
                      <path d="M40 160 Q 200 120 360 160" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 4" />
                      
                      {/* Workshop table */}
                      <rect x="50" y="145" width="300" height="12" rx="4" fill="#78350F" />
                      <rect x="65" y="157" width="12" height="40" rx="2" fill="#451A03" />
                      <rect x="323" y="157" width="12" height="40" rx="2" fill="#451A03" />

                      {/* Rural youth student (notebook / exam prep) */}
                      <circle cx="95" cy="118" r="14" fill="#FCD34D" />
                      <path d="M80 145 C80 128, 110 128, 110 145 Z" fill="#D97706" />
                      <polygon points="90,140 95,134 100,140 105,134 110,140 95,145" fill="#FFFFFF" />

                      {/* Young woman leader (digital tablet / career roadmap) */}
                      <circle cx="160" cy="114" r="14" fill="#FDE68A" />
                      <path d="M144 145 C144 125, 176 125, 176 145 Z" fill="#9333EA" />
                      <rect x="153" y="132" width="14" height="10" rx="2" fill="#E9D5FF" />

                      {/* Urban youth scholar (laptop/interview readiness) */}
                      <circle cx="230" cy="120" r="14" fill="#FCD34D" />
                      <path d="M214 145 C214 130, 246 130, 246 145 Z" fill="#059669" />

                      {/* Mentor / Career Counsellor */}
                      <circle cx="310" cy="98" r="16" fill="#FDE68A" />
                      <path d="M292 145 C292 118, 328 118, 328 145 Z" fill="#2563EB" />
                      <line x1="298" y1="120" x2="265" y2="135" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Scrim Overlay & Caption */}
                  <div className="z-10 pt-2 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span className="font-medium text-amber-200">
                        14,200+ Youth Counselled & Trained
                      </span>
                      <span className="text-stone-400">Village Camps & City Centers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Feature Banner Below Image */}
              <div className="mt-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs shrink-0">
                    WB
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-900 leading-tight">
                      “From Classroom to Career across West Bengal”
                    </p>
                    <p className="text-[11px] text-stone-600">
                      Rural Outreach · Women Empowerment · Mentorship
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onJoinMission}
                  className="text-xs font-semibold text-amber-700 hover:text-amber-800 whitespace-nowrap cursor-pointer"
                >
                  Explore →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
