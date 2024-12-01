import React from 'react';
import DiscordCart from '../components/shared/DiscortCart.jsx'; // Replace with your actual DiscordCart component import

const Footer = () => {
  return (
    <>
      <section className="section_footer py-16 bg-primary">
        <div className="container mx-auto w-full flex flex-wrap sm:flex-nowrap items-center gap-8 md:gap-16">
          {/* Footer Left Section */}
          <div className="footer-left w-full md:w-[30%]">
            <a href="#" className="nav-logo-wrapper footer w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6534d56edab6affbb1c2c9b1_Remote%20office%20-%20Logo%20white.svg"
                alt="Remote Office Logo"
                className="footer-logo max-w-56 mb-6"
              />
            </a>
            <div className="footer-icons-wrapper mb-6 flex items-center justify-center md:justify-start space-x-6">
              <a
                href="https://www.youtube.com/@remoteoffice5607"
                className="footer-icon-item"
              >
                <img
                  src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/658ee69864761a9ccc5694bc_YouTube.svg"
                  alt="YouTube"
                  className="footer-icon w-8 h-8"
                />
              </a>
              <a
                href="https://www.facebook.com/remoteoffice.au"
                className="footer-icon-item"
              >
                <img
                  src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6534d4738dd7217452536eb3_Facebook%20%E2%86%92%20SVG.svg"
                  alt="Facebook"
                  className="footer-icon w-8 h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/26611437/"
                className="footer-icon-item"
              >
                <img
                  src="https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6534d47317daafaf29a35323_LinkedIn%20%E2%86%92%20SVG.svg"
                  alt="LinkedIn"
                  className="footer-icon w-8 h-8"
                />
              </a>
            </div>
            <div>
              <DiscordCart />
            </div>
          </div>

          {/* Footer Right Section */}
          <div className="footer-right w-full md:w-[70%] text-white">
            <div className="footer-top mb-8 text-center md:text-left">
              <p className="text-lg leading-relaxed">
                Remote Office is an end-to-end remoteOps platform that helps you
                build and manage global remote teams. We provide you with access
                to top-vetted talents, handle compliance and HR issues, and
                offer strategic consultation and support to optimize your team’s
                performance and productivity. Whether you want to supercharge
                your existing team or build your dream team from scratch, we
                have the solution. Join us today and discover the benefits of
                working with Remote Office.
              </p>
            </div>
            <div className="footer-bottom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
              <div>
                <p className="font-bold mb-4">Popular Hires</p>
                <ul className="space-y-2">
                  <li>
                    <a href="/technology" className="link">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a href="/marketing" className="link">
                      Marketers
                    </a>
                  </li>
                  <li>
                    <a href="/creative-studio" className="link">
                      Designers
                    </a>
                  </li>
                  <li>
                    <a href="/back-office" className="link">
                      Support Agents
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-4">Company</p>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/blogs" className="link">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="/career" className="link">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-4">Trust Centre</p>
                <ul className="space-y-2">
                  <li>
                    <a href="/ambassador-program" className="link">
                      Become an Ambassador
                    </a>
                  </li>
                  <li>
                    <a href="/partners-program" className="link">
                      Become a Partner
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/cookie-statement" className="link">
                      Cookie Statement
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-4">Contact</p>
                <p className="text-sm mb-2">
                  Suite No. 1445 17 Gould Road, Herston, QLD 4006, Australia
                </p>
                <a href="tel:+610755289947" className="link">
                  Ph: +610755289947
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black w-full h-12">
        <p className="text-white text-center font-bold pt-3">
          @2024 Remote Office
        </p>
      </div>
    </>
  );
};

export default Footer;
