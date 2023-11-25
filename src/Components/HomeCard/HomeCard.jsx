import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const HomeCard = () => {
    return (
        <>

        <div className='w-[200px]'>
        <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/tQV684y/2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/tQV684y/2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/C7pLT3z/3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/2snHtx8/4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/zG3H4q8/5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/GPm0DR9/6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/GvMkJF4/7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/2YRbn5K/8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover w-full h-[500px] rounded-xl' src="https://i.ibb.co/Kjz0gxF/9.jpg" alt="" /></SwiperSlide>
                </Swiper>
        </div>

        </>
    );
};

export default HomeCard;