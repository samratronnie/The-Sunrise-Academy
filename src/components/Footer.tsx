import React, { useState } from 'react';
import { Sparkles, Heart, Phone, MapPin, ShieldCheck, Check } from 'lucide-react';
import { WBYEF_DATA } from '../data/academyData.ts';

interface FooterProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  onOpenPartner: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonate,
  onOpenVolunteer,
  onOpenPartner,
}) => {
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-700 to-amber-500 flex items-center justify-center text-white font-black text-xs tracking-wider">
                {WBYEF_DATA.brand.acronym}
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white tracking-tight leading-snug">
                  {WBYEF_DATA.brand.name}
                </span>
                <span className="text-[11px] text-amber-400 font-medium">
                  "{WBYEF_DATA.brand.tagline}"
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
              A youth-centric social welfare organisation committed to enabling educational, professional, and social advancement for young people across West Bengal.
            </p>

            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{WBYEF_DATA.brand.taxExemption} · Tax Deductible Contributions</span>
              </div>
              <div className="text-[11px] text-stone-500 pl-6">
                Reg No: {WBYEF_DATA.brand.regNumber}
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
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
                  href="#programmes"
                  onClick={(e) => scrollToSection(e, '#programmes')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Programmes
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
                  href="#contact-us"
                  onClick={(e) => scrollToSection(e, '#contact-us')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenVolunteer}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPartner}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Partner With Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDonate}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Donate
                </button>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white mt-6 mb-3">
              Social Media
            </h4>
            <div className="flex flex-col gap-1.5 text-xs text-stone-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Contact & Stay Connected Column (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{WBYEF_DATA.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${WBYEF_DATA.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {WBYEF_DATA.contact.phone}
                </a>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed! You will receive our monthly youth bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <span className="text-[11px] text-stone-400 block font-medium">
                  Subscribe to Bengal Youth Career Updates
                </span>
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
                    className="absolute right-1 top-1 bottom-1 px-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} West Bengal Youth Empowerment Foundation (WBYEF). All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-400">"{WBYEF_DATA.brand.tagline}"</span>
            <span>·</span>
            <span className="text-stone-400">Social Welfare Organisation</span>
            <span>·</span>
            <span className="text-stone-400">Kolkata, West Bengal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
