// cuatom hook for authentication system
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useAuth = ()=>{
    const authInfo = useContext(AuthContext);
    return authInfo;
}

export default useAuth;