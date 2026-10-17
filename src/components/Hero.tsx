import React from 'react';
import { Heart, Users, BookOpen, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';

interface HeroProps {
  onOpenDonate: (presetAmount?: number) => void;
  onOpenVolunteer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-stone-200">
      {/* Subtle Warm Background Ambient Circles */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subheading, CTAs & Proof Points */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Curatorial Kicker with Clean Typographic Separators */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1.5 rounded-md mb-6 border border-amber-200/60">
              <span>Non-Profit Organization</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span>Kolkata, India</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span>80G Tax-Exempt</span>
            </div>

            {/* Main Heading (text-wrap: balance applied) */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12] mb-6 text-balance">
              {ACADEMY_DATA.hero.mainHeading}
            </h1>

            {/* Sub Heading */}
            <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mb-8">
              {ACADEMY_DATA.hero.subHeading}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-base shadow-sm transition-all duration-150 hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Donate Now to The Sunrise Academy"
              >
                <Heart className="w-5 h-5 fill-white/20 text-white" />
                <span>Donate Now</span>
              </button>

              <button
                type="button"
                onClick={onOpenVolunteer}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-stone-50 text-stone-800 font-semibold text-base border border-stone-300 shadow-sm transition-all duration-150 hover:border-stone-400 active:scale-95 cursor-pointer"
                aria-label="Become a Volunteer at The Sunrise Academy"
              >
                <Users className="w-5 h-5 text-amber-700" />
                <span>Become a Volunteer</span>
              </button>
            </div>

            {/* Trust Points / Highlights with Subtle Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-6 border-t border-stone-200/80 w-full max-w-xl">
              {ACADEMY_DATA.hero.trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-stone-700">{point}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Composition illustrating Children Learning, Community Outreach, Volunteer Classes */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-2 bg-gradient-to-br from-amber-200/50 via-white to-stone-200/60 shadow-lg border border-stone-200">
              
              {/* Main Visual Display Card */}
              <div className="relative overflow-hidden rounded-xl bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
                {/* Visual Artwork Representing Positive Children Learning & Classroom Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-900 to-amber-950 flex flex-col justify-between p-6">
                  
                  {/* Visual Header Tag */}
                  <div className="flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      Classroom in Session · Kolkata
                    </span>
                    <span className="text-xs text-stone-300 font-medium bg-black/40 px-2.5 py-1 rounded-md">
                      Free Education Hub
                    </span>
                  </div>

                  {/* SVG Illustration of Classroom Joy & Hope */}
                  <div className="my-auto py-4 flex items-center justify-center">
                    <svg
                      viewBox="0 0 400 220"
                      className="w-full h-auto max-h-48 drop-shadow-md"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Illustration of children joyfully learning together at Sunrise Academy"
                    >
                      {/* Sunrise over horizon */}
                      <circle cx="200" cy="110" r="48" fill="#F59E0B" fillOpacity="0.8" />
                      <path d="M120 140 Q 200 110 280 140" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 4" />
                      
                      {/* Desk and students silhouette */}
                      <rect x="50" y="145" width="300" height="12" rx="4" fill="#78350F" />
                      <rect x="60" y="157" width="12" height="40" rx="2" fill="#451A03" />
                      <rect x="328" y="157" width="12" height="40" rx="2" fill="#451A03" />

                      {/* Student 1 (Girl reading) */}
                      <circle cx="95" cy="120" r="14" fill="#FCD34D" />
                      <path d="M80 145 C80 130, 110 130, 110 145 Z" fill="#D97706" />
                      {/* Open book */}
                      <polygon points="90,140 95,134 100,140 105,134 110,140 95,145" fill="#FFFFFF" />

                      {/* Student 2 (Student raising hand with hope) */}
                      <circle cx="160" cy="115" r="14" fill="#FDE68A" />
                      <path d="M144 145 C144 125, 176 125, 176 145 Z" fill="#2563EB" />
                      {/* Raised hand */}
                      <line x1="172" y1="125" x2="182" y2="100" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" />

                      {/* Student 3 (Collaborative study) */}
                      <circle cx="230" cy="122" r="14" fill="#FCD34D" />
                      <path d="M214 145 C214 132, 246 132, 246 145 Z" fill="#059669" />

                      {/* Volunteer Educator standing warmly */}
                      <circle cx="310" cy="98" r="16" fill="#FDE68A" />
                      <path d="M292 145 C292 118, 328 118, 328 145 Z" fill="#EA580C" />
                      {/* Pointer/Notebook */}
                      <line x1="298" y1="120" x2="270" y2="135" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Scrim Overlay & Caption */}
                  <div className="z-10 pt-2 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span className="font-medium text-amber-200">
                        1,000+ Students actively learning
                      </span>
                      <span className="text-stone-400">Class 1 to 10 & Digital Lab</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Micro-Pill Box */}
              <div className="mt-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0">
                    RM
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-900 leading-tight">
                      “From struggling in school to scoring 84% in boards”
                    </p>
                    <p className="text-[11px] text-stone-700">
                      Riya Mondal · Class 10 Scholar
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('testimonials');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-amber-700 hover:text-amber-800 whitespace-nowrap"
                >
                  Read Story →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
