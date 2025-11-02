import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Loder from "./Loder";

const promiseProducat = fetch("http://localhost:3000/producat").then(res => res.json())
const AllProducat = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl text-center mt-10 font-semibold">All <span className="text-primary">Products</span></h1>
     
     <Suspense fallback={<Loder></Loder>}>
        <Card promiseProducat={promiseProducat}></Card>
     </Suspense>
    </div>
  );
};

export default AllProducat;
