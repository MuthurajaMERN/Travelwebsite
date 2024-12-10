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

const ServicesPrice = () => {
  const [packages, setPackages] = useState([]); // State for fetched packages

  useEffect(() => {
    // Fetch packages from backend
    const fetchPackages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/packages"); // Replace with your backend URL
        setPackages(response.data); // Update state with fetched packages
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  // Helper to select icons based on categories
  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "beach":
        return <FaUmbrellaBeach className="text-blue-500 text-4xl mb-2" />;
      case "flight":
        return <FaPlaneDeparture className="text-blue-500 text-4xl mb-2" />;
      case "hotel":
        return <FaHotel className="text-blue-500 text-4xl mb-2" />;
      case "adventure":
        return <FaMountain className="text-blue-500 text-4xl mb-2" />;
      case "visa":
        return <FaPassport className="text-blue-500 text-4xl mb-2" />;
      default:
        return <FaMapMarkedAlt className="text-blue-500 text-4xl mb-2" />;
    }
  };

  return (
    <section className="bg-gray-300 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Services with Real-Time Pricing
        </h2>
        <div className="flex flex-wrap gap-6 justify-center max-h-[500px] overflow-y-auto">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white shadow-lg rounded-lg w-[300px] p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300"
            >
              {getIcon(pkg.category)} {/* Display dynamic icon */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {pkg.packageName}
              </h3>
              <p className="text-gray-600 mb-2">{pkg.title}</p>
              <div className="text-gray-500 text-sm mb-4">
                From: {pkg.fromLocation} To: {pkg.toLocation}
              </div>
              <div className="text-lg font-bold text-blue-600">
                Price: ₹{pkg.price}
              </div>
              {pkg.offerTimeline && (
                <div className="text-sm text-red-500 mt-2">
                  Offer valid till: {pkg.offerTimeline}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPrice;
