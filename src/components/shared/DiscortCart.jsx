import React from 'react';

const DiscordCart = () => {
  return (
    <div className="discord-wrapper bg-secondary rounded-lg p-4 flex flex-col items-center">
      <div className="discord-image-wrapper w-full h-40 mb-4">
        <img
          src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6548a50f206e0be7d8586c05_Discord%20Image%20cover.webp"
          alt="Join our exclusive community of pre-vetted top talent"
          className="discord-image w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="discord-info-wrapper text-center flex flex-col items-center px-4">
        <p className="bold-footer text-lg font-bold mb-2">
          Join our community:
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Join our community of talents from across the globe to get access to
          new job opportunities, ideas, and collaborate with like-minded
          individuals.
        </p>
        {/*<div className="flex items-center bg-primary text-secondary font-bold px-3 rounded-3xl hover:scale-90 focus:outline-none focus:ring-2 focus:ring-offset-2">*/}
        {/*  <CustomButton label="Join" />*/}
        {/*  <svg*/}
        {/*    aria-hidden="true"*/}
        {/*    fill="currentColor"*/}
        {/*    role="img"*/}
        {/*    viewBox="0 0 20 21"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    className="w-4 h-4"*/}
        {/*  >*/}
        {/*    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>*/}
        {/*  </svg>*/}
        {/*</div>*/}
        <a
          href="https://jobs.cvviz.com/remote_office/drop-your-resume"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-quote-radio-option text-center rounded-full justify-center items-center px-8 py-4 font-sans font-bold text-base leading-tight transition-transform duration-300 flex hover:scale-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <span className="mr-2">Join</span>
          <svg
            aria-hidden="true"
            fill="currentColor"
            role="img"
            viewBox="0 0 20 21"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default DiscordCart;
