import React from 'react';

const SuperchargeTeam = () => {
  return (
    <section
      className="section_supercharge-team bg-cover bg-center"
      style={{
        backgroundImage: `url("https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65356a8f7c5d2b1ad54baf2e_Supercharge-BG.svg")`,
      }}
    >
      <div className="container mx-auto py-44 ">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Supercharge Your Team */}
          <div className="supercharge-wrap">
            <div className="supercharge-team-head">
              <h2 className="text-4xl font-bold text-white">
                Supercharge your team
              </h2>
            </div>
            <p className="text-white text-lg mt-4">
              You want to empower your current team of high performers by adding
              specialists with niche experience. Hand-pick the best resources to
              contribute to the project.
            </p>
            <img
              src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654c547b86f3fe6aa11918e7_Supercharge%20team.png"
              alt="Supercharge Team"
              className="supercharge-build-image mt-6 hidden lg:block"
            />
            <a
              href="https://www.remoteoffice.io/blogs/two-ways-to-build-your-team-remote-office"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block text-white font-semibold hover:underline"
            >
              Learn more
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6533da20cb7b49b9d9df61c5_button-icon%20white.svg"
                alt="icon"
                className="inline-block ml-2 w-4 h-4"
              />
            </a>
          </div>

          {/* Build Your Dream Team */}
          <div className="build--team-wrap">
            <div className="supercharge-team-head">
              <h2 className="text-4xl font-bold text-black">
                Build your dream team
              </h2>
            </div>
            <p className="text-black text-lg mt-4">
              You need to build a team from scratch. You hand-pick resources
              that align with your vision and what your project needs. You scale
              the team as your project grows.
            </p>
            <img
              src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654c549032fbbe3db64d4389_Build%20Team.png"
              alt="Build Team"
              className="supercharge-build-image mt-6 hidden lg:block"
            />
            <a
              href="https://www.remoteoffice.io/blogs/two-ways-to-build-your-team-remote-office"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block text-black font-semibold hover:underline"
            >
              Learn more
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6533b9ca65a382945f6a6619_button-icon.svg"
                alt="icon"
                className="inline-block ml-2 w-4 h-4"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperchargeTeam;
