import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Container from '../Container/Container';


const HomeSwiper = () => {
    return (
        <>

            <Container>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                  
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide><img className='object-cover w-full h-[500px]' src="https://i.ibb.co/tQV684y/2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px]' src="https://i.ibb.co/C7pLT3z/3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px]' src="https://i.ibb.co/2snHtx8/4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px]' src="https://i.ibb.co/zG3H4q8/5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px]' src="https://i.ibb.co/GPm0DR9/6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px]' src="https://i.ibb.co/GvMkJF4/7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px]' src="https://i.ibb.co/2YRbn5K/8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px]' src="https://i.ibb.co/Kjz0gxF/9.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </Container>

        </>
    );
};

export default HomeSwiper;