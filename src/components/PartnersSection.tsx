import React from 'react';
import { Handshake, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface PartnersSectionProps {
  onOpenPartner: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenPartner }) => {
  return (
    <section id="partners" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Institutional Alliances</span>
            <span aria-hidden="true">·</span>
            <span>Collaborate for Change</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            {WBYEF_DATA.partners.heading}
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {WBYEF_DATA.partners.subHeading}
          </p>
        </div>

        {/* 11 Partner Types Badges / Cards */}
        <div className="mb-14">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-6">
            We Welcome Collaboration With
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {WBYEF_DATA.partners.partnerTypes.map((type, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-amber-400 hover:bg-amber-50/20 transition-all flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-900">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Collaboration Card & CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100 mb-2">
              Ready to Create Scalable Youth Impact?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Whether you are a university seeking NSS career camps, a corporate deploying CSR funds for digital literacy, or an industry partner offering student internships, we invite you to build with us.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenPartner}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            Partner With Us
          </button>
        </div>

      </div>
    </section>
  );
};
