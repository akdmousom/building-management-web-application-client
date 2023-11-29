import { useContext } from "react";
import useSecureAxios from "../Axios/useSecureAxios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMember = () => {
    const AxiosSecure = useSecureAxios()
    const {user} = useContext(AuthContext)
    console.log(user.email);
    
    const isMember = async ()=>{

        const res = await AxiosSecure.get(`/all-users?email=${user.email}`)
        return res



    }

    const {data} = useQuery({
        queryKey: ['isMember'],
        queryFn: isMember
    })

    console.log(data);
    
    
    
    
    
    return data
};

export default useMember;