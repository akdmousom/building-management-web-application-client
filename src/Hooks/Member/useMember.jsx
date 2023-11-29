import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Axios/useAxios";

const useMember = () => {
    const AxiosSecure = useAxios()
    const {user} = useContext(AuthContext)

    
    const isMember = async ()=>{

        const res = await AxiosSecure.get(`/all-users?email=${user.email}`)
        return res



    }

    const {data, isLoading, refetch} = useQuery({
        queryKey: ['isMember'],
        queryFn: isMember
    })

   
    
    
    
    
    
    return {data, isLoading,refetch}
};

export default useMember;