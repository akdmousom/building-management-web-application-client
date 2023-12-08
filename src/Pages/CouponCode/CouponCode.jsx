import { useForm } from 'react-hook-form';
import useAxios from '../../Hooks/Axios/useAxios';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const CouponCode = () => {
    const Axios = useAxios()
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        Axios.post('/coupon', data)
        .then(res=>{
            if (res) {
                toast.success('Coupon Added')
                refetch()
            }
           
        }).catch(error=>{
            if (error) {
                toast.error('Something Wrong')
            }
            
        })
    }
    const getCoupon = async()=>{
        const res = await Axios.get('/get-coupon')
        return res
    }

    const {data, refetch} = useQuery({
        queryKey: ['getCoupon'],
        queryFn: getCoupon
    })



    return (
        <div>
            <div className="overflow-x-auto">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
               
                <dialog id="my_modal_2" className="modal ">
                    <div className="modal-box ">
                   
                        <p className="py-4"> <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">coupon code</span>
                                </label>
                                <input type="text" name='couponcode'{...register('couponCode')} placeholder="Coupon Code" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">discount percentage</span>
                                </label>
                                <input type="number" name='password' {...register('discount')} placeholder="Discount" className="input input-bordered" required />
                             
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">coupon description</span>
                                </label>
                                <input type="text" name='password' {...register('description')} placeholder="Description" className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Save</button>
                            </div>
                        </form></p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sn</th>
                            <th>Coupon Code</th>
                            <th>Discount</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data?.data.map((data, idx )=>  <tr key={data._id} className="bg-base-200">
                        <th>{idx+1}</th>
                        <td>{data.couponCode}</td>
                        <td>{data.discount}</td>
                        <td>{data.description}</td>
                    </tr> )
                        }
                       
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CouponCode;