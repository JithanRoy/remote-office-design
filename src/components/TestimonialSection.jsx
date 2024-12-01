import React, { useState } from 'react';
import 'animate.css';

const testimonials = [
  {
    text: 'Angus says “As the COO of a fast-growing tech startup based on the Gold Coast, I was grateful to be introduced to Diat and his team who assisted us with high-calibre developer candidates based overseas and managed completely by Remote Office. It was straight-forward to get started and RO was patient in working with us to find the right developer for our team. I would highly recommend.',
    name: 'Yianni Serpanos',
    role: 'CEO & Founder, Coreplus',
    image:
      'https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6597bea75257c8697673a33b_Yianni%20Serpanos.svg',
  },
  {
    text: 'We have been using Remote Office for two years and continue to be impressed with their excellent service and advice. We highly recommend them.',
    name: 'Angus Keck',
    role: 'COO, Agunity',
    image:
      'https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658ec283ed55ff3bcce34560_Angus%20Keck.svg',
  },
  {
    text: 'Remote Office has been our trusted partner for the past three years. They stand out due to their professionalism, strong project management and customer-centric approach. Remote Office is one of the few agencies that are able to provide realistic estimates of project execution. I can always trust their opinions and suggestions.',
    name: 'Mikko Tamminen',
    role: 'Chairman & CEO, Taskeater',
    image:
      'https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658ec286ef485db1d63e1c89_Mikko%20Tamminen.svg',
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const handleNext = () => {
    setAnimationClass('animate__animated animate__fadeOutLeft');
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setAnimationClass('animate__animated animate__fadeInRight');
    }, 500); // Match animation duration
    setTimeout(() => setAnimationClass(''), 1000); // Reset animation class
  };

  const handlePrev = () => {
    setAnimationClass('animate__animated animate__fadeOutRight');
    setTimeout(() => {
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setAnimationClass('animate__animated animate__fadeInLeft');
    }, 500);
    setTimeout(() => setAnimationClass(''), 1000);
  };

  const { text, name, role, image } = testimonials[current];

  return (
    <section className="bg-light-green py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/4 min-h-20 sm:min-h-[250px]">
            <h2 className="text-4xl font-bold text-dark-cyan mb-4">
              Clients say
            </h2>
          </div>

          <div
            className={`lg:w-3/4 flex flex-col items-start transition-transform duration-500 ease-in-out ${animationClass}`}
          >
            <div className="flex items-start mb-6">
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6534df1c17daafaf29abc4aa_Quote.svg"
                alt="Quote icon"
                className="w-12 h-12 mr-4"
              />
              <p className="text-xl text-dark font-medium">{text}</p>
            </div>

            <div className="flex items-center mt-4">
              <img
                src={image}
                alt={name}
                className="rounded-full w-16 h-16 mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrev}
            className="bg-gray-200 p-3 rounded-full hover:bg-gray-300"
          >
            <img
              src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6534e0d117daafaf29ad3bbc_Arrow%20back.svg"
              alt="Previous"
              className="w-5 h-5"
            />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 p-3 rounded-full hover:bg-gray-300"
          >
            <img
              src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6534e0d297cd72e21019343f_Arrow%20next.svg"
              alt="Next"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
