import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, logOutUser } = useAuth();
  const naviget = useNavigate();

  useEffect(() => {
    //   request interceptor
    const interceptorId = instance.interceptors.request.use((configs) => {
      if (user?.accessToken) {
        configs.headers.authorization = `Bearer ${user.accessToken}`;
      }
      return configs;
    });

    // respons interceptor
    const responseIntercpted = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const statusa = err.status;
        if (statusa === 401 || statusa === 403) {
          logOutUser()
          .then(() => {
            naviget("/register");
          });
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(interceptorId);
      instance.interceptors.response.eject(responseIntercpted);
    };
  }, [user, logOutUser, naviget]);

  return instance;
};

export default useAxiosSecure;
