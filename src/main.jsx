import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import AUthProvider from "./Context/AUthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AUthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AUthProvider>
  </StrictMode>
);
