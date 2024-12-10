import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-gray-100 px-10 pt-12 pb-6">
      <div className="flex flex-wrap justify-between gap-10">
        {/* Company Description */}
        <div className="max-w-md">
          <Link to="/">
            <div className="text-xl font-semibold text-gray-800">Fly Tour</div>
          </Link>
          <div className="mt-6">
            <p className="text-gray-600 leading-relaxed text-sm">
            "We are leaders in the tourism industry, specializing in creating unforgettable travel experiences tailored to your dreams. With expert planning and unmatched service, we turn every journey into a cherished memory."
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base">Services</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <Link to="/services" className="hover:text-gray-800 text-gray-600 text-sm">
                Tour Agency
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-800 text-gray-600 text-sm">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-800 text-gray-600 text-sm">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Platforms Section */}
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base">Best Places</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <Link to="/bestplaces" className="hover:text-gray-800 text-gray-600 text-sm">
                Top Tourist Spots
              </Link>
            </li>
            <li>
              <Link to="/bestplaces" className="hover:text-gray-800 text-gray-600 text-sm">
                Hidden Gems
              </Link>
            </li>
            <li>
              <Link to="/bestplaces" className="hover:text-gray-800 text-gray-600 text-sm">
                Adventure Locations
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="mt-10 mb-6 border-gray-300" />
      <div className="flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <Link to="/terms" className="hover:text-gray-800 text-gray-600 text-sm">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-gray-800 text-gray-600 text-sm">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/security" className="hover:text-gray-800 text-gray-600 text-sm">
              Security
            </Link>
          </li>
        </ul>
        <p className="text-gray-600 text-sm md:ml-auto">© Fly Tour. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
