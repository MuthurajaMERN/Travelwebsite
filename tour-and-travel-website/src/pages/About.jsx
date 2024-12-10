import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import "aos/dist/aos.css";
import AOS from "aos";
import coverwomen from "../assets/cover-women.jpg"
import Services from "./Services";
import ServicesPrice from "./ServicesPrice";


const AboutUs = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <>
      <section className="bg-gray-100 mt-4">
      <div className="container mx-auto py-16 px-4  sm:px-6 lg:px-8">
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Content Section */}
          <div className="max-w-lg mt-8" data-aos="fade-right">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-2xl">
              At **Explore Horizons**, we specialize in creating unforgettable
              travel experiences tailored to your desires. With years of expertise in
              the tourism industry, our team is committed to connecting you to the
              world's most breathtaking destinations. From scenic landscapes to
              immersive cultural experiences, we ensure every journey is seamless and
              enriched with memories that last a lifetime.
            </p>
            <p className="mt-4 text-gray-600 text-2xl">
              Whether you're seeking an adventurous trek, a luxurious retreat, or a
              family getaway, we have you covered. Let us make your travel dreams a
              reality with our personalized tours and exceptional service.
            </p>
            <div className="mt-8">
              <a
                href="#PlaceCard"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-12 md:mt-0" data-aos="fade-left">
            <img
              src={coverwomen}
              alt="About Us"
              className="object-center w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
    <Services/>
    <ServicesPrice/>


      <Location />
      <BlogsComp />
    </>
  );
};

export default AboutUs;
