import React, {  useEffect, useState } from "react";
import { Link } from "react-router";
import NoProducat from "./NoProducat/NoProducat";
import useAuth from "../Hooks/useAuth";

const MyProducat = () => {
  const { user } = useAuth();
  const [producats, setMyProducat] = useState([]);
  //   console.log(user);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/producat?email=${user.email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log("This is My Producat data");
          setMyProducat(data);
        });
    }
  }, [user]);
  console.log(producats);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className=" my-10 text-center text-xl md:text-2xl">
        {" "}
        My Create Producat :{" "}
        <span className="text-red-600">({producats.length})</span>{" "}
      </h1>
      {producats.length === 0 ? (
        <NoProducat></NoProducat>
      ) : (
        <div className="grid grid-cols-1 mx-auto md:grid-cols-4 gap-10 mx-auto my-10">
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
      )}
    </div>
  );
};

export default MyProducat;
