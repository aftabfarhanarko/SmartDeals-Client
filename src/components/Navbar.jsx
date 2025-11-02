import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "../index.css";
import { AuthContex } from "../Context/AuthContex";
import Loder from "./Loder";
import { HashLoader } from "react-spinners";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  const naviget = useNavigate();
  const [open, setOpen] = useState(false);

  const { logOutUser, user, loding } = useContext(AuthContex);
  const link = (
    <div className="text-[16px] font-medium">
      <NavLink to="/" className="ml-3">
        Home
      </NavLink>
      <NavLink to="/allproduct" className="ml-3">
        All Products
      </NavLink>
      <NavLink to="/myproducat" className="ml-3">
        My Products
      </NavLink>
      <NavLink to="/mybids" className="ml-3">
        My Bids
      </NavLink>
      <NavLink to="/creatProducat" className="ml-3">
        Create Product
      </NavLink>
    </div>
  );

  const handelLogOut = () => {
    logOutUser();
    naviget("/login");
    setOpen(false);
  };

  console.log(user);

  return (
    <div className="z-40 bg-white shadow py-2   fixed w-full">
      <div className="navbar  w-11/12 mx-auto ">
        <div className="navbar-start">
          <a className=" font-bold text-2xl">
            Smart<span className="text-primary">Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <div className=" hidden md:block  ">
            {loding ? (
              <HashLoader color="#13e1cf" />
            ) : user ? (
              <div className="flex items-center">
                <div className="hidden  md:block ">
                  <div className="">
                    <img
                      className=" w-7 md:w-13 rounded-full"
                      src={user.photoURL}
                    ></img>
                  </div>
                </div>
                <button
                  onClick={handelLogOut}
                  className="ml-2 btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  {" "}
                  <button className="btn btn-outline text-primary hover:bg-primary hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  {" "}
                  <button className="ml-2 btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="block  md:hidden relative ">
            {/* menu toggle btn */}
            <button
              onClick={() => setOpen(!open)}
              className="btn-ghost text-[32px] font-bold fixed top-4 right-5 z-50 text-black hover:text-green-700 transition-colors"
            >
              {open ? <IoClose /> : <TbMenu2 />}
            </button>

            {/* RIGHT DRAWER MENU */}
            <div
              className={`fixed top-0 right-0 h-full bg-base-200 shadow-xl transition-all duration-500 ease-in-out z-40 
               ${
                 open
                   ? "translate-x-0 opacity-100"
                   : "translate-x-full opacity-0"
               }
            `}
              style={{ width: "60%" }} // 40% width mobile screen
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold ">
                  <span className="text-primary">Smart</span> Deals
                </h2>
                <div className="mt-5 ml-2">
                  {user ? (
                    <>
                      <img
                        className="w-[45px] rounded-full"
                        src={user.photoURL}
                      />
                    </>
                  ) : (
                    <FaRegUserCircle className="w-10 h-10 text-black/80" />
                  )}
                </div>

                <ul className="menu  text-lg space-y-3">
                  <NavLink to="/" onClick={() => setOpen(false)}>
                    Home
                  </NavLink>
                  <NavLink to="/allproduct" onClick={() => setOpen(false)}>
                    All Products
                  </NavLink>
                  <NavLink to="/myproducat" onClick={() => setOpen(false)}>
                    My Products
                  </NavLink>
                  <NavLink to="/mybids" onClick={() => setOpen(false)}>
                    My Bids
                  </NavLink>
                  <NavLink to="/creatProducat" onClick={() => setOpen(false)}>
                    Create Product
                  </NavLink>
                  <button
                    onClick={handelLogOut}
                    className="btn btn-outline text-primary hover:bg-primary hover:text-white"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            </div>

            {/* Overlay click to close */}
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
/**
 *  <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
 */
