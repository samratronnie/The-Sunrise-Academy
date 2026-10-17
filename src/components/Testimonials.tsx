import React, { useState } from 'react';
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { ACADEMY_DATA, Testimonial } from '../data/academyData.ts';

export const Testimonials: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'student', label: 'Students & Scholars' },
    { id: 'parent', label: 'Parents & Families' },
    { id: 'volunteer', label: 'Volunteers & Educators' },
    { id: 'partner', label: 'Doctors & Partners' },
  ];

  const filtered = filterCategory === 'all'
    ? ACADEMY_DATA.testimonials
    : ACADEMY_DATA.testimonials.filter((t) => t.category === filterCategory);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % filtered.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const featured = filtered[activeSlide] || filtered[0];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
              <span>Voices of Hope & Transformation</span>
              <span aria-hidden="true">·</span>
              <span>Our Community</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              Stories from the Heart of Sunrise Academy
            </h2>
          </div>

          <p className="text-sm sm:text-base text-stone-600 max-w-md">
            Hear directly from the students, parents, and volunteers whose lives have been transformed through quality education and collective hope.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg max-w-fit mb-10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setFilterCategory(cat.id);
                setActiveSlide(0);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Editorial Testimonial Spotlight */}
        {featured && (
          <div className="relative rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white p-8 sm:p-12 mb-12 shadow-md overflow-hidden">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full mb-6 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{featured.highlight}</span>
              </div>

              {/* Large Pull Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-stone-100 mb-8 font-normal italic">
                “{featured.quote}”
              </blockquote>

              {/* Author Attribution */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="font-serif text-lg font-bold text-white">
                    {featured.author}
                  </div>
                  <div className="text-xs text-stone-300 flex items-center gap-2 mt-0.5">
                    <span>{featured.role}</span>
                    <span aria-hidden="true" className="text-stone-500">·</span>
                    <span>{featured.location}</span>
                    <span aria-hidden="true" className="text-stone-500">·</span>
                    <span className="text-amber-400">{featured.year}</span>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-400 tabular-nums mr-2">
                    {activeSlide + 1} / {filtered.length}
                  </span>
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3-Column Testimonials Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveSlide(idx)}
              className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                activeSlide === idx
                  ? 'bg-amber-50/50 border-amber-400 shadow-xs'
                  : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-medium text-amber-800">{item.year}</span>
                  <span className="text-stone-700">{item.location}</span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed mb-4 line-clamp-4">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="text-sm font-bold text-stone-900">
                  {item.author}
                </div>
                <div className="text-xs text-stone-500">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
