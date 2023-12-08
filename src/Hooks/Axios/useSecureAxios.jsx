import axios from "axios";
import useAuth from "../UseAuth/UseAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'https://building-management-server-three.vercel.app/api/v1',
    withCredentials: true
  });
// const instance = axios.create({
//     baseURL: 'http://localhost:5000/api/v1/',
//     withCredentials: true
//   });

const useSecureAxios = () => {
  const {logOut} = useAuth();
  const navigate = useNavigate();
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {

 if (error.response.status === 401 || error.response.status === 403 ) {
    logOut()
 }
    return Promise.reject(error);
  });

 // request interceptor to add authorization header for every secure call to teh api
 instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken')
    // console.log('request stopped by interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


// intercepts 401 and 403 status
instance.interceptors.response.use(function (response) {
    return response;
}, async (error) => {
    const status = error.response.status;
    // console.log('status error in the interceptor', status);
    // for 401 or 403 logout the user and move the user to the login
    if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
    }
    return Promise.reject(error);
})


    return instance
};



export default useSecureAxios;