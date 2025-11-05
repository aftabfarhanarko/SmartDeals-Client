import React, { use } from "react";
import { Link } from "react-router";

const RecentProducat = ({ promiseData }) => {
  const producats = use(promiseData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mx-auto">
      {producats.map((producat) => (
        <div
          key={producat._id}
          className="w-[320px] bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col text-left transition-all duration-300 hover:shadow-md"
        >
          {/* Product Image Placeholder */}
          <div className="w-full h-[240px] bg-gray-200 rounded-lg mb-3">
            <img
              className="w-full h-[240px] rounded-lg border border-base-300  transform transition-transform duration-500 ease-out hover:scale-105 "
              src={producat.image}
            ></img>
          </div>

          {/* Sale Badge */}
          <div className="flex  mb-2">
            <span className="px-3 py-[3px] text-[12px] rounded-full text-purple-600 bg-purple-100 font-medium">
              {producat.status}
            </span>
          </div>

          {/* Product Title */}
          <h2 className=" text-gray-800 font-semibold text-[15px] mb-1">
           {producat.title}
          </h2>

          {/* Price */}
          <p className=" text-purple-600 font-semibold text-[14px] mb-3">
            $ {producat.price_min}-{producat.price_max}
          </p>

          {/* View Details Button */}
          <Link to={`/producat/${producat._id}`}>
            <button className="w-full border border-purple-400 text-purple-600 py-2 rounded-lg font-medium text-[14px] hover:bg-purple-50 transition-all">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecentProducat;
