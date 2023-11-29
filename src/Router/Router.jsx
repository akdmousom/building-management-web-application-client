import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
import Announcements from "../Pages/Announcements/Announcements";
import DashBoardHome from "../Pages/DashboardHome/DashBoardHome";
import ManageMember from "../Pages/DashBoard/ManageMember/ManageMember";
import AdminRouter from "./AdminRouter";
import MakeAnnouncements from "../Pages/DashBoard/MakeAnnouncements/MakeAnnouncements";
import AgreementRequest from "../Pages/DashBoard/AgreementRequest/AgreementRequest";

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
    },
    {
        path: '/dashboard',
        element: <PrivetRouter><Dashboard/></PrivetRouter>,
        children: [
            {
                index: true,
                element: <PrivetRouter><DashBoardHome/></PrivetRouter>
            },
            {
                path: 'profile',
                element: <PrivetRouter><Profile/></PrivetRouter>
            },
            {
                path: 'announcements',
                element: <PrivetRouter><Announcements/></PrivetRouter>
            },
            {
                path: 'manage-member',
                element: <AdminRouter><ManageMember/></AdminRouter>
            },
            {
                path: 'make-announcements',
                element: <AdminRouter><MakeAnnouncements/></AdminRouter>
            },
            {
                path: 'agreement-request',
                element: <AdminRouter><AgreementRequest/></AdminRouter>
            }
        ]
    }

])

export default Router;