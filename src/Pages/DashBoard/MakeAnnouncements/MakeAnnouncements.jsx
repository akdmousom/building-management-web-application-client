
import { useForm } from "react-hook-form"
import useSecureAxios from "../../../Hooks/Axios/useSecureAxios";
import useAuth from "../../../Hooks/UseAuth/UseAuth";
const MakeAnnouncements = () => {
    const {
        register,
        handleSubmit,
 
   
        reset,
      
      } = useForm()
      const {user} = useAuth()

      const Axios = useSecureAxios()

      const onSubmit = async (data) => {
        const title = data.title;
        const announcement = data.announcement;

        const datas = {
            title,
            announcement
        }

       

        const res = await Axios.post(`/post-announcement?email=${user.email}`, datas)




        
        reset()
        
      }
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
    
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" {...register("title")} placeholder="Title" className="input input-bordered input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Announcement</span>
                            </label>
                            <textarea {...register("announcement")} className="textarea textarea-primary" placeholder="Announcement"></textarea>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAnnouncements;