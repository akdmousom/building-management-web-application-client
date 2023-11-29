import { useContext } from "react";
import useAdmin from "../Hooks/Admin/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AdminRouter = ({children}) => {
    const userRole = useAdmin()
    const {isLoading, data} = userRole
    const {loading,logOut} = useContext(AuthContext)

    if (isLoading) {

        return <><h1>Loading</h1></>
        
    }

  

    const isAdmin = userRole.data?.data?.message;

    if (isAdmin !== 'admin') {

        logOut()

        
    }

    return children
};

export default AdminRouter;