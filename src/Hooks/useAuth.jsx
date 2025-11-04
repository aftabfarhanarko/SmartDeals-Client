import { use } from "react";
import { AuthContex } from "../Context/AuthContex";

const useAuth = () => {
  const authInfo = use(AuthContex);
  return authInfo;
};

export default useAuth;
