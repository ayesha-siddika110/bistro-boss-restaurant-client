import React from 'react';
import Heading from '../../../componants/Share/Heading/Heading';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/assets/home/slide1.jpg'
import img2 from '../../../assets/assets/home/slide2.jpg'
import img3 from '../../../assets/assets/home/slide3.jpg'
import img4 from '../../../assets/assets/home/slide4.jpg'
import img5 from '../../../assets/assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules';

const OrderOnline = () => {
    return (
        <div>
            <Heading heading={`ORDER ONLINE`} subHeading={`From 11:00am to 10:00pm`}></Heading>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-[80%] m-auto"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <p className='text-center font-semibold -mt-8 text-lg text-white'>SALAD</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className='text-center font-semibold -mt-8 -ml-10 text-lg text-white'>PIZZAS</p></SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className='text-center font-semibold -mt-8 text-lg text-white'>SOUP</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <p className='text-center font-semibold -mt-8 text-lg text-white'>DESSERT</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className='text-center font-semibold -mt-8 text-lg text-white'>SALAD</p>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default OrderOnline;