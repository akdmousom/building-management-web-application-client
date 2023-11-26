import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const instance = axios.create({
    baseURL: 'https://localhost:5000',
    withCredentials: true
  });

const useAxios = () => {
    const {logOut} = useContext(AuthContext);
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

export default useAxios;