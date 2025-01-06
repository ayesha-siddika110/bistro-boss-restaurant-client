import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Heading from '../../../componants/Share/Heading/Heading';
import Testimon_Card from './Testimon_Card';
import axios from 'axios';


const Testimonials = () => {
  const [value, setValue] = React.useState(2);
  const [reviews,setreviews] = useState([])
  useEffect(()=>{

    axios.get('http://localhost:3000/reviews')
    .then(res=>{
      setreviews(res.data)

    })
  },[])
  return (
    <>
      <Heading heading={`Testimonials`} subHeading={`What Our Client Sa`}></Heading>

      <div className='w-[80%] m-auto'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            reviews?.map((item,idx)=> <SwiperSlide key={idx}>
            <Testimon_Card rating={item?.rating} para={item?.details} name={item?.name}></Testimon_Card>
           </SwiperSlide>)
          }
         
          
        
         
        </Swiper>

      </div>
    </>
  );
};

export default Testimonials;