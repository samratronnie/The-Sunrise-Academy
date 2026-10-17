import React, { useState, useEffect } from 'react';
import { Sun, Heart, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';

interface NavbarProps {
  onOpenDonate: (presetAmount?: number) => void;
  onOpenVolunteer: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDonate,
  onOpenVolunteer,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about-us', id: 'about-us' },
    { label: 'Our Impact', href: '#impact', id: 'impact' },
    { label: 'Facilities', href: '#facilities', id: 'facilities' },
    { label: 'Contact Us', href: '#contact-us', id: 'contact-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification Strip with NGO Registration & 80G Trust */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              Non-Profit Organization
            </span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="hidden sm:inline text-slate-300">
              Reg: {ACADEMY_DATA.brand.registrationNumber} (80G & 12A Certified)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs shrink-0">
            <a
              href={`tel:${ACADEMY_DATA.brand.phone.replace(/\s+/g, '')}`}
              className="text-slate-300 hover:text-white transition-colors hidden md:inline"
            >
              📞 {ACADEMY_DATA.brand.phone}
            </a>
            <button
              onClick={onOpenVolunteer}
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Join as Volunteer →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
            : 'bg-[#faf9f6] border-b border-stone-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
            {/* Zone 1: Single text element Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 sm:gap-2.5 text-stone-900 group whitespace-nowrap shrink-0"
              aria-label="The Sunrise Academy Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 shrink-0">
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                  The Sunrise Academy
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-700 font-semibold -mt-1 hidden md:block">
                  Kolkata · Registered NGO
                </span>
              </div>
            </a>

            {/* Zone 2: 4-5 concise single-line nav links */}
            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                      isActive
                        ? 'text-stone-900 font-semibold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary CTA Button + Support toggle */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 md:px-5 sm:py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 hover:shadow active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
                aria-label="Donate Now"
              >
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white/30 text-white" />
                <span>Donate Now</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors shrink-0"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-50 text-amber-900 font-semibold'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-600 text-white font-medium text-sm shadow-sm active:bg-amber-700"
              >
                <Heart className="w-4 h-4 fill-white/20 text-white" />
                <span>Donate Now · Support Our Mission</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium text-sm"
              >
                <span>Become a Volunteer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
