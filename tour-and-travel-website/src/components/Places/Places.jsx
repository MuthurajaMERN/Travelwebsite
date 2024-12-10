import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    "img": "https://media.istockphoto.com/id/993954088/photo/banana-boat-fun.jpg?s=1024x1024&w=is&k=20&c=Dz4ViCrBOCbJD0oqt8EH_XiIyqMLfHhLdZiBb5jkwoc=",
    "title": "Boat Adventure",
    "location": "USA",
    "description": "Explore the serene lakes and rivers of the USA with our exclusive boat tours.",
    "price": 6700,
    "type": "Cultural Relax"
  },
  {
    "img": "https://media.istockphoto.com/id/523385074/photo/eiffle-tower.jpg?s=612x612&w=0&k=20&c=5atvV3FAQFkz_3POYWGfGHJn4YN2GH6ZJ20A1reERQ8=",
    "title": "Eiffel Tower",
    "location": "Paris, France",
    "description": "Experience the beauty and elegance of Paris with a visit to the iconic Eiffel Tower.",
    "price": 4500,
    "type": "Romantic Getaway"
  },
  {
    "img": "https://media.istockphoto.com/id/155096944/photo/taj-mahal-sunrise.jpg?s=612x612&w=0&k=20&c=SR-5FqC8K5cMJwUbLa-UQGAvZdJ48rLrdg63bBYpsDU=",
    "title": "Taj Mahal",
    "location": "Agra, India",
    "description": "Discover the timeless beauty of the Taj Mahal, a symbol of love and architectural brilliance.",
    "price": 3000,
    "type": "Cultural Heritage"
  },
  {
    "img": "https://media.istockphoto.com/id/474160902/photo/luxury-houseboat-in-india.jpg?s=612x612&w=0&k=20&c=IwXf6K6LMKMLu8f0maBq2Qtyu2ukSypiKvdFfCDGLy0=",
    "title": "Kerala Backwaters",
    "location": "Kerala, India",
    "description": "Cruise through the tranquil backwaters of Kerala on a traditional houseboat.",
    "price": 5800,
    "type": "Nature Retreat"
  },
  {
    "img": "https://media.istockphoto.com/id/1476114600/photo/hawa-mahal-palace-or-palace-of-the-winds-in-jaipur-rajasthan-state-in-india.jpg?s=612x612&w=0&k=20&c=N0bISZf0ZuAPTQOvmJFqhoTQqEe4glEwwNMvgKEaRuU=",
    "title": "Jaipur - Pink City",
    "location": "Rajasthan, India",
    "description": "Immerse yourself in the royal charm of Jaipur and its stunning palaces.",
    "price": 4200,
    "type": "Cultural Exploration"
  },
  {
    "img": "https://media.istockphoto.com/id/482535663/photo/goa-palolem-beach-from-above.jpg?s=612x612&w=0&k=20&c=cukI6ZyWRj2UOvIPWagF_6eXFGD0R5UyFEXPLAQ4cfY=",
    "title": "Goa Beaches",
    "location": "Goa, India",
    "description": "Relax on the golden beaches of Goa with stunning sunsets and vibrant nightlife.",
    "price": 4000,
    "type": "Beach Vacation"
  },
  {
    "img": "https://media.istockphoto.com/id/1155675399/photo/pangong-lake.jpg?s=612x612&w=0&k=20&c=nBGDknbZslRWqMtQGZOyqkb_KzcT-Mx4DrSfVLQUYxQ=",
    "title": "Leh Ladakh",
    "location": "Ladakh, India",
    "description": "Experience the breathtaking beauty of the Himalayas and the serene monasteries of Ladakh.",
    "price": 8000,
    "type": "Adventure Trekking"
  },
  {
    "img": "https://media.istockphoto.com/id/1302467051/photo/various-views-of-the-rann-of-kutch.jpg?s=612x612&w=0&k=20&c=kd78WP38IuL-R23iXssaJ1NpuEJ2IJ4R3Y2YLxDPwO4=",
    "title": "Rann of Kutch",
    "location": "Gujarat, India",
    "description": "Witness the white desert of Rann of Kutch, a natural wonder and cultural hub.",
    "price": 4500,
    "type": "Cultural Festivity"
  },
  {
    "img": "https://media.istockphoto.com/id/531163955/photo/hindu-pilgrims-take-holy-bath-in-the-ganges-river.jpg?s=612x612&w=0&k=20&c=tLs6vhzDdtnWwDHzZGNy2hFhYjxxQ7WQUN-uoq2HPRQ=",
    "title": "Varanasi Ghats",
    "location": "Varanasi, India",
    "description": "Explore the spiritual essence of India with a visit to the ghats of Varanasi.",
    "price": 3500,
    "type": "Spiritual Journey"
  },
  {
    "img": "https://media.istockphoto.com/id/543179390/photo/golden-temple-the-main-sanctuary-of-sikhs-amritsar-india.jpg?s=612x612&w=0&k=20&c=s4bOWzg0e0ecBBPmuzIEShhrmMWFE16cnYlAZ7Nfdeg=",
    "title": "Golden Temple",
    "location": "Amritsar, India",
    "description": "Visit the Golden Temple, a symbol of peace, spirituality, and community service.",
    "price": 3200,
    "type": "Spiritual Experience"
  },
  {
    "img": "https://media.istockphoto.com/id/136232473/photo/achyuta-raya-temple-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=iyApv09FCVZU1KitHzw0WyAsEoGEt4xE4ZsEjEQG8tQ=",
    "title": "Hampi",
    "location": "Karnataka, India",
    "description": "Explore the ruins of Hampi, a UNESCO World Heritage site filled with ancient wonders.",
    "price": 4000,
    "type": "Historical Exploration"
  },
  {
    "img": "https://media.istockphoto.com/id/1480901115/photo/andaman-island.jpg?s=612x612&w=0&k=20&c=pCV7gcVp-k7DeQ-9_aOsSATR37nMjQZN-OC13-G480I=",
    "title": "Andaman Islands",
    "location": "Andaman & Nicobar, India",
    "description": "Discover pristine beaches and crystal-clear waters in the Andaman Islands.",
    "price": 9000,
    "type": "Tropical Escape"
  }
]



const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                  {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
