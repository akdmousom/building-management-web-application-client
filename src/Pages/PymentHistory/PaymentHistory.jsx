import { useEffect, useState } from 'react';
import useSecureAxios from '../../Hooks/Axios/useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import { useForm } from 'react-hook-form';

const PaymentHistory = () => {

    const Axios = useSecureAxios()

    const user = useAuth();
    const [rentDatas, setRentDatas] = useState();

    const getRentData = async () => {
        const res = await Axios.get(`/get-pay-rent?email=${user.userEmail}`)
        return res;
    }
    const { data } = useQuery({
        queryKey: ['getRentData'],
        queryFn: getRentData
    })

    const { register, handleSubmit } = useForm()

    let dataRent = data?.data

    useEffect(()=>{
        setRentDatas(dataRent)
    },[dataRent])



    const onSubmit = (data) => {

        const searchText = data.text.toLowerCase();
        const rentData = dataRent.filter(data => data.month.toLowerCase() === searchText)
        setRentDatas(rentData)
        
        
    }


    return (
        <>
            <div className="overflow-x-auto">
                <div className='flex justify-center h-11 my-4'>
                    <form className='flex items-center gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('text')} type="text" placeholder="january" className="input input-bordered w-full max-w-xs" />
                        <input className='btn  btn-primary' type="submit" value="Search" />
                    </form>
                </div>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sn</th>
                            <th>Apartment No</th>
                            <th>Block Name</th>
                            <th>Month </th>
                            <th>Rent </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rentDatas?.map((data, idx) => <tr key={data._id}>
                                <th>{idx + 1}</th>
                                <td>{data.apartmentNo}</td>
                                <td>{data.blockName}</td>
                                <td>{data.month}</td>
                                <td>$ {data.rent}</td>
                            </tr>)
                        }


                    </tbody>
                </table>

            </div>




        </>
    );
};

export default PaymentHistory;