import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivetRouter = ({ children }) => {
  const locations = useLocation();
  const { user } = useAuth();
  if (user) {
    return children;
  } return<Navigate state={locations.pathname} to="/login"></Navigate>;
};

export default PrivetRouter;
