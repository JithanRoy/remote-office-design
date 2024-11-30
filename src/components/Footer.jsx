import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className=" text-center">
        <p>
          &copy; {new Date().getFullYear()} Brand Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
