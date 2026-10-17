import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Mission } from './components/Mission.tsx';
import { ImpactStats } from './components/ImpactStats.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { Facilities } from './components/Facilities.tsx';
import { Programs } from './components/Programs.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { ContactUs } from './components/ContactUs.tsx';
import { Footer } from './components/Footer.tsx';
import { DonateModal } from './components/DonateModal.tsx';
import { VolunteerModal } from './components/VolunteerModal.tsx';

export default function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [donatePresetAmount, setDonatePresetAmount] = useState<number>(1000);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section for navigation highlight
  useEffect(() => {
    const sectionIds = ['home', 'mission', 'about-us', 'impact', 'facilities', 'programs', 'testimonials', 'contact-us'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenDonate = (presetAmount: number = 1000) => {
    setDonatePresetAmount(presetAmount);
    setDonateModalOpen(true);
  };

  const handleOpenVolunteer = () => {
    setVolunteerModalOpen(true);
  };

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact-us');
    contactElem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      
      {/* 3-Zone Top Bar Navigation Contract */}
      <Navbar
        onOpenDonate={handleOpenDonate}
        onOpenVolunteer={handleOpenVolunteer}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDonate={handleOpenDonate}
          onOpenVolunteer={handleOpenVolunteer}
        />

        {/* 2. Our Mission */}
        <Mission
          onLearnMore={() => {
            const el = document.getElementById('about-us');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenDonate={handleOpenDonate}
        />

        {/* 3. Our Impact Statistics */}
        <ImpactStats
          onOpenDonate={handleOpenDonate}
        />

        {/* 4. About Us (Who We Are) */}
        <AboutUs
          onOpenDonate={handleOpenDonate}
          onOpenVolunteer={handleOpenVolunteer}
        />

        {/* 5. Campus Facilities */}
        <Facilities
          onOpenDonate={handleOpenDonate}
        />

        {/* 6. Transformative Educational Programs */}
        <Programs
          onOpenDonate={handleOpenDonate}
        />

        {/* 7. Community Testimonials & Voices */}
        <Testimonials />

        {/* 10. Call to Action (Large Banner Section) */}
        <CallToAction
          onOpenDonate={() => handleOpenDonate(1000)}
          onScrollToContact={handleScrollToContact}
        />

        {/* 11. Contact Us */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonate={() => handleOpenDonate(1000)}
        onOpenVolunteer={handleOpenVolunteer}
      />

      {/* Interactive Donation Flow Modal */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        initialAmount={donatePresetAmount}
      />

      {/* Interactive Volunteer Registration Modal */}
      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />

    </div>
  );
}
