import React, { useContext, useEffect, useRef, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router";
import { AuthContex } from "../../Context/AuthContex";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import BidesProducat from "./BidesProducat";

const ProducatDetlics = () => {
  const producat = useLoaderData();
  const { user } = useContext(AuthContex);
  const [bides, setBides] = useState([]);
  const sdhsh = producat.created_at;
  const tashdo = new Date(sdhsh);
  const formatted = tashdo.toISOString().split("T")[0]; // "2025-10-29"
  const refrence = useRef(null);
  const findesID = producat._id;

  useEffect(() => {
    fetch(`http://localhost:3000/producat/bids/${findesID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBides(data);
      });
  }, [findesID]);

  const handelModal = () => {
    refrence.current.showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const images = e.target.imges.value;
    const price = Number(e.target.price.value);
    console.log({ email, price, name, images });
    const producatID = producat._id;
    console.log(producatID);

    const bidesProducat = {
      producatIDS: producatID,
      byer_image: images,
      byer_name: name,
      byer_email: email,
      bid_price: price,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bidesProducat),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After The Data Inseart Of tHe producat in MongoDB", data);
        if (data.insertedId) {
          refrence.current.close();
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Bids has been Places",
            showConfirmButton: false,
            timer: 1000,
          });

          // add new bids
          bidesProducat._id = data.insertedId;
          const myState = [...bides, bidesProducat];
          myState.sort((a,b) => b.bid_price - a.bid_price)
          setBides(myState);
        }
      });
  };

  console.log(user);

  return (
    <div className="bg-base-200 py-15">
      <div className="max-w-7xl mx-auto p-6  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <div className=" border border-base-300  rounded-lg overflow-hidden ">
              <img
                src={producat.image}
                alt={""}
                className="w-full h-full  object-cover transform transition-transform duration-500 ease-out hover:scale-105 "
              />
            </div>
            <div className="mt-4 pt-8">
              <div className=" md:hidden  block">
                <Link
                  to="/allproduct"
                  className="text-[14px] hover:text-red-600 text-gray-900 mb-2 flex items-center gap-2"
                >
                  <GoArrowLeft /> Back To All Producat
                </Link>
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-3">
                  {producat.title}
                </h1>
                <p className=" mb-8 w-20  text-center rounded-4xl py-1 text-purple-500 text-[12px] bg-purple-100">
                  {producat.status}
                </p>
              </div>

              <h2 className=" text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                Product Description
              </h2>

              <div className="space-y-4">
                {/* Condition and Usage */}
                <div className="flex border-b pb-3 border-gray-500 gap-8 text-sm">
                  <div>
                    <span className="font-semibold text-purple-600">
                      Condition:{" "}
                      <span className="text-gray-900">
                        {producat.condition}
                      </span>
                    </span>{" "}
                    <span className="text-gray-900">{""}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-600">
                      Usage Time:{" "}
                      <span className="text-gray-900">{producat.usage}</span>
                    </span>{" "}
                    <span className="text-gray-900">{""}</span>
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-gray-600 leading-relaxed">
                  {producat.description}
                </p>
                {/* Action Icons */}
                <div className="flex items-center gap-2 md:block hidden ">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6 pt-10">
            {/* Product Details */}
            <div className=" ">
              <div className="hidden  md:block">
                <Link
                  to="/allproduct"
                  className="text-[17px] font-medium  hover:text-red-600 text-gray-900 mb-2 flex items-center gap-2"
                >
                  <GoArrowLeft /> Back To All Producat
                </Link>
                <h1 className="text-4xl font-semibold text-gray-900 mb-3">
                  {producat.title}
                </h1>
                <p className=" mb-8 w-20  text-center rounded-4xl py-1 text-purple-500 text-[12px] bg-purple-100">
                  {producat.status}
                </p>
              </div>

              <div className=" mb-7 bg-white   border rounded-lg border-base-300 p-4  shadow">
                <p className="text-xl text-green-600 font-semibold">
                  {" "}
                  ${producat.price_min}-{producat.price_max}
                </p>
                <p className="text-sm">Price starts from </p>
              </div>

              <div className="border bg-white p-4 border-base-300 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Product Details
                </h2>
                <p className="font-semibold text-gray-700  flex items-center gap-2">
                  Product ID:
                  <span className="text-[14px] text-gray-600">
                    {producat._id}
                  </span>
                </p>
                <p className="font-semibold text-gray-700  flex items-center gap-2">
                  Posted :<span className="text-[14px] ">{formatted}</span>
                </p>
              </div>
            </div>

            {/* Seller Information */}
            <div className="border p-4 bg-white rounded-lg shadow border-base-300">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Seller Information
              </h2>
              <div className="space-y-4">
                {/* Seller Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{""}</div>
                    <div className="text-sm text-gray-600">{""}</div>
                  </div>
                </div>

                {/* Seller Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-24">
                      Location:
                    </span>
                    <span className="text-gray-600">{""}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-24">
                      Contact:
                    </span>
                    <span className="text-gray-600">{""}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 w-24">
                      Status:
                    </span>
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                      {status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Want to Buy Button */}
            <button
              onClick={handelModal}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
            >
              I Want Buy This Product
            </button>
            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <dialog
                ref={refrence}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="absolute top-2  right-2">
                    <form method="dialog">
                      <button className="text-2xl ">
                        <IoClose />
                      </button>
                    </form>
                  </div>

                  <div className="">
                    <h2 className="mb-8 text-center   text-2xl font-bold text-gray-900">
                      Give Seller Your Offered Price
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Buyer Name and Email Row */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          Buyer Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          readOnly
                          defaultValue={user.displayName}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          Buyer Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          readOnly
                          defaultValue={user.email}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Buyer Image URL */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">
                        Buyer Image URL
                      </label>
                      <input
                        type="url"
                        name="imges"
                        defaultValue={user.photoURL}
                        readOnly
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                      />
                    </div>

                    {/* Place your Price */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">
                        Place your Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder="e.g. Artisan Roasters"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                        required
                      />
                    </div>

                    {/* Contact Info */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">
                        Contact Info
                      </label>
                      <input
                        type="text"
                        name="info"
                        placeholder="e.g. +1-555-1234"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                        required
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 pt-4">
                      <button
                        type="submit"
                        className="rounded-lg bg-purple-600 px-5 py-2 font-medium text-white transition-colors hover:bg-purple-700"
                      >
                        Submit Bid
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
            <div className="flex items-center gap-2 block  md:hidden   ">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Description Section */}

        <div className="py-20">
          <h2 className="text-3xl font-semibold text-purple-600 mt-2">
            Bids For This Products: {bides?.length}
          </h2>

          <div className="overflow-x-auto shadow">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Byer Name</th>
                  <th>Byer Email</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {/* row 1 */}
                {bides?.map((bid, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={bid.byer_image ? bid.byer_image : "No Img"}
                              alt="No Img"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold"> {bid.byer_name}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {bid.byer_email}
                      </span>
                    </td>
                    <td>
                      $<span>{bid.bid_price}</span>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducatDetlics;
