import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../Hooks/Axios/useSecureAxios";
import useAdmin from "../../Hooks/Admin/useAdmin";
import { Link, useNavigate } from "react-router-dom";


const MakePayment = () => {
    const { user } = useContext(AuthContext)
    const { email, displayName, photoURL, loading } = user;
    const {
        register,
        handleSubmit,
        reset,
        
    } = useForm()
    
    const navigate = useNavigate()
   
    const emails = useAuth()


    const Axios = useSecureAxios()

    const getAgreement = async() =>{
        const res = await Axios.get(`/agreement-accept?email=${emails?.userEmail}`)
        return res
    }

    const {data, isLoading} = useQuery({
        queryKey: ['getSpecificAgrre'],
        queryFn: getAgreement
        
    })

    if (isLoading) {
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner text-primary loading-lg"></span></div>
    }

   


    const { userEmail, floorNo, blockName, apartmentNo, rent } = data.data[0]
 
    const onSubmit = async (data) => {





        data = {
            userEmail,
            floorNo, 
            blockName, 
            apartmentNo, 
            rent,
            month : data.month,

        }

        await Axios.post('/pay-rent', data)
        .then(res =>{
            navigate('/dashboard/payment')
        })


        
        
    }

    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mmber Email</span>
                            </label>
                            <input type="email" defaultValue={userEmail} readOnly {...register("userEmail")} placeholder="Title" className="input input-bordered input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Floor</span>
                            </label>
                            <input type="text" defaultValue={floorNo} readOnly {...register("floor")} placeholder="Title" className="input input-bordered input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Block</span>
                            </label>
                            <input type="text" defaultValue={blockName} readOnly {...register("block")} placeholder="Title" className="input input-bordered input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Apartment No</span>
                            </label>
                            <input type="text" defaultValue={apartmentNo} readOnly {...register("apartmentNo")} placeholder="Title" className="input input-bordered input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent</span>
                            </label>
                            <input type="text" defaultValue={rent} readOnly {...register("rent")} placeholder="Title" className="input input-bordered input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Month</span>
                            </label>
                            <select {...register("month")} className="select select-bordered w-full max-w-xs">
                                <option disabled >Who shot first?</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                               
                               
                            </select>
                        </div>

                        <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Payment" />
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakePayment;