import React from 'react';
import { motion } from 'framer-motion';
import 'animate.css';
import HybridScrolling from './HybridScrolling.jsx';

const EnsuringAccessSection = () => {
  return (
    <section className="bg-primary text-white w-full h-full py-[6rem]">
      {/* Fixed Header */}
      <div className="container mx-auto w-full">
        <div className="sticky top-[5.3rem] flex flex-col gap-16">
          <div className=" bg-primary py-4 z-50">
            <h2 className="text-[3rem] font-black text-start animate__animated animate__bounceInUp">
              Ensuring access to top vetted <br /> talents
            </h2>
          </div>
        </div>
        {/* First Item */}
        <section className="bg-primary text-white w-full h-full py-[6rem]">
          <div className="flex flex-row justify-between items-center gap-16">
            <div className="lg:w-1/2 w-1/2 flex flex-col gap-6">
              <h3 className="text-[2.5rem] font-bold">
                Ad blueprint with credits + internal community
              </h3>
              <p className="text-gray-400">
                We provide you with a proven ad blueprint to attract the best
                talents for your business. Plus, you get free credits to post
                your jobs on popular platforms like LinkedIn, Indeed, and
                Monster. And as a bonus, you get access to our exclusive
                community of over 30,000 pre-vetted professionals from around
                the world.
              </p>
              <a
                href="#"
                className="text-white font-semibold flex items-center gap-2 hover:underline no-underline"
              >
                Learn more
                <img
                  src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6533da20cb7b49b9d9df61c5_button-icon%20white.svg"
                  alt="icon"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="relative lg:w-1/2 w-1/2 flex justify-end">
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654c4c5458ba8fef7c130d6f_Ensure%20item%20-%201.webp"
                alt="icon"
                className="w-1/2 absolute left-[14rem] top-0"
              />
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654496577fb141e2a8157240_ensuring-access%20image%201.webp"
                alt="Blueprint"
                className="w-1/2 rounded-md"
              />
            </div>
          </div>
        </section>

        {/*SECOND ITEM*/}
        <section className="bg-primary text-white w-full h-full py-[6rem]">
          <div className="flex flex-row justify-between items-center gap-16">
            <div className="lg:w-1/2 w-1/2 flex flex-col gap-6">
              <h3 className="text-[2.5rem] font-bold">
                Screening, grading and assessment
              </h3>
              <p className="text-gray-400">
                We reach out to candidates who match your requirements and take
                them through a bespoke screening, grading, and assessment
                process. We use comprehensive and rigorous criteria to evaluate
                their skills, experience, and fit for your business. We ensure
                that only the best talents make it to the next stage.
              </p>
              <a
                href="#"
                className="text-white font-semibold flex items-center gap-2 hover:underline no-underline"
              >
                Learn more
                <img
                  src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6533da20cb7b49b9d9df61c5_button-icon%20white.svg"
                  alt="icon"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="relative lg:w-1/2 w-1/2 flex justify-end">
              {/* First Image */}
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6544969472163e3d72afb3b4_ensuring-access%20image%202.webp"
                alt="Match Icon"
                className="absolute w-1/2 rounded-md border border-white z-0 -top-40 left-[19rem]"
              />
              {/* Second Image */}
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654490dee7199c24f9d7d22d_Ensure%20item%20-%202a.webp"
                alt="Resume Review"
                className="absolute -top-[8rem] left-[11rem] w-[30%]"
              />

              {/* Third Image */}
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6544915fd4ceb86b86568efb_Ensure%20item%20-%202c.webp"
                alt="Assessment Icon"
                className="absolute top-[2rem] right-[11rem] w-1/3"
              />
              {/* fourth Image */}
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654491af4b610b8a8160bae5_Ensure%20item%20-%202b.webp"
                alt="Assessment Icon"
                className="absolute -top-[4rem] right-[-5rem] w-1/3"
              />
            </div>
          </div>
        </section>

        {/*third item*/}
        <section className="bg-primary text-white w-full h-full py-[6rem]">
          <div className="flex flex-row justify-between items-center gap-16">
            <div className="lg:w-1/2 w-1/2 flex flex-col gap-6">
              <h3 className="text-[2.5rem] font-bold">Machine-led interview</h3>
              <p className="text-gray-400">
                Our platform allows the candidates to showcase their skills and
                personality conveniently and flexibly. We then evaluate their
                performance both by our hiring team and by you. This ensures
                that you only meet with candidates who match your preferences
                and expectations.
              </p>
              <a
                href="#"
                className="text-white font-semibold flex items-center gap-2 hover:underline no-underline"
              >
                Learn more
                <img
                  src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6533da20cb7b49b9d9df61c5_button-icon%20white.svg"
                  alt="icon"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="relative lg:w-1/2 w-1/2 flex justify-end mt-16">
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65489565c7a8b83ccee4cf72_Ensure%20item%20-%203.webp"
                alt="Blueprint"
                className="w-1/3 absolute rounded-md right-[16rem] z-10"
              />
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65449a783cd8823f8f003635_ensuring-access%20image%203.webp"
                alt="icon"
                className="w-1/2 absolute left-[19rem] -top-[10rem] rounded-md"
              />
            </div>
          </div>
        </section>

        {/*fourth ITEM*/}
        <section className="bg-primary text-white w-full h-full py-[6rem]">
          <div className="flex flex-row justify-between items-center gap-16 mt-[100px]">
            <div className="lg:w-1/2 w-1/2 flex flex-col gap-10">
              <h3 className="text-[2.5rem] font-bold">Technical challenge</h3>
              <p className="text-gray-400">
                We assist you in conducting the technical test through our
                outlined discipline. We co-create a tailored challenge relevant
                to the skills you need. Our platform allows the candidates to
                complete the challenge in a realistic and interactive
                environment. This allows you to review the code quality, logic,
                and efficiency of the candidates.
              </p>
              <a
                href="#"
                className="text-white font-semibold flex items-center gap-2 hover:underline no-underline"
              >
                Learn more
                <img
                  src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6533da20cb7b49b9d9df61c5_button-icon%20white.svg"
                  alt="icon"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="relative lg:w-1/2 w-1/2 flex justify-end mt-26">
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654ddc1eb83cf113ff513d39_Ensure%20item%20-%204.webp"
                alt="Blueprint"
                className="w-1/3 absolute rounded-md left-36 -top-28 z-10"
              />
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65449ad174ceec05589bbaea_ensuring-access%20image%204.webp"
                alt="icon"
                className="w-1/2 absolute left-[19rem] -top-[10rem] rounded-md"
              />
            </div>
          </div>
        </section>

        {/*fifth item */}
        <section className="bg-primary text-white w-full h-full py-[8rem]">
          <div className="flex flex-row justify-between items-center gap-16">
            <div className="lg:w-1/2 w-1/2 flex flex-col gap-10">
              <h3 className="text-[2.5rem] font-bold">Client review</h3>
              <p className="text-gray-400">
                Our platform encapsulates all the data and feedback from the
                previous stages, so you can easily compare and evaluate the
                candidates. You only go for a face-to-face interview with the
                candidates that you feel have met all the criteria so far. This
                contributes to hiring the right fit at the right time.
              </p>
              <a
                href="#"
                className="text-white font-semibold flex items-center gap-2 hover:underline no-underline"
              >
                Learn more
                <img
                  src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6533da20cb7b49b9d9df61c5_button-icon%20white.svg"
                  alt="icon"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="relative lg:w-1/2 w-1/2 flex justify-end mt-26">
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6548a86f25f97ae6124b96a5_Ensure%20item%20-%205.webp"
                alt="Blueprint"
                className="w-1/4 absolute rounded-md left-[230px] -top-36 z-10"
              />
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654762ce5abe30b2414f5862_ensuring-access%20image%205.webp"
                alt="icon"
                className="w-1/2 absolute left-[19rem] -top-[10rem] rounded-md"
              />
            </div>
          </div>
        </section>
      </div>
      <HybridScrolling />
    </section>
  );
};

export default EnsuringAccessSection;
