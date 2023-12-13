import { Helmet } from "react-helmet-async";
import HomeSwiper from "../../Components/HomeSwiper/HomeSwiper";
import Container from "../../Components/Container/Container";
import Maps from "../../Components/Maps/Maps";
import Cupon from "../../Components/Cupon/Cupon";
import './Home.css'
import EarthLove from "../../Components/Earth/EarthLove";

const Home = () => {
    return (
        <>

            <Helmet>
                <title>DAS Mansion | Home </title>
            </Helmet>
            <Container>

                <div className="my-8 w-[350px] mx-auto md:w-[700px] md:mx-auto lg:w-full object-cover">
                    <h1 className="md:text-4xl text-2xl font-medium lg:font-extrabold text-center py-4">Take A Look At Our Apartments</h1>
                    <HomeSwiper />
                </div>
                <div className=" max-w-[1200px] mx-auto">
                    <EarthLove/>
                    <h3 className="text-2xl text-center my-5">
                    Save the climate for future generation
                    </h3>
                </div>
                <div className="px-2"><Cupon /></div>
                <div >
                    <h1 data-text="About The Building" className="building text-primary">About The Building</h1>

                </div>
                <div className="px-2">
                    <p className="text-lg font-normal"><b>Prime Location:</b> Nestled in the heart of [Dhaka/Gulshan], [Your Building Name] enjoys a prime location that offers unparalleled convenience. Whether you&apos;re seeking a vibrant commercial space or a stylish residential spot, our building is centrally located for easy access to major amenities, transportation hubs, and entertainment options. <br /> <br />

                        <b>Contemporary Design:</b> Step into a world of contemporary elegance. [Das Mansion] boasts a sleek and modern design, creating an inviting atmosphere that inspires productivity and comfort. The thoughtful architecture seamlessly integrates functionality with aesthetic appeal. <br /> <br />

                        <b>Versatile Spaces:</b> Our building offers a variety of versatile spaces to cater to your unique needs. From spacious commercial units ready for business innovation to cozy, well-appointed apartments designed for comfortable living, we have the perfect space for you.</p>

                </div>




                <h1 className="lg:text-4xl text-2xl lg:font-extrabold text-center my-4">Our Location</h1>
                <div className="px-4 w-[1000px] mx-auto">
                    <Maps />

                </div>

            </Container>

        </>
    );
};

export default Home;