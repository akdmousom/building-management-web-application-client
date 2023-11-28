import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import useAxios from "../../Hooks/Axios/useAxios";
// import { useQuery } from "@tanstack/react-query";
// import useSecureAxios from "../../Hooks/Axios/useSecureAxios";
// import axios from "axios";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/Admin/useAdmin";




const Dashboard = () => {


    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/v1/users?email=akd@gmail.com')
    //         .then(res => {
    //             // console.log(res.data.message);
    //         })
    // }, [])

    const admin = useAdmin()

    console.log(admin);


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content grid gap-4 w-full">
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><FaBars fontSize={40} /></label>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                    <li><Link to={'/dashboard/announcements'}>Announcements</Link></li>
                    <li><Link to={'/dashboard/announcements'}>Make payment</Link></li>
                    <li><Link to={'/dashboard/announcements'}> Payment History</Link></li>
                    <li><Link to={'/dashboard/announcements'}> Announcements</Link></li>

                  
                    
                    <div className=" divider  grid">
                    <li><Link to={'/dashboard/announcements'}> Manage Members</Link></li>
                    <li><Link to={'/dashboard/announcements'}>  Make Announcement</Link></li>
                    <li><Link to={'/dashboard/announcements'}>   Agreement Requests</Link></li>
                    <li><Link to={'/dashboard/announcements'}>   Manage Coupons</Link></li>
                    
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;