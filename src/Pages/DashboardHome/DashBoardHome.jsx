import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DashBoardHome = () => {
    const {user, loading} = useContext(AuthContext)
    if (loading) {

        return <div className="flex justify-center items-center">Loading</div>
        
    }
    return (
        <div className="flex justify-center items-center">
            Welcome {user.displayName} 
        </div>
    );
};

export default DashBoardHome;