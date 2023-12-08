import toast from "react-hot-toast";
import useAxios from "../../../Hooks/Axios/useAxios";
import useMember from "../../../Hooks/Member/useMember";

const ManageMember = () => {
    const member = useMember();
    // const members = member?.data?.users
    const {data, refetch} = member;
    const Axios = useAxios()

    const removeMember = async (email) =>{
        const res = await Axios.put(`/remove-member?email=${email}`)
        if (res.status === 200) {

            toast.success('Member remove successfully')
            refetch();
            
        }else{
            toast.error('Something went wrong')
        }
        
        
    }



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sn</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Member</th>
                    </tr>
                </thead>
                <tbody>
                  
                  {
                  data?.data?.users?.map((user,idx)=> <tr key={user._id} className="bg-base-200">
                  <th>{idx+1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td><button onClick={()=>removeMember(user.userEmail)} className="btn btn-outline btn-sm">Remove</button></td>
                </tr>)
                  }


                </tbody>
            </table>
        </div>
    );
};

export default ManageMember;