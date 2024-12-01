import React, { useState } from 'react';
import CustomButton from './shared/custom-button/index.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <nav className="fixed w-full px-8 lg:px-20 z-[50] inset-x-0 top-0 bg-white shadow-md">
      <div className="flex justify-between items-center py-4">
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

        <button
          onClick={toggleMenu}
          className="block md:hidden text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } bg-white w-full shadow-lg absolute left-0 top-full`}
      >
        <a
          href="/"
          className="block px-4 py-2 text-black text-base font-medium hover:bg-gray-100 hover:text-secondary"
        >
          Home
        </a>
        <div className="relative">
          <button
            onClick={toggleSubmenu}
            className="w-full text-left px-4 py-2 text-black font-medium flex items-center justify-between hover:bg-gray-100 hover:text-secondary"
          >
            <span>Teams</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transform transition-transform ${
                isSubmenuOpen ? 'rotate-180' : ''
              }`}
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
          <div
            className={`pl-4 ${
              isSubmenuOpen ? 'block' : 'hidden'
            } transition-all duration-300`}
          >
            <a
              href="/technology"
              className="block px-4 py-2 text-black text-sm hover:bg-gray-100 hover:text-secondary"
            >
              Technology
            </a>
            <a
              href="/marketing"
              className="block px-4 py-2 text-black text-sm hover:bg-gray-100 hover:text-secondary"
            >
              Marketing
            </a>
            <a
              href="/creative-studio"
              className="block px-4 py-2 text-black text-sm hover:bg-gray-100 hover:text-secondary"
            >
              Creative Studio
            </a>
            <a
              href="/back-office"
              className="block px-4 py-2 text-black text-sm hover:bg-gray-100 hover:text-secondary"
            >
              CX/Customer Support
            </a>
          </div>
        </div>
        <a
          href="/about"
          className="block px-4 py-2 text-black text-base font-medium hover:bg-gray-100 hover:text-secondary"
        >
          About
        </a>
        <a
          href="/blogs"
          className="block px-4 py-2 text-black text-base font-medium hover:bg-gray-100 hover:text-secondary"
        >
          Blogs
        </a>
        <a
          href="/career"
          className="block px-4 py-2 text-black text-base font-medium hover:bg-gray-100 hover:text-secondary"
        >
          Career
        </a>
        <CustomButton
          label="Get Started"
          className="sm:w-full w-1/2 sm:ml-0 mx-auto mb-8 sm:mb-0 text-center mt-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;
