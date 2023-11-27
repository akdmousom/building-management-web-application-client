
import { Helmet } from "react-helmet-async";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import Container from "../../Components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/Axios/useAxios";
import { useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import useSecureAxios from "../../Hooks/Axios/useSecureAxios";


const Apartment = () => {

    const [page, setPage] = useState(1);
    const limit = 6;
    const Axios = useAxios();
    const secureAxios = useSecureAxios()
   
    const handleAgreement = (id) => {

    //    const res =  secureAxios.post('/agreement', {
    //         Headers: {
    //             authorization : `Bearer ${localStorage.getItem('accessToken')}`
    //         } 
    //     })

    //     console.log(res);

    const res = secureAxios.post('/agreement',{
        headers: {
            authorization : `Bearer ${localStorage.getItem("accessToken")}`
          }
    })

        console.log(res);

    }
    
    const handleNext = () => {
        if (page >= 1) {
            const pageNumber = page + 1;
            setPage(pageNumber)

        }
    }

    const handlePrev = () => {
        if (page > 1) {

            const pageNumber = page - 1;
            setPage(pageNumber)
            
        }
    }


    

    const getApartmets = async () => {
        // const res =await Axios.get('/apartments')
        // console.log(res);
        // return res

        const res = await Axios(`/apartments?page=${page}&limit=${limit}`)
        return res


    }

    const { data, isLoading } = useQuery({
        queryKey: ['apartments', page],
        queryFn: getApartmets
    })
     const total = data?.data?.total

     const totalPage = Math.ceil(total / limit);
    


    return (
        <div className=" min-h-screen">
            <Helmet>
                <title>DAS Mansion | Apartments </title>
            </Helmet>

            <Container>
                {isLoading ? <div className="flex min-h-screen items-center mx-auto justify-center"><span className="loading loading-spinner loading-lg"></span></div> :
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-4">

                            {
                                data?.data?.cursor.map((data, idx) => <ApartmentCard handleAgreement={handleAgreement} data={data} key={idx} />)
                            }



                        </div>
                        <Pagination totalPage={totalPage} page={page} setPage={setPage} handlePrev={handlePrev} handleNext={handleNext} />
                    </>

                }

            </Container>
        </div>
    );
};

export default Apartment;