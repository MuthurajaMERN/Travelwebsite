import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <>
      <div
        className="shadow-md transition-all duration-500 hover:cursor-zoom-in hover:shadow-md   hover:scale-110 border-indigo-900 hover:shadow-green-500 dark:bg-slate-950 dark:text-white cursor-pointer gap-4 bg-gray-500 text-white"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[380px] w-full object-cover transition duration-300  hover:scale-60"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-80">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
