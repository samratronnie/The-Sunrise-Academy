import React from 'react';
import { Heart, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface DonationSectionProps {
  onOpenDonate: (presetAmount?: number) => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ onOpenDonate }) => {
  return (
    <section id="donate" className="py-16 md:py-24 bg-[#141824] text-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Support Our Mission</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4 text-balance">
            {WBYEF_DATA.donation.heading}
          </h2>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
            {WBYEF_DATA.donation.subHeading}
          </p>
        </div>

        {/* 2-Column: Impact Points & Donation Banner Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          
          {/* Left: Your Support Helps Us */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-6">
                Your Support Helps Us:
              </h3>

              <div className="space-y-3.5 mb-6">
                {WBYEF_DATA.donation.impactPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span>Section 80G Tax Exemption Certified</span>
              <span className="text-amber-400 font-semibold">100% Free Youth Beneficiary</span>
            </div>
          </div>

          {/* Right: Donation Banner Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between text-center items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center mx-auto mb-6">
                <Heart className="w-7 h-7 text-white fill-white/30" />
              </div>

              {/* Exact Donation Banner text requested */}
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
                {WBYEF_DATA.donation.banner}
              </h3>

              <p className="text-xs sm:text-sm text-amber-100 leading-relaxed mb-8">
                Every rupee is transparently invested in rural camps, digital terminals, test series, and youth empowerment across Bengal.
              </p>
            </div>

            {/* CTA Button requested: Donate Now */}
            <button
              type="button"
              onClick={() => onOpenDonate()}
              className="w-full py-4 px-6 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-bold text-base shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 fill-amber-700 text-amber-700" />
              <span>Donate Now</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
