import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EnsuringAccessSection from '../components/EnsuringAccessSection.jsx';
import Footer from '../components/Footer';
import MarqueeSection from "../components/MarqueeSection.jsx";

const HomePage = () => {
  return (
    <div className="w-full bg-gray-100">
      <Navbar/>
      <Hero/>
      <MarqueeSection/>
      <EnsuringAccessSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
