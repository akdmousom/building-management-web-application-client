import axios from "axios";
import useAuth from "./UseAuth";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
  });

const UseSecureAxios = () => {
  const {logOut} = useAuth()
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {

 if (error.response.status === 401 || error.response.status === 403 ) {
    logOut()
 }
    return Promise.reject(error);
  });
    return instance
};

export default UseSecureAxios;