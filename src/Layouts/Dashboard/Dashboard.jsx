import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-primary text-white font-semibold">
            <ul className="menu p-4">
                    {
                       <>
                       <div className="grid divider">
                        <li><NavLink to={'/dashboard/profile'}>Profile</NavLink></li>
                        <li><NavLink to={'/dashboard/announcements'}>Announcements</NavLink></li>
                        </div>
                       </>
                    }
                   
                    
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;