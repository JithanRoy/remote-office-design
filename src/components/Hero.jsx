import React from 'react';
import { motion } from 'framer-motion';
import CustomButton from './shared/custom-button/index.jsx';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="bg-white w-full h-screen flex items-center justify-between px-8 lg:px-20">
      <div className="flex flex-col justify-center items-start w-full lg:w-1/2 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Build and Manage Global
          <span className="block text-secondary">
            <Typotext />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-black text-lg md:text-xl"
        >
          We are an end-to-end remoteOps platform that solves all things global
          HR
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col space-y-4"
        >
          <CustomButton
            label="Looking for talent"
            className="bg-primary text-quote-radio-option hover:bg-primary hover:text-quote-radio-option"
          />

          <div className="flex !-mt-[12px] items-center space-x-4 space-y-8">
            <img
              src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/66d69cd8b564937a30a86458_Untitled%20design%20(6).png"
              alt="Pointer"
              className="w-12 h-12 -mb-2"
            />

            <div className="flex items-center bg-[#edeca2] rounded-[12px] px-4 py-2 space-x-2 shadow-md">
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/66d69a3230bb3d0230bfe57d_Untitled%20design%20(4).png"
                alt="Secondary Icon"
                className="w-6 h-6"
              />
              <span className="font-bold text-primary">
                Pay only for results
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:flex w-1/2 justify-center items-center relative">
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.2,
            rotateX: 20,
            rotateY: 20,
          }}
          transition={{ duration: 1 }}
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/653cd44aa20cd20e8fb58345_Sphere.webp"
          alt="Sphere"
          className="w-full h-full object-cover"
        />
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.2,
          }}
          transition={{ duration: 0.8, delay: 0.1 }}
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/653cd66a62e72b8ce17665e7_Talent%20Acquisition.svg"
          alt="Talent Acquisition"
          className="absolute top-[10%] left-[0%] right-auto bottom-auto h-[40px]"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{
            scale: 1.2, // Slight zoom effect
          }}
          transition={{ duration: 0.8, delay: 0.1 }}
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/653cd6683b2ad1cc7ff1c388_Compliance.svg"
          alt="Compliance"
          className="absolute h-[40px] z-40"
          style={{
            inset: '40% 0% 0% 35%',
          }}
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{
            scale: 1.2, // Zoom effect on hover
          }}
          transition={{ duration: 0.8, delay: 0.1 }}
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/653cd668c0189b84bf4f49ff_Virtual%20HR.svg"
          alt="Virtual HR"
          className="absolute h-[40px] z-30"
          style={{
            inset: '50% 0% 0% auto',
          }}
        />

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.2,
          }}
          transition={{ duration: 0.8, delay: 0.1 }}
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/653cd668ebd7182c1f748a2b_Virtual%20Team%20Management.svg"
          alt="Virtual Team Management"
          style={{
            inset: 'auto auto 20% 0%',
          }}
          className="absolute top-10 left-20 h-[40px] z-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.2,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6553eee901770f87420dfa09_Miguel%20Reyes.webp"
          alt="Miguel Reyes"
          className="absolute z-30 transition-all duration-200"
          style={{
            height: '250px',
            inset: '20% auto 0% 5%',
          }}
        />

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.05,
            translateX: 20,
            translateY: 20,
            translateZ: 20,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/654deaf3b83cf113ff5bdaef_Aisha%20Sharma.webp"
          alt="Aisha Sharma"
          className="absolute z-10"
          style={{
            height: '250px',
            inset: '50% 0% 0% 40%',
          }}
        />

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.2, // Slight zoom effect on hover
          }}
          transition={{
            duration: 0.8, // Smooth transition duration
            delay: 1.5, // Delay for initial animation
          }}
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6547636d019eb56f43d15778_Hero%20People%20-%20images.webp"
          alt="Hero People"
          className="absolute z-30 transition-all duration-200"
          style={{
            height: '100px', // Set height
            inset: '10% 0% 0% auto', // Set positioning
          }}
        />
      </div>
    </section>
  );
};

const Typotext = () => {
  return (
    <span className="inline-block text-primary">
      <Typewriter
        options={{
          strings: ['HR Operations', 'Compliance', 'Remote Teams'],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

export default Hero;
