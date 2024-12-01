import React from 'react';
import CustomButton from './shared/custom-button/index.jsx';

const Navbar = () => {
  return (
    <nav className="fixed w-full container-2xl px-8 lg:px-20 z-[50] inset-x-0 top-0 bg-white shadow-md">
      <div className=" flex justify-between items-center py-4">
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65355ce5b812e0b776e6866d_Remote%20Office%20Logo.svg"
            alt="Remote office"
            className="w-48 block"
          />
        </a>

        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="/"
            className="nav-link text-black px-3 text-base font-medium transition-colors duration-300 hover:text-secondary"
          >
            Home
          </a>
          <div className="relative group">
            <button className="text-black hover:text-secondary flex items-center space-x-1 group">
              <span>Teams</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="absolute z-80 left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
              <a
                href="/technology"
                className="block px-4 py-2 hover:text-secondary hover:bg-gray-100"
              >
                Technology
              </a>
              <a
                href="/marketing"
                className="block px-4 py-2 hover:text-secondary hover:bg-gray-100"
              >
                Marketing
              </a>
              <a
                href="/creative-studio"
                className="block px-4 py-2 hover:text-secondary hover:bg-gray-100"
              >
                Creative Studio
              </a>
              <a
                href="/back-office"
                className="block px-4 py-2 hover:text-secondary hover:bg-gray-100"
              >
                CX/Customer Support
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="nav-link text-black px-3 text-base font-medium transition-colors duration-300 hover:text-secondary"
          >
            About
          </a>
          <a
            href="/blogs"
            className="nav-link text-black px-3 text-base font-medium transition-colors duration-300 hover:text-secondary"
          >
            Blogs
          </a>
          <a
            href="/career"
            className="nav-link text-black px-3 text-base font-medium transition-colors duration-300 hover:text-secondary"
          >
            Career
          </a>
          <CustomButton label="Get Started" />
        </div>
        {/*<a*/}
        {/*  href="/contact"*/}
        {/*  className="hidden md:block px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"*/}
        {/*>*/}
        {/*  Get Started*/}
        {/*</a>*/}

        {/*<button className="block md:hidden">*/}
        {/*  <svg*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    className="h-6 w-6 text-gray-800"*/}
        {/*    fill="none"*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*    stroke="currentColor"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*      strokeLinecap="round"*/}
        {/*      strokeLinejoin="round"*/}
        {/*      strokeWidth={2}*/}
        {/*      d="M4 6h16M4 12h16m-7 6h7"*/}
        {/*    />*/}
        {/*  </svg>*/}
        {/*</button>*/}
      </div>
    </nav>
  );
};

export default Navbar;
