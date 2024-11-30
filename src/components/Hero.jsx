import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">The best solution for your business.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
