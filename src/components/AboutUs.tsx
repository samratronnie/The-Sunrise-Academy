import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Award, CheckCircle2, HeartHandshake, Eye } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';

interface AboutUsProps {
  onOpenDonate?: () => void;
  onOpenVolunteer?: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="about-us" className="py-16 md:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual Showcase & Heritage Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl bg-stone-100 p-3 border border-stone-200 shadow-sm">
                
                {/* Visual Community Snapshot */}
                <div className="relative rounded-xl overflow-hidden bg-stone-900 aspect-[4/3] p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-amber-300 bg-black/40 px-3 py-1 rounded-full border border-amber-500/20">
                      Behala, Kolkata Center
                    </span>
                    <span className="text-stone-300">Serving Since 2016</span>
                  </div>

                  {/* SVG Graphics representing Sunrise & Community */}
                  <div className="my-auto py-2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 320 180"
                      className="w-full h-auto max-h-36 drop-shadow-md"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Sunrise Academy Community Foundation graphic"
                    >
                      <path
                        d="M30 150 C 90 90, 230 90, 290 150"
                        stroke="#F59E0B"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                      />
                      <circle cx="160" cy="110" r="36" fill="#EA580C" fillOpacity="0.85" />
                      <path d="M10 160 Q 160 140 310 160" stroke="#78350F" strokeWidth="4" />
                      {/* Family/Community group silhouette */}
                      <circle cx="120" cy="130" r="10" fill="#FDE68A" />
                      <path d="M108 155 C 108 142, 132 142, 132 155 Z" fill="#F59E0B" />
                      
                      <circle cx="160" cy="120" r="12" fill="#FFFFFF" />
                      <path d="M145 155 C 145 135, 175 135, 175 155 Z" fill="#FBBF24" />

                      <circle cx="200" cy="130" r="10" fill="#FDE68A" />
                      <path d="M188 155 C 188 142, 212 142, 212 155 Z" fill="#F59E0B" />
                    </svg>
                  </div>

                  <div className="pt-2 border-t border-white/10 text-xs text-stone-300 flex items-center justify-between">
                    <span className="font-medium text-amber-200">100% Free for Eligible Families</span>
                    <span>Grassroots Community Trust</span>
                  </div>
                </div>

                {/* Core Institutional Fact Sheet */}
                <div className="mt-3 p-4 bg-white rounded-xl border border-stone-200/90 grid grid-cols-2 gap-3 text-left">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-700">
                      Legal Status
                    </div>
                    <div className="text-xs font-semibold text-stone-900 mt-0.5">
                      Registered Charitable Trust
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-700">
                      Governance
                    </div>
                    <div className="text-xs font-semibold text-stone-900 mt-0.5">
                      Independent Board & Audited
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Heading, Content & Learn More CTA */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-md mb-4 border border-amber-200/50">
                <span>About The Organization</span>
                <span aria-hidden="true">·</span>
                <span>Our Heritage</span>
              </div>

              {/* Exact heading requested: Who We Are */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-6">
                {ACADEMY_DATA.aboutUs.heading}
              </h2>

              {/* Exact content requested */}
              <p className="text-base sm:text-lg md:text-xl text-stone-700 leading-relaxed mb-6 font-medium">
                {ACADEMY_DATA.aboutUs.content}
              </p>

              {/* Supporting narrative & principles */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
                {ACADEMY_DATA.aboutUs.detailedStory}
              </p>

              {/* Core Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8 pt-4 border-t border-stone-100">
                {ACADEMY_DATA.aboutUs.principles.map((pr, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-stone-50 border border-stone-200/60">
                    <div className="text-xs font-bold text-amber-800 mb-1">
                      {pr.title}
                    </div>
                    <p className="text-xs text-stone-600 leading-normal">
                      {pr.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
                  aria-label="Learn More about The Sunrise Academy"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Learn More Detailed Modal Dialog */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="learn-more-title"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span>Organizational Charter</span>
              <span aria-hidden="true">·</span>
              <span>The Sunrise Academy</span>
            </div>

            <h3 id="learn-more-title" className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              Our Vision, Governance & Accountability
            </h3>

            <div className="space-y-4 text-sm text-stone-600 leading-relaxed mb-6">
              <p>
                <strong>The Sunrise Academy</strong> was established as a registered non-profit society in Kolkata with a simple yet uncompromising mandate: <em>No child should ever abandon education due to poverty or family hardship.</em>
              </p>
              <p>
                Inspired by high-impact philanthropic institutions like the Bharti Foundation and Education Above All, our operations are built on three foundational pillars:
              </p>
              
              <ul className="space-y-2 pl-4 list-disc text-stone-700">
                <li>
                  <strong>Equitable Academic Access:</strong> We provide full textbook sets, school uniforms, geometry kits, and after-school remedial mentoring to first-generation learners.
                </li>
                <li>
                  <strong>Digital Bridge:</strong> Through our 25-seat computer lab, students learn computer literacy, basic coding, internet research, and functional English to ensure they thrive in modern economies.
                </li>
                <li>
                  <strong>Community-Led Governance:</strong> Our board comprises seasoned educators, social workers, and community elders who audit programs quarterly.
                </li>
              </ul>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-stone-800 text-xs">
                <span className="font-bold text-amber-900 block mb-1">Tax Exemption Certification</span>
                All contributions to The Sunrise Academy qualify for tax deductions under Section 80G and 12A of the Income Tax Act. Registration Number: {ACADEMY_DATA.brand.registrationNumber}.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
              {onOpenDonate && (
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    onOpenDonate(1000);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium transition-colors shadow-xs cursor-pointer"
                >
                  Support Our Mission
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
