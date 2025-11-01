import { Suspense } from "react";

import { IoIosSearch } from "react-icons/io";
import RecentProducat from "../components/RecentProducat/RecentProducat";
import { HashLoader } from "react-spinners";
import Hero from "../components/Hero/Hero";

const promiseData = fetch("http://localhost:3000/limet-producat").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div>
        <section>
        <Hero></Hero>
      </section>
      <div className="w-11/12 mx-auto my-15">
      <h1 className="text-3xl text-center my-6 font-bold ">Recent <span className="text-primary">Products</span></h1>
        <Suspense
          fallback={
            <div>
              {" "}
              <HashLoader color="#13e1cf" />
            </div>
          }
        >
          <RecentProducat promiseData={promiseData}></RecentProducat>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
