import React, { useState } from 'react';
import { Sun, Heart, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';

interface FooterProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Mandate Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center text-white">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                {ACADEMY_DATA.brand.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
              {ACADEMY_DATA.brand.tagline}. A registered charitable non-profit organization providing free quality education, digital training, and holistic nourishment to underprivileged children in Kolkata.
            </p>

            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>80G & 12A Certified · Tax Exempted Contributions</span>
              </div>
              <div className="text-[11px] text-stone-500 pl-6">
                Reg No: {ACADEMY_DATA.brand.registrationNumber}
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  onClick={(e) => scrollToSection(e, '#about-us')}
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  onClick={(e) => scrollToSection(e, '#impact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  onClick={(e) => scrollToSection(e, '#facilities')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, '#testimonials')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  onClick={(e) => scrollToSection(e, '#contact-us')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Desk
            </h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{ACADEMY_DATA.brand.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${ACADEMY_DATA.brand.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {ACADEMY_DATA.brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="truncate">
                  <a
                    href={`mailto:${ACADEMY_DATA.brand.email}`}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {ACADEMY_DATA.brand.email}
                  </a>
                  <a
                    href={`mailto:${ACADEMY_DATA.brand.secondaryEmail}`}
                    className="hover:text-white transition-colors text-[11px] text-stone-500 block truncate"
                  >
                    {ACADEMY_DATA.brand.secondaryEmail}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Action & Newsletter Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed">
              Receive our quarterly student achievement bulletin and community impact reports.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed! Thank you for staying connected.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 mb-6">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-amber-600"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium rounded-md transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={onOpenDonate}
                className="w-full py-2.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white/20 text-white" />
                <span>Donate Now</span>
              </button>
              <button
                type="button"
                onClick={onOpenVolunteer}
                className="w-full py-2 px-3 rounded-lg border border-stone-700 hover:bg-stone-900 text-stone-300 text-xs font-medium transition-colors cursor-pointer"
              >
                Volunteer With Us
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Operational Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} The Sunrise Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">Non-Profit Educational Society</span>
            <span>·</span>
            <span className="text-stone-400">Section 80G Tax Exemption</span>
            <span>·</span>
            <span className="text-stone-400">Behala, Kolkata</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
