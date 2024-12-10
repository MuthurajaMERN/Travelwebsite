import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    "name": "John Doe",
    "location": "New York, USA",
    "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    "testimonial": "My trip was amazing! The itinerary was well-planned, and the destinations were breathtaking. Highly recommend this service for anyone looking to explore new places."
  },
  {
    "name": "Amara Singh",
    "location": "Delhi, India",
    "photo": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "testimonial": "The tour was an unforgettable experience. From the Taj Mahal to the Kerala backwaters, everything was seamless and enjoyable. The team was very supportive throughout."
  },
  {
    "name": "Emily Wilson",
    "location": "London, UK",
    "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "testimonial": "The best vacation I've had in years! The local guides were knowledgeable, and the accommodations exceeded my expectations. Looking forward to booking my next trip soon!"
  },
  {
    "name": "Chen Wei",
    "location": "Beijing, China",
    "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "testimonial": "I loved the cultural immersion experiences offered during the tour. The team ensured I had a smooth and comfortable journey. Great value for money!"
  },
  {
    "name": "Carlos Martínez",
    "location": "Barcelona, Spain",
    "photo": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    "testimonial": "Exploring new places with this company was a dream come true. Every detail was taken care of, from transportation to guided tours. Can't wait to travel again!"
  }
]


const Testimonial = () => {
  var settings = {
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
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-justify mb-20 max-w-[700px] mx-auto">
           
            <h1 className="text-4xl font-bold aligncenter ">Testimonial</h1>
            <p className="text-3xl text-gray-400">
              {" "}
              "We strive to create unforgettable travel experiences for our clients. Whether you're seeking adventure, relaxation, or cultural exploration, our curated tours and exceptional service ensure every moment is extraordinary. Here’s what some of our travelers had to say about their journeys."


            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ index, name, testimonial, photo }) => {
                return (
                  <div key={index} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={photo}
                        width={75}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{testimonial}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
