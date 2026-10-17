import React, { useState } from 'react';
import { Users, GraduationCap, Sparkles, HeartHandshake, ArrowRight, ShieldCheck, PieChart } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';
import { calculateDonationImpact, formatINR } from '../utils/ngo-logic.ts';

interface ImpactStatsProps {
  onOpenDonate: (amount?: number) => void;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ onOpenDonate }) => {
  const [calculatorAmount, setCalculatorAmount] = useState<number>(1000);
  const impact = calculateDonationImpact(calculatorAmount);

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'stat-1':
        return <Users className="w-6 h-6 text-amber-700" />;
      case 'stat-2':
        return <GraduationCap className="w-6 h-6 text-blue-700" />;
      case 'stat-3':
        return <Sparkles className="w-6 h-6 text-emerald-700" />;
      case 'stat-4':
        return <HeartHandshake className="w-6 h-6 text-orange-700" />;
      default:
        return <Users className="w-6 h-6 text-amber-700" />;
    }
  };

  return (
    <section id="impact" className="py-16 md:py-24 bg-[#F8F7F3] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-md mb-4 border border-amber-200/50">
            <span>Our Quantifiable Impact</span>
            <span aria-hidden="true">·</span>
            <span>Verified 2016 – 2026</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Transforming Futures by the Numbers
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            These numbers reflect real children reading their first books, mothers watching their daughters graduate, and volunteers dedicating their weekends to hope.
          </p>
        </div>

        {/* 4 Core Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACADEMY_DATA.impactStats.map((stat) => (
            <div
              key={stat.id}
              className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-amber-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center mb-6">
                  {getStatIcon(stat.id)}
                </div>

                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight tabular-nums mb-2">
                  {stat.metric}
                </div>

                <div className="text-base font-bold text-stone-800 mb-2">
                  {stat.label}
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-500">
                <span>Verified Metric</span>
                <span className="text-emerald-700 font-semibold">100% Direct Reach</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Impact Explorer & Transparent Utilization Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Donation Impact Calculator */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Interactive Impact Calculator
                </span>
                <span className="text-xs text-stone-600 font-medium">
                  See what your support accomplishes
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Your Contribution, Directly In Action
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                Slide or select an amount below to see the exact tangible resources provided to our students:
              </p>

              {/* Amount Quick Selectors */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[500, 1000, 2500, 5000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setCalculatorAmount(amt)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      calculatorAmount === amt
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {formatINR(amt)}
                  </button>
                ))}
              </div>

              {/* Range Slider */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-stone-700 mb-1 font-semibold">
                  <span>₹500</span>
                  <span className="font-bold text-amber-800 text-sm">{formatINR(calculatorAmount)}</span>
                  <span>₹10,000</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={calculatorAmount}
                  onChange={(e) => setCalculatorAmount(Number(e.target.value))}
                  className="w-full accent-amber-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
                  aria-label="Donation amount slider"
                />
              </div>

              {/* Dynamic Impact Display Box */}
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 mb-6">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                  Estimated Direct Outcomes
                </div>
                <p className="text-sm font-medium text-stone-800 mb-3">
                  {impact.impactSummary}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-amber-200/60 text-center">
                  <div className="bg-white p-2 rounded-lg">
                    <div className="font-bold text-stone-900 text-base tabular-nums">
                      {impact.studentsSupportedMonths}
                    </div>
                    <div className="text-[11px] text-stone-700">Student Mo.</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="font-bold text-stone-900 text-base tabular-nums">
                      {impact.mealsProvided}
                    </div>
                    <div className="text-[11px] text-stone-700">Meals</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="font-bold text-stone-900 text-base tabular-nums">
                      {impact.booksSupplied}
                    </div>
                    <div className="text-[11px] text-stone-700">Study Kits</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="font-bold text-stone-900 text-base tabular-nums">
                      {impact.digitalLabHours}
                    </div>
                    <div className="text-[11px] text-stone-700">Lab Hours</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenDonate(calculatorAmount)}
              className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Donate {formatINR(calculatorAmount)} Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Transparent Fund Utilization & Accountability */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Financial Accountability & Ethics</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                Where Every Rupee Goes
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Following guidelines inspired by the Bharti Foundation and global NGO transparency benchmarks, we publish verified annual audits and maintain minimal administrative overhead.
              </p>

              {/* Progress Bars for Fund Allocation */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                    <span>Direct Education & Student Nutrition</span>
                    <span className="text-amber-800 font-extrabold">85%</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-600 rounded-full" style={{ width: '85%' }} />
                  </div>
                  <span className="text-[11px] text-stone-700">
                    Teachers, uniforms, textbooks, digital lab terminals, nutritious lunches.
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                    <span>Campus Facilities & Health Checkups</span>
                    <span className="text-emerald-800 font-extrabold">10%</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '10%' }} />
                  </div>
                  <span className="text-[11px] text-stone-700">
                    RO drinking water systems, doctor screenings, sanitation supplies.
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                    <span>Governance & Statutory Compliance</span>
                    <span className="text-stone-800 font-extrabold">5%</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-600 rounded-full" style={{ width: '5%' }} />
                  </div>
                  <span className="text-[11px] text-stone-700">
                    Annual statutory audits, regulatory filings, safe communications.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80 text-xs text-stone-600">
              <span className="font-semibold text-stone-800">80G Tax Exemption:</span> All donors receive an automated tax receipt deductible under Section 80G of the Income Tax Act.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
