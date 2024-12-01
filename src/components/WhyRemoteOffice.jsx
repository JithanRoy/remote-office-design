import React from 'react';
import CustomButton from './shared/custom-button/index.jsx';

const WhyRemoteOffice = () => {
  return (
    <section className="section_why-remote-office bg-vivid-yellow py-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Left Tab Content */}
        <div className="">
          <img
            src="/public/assets/remote-office.png"
            alt="Remote Office"
            className="w-[950px]"
          />
        </div>

        {/* Right Section */}
        <div className="why-remote-wrapper flex flex-col gap-4 w-full lg:w-1/3">
          <h2 className="text-3xl font-bold">Why Remote Office?</h2>
          <p>
            Remote Office helps you hire and manage top global talents. You can
            find, onboard, pay, and manage your remote workers using our
            platform. Remote Office also supports you with insights and feedback
            to optimize your remote team. We are your vHR for building and
            managing high-performing remote teams.
          </p>
          <div>
            <CustomButton label="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRemoteOffice;
