
import { Helmet } from "react-helmet-async";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import Container from "../../Components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/Axios/useAxios";

const Apartment = () => {

    const Axios = useAxios();

    const getApartmets = async () =>{
        // const res =await Axios.get('/apartments')
        // console.log(res);
        // return res

        const res = await Axios('/apartments')
        console.log(res);
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-4">

                    { isLoading ? 'loading' :
                        data?.data?.map((data, idx) => <ApartmentCard data={data} key={idx} />)
                    }

                </div>
            </Container>
        </div>
    );
};

export default Apartment;