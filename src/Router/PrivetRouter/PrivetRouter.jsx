import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()

    if (loading) {

        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (!user?.email) {

        navigate('/login')
        return
        
    }

    return children
};

PrivetRouter.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivetRouter;