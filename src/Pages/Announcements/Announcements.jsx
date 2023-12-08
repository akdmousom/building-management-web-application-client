import axios from "axios";
import useSecureAxios from "../../Hooks/Axios/useSecureAxios";
import { useQuery } from "@tanstack/react-query";


const Announcements = () => {

    const Axios = useSecureAxios()

    const getAnnouncement = async () => {

        const res = await Axios.get('/get-announcement')

        return res

    }

    const {data, isLoading} = useQuery({
        queryKey: ['getAnnouncement'],
        queryFn: getAnnouncement,
    })



    if (isLoading) {

        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
        
    }

    return (
        <div className="grid gap-4 ">
          {
            data?.data.map(data=> <div key={data._id} className="card px-4 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {data.title}
                <div className="badge badge-secondary">{data.date.slice(0,10)}</div>
              </h2>
              <p>{data.announcement}</p>
            </div>
          </div>)
          }
        </div>
    );
};

export default Announcements;