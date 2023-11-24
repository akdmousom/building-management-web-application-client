import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'apartment',
                element: <Apartment/>
            },
            
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register', 
        element: <Register/>
    }
])

export default Router;