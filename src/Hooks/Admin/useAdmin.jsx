import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useSecureAxios from '../Axios/useSecureAxios';

const useAdmin = () => {
   

    const {user, loading} = useContext(AuthContext)
    const email = user?.email
    const AxiosSecure = useSecureAxios()

  
    
  

    const isAdmin = async () => {
       const res =  await AxiosSecure.get(`/users?email=${email}`)

       return res
           


    }



    const {data} = useQuery({
        queryKey: ['userRole'],
        enabled: !loading && !!user?.email,
        queryFn: isAdmin
    })

    return data?.data?.message



};

export default useAdmin;