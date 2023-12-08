import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import useAxios from "../../Hooks/Axios/useAxios";
// import { useQuery } from "@tanstack/react-query";
// import useSecureAxios from "../../Hooks/Axios/useSecureAxios";
// import axios from "axios";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/Admin/useAdmin";
// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";




const Dashboard = () => {


    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/v1/users?email=akd@gmail.com')
    //         .then(res => {
    //             // console.log(res.data.message);
    //         })
    // }, [])



    const isadmin = useAdmin()
    const {isLoading} = isadmin
    if (isLoading) {

        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
        
    }
    const userRole = isadmin?.data?.data?.message;

    console.log(userRole);
   

   
   
    




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

                    {userRole === 'user' ? <>
                    
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                        <li><Link to={'/dashboard/announcements'}>Announcements</Link></li></> 
                        
                        : userRole === 'member' ? <>
                        <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                            <li><Link to={'/dashboard/announcements'}>Announcements</Link></li>
                            <li><Link to={'/dashboard/make-payment'}>Make payment</Link></li>
                            <li><Link to={'/dashboard/payment-history'}> Payment History</Link></li>
                        </> : userRole === 'admin' ? <div className=" divider  grid">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/dashboard/manage-member'}> Manage Members</Link></li>
                        <li><Link to={'/dashboard/make-announcements'}>  Make Announcement</Link></li>
                        <li><Link to={'/dashboard/agreement-request'}>   Agreement Requests</Link></li>
                        <li><Link to={'/dashboard/coupon-code'}>   Manage Coupons</Link></li></div> : <></> }



                    





                </ul>

            </div>
        </div>
    );
};

export default Dashboard;