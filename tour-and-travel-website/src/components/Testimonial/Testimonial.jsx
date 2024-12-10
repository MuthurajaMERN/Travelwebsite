import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

const initialTestimonials = [
  {
    name: "John Doe",
    location: "New York, USA",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    testimonial: "My trip was amazing! The itinerary was well-planned, and the destinations were breathtaking. Highly recommend this service for anyone looking to explore new places.",
  },
  {
    name: "Amara Singh",
    location: "Delhi, India",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    testimonial: "The tour was an unforgettable experience. From the Taj Mahal to the Kerala backwaters, everything was seamless and enjoyable. The team was very supportive throughout.",
  },
  // ... other hardcoded testimonials
];

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials); // Combine hardcoded and fetched data

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/testimonials");
        // Merge fetched testimonials with hardcoded data
        setTestimonials((prevTestimonials) => [
          ...prevTestimonials,
          ...response.data.map((item) => ({
            name: item.customerName,
            testimonial: item.testimonialContent,
            photo: item.customerImage || "https://via.placeholder.com/150", // Default image if not provided
          })),
        ]);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []); // Fetch once on component mount

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 10000, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-justify mb-20 max-w-[700px] mx-auto">
            <h1 className="text-4xl font-bold text-center">Testimonial</h1>
            <p className="text-3xl text-gray-400">
              "We strive to create unforgettable travel experiences for our clients. Whether you're seeking adventure, relaxation, or cultural exploration, our curated tours and exceptional service ensure every moment is extraordinary. Here’s what some of our travelers had to say about their journeys."
            </p>
          </div>
          {/* Testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="my-6">
                  <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <img
                      src={item.photo}
                      width={75}
                      alt="Customer"
                      className="rounded-full block mx-auto"
                    />
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <p className="text-gray-500 text-sm">{item.testimonial}</p>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
