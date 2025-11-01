import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { AuthContex } from "../Context/AuthContex";
import Loder from "../components/Loder";

const Root = () => {
  const { loding } = useContext(AuthContex);
  if (loding) {
    return <Loder></Loder>;
  }
  return (
    <div>
      <nav className="bg-base-100 shadow-sm">
        <Navbar></Navbar>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
