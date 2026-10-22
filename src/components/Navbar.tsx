import React, { useState, useEffect } from 'react';
import { Sun, Heart, Menu, X, Users, Sparkles, LogIn, User } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';
import { useAuth } from '../context/AuthContext.tsx';

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
  const { user, openAuthModal } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about-us', id: 'about-us' },
    { label: 'Programmes', href: '#programmes', id: 'programmes' },
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
      {/* Top Notification Strip with NGO Registration & Tagline */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {WBYEF_DATA.brand.acronym}
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-slate-300 font-medium hidden sm:inline">
              "{WBYEF_DATA.brand.tagline}"
            </span>
            <span className="text-slate-600 hidden md:inline">·</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">
              Reg: {WBYEF_DATA.brand.regNumber} ({WBYEF_DATA.brand.taxExemption})
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs shrink-0">
            <a
              href={`tel:${WBYEF_DATA.brand.phone.replace(/\s+/g, '')}`}
              className="text-slate-300 hover:text-white transition-colors hidden md:inline"
            >
              📞 {WBYEF_DATA.brand.phone}
            </a>
            <button
              onClick={onOpenVolunteer}
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
            >
              Join As Volunteer →
            </button>
            <span className="text-slate-700 hidden sm:inline">|</span>
            {user ? (
              <button
                type="button"
                onClick={() => openAuthModal()}
                className="hidden sm:inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-medium transition-colors cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span className="truncate max-w-[120px]">{user.displayName || user.email?.split('@')[0]}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => openAuthModal('signin')}
                className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
            : 'bg-[#FAF8F5] border-b border-stone-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
            
            {/* Zone 1: Logo: WBYEF and Full Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 text-stone-900 group whitespace-nowrap shrink-0"
              aria-label="West Bengal Youth Empowerment Foundation Home"
            >
              {/* Logo: WBYEF Badge */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-xs sm:text-sm tracking-wider shadow-sm transition-transform group-hover:scale-105 shrink-0">
                WBYEF
              </div>

              <div className="flex flex-col">
                <span className="hidden sm:inline font-serif text-sm sm:text-base md:text-lg font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors leading-tight">
                  West Bengal Youth Empowerment Foundation
                </span>
                <span className="sm:hidden font-serif text-base font-bold tracking-tight text-stone-900">
                  WBYEF Foundation
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-700 font-semibold hidden md:block">
                  Social Welfare Organisation · West Bengal
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600"
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

            {/* Zone 3: Right-Side CTA Buttons: Become a Volunteer & Donate Now + Auth Button */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {user ? (
                <button
                  type="button"
                  onClick={() => openAuthModal()}
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs sm:text-sm transition-colors border border-stone-300 cursor-pointer"
                  aria-label="My Account"
                >
                  <User className="w-3.5 h-3.5 text-amber-700" />
                  <span className="truncate max-w-[85px]">{user.displayName?.split(' ')[0] || 'Account'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => openAuthModal('signin')}
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs sm:text-sm transition-colors border border-stone-300 cursor-pointer"
                  aria-label="Sign In"
                >
                  <LogIn className="w-3.5 h-3.5 text-amber-700" />
                  <span>Sign In</span>
                </button>
              )}

              <button
                type="button"
                onClick={onOpenVolunteer}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs sm:text-sm transition-colors border border-stone-300 cursor-pointer"
                aria-label="Become a Volunteer"
              >
                <Users className="w-3.5 h-3.5 text-amber-700" />
                <span>Become a Volunteer</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
                aria-label="Donate Now"
              >
                <Heart className="w-3.5 h-3.5 fill-white/20 text-white" />
                <span>Donate Now</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors shrink-0 cursor-pointer"
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
              {user ? (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/80 mb-1">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-7 h-7 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                      {user.displayName?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <div className="flex flex-col truncate text-left">
                      <span className="text-xs font-semibold text-stone-800 truncate">{user.displayName || 'WBYEF Member'}</span>
                      <span className="text-[10px] text-stone-500 truncate">{user.email}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAuthModal();
                    }}
                    className="px-2.5 py-1 text-xs font-semibold text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
                  >
                    Account
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAuthModal('signin');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 hover:bg-stone-50 font-medium text-sm"
                >
                  <LogIn className="w-4 h-4 text-amber-700" />
                  <span>Member Sign In</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 hover:bg-stone-50 font-medium text-sm"
              >
                <Users className="w-4 h-4 text-amber-700" />
                <span>Become a Volunteer</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-600 text-white font-medium text-sm shadow-sm active:bg-amber-700"
              >
                <Heart className="w-4 h-4 fill-white/20 text-white" />
                <span>Donate Now · Support WBYEF</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
