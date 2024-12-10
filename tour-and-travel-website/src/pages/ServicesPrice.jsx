import React from "react";
import {
  FaUmbrellaBeach,
  FaPlaneDeparture,
  FaHotel,
  FaMapMarkedAlt,
  FaMountain,
  FaPassport,
} from "react-icons/fa";

const ServicesPrice = () => {
  const services = [
    {
      title: "Beach Getaways",
      description: "Relax on pristine beaches across the globe.",
      icon: <FaUmbrellaBeach className="text-blue-500 text-4xl mb-2" />,
      price: "₹15,000",
    },
    {
      title: "International Flights",
      description: "Seamless flight booking to all destinations.",
      icon: <FaPlaneDeparture className="text-blue-500 text-4xl mb-2" />,
      price: "₹50,000",
    },
    {
      title: "Luxury Hotels",
      description: "Stay in 5-star luxury accommodations worldwide.",
      icon: <FaHotel className="text-blue-500 text-4xl mb-2" />,
      price: "₹10,000 per night",
    },
    {
      title: "Guided Tours",
      description: "Professional guides for immersive travel experiences.",
      icon: <FaMapMarkedAlt className="text-blue-500 text-4xl mb-2" />,
      price: "₹8,000 per day",
    },
    {
      title: "Adventure Trips",
      description: "Exciting adventures tailored for thrill-seekers.",
      icon: <FaMountain className="text-blue-500 text-4xl mb-2" />,
      price: "₹20,000",
    },
    {
      title: "Visa Assistance",
      description: "Fast and reliable visa processing services.",
      icon: <FaPassport className="text-blue-500 text-4xl mb-2" />,
      price: "₹5,000",
    },
    {
      title: "Cruise Packages",
      description: "Luxurious cruise vacations across the oceans.",
      icon: <FaUmbrellaBeach className="text-blue-500 text-4xl mb-2" />,
      price: "₹60,000",
    },
    {
      title: "Cultural Tours",
      description: "Discover rich cultures and traditions worldwide.",
      icon: <FaMapMarkedAlt className="text-blue-500 text-4xl mb-2" />,
      price: "₹12,000",
    },
    {
      title: "Wildlife Safaris",
      description: "Explore the wilderness with professional guides.",
      icon: <FaMountain className="text-blue-500 text-4xl mb-2" />,
      price: "₹25,000",
    },
  ];

  return (
    <section className="bg-gray-300 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Services with Real-Time Pricing
        </h2>
        <div className="flex flex-wrap gap-6 justify-center max-h-[500px] overflow-y-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg w-[300px] p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-lg font-bold text-blue-600">
                Price: {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPrice;
