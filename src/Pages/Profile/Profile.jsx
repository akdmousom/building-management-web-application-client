import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/Admin/useAdmin";
import useSecureAxios from "../../Hooks/Axios/useSecureAxios";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {

    const { user } = useContext(AuthContext)
    const { email, displayName, photoURL, loading } = user;
   
    const emails = useAuth()


    const Axios = useSecureAxios()

    const getAgreement = async(email) =>{
        const res = await Axios.get(`/agreement-accept?email=${emails.userEmail}`)
        return res
    }

    const {data} = useQuery({
        queryKey: ['getSpecificAgrre'],
        queryFn: getAgreement
        
    })
    
 




    const isadmin = useAdmin()
    const { isLoading } = isadmin
    
    if (isLoading) {

        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>

    }
    const userRole = isadmin?.data?.data?.message;


  

    




    return (
        <div>
            <div className="avatar grid gap-4">
                <div className="w-24 rounded-full">
                    <img src={photoURL} />

                </div>
                <h1 className="text-2xl font-semibold">{displayName}</h1>
            </div>

            <br />
            <div className="text-xl font-medium grid md:grid-cols-2 px-2">
                {
                    userRole === 'member' ? <><h5 className="my-2">Email: {email}</h5>
                        <h5 className="my-2">Agreement accept date: {data?.data[0].date.slice(0,10)}</h5>
                        <h5 className="my-2">Rented apartment:</h5>
                        <h5 className="my-2">floor: {data?.data[0].floorNo}</h5>
                        <h5 className="my-2">block: {data?.data[0].blockName}</h5>
                        <h5 className="my-2">room no: {data?.data[0].roomNo} </h5></> : 
                        
                        <><h5 className="my-2">Email: {email}</h5>
                        <h5 className="my-2">Agreement accept date: None</h5>
                        <h5 className="my-2">Rented apartment: None</h5>
                        <h5 className="my-2">floor: None</h5>
                        <h5 className="my-2">block: None</h5>
                        <h5 className="my-2">room no: None</h5></>
                }
            </div>
        </div>
    );
};

export default Profile;