import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";


const Dashboard = ({children}) => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content grid gap-4 w-full">
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><FaBars fontSize={40} /></label>
                <Outlet/>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                    <li><Link to={'/dashboard/announcements'}>Announcements</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;