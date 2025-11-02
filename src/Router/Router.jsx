import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllProducat from "../components/AllProducat";
import Login from "../components/From/Login";
import Register from "../components/From/Register";
import MyProducat from "../components/MyProducat";
import MyBids from "../components/MyBids";
import CreatProducat from "../components/CreatProducat";
import PrivetRouter from "../Provider/PrivetRouter";
import ProducatDetlics from "../components/ProducatDetlics/ProducatDetlics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: (
          <PrivetRouter>
            {" "}
            <Home></Home>
          </PrivetRouter>
        ),
      },

      {
        path: "/producat",
        element: (
          <PrivetRouter>
            <AllProducat></AllProducat>
          </PrivetRouter>
        ),
      },
      {
        path: "/producat/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/producat/${params.id}`),
        element: (
          <PrivetRouter>
            {" "}
            <ProducatDetlics></ProducatDetlics>
          </PrivetRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allproduct",
        element: (
          <PrivetRouter>
            <AllProducat></AllProducat>
          </PrivetRouter>
        ),
      },
      {
        path: "/myproducat",
        element: (
          <PrivetRouter>
            <MyProducat></MyProducat>
          </PrivetRouter>
        ),
      },
      {
        path: "/mybids",
        element: <PrivetRouter><MyBids></MyBids></PrivetRouter>,
      },
      {
        path: "/creatProducat",
        element: (
          <PrivetRouter>
            <CreatProducat></CreatProducat>
          </PrivetRouter>
        ),
      },
      {
        path: "*",
        element: <h1>This is 404 error pages</h1>,
      },
    ],
  },
]);
