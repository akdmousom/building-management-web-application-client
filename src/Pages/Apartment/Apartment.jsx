
import { Helmet } from "react-helmet-async";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import Container from "../../Components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/Axios/useAxios";
import { useState } from "react";
import usePagination from "../../Components/Pagination/Pagination";
import Pagination from "../../Components/Pagination/Pagination";

const Apartment = () => {

    const [page, setPage] = useState(1);
    const limit = 6;


    const Axios = useAxios();

    const getApartmets = async () => {
        // const res =await Axios.get('/apartments')
        // console.log(res);
        // return res

        const res = await Axios('/apartments')
        return res


    }

    const { data, isLoading } = useQuery({
        queryKey: ['apartments'],
        queryFn: getApartmets
    })



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
                                data?.data?.map((data, idx) => <ApartmentCard data={data} key={idx} />)
                            }



                        </div>
                        <Pagination/>
                    </>

                }

            </Container>
        </div>
    );
};

export default Apartment;