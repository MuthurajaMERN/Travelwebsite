import React, { useState, useEffect } from "react";
import {
  FaUmbrellaBeach,
  FaPlaneDeparture,
  FaHotel,
  FaMapMarkedAlt,
  FaMountain,
  FaPassport,
} from "react-icons/fa";
import axios from "axios";

const initialServices = [
  {
    title: "Beach Getaways",
    description:
      "Experience the tranquility of the world's most stunning beaches. Perfect for relaxation and rejuvenation.",
    icon: <FaUmbrellaBeach className="text-blue-500 text-5xl mb-4" />,
    backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "International Flights",
    description:
      "Seamless international flight booking with the best airlines. Travel to your dream destinations with ease.",
    icon: <FaPlaneDeparture className="text-blue-500 text-5xl mb-4" />,
    backgroundImage: "https://images.unsplash.com/photo-1516728778615-2d590ea1856f",
  },
  {
    title: "Luxury Hotels",
    description:
      "Stay at world-class luxury hotels. We ensure comfort, elegance, and unmatched hospitality.",
    icon: <FaHotel className="text-blue-500 text-5xl mb-4" />,
    backgroundImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    title: "Guided Tours",
    description:
      "Explore your destinations with professional guides. Gain insights and discover hidden gems.",
    icon: <FaMapMarkedAlt className="text-blue-500 text-5xl mb-4" />,
    backgroundImage: "https://images.unsplash.com/photo-1533055640609-24b498cdf39d",
  },
  {
    title: "Adventure Trips",
    description:
      "Embark on thrilling adventures, from mountain trekking to wild safaris. Perfect for thrill-seekers.",
    icon: <FaMountain className="text-blue-500 text-5xl mb-4" />,
    backgroundImage: "https://images.unsplash.com/photo-1548699644-5c23b8b38ad4",
  },
  {
    title: "Visa Assistance",
    description:
      "Hassle-free visa processing for all your international travel needs. Fast and reliable services.",
    icon: <FaPassport className="text-blue-500 text-5xl mb-4" />,
    backgroundImage: "https://images.unsplash.com/photo-1508610048659-a06b669e3321",
  },
];

const ServicesSection = () => {
  const [services, setServices] = useState(initialServices); // Combine hardcoded and fetched data

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/services"); // Fetch services from backend
        const fetchedServices = response.data.map((service) => ({
          title: service.serviceName,
          description: service.details,
          icon: <FaMapMarkedAlt className="text-blue-500 text-5xl mb-4" />, // Example icon; replace as needed
          backgroundImage: "https://via.placeholder.com/300", // Default background image
        }));
        setServices((prevServices) => [...prevServices, ...fetchedServices]);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg overflow-hidden h-[400px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              ></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center h-full text-white">
                {service.icon}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-base font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
