import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user, logOutUser } = useAuth();
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
        const statusa = err.response?.status;
        if (statusa === 401 || statusa === 403) {
          logOutUser();
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(interceptorId);
      instance.interceptors.response.eject(responseIntercpted);
    };
  }, [user, logOutUser]);

  return instance;
};

export default useAxiosSecure;
