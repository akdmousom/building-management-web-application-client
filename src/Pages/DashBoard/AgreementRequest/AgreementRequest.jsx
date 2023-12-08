import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../Hooks/Axios/useSecureAxios";
import useAuth from "../../../Hooks/UseAuth/UseAuth";
import toast from "react-hot-toast";
import useAxios from "../../../Hooks/Axios/useAxios";


const AgreementRequest = () => {

    const Axios = useSecureAxios()
    const AxiosPublic = useAxios()
    const user = useAuth()


    const getAgreementRequest = async () => {
        const res = await Axios.get(`/get-agreement?email=${user.userEmail}`)
        return res
    }

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['getAgreement'],
        queryFn: getAgreementRequest
    })
    if (isLoading) {

        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>

    }
    const handleAccept = async (id,email) =>{

        await Axios.put(`/update-agreement/${id}`)
        .then(result=>{
            toast.success('Agreemnet Accepted')
            refetch()
        }).catch(error=>{
            toast.error('Something wrong')
        })

        await AxiosPublic.put(`/update-member?email=${email}`)
        .then(res=>[
            toast.success('member added')
        ]).catch(error=>{
            toast.error('Something wrong')
        })

    }

    const handleReject = async(id) =>{

        await Axios.put(`/update-agreement/${id}`)
        .then(result=>{
            toast.success('Status Checked')
            refetch()
        }).catch(error=>{
            toast.error('Something wrong')
        })

    }


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data?.data?.map(data => <div key={data._id} className="card  px-4 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.status}
                            <div className="badge badge-secondary">{data.date.slice(0, 10)}</div>
                        </h2>
                        <p>Name: {data.userName}</p>
                        <p>Email: {data.userEmail}</p>
                        <p>Floor: {data.floorNo}</p>
                        <p>Block: {data.blockName}</p>
                        <p>Apartment: {data.apartmentNo}</p>
                        <p>Date: {data.rent}</p>
                        <div className="card-actions justify-end">
                        <button onClick={()=>handleAccept(data._id, data.userEmail)} className="btn  btn-outline btn-primary">Accept</button>
                        <button onClick={()=>handleReject(data._id)} className="btn btn-outline btn-error">Reject</button>
                    </div>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default AgreementRequest;