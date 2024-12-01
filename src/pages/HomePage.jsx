import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EnsuringAccessSection from '../components/EnsuringAccessSection.jsx';
import Footer from '../components/Footer';
import MarqueeSection from '../components/MarqueeSection.jsx';
import SuperchargeTeam from '../components/SuperchargeTeam.jsx';
import PlatformSection from '../components/PlatformSection.jsx';
import WhyRemoteOffice from '../components/WhyRemoteOffice.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';

const HomePage = () => {
  return (
    <div className="w-full bg-gray-100">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <EnsuringAccessSection />
      <SuperchargeTeam />
      <PlatformSection />
      <WhyRemoteOffice />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default HomePage;
