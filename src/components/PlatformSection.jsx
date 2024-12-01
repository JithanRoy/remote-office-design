import React from 'react';

const PlatformSection = () => {
  return (
    <section className="section_platform bg-primary text-white py-24 px-5 sm:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-24">
        <div className="platform-left flex flex-col gap-6 w-full lg:w-2/5">
          <img
            src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/653545f5d49a0ebb7443a16d_Eclipse.svg"
            alt="Eclipse Icon"
            className="elipse-image w-44"
          />

          <div className="platform-text-wrapper">
            <h2 className="text-4xl font-bold leading-tight hide-mobile-landscape">
              Take a <br /> quick look <br /> at our platform
            </h2>
            <h2 className="text-4xl font-bold leading-tight show-mobile">
              Take a quick look at our platform
            </h2>
            <p className="text-lg mt-4">
              You want to empower your current team of high performers by adding
              specialists with niche experience. Hand-pick the best resources to
              contribute to the project.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center items-center">
          <img
            src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658bbbb6a5e8260e7845782a_How%20it%20goes%20-%204.webp"
            alt="HR Management Process"
            className="w-4/5 rounded-lg"
          />

          <img
            src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658d37bd157481a906cb7067_How%20it%20goes%20-%20Item%204.png"
            alt="HR Management Details"
            className="absolute top-8 -left-20 w-5/12"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
