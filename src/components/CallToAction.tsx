import React from 'react';
import { Heart, Mail, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';

interface CallToActionProps {
  onOpenDonate: () => void;
  onScrollToContact: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onOpenDonate,
  onScrollToContact,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#121620] text-white relative overflow-hidden">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Movement for Hope</span>
          </div>

          {/* Heading requested: Together We Can Transform Lives */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6 text-balance">
            {ACADEMY_DATA.callToAction.heading}
          </h2>

          {/* Subheading requested */}
          <p className="text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto mb-10">
            {ACADEMY_DATA.callToAction.subHeading}
          </p>

          {/* Buttons requested: Donate Now & Contact Us */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={onOpenDonate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-base shadow-lg transition-all duration-150 hover:shadow-xl active:scale-95 cursor-pointer"
              aria-label="Donate Now to Support Our Mission"
            >
              <Heart className="w-5 h-5 fill-stone-950/30 text-stone-950" />
              <span>Donate Now</span>
            </button>

            <button
              type="button"
              onClick={onScrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all duration-150 active:scale-95 cursor-pointer"
              aria-label="Contact The Sunrise Academy"
            >
              <Mail className="w-5 h-5 text-amber-300" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Transparent Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10 text-stone-400 text-xs">
            <div>
              <div className="text-white font-semibold text-sm mb-0.5">80G & 12A</div>
              <span>Tax Deductible in India</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-0.5">85% To Programs</div>
              <span>Direct Classroom Funding</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-0.5">100% Free</div>
              <span>For Beneficiary Students</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-0.5">Annual Audits</div>
              <span>Transparent Governance</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
