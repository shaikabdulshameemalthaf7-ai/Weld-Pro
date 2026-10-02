import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AboutSection } from './components/AboutSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ContactSection } from './components/ContactSection';
import { SectionDivider } from './components/SectionDivider';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { Project } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Staircase Railing');
  const [prefilledContactProject, setPrefilledContactProject] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section for navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFeaturedProject = (project: Project) => {
    // Scroll to portfolio section and prefill
    handleScrollToSection('portfolio');
  };

  const handleContinueFromCalculator = (calculatedDetails: string) => {
    setPrefilledContactProject(calculatedDetails);
    handleScrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onViewWork={() => handleScrollToSection('portfolio')}
          onContactClick={() => handleScrollToSection('contact')}
        />

        {/* 4-Point Trust & Capabilities Bar */}
        <TrustBar />

        {/* Featured Projects Carousel */}
        <FeaturedCarousel
          onSelectProject={handleSelectFeaturedProject}
          onViewAllProjects={() => handleScrollToSection('portfolio')}
        />

        {/* Subtle Animated Welding Seam Divider */}
        <SectionDivider glowColor="orange" />

        {/* Services Section ("What I Offer") */}
        <ServicesSection
          onOpenQuoteWithService={(service) => handleOpenQuote(service)}
        />

        {/* Subtle Animated Welding Seam Divider */}
        <SectionDivider glowColor="blue" />

        {/* Interactive Before & After Slider */}
        <BeforeAfterSlider />

        {/* Subtle Animated Welding Seam Divider */}
        <SectionDivider glowColor="orange" />

        {/* About Workshop & Certified Standards */}
        <AboutSection />

        {/* Subtle Animated Welding Seam Divider */}
        <SectionDivider glowColor="orange" />

        {/* Large Portfolio Gallery with Category Filters and Lightbox */}
        <PortfolioGallery
          onOpenQuoteForProject={(projectTitle) => {
            setPrefilledContactProject(projectTitle);
            handleScrollToSection('contact');
          }}
        />

        {/* Subtle Animated Welding Seam Divider */}
        <SectionDivider glowColor="blue" />

        {/* Contact Section */}
        <ContactSection
          prefilledProject={prefilledContactProject}
          onOpenQuoteCalculator={() => handleOpenQuote()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Instant Quote Estimator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={selectedServiceForQuote}
        onContinueToContact={handleContinueFromCalculator}
      />
    </div>
  );
}
