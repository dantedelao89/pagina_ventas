import React from 'react';
import HeroSection from './sections/HeroSection';
import ValueProposition from './sections/ValueProposition';
import Benefits from './sections/Benefits';
import Membership from './sections/Membership';
import Pricing from './sections/Pricing';
import CallToAction from './sections/CallToAction';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ValueProposition />
      <Benefits />
      <Membership />
      <Pricing />
      <CallToAction />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
