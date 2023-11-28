import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { IoIosLogIn } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcHome } from "react-icons/fc";
import Container from "../../Components/Container/Container";
import toast from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";

const MainLayout = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext)
    
    const handleLogout = () => {
        logOut()
        .then(()=>{
            toast.success('Logout Successfully')
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }


    const navItem = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'apartment'}>Apartments</NavLink></li>
        { loading ? "Loading" :
            !user ? <li><NavLink to={'/login'}><IoIosLogIn size={25} ></IoIosLogIn></NavLink></li> : <div className="dropdown dropdown-end z-10">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src= {user.photoURL} />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <p className="justify-between">
                           
                           {user.displayName}
                            
                        </p>
                    </li>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <button onClick={handleLogout} className="btn ">Logout</button>
                </ul>
            </div>

        }

    </>
    return (
        <>

            <div className="drawer z-10">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <Container>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <FcHome size={40}/>
                        <div className="flex-1 px-2 mx-2 text-2xl font-bold">Das Mansion</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {navItem}
                            </ul>

                        </div>
                        </Container>
                    </div>
                    
                    {/* Page content here */}
                    {children}
                    <Footer/>
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        {navItem}
                    </ul>
                </div>
            </div>

            

        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;