import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useSecureAxios from '../Axios/useSecureAxios';
import useAxios from '../Axios/useAxios';

const useAdmin = () => {
   

    const {user, loading} = useContext(AuthContext)
    const email = user?.email
    const AxiosSecure = useAxios()

  
    
  

    const isAdmin = async () => {
       const res =  await AxiosSecure.get(`/users?email=${email}`)

       return res
           


    }



    const {data, isLoading} = useQuery({
        queryKey: ['userRole'],
        enabled: !loading && !!user?.email,
        queryFn: isAdmin
    })

    return {data, isLoading }



};

export default useAdmin;