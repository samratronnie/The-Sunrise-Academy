import React, { useState } from 'react';
import { Laptop, BookOpen, Apple, Palette, ShieldCheck, School, Check, ArrowRight, X } from 'lucide-react';
import { ACADEMY_DATA, Facility } from '../data/academyData.ts';

interface FacilitiesProps {
  onOpenDonate?: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);

  const categories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'academic', label: 'Academic & Classrooms' },
    { id: 'technology', label: 'Technology & Lab' },
    { id: 'wellness', label: 'Health & Nutrition' },
    { id: 'arts', label: 'Creative & Sports' },
  ];

  const filteredFacilities = selectedCategory === 'all'
    ? ACADEMY_DATA.facilities
    : ACADEMY_DATA.facilities.filter((f) => f.category === selectedCategory);

  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'fac-1':
        return <Laptop className="w-5 h-5 text-blue-700" />;
      case 'fac-2':
        return <School className="w-5 h-5 text-amber-700" />;
      case 'fac-3':
        return <BookOpen className="w-5 h-5 text-emerald-700" />;
      case 'fac-4':
        return <Apple className="w-5 h-5 text-red-700" />;
      case 'fac-5':
        return <Palette className="w-5 h-5 text-purple-700" />;
      case 'fac-6':
        return <ShieldCheck className="w-5 h-5 text-teal-700" />;
      default:
        return <School className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <>
      <section id="facilities" className="py-16 md:py-24 bg-[#F8F7F3] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
              <span>Campus Infrastructure</span>
              <span aria-hidden="true">·</span>
              <span>Behala, Kolkata</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              World-Class Learning Facilities for Every Child
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              We believe a child’s learning environment shapes their aspirations. Our facilities match the highest standards of safety, hygiene, digital accessibility, and joyful discovery.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-xl max-w-fit mb-10 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Facilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((fac) => (
              <div
                key={fac.id}
                className="group bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-amber-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getFacilityIcon(fac.id)}
                    </div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      {fac.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {fac.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                    {fac.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    {fac.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-stone-700 truncate max-w-[190px]">
                    {fac.specs}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveFacility(fac)}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Facility Support Callout */}
          <div className="mt-12 p-6 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  Wish to sponsor equipment or books for our digital lab or library?
                </h4>
                <p className="text-xs text-stone-600">
                  You can donate refurbished laptops, children's literature, or science kits directly to our Behala campus.
                </p>
              </div>
            </div>
            {onOpenDonate && (
              <button
                type="button"
                onClick={() => onOpenDonate(2500)}
                className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs whitespace-nowrap transition-colors cursor-pointer"
              >
                Sponsor Equipment
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Facility Detail Modal */}
      {activeFacility && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setActiveFacility(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span>Facility Profile</span>
              <span aria-hidden="true">·</span>
              <span>{activeFacility.categoryLabel}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
              {activeFacility.title}
            </h3>

            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              {activeFacility.summary}
            </p>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 mb-6">
              <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                Key Standards & Amenities
              </div>
              <ul className="space-y-2">
                {activeFacility.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-stone-600 mb-6">
              <span className="font-semibold text-stone-800">Operational Specifications:</span> {activeFacility.specs}
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setActiveFacility(null)}
                className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
