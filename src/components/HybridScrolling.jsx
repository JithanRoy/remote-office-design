import React, { useEffect, useRef } from 'react';
import SuperchargeTeam from './SuperchargeTeam.jsx';

const HybridScrolling = () => {
  const stickySections = useRef([]);

  const handleScroll = () => {
    stickySections.current.forEach((section) => {
      transformSection(section);
    });
  };

  const transformSection = (section) => {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.horizontal_scroll');

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

    // Clamp the percentage to ensure it stays between 0 and 300
    percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

    // Apply the horizontal transform
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  };

  useEffect(() => {
    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup scroll listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="w-full h-full">
      {/* Vertical Section */}
      <section className="bg-primary text-white flex items-center justify-start">
        <div className="container mx-auto w-full pb-12 py-64">
          <div className="font-black text-5xl leading-tight">
            We are just getting started, there is more to come...
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <div className="scroll_container h-[400vh] relative">
        <div
          className="sticky_wrap overflow-hidden sticky top-0 h-screen"
          ref={(el) => stickySections.current.push(el)}
        >
          <div className="horizontal_scroll absolute top-0 h-full w-[400vw] flex justify-between will-change-transform">
            <div className="scroll_contents w-screen h-full bg-primary flex items-center justify-center">
              <section className="flex bg-primary text-white w-full h-full py-16">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
                  {/* Left Content */}
                  <div className="lg:w-1/2 flex flex-col gap-8">
                    <h3 className="text-[2.5rem] font-bold">Onboarding</h3>
                    <p className="text-gray-300">
                      We help you onboard the candidates by doing background
                      checks, extending the offer, and installing our
                      proprietary service culture pathway. We ensure a smooth
                      and hassle-free transition for you and the candidates.
                    </p>

                    {/* Scroll Progress */}
                    <div className="flex flex-col gap-2">
                      {/* Numbers */}
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">01</span>
                        <span className="text-2xl font-bold text-gray-500">
                          02
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="relative w-full h-2 bg-gray-500">
                        <div
                          className="absolute top-0 left-0 h-full bg-blue-500"
                          style={{ width: '81.312%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Images */}
                  <div className="lg:w-1/2 relative flex justify-center items-center">
                    {/* Bottom Image */}
                    <img
                      src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658bbbb504a5b7fd2023a7bc_How%20it%20goes%20-%201.webp"
                      alt="Onboarding Process"
                      className="w-4/5 rounded-lg"
                    />
                    {/* Top Image */}
                    <img
                      src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658d37bcc7d6a88a82c48b44_How%20it%20goes%20-%20Item%201.png"
                      alt="Onboarding Details"
                      className="absolute top-10 -left-20 w-1/2"
                    />
                  </div>
                </div>
              </section>
            </div>
            {/*slide two*/}
            <div className="scroll_contents w-screen h-full bg-yellow-500">
              <section className="flex bg-white text-black w-full h-full py-16">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
                  {/* Left Content */}
                  <div className="lg:w-1/2 flex flex-col gap-8">
                    <h3 className="text-[2.5rem] font-bold">Compliance</h3>
                    <p className="text-gray-600">
                      We handle the compliance issues for you and the
                      candidates. We make sure contracts are native and
                      efficiently handled to safeguard integrity,
                      confidentiality, continuity, and effectivity.
                    </p>

                    {/* Scroll Progress */}
                    <div className="flex flex-col gap-2">
                      {/* Numbers */}
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-800">
                          02
                        </span>
                        <span className="text-2xl font-bold text-blue-500">
                          03
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="relative w-full h-2 bg-gray-300">
                        <div
                          className="absolute top-0 left-0 h-full bg-blue-500"
                          style={{ width: '100%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Images */}
                  <div className="lg:w-1/2 relative flex justify-center items-center">
                    {/* Bottom Image */}
                    <img
                      src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/653a0aea9c49f5f514fc8b84_How%20it%20goes%20-%202.webp"
                      alt="Compliance Process"
                      className="w-4/5 rounded-lg"
                    />
                    {/* Top Image */}
                    <img
                      src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658d37bbc2e6f5a94eadc968_How%20it%20goes%20-%20Item%202.png"
                      alt="Compliance Details"
                      className="absolute top-10 -left-20 w-1/2"
                    />
                  </div>
                </div>
              </section>
            </div>
            {/*slide three*/}
            <div className="scroll_contents w-screen h-full bg-green-500">
              <section className="flex bg-blue-600 text-white w-full h-full py-16">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
                  {/* Left Content */}
                  <div className="lg:w-1/2 flex flex-col gap-8">
                    <h3 className="text-[2.5rem] font-bold">Team Management</h3>
                    <p className="text-gray-200">
                      We help you better manage your team with strategic
                      consultation, sprint management, training and development,
                      and reporting standard management. We suggest the best
                      practices and tools to optimize your remote team’s
                      performance and productivity.
                    </p>

                    {/* Scroll Progress */}
                    <div className="flex flex-col gap-2">
                      {/* Numbers */}
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">03</span>
                        <span className="text-2xl font-bold text-gray-300">
                          04
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="relative w-full h-2 bg-gray-300">
                        <div
                          className="absolute top-0 left-0 h-full bg-yellow-500"
                          style={{ width: '99.907%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Images */}
                  <div className="lg:w-1/2 relative flex justify-center items-center">
                    {/* Bottom Image */}
                    <img
                      src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658bbbb746a2dae0527b121c_How%20it%20goes%20-%203.webp"
                      alt="Team Management Process"
                      className="w-4/5 rounded-lg"
                    />
                    {/* Top Image */}
                    <img
                      src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658d37bc447b358ca3eebe14_How%20it%20goes%20-%20Item%203.png"
                      alt="Team Management Details"
                      className="absolute top-8 -left-20 w-5/12"
                    />
                  </div>
                </div>
              </section>
            </div>
            {/*slide four*/}
            <div className="scroll_contents w-screen h-full bg-primary flex items-end justify-end">
              <section className="flex bg-dark text-white w-full h-full py-16">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
                  {/* Left Content */}
                  <div className="lg:w-1/2 flex flex-col gap-8">
                    <h3 className="text-[2.5rem] font-bold">HR Management</h3>
                    <p className="text-gray-300">
                      We take care of the entire HR Management for your remote
                      team. We handle the contract fees, attendance, leaves,
                      holiday calendars, performance evaluation, and appraisals.
                      We ensure that your team is happy, motivated, and
                      productive.
                    </p>

                    {/* Scroll Progress */}
                    <div className="flex flex-col gap-2">
                      {/* Numbers */}
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">04</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="relative w-full h-2 bg-gray-500">
                        <div
                          className="absolute top-0 left-0 h-full bg-blue-500"
                          style={{ width: '100%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Images */}
                  <div className="lg:w-1/2 relative flex justify-center items-center">
                    {/* Bottom Image */}
                    <img
                      src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658bbbb6a5e8260e7845782a_How%20it%20goes%20-%204.webp"
                      alt="HR Management Process"
                      className="w-4/5 rounded-lg"
                    />
                    {/* Top Image */}
                    <img
                      src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658d37bd157481a906cb7067_How%20it%20goes%20-%20Item%204.png"
                      alt="HR Management Details"
                      className="absolute top-8 -left-20 w-5/12"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HybridScrolling;
