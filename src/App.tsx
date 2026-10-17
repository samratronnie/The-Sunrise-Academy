import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ImpactAreas } from './components/ImpactAreas.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { VisionMission } from './components/VisionMission.tsx';
import { Programs } from './components/Programs.tsx';
import { RuralBengalInitiative } from './components/RuralBengalInitiative.tsx';
import { WomenEmpowerment } from './components/WomenEmpowerment.tsx';
import { YouthLeadership } from './components/YouthLeadership.tsx';
import { VolunteerSection } from './components/VolunteerSection.tsx';
import { PartnersSection } from './components/PartnersSection.tsx';
import { DonationSection } from './components/DonationSection.tsx';
import { ContactUs } from './components/ContactUs.tsx';
import { Footer } from './components/Footer.tsx';
import { DonateModal } from './components/DonateModal.tsx';
import { VolunteerModal } from './components/VolunteerModal.tsx';
import { PartnerModal } from './components/PartnerModal.tsx';

export default function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [donatePresetAmount, setDonatePresetAmount] = useState<number>(1000);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section for navigation highlight
  useEffect(() => {
    const sectionIds = [
      'home',
      'impact-areas',
      'about-us',
      'vision-mission',
      'programmes',
      'facilities',
      'rural-initiative',
      'women-empowerment',
      'youth-leadership',
      'volunteer',
      'approach',
      'partners',
      'donate',
      'contact-us',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          // Map sub-anchors to primary nav items
          let navKey = sectionIds[i];
          if (['impact-areas', 'vision-mission'].includes(navKey)) navKey = 'about-us';
          if (['rural-initiative', 'women-empowerment', 'youth-leadership'].includes(navKey))
            navKey = 'programmes';
          if (['volunteer', 'approach', 'partners', 'donate'].includes(navKey))
            navKey = 'programmes';

          setActiveSection(navKey);
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

  const handleOpenPartner = () => {
    setPartnerModalOpen(true);
  };

  const handleJoinMission = () => {
    const el = document.getElementById('impact-areas');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      
      {/* 3-Zone Navigation: Home, About Us, Programmes, Facilities, Contact Us + Become a Volunteer & Donate Now CTAs */}
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
          onJoinMission={handleJoinMission}
        />

        {/* 2. Impact Areas (Our Impact Vision) */}
        <ImpactAreas />

        {/* 3. About WBYEF (Who We Are) */}
        <AboutUs
          onOpenDonate={handleOpenDonate}
          onOpenVolunteer={handleOpenVolunteer}
        />

        {/* 4. Vision & Mission (Core Focus Areas) */}
        <VisionMission />

        {/* 5. Programmes (Youth Career Mission + Facilities) */}
        <Programs
          onOpenDonate={handleOpenDonate}
          onOpenVolunteer={handleOpenVolunteer}
        />

        {/* 6. Rural Bengal Initiative (Empowering Rural Youth) */}
        <RuralBengalInitiative
          onOpenVolunteer={handleOpenVolunteer}
          onOpenDonate={() => handleOpenDonate(2500)}
        />

        {/* 7. Women Empowerment (Educate. Empower. Enable.) */}
        <WomenEmpowerment
          onOpenVolunteer={handleOpenVolunteer}
          onOpenDonate={() => handleOpenDonate(1000)}
        />

        {/* 8. Youth Leadership Programme (Creating Tomorrow's Leaders) */}
        <YouthLeadership
          onOpenVolunteer={handleOpenVolunteer}
        />

        {/* 9. Volunteer Section (Be The Change + Sustainable Empowerment Framework Approach) */}
        <VolunteerSection
          onOpenVolunteer={handleOpenVolunteer}
        />

        {/* 10. Partners Section (Together We Can Do More) */}
        <PartnersSection
          onOpenPartner={handleOpenPartner}
        />

        {/* 11. Donation Section (Your Contribution Can Change A Life) */}
        <DonationSection
          onOpenDonate={handleOpenDonate}
        />

        {/* 12. Contact Us (Get In Touch) */}
        <ContactUs />
      </main>

      {/* 13. Footer */}
      <Footer
        onOpenDonate={() => handleOpenDonate(1000)}
        onOpenVolunteer={handleOpenVolunteer}
        onOpenPartner={handleOpenPartner}
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

      {/* Interactive Institutional Partnership Modal */}
      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />

    </div>
  );
}
