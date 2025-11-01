import React, { useContext } from "react";
import { AuthContex } from "../Context/AuthContex";
import { Navigate, useLocation } from "react-router";

const PrivetRouter = ({ children }) => {
  const locations = useLocation();
  const { user } = useContext(AuthContex);
  // console.log(location);
  if (user) {
    return children;
  } return<Navigate state={locations.pathname} to="/login"></Navigate>;
};

export default PrivetRouter;
