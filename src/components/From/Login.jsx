import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContex } from "../../Context/AuthContex";
import { Link, useLocation, useNavigate } from "react-router";
import Navbar from "../Navbar";

const Login = () => {
  const [show, setShow] = useState(true);
  const { userLogin, googleLogin } = useContext(AuthContex);
  const locations = useLocation();
  const navagiet = useNavigate();
  // console.log(locations);

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        navagiet(`${locations.state ? locations.state : "/"}`);
        const userdat = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };
        // console.log(result);
        fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userdat),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("Login User Data Saved in MongoDB Database", data);
          });
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const handelGoogle = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user);
        navagiet(`${locations.state ? locations.state : "/"}`);
        const userdat = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userdat),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Login User Data Saved in MongoDB Database", data);
          });
      })
      .catch() ;
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-8">
          <h2 className="text-center text-3xl font-semibold text-gray-800">
            Login
          </h2>
          <p className="text-center text-sm text-gray-500 mt-1">
            Don't have an account?
            <Link
              to="/register"
              className="text-purple-600 font-medium hover:underline ml-1"
            >
              Register Now
            </Link>
          </p>

          <form onSubmit={handelLogin}>
            {/* Email */}
            <label className="block text-sm font-medium text-gray-700 mt-6">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />

            {/* Password */}
            <label className="block text-sm font-medium text-gray-700 mt-4">
              Password
            </label>
            {/* Password */}
            <div className=" relative">
              <input
                type={show ? "password" : "text"}
                required
                name="password"
                placeholder="********"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <div onClick={() => setShow(!show)} className=" cursor-pointer">
                {show ? (
                  <FaEyeSlash className=" absolute top-4 right-4" />
                ) : (
                  <FaEye className=" absolute top-4 right-4" />
                )}
              </div>
            </div>

            <div className="text-right mt-2">
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In button */}
            <button className="w-full mt-6 py-2 text-white rounded-md font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90">
              Sign In
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handelGoogle}
            className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
              Sign In With Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
