import React from "react";
import wlogo from "../../assets/wlogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Company Tour",
    link: "/company-tour",
  },
  {
    title: "Honeymoon",
    link: "/honeymoon",
  },
  {
    title: "Curist",
    link: "/curist",
  },

  {
    title:"Contact",
    link:"/contact",
  }
];

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full w-full object-cover opacity-10 z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>

        {/* Footer Content */}
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/10 backdrop-blur-sm rounded-t-xl">
            {/* Logo and Description */}
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={wlogo} alt="" className="max-h-[160px]" />
              </h1>
              <p className="text-medium">
                Discover the world with us. From breathtaking destinations to
                seamless travel services, we make your journey unforgettable.
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Coimbatore, Tamil Nadu</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 973456789</p>
              </div>

              {/* Social Handles */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-2">
              {FooterLinks.map((link, index) => (
                <div key={index} className="py-4 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    {index < 3
                      ? "Important Links"
                      : index < 6
                      ? "Services"
                      : "Explore"}
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                      <Link
                        to={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            © 2024 All rights reserved || Made with ❤️ by Fly
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
