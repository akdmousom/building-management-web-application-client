import { useContext } from "react";
import useAdmin from "../Hooks/Admin/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types'


const AdminRouter = ({children}) => {
    const userRole = useAdmin()
    const {isLoading,} = userRole
    const {logOut} = useContext(AuthContext)

    if (isLoading) {

        return <><h1>Loading</h1></>
        
    }

  

    const isAdmin = userRole.data?.data?.message;

    if (isAdmin !== 'admin') {

        logOut()

        
    }

    return children
};
AdminRouter.propTypes = {
    children : PropTypes.node.isRequired
}

export default AdminRouter;