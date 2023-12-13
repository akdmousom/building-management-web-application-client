import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cupon.css'

const Cupon = () => {
    AOS.init();
    return (
        <div data-aos="flip-up" className='grid justify-center items-center my-6 text-black '>
            <div className='bg-warning grid justify-between max-w-md h-24 items-center rounded-xl px-4'>
                <h1 className='coupon text-2xl text-center'>Coupon Code: flcrt5623 </h1>
                <p className='text-xl text-center'>Get 10% discount by paying three months in advance</p>
            </div>
        </div>
    );
};

export default Cupon;