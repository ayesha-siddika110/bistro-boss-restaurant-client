import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import img1 from '../../../assets/assets/home/01.jpg'
import img2 from '../../../assets/assets/home/02.jpg'
import img3 from '../../../assets/assets/home/03.png'
import img4 from '../../../assets/assets/home/04.jpg'
import img5 from '../../../assets/assets/home/05.png'
import img6 from '../../../assets/assets/home/06.png'

const Slider = () => {
    return (
        <div className=''>
            <Swiper
        pagination={{
          dynamicBullets: true,
          
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper lg:h-[700px]"
      >
        <SwiperSlide><img src={img1} className=' w-full bg-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} className=' w-full bg-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} className=' w-full bg-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} className=' w-full bg-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} className=' w-full bg-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} className=' w-full bg-cover' alt="" /></SwiperSlide>
        
        
      </Swiper>
        </div>
    );
};

export default Slider;