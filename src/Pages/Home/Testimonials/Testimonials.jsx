import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Heading from '../../../componants/Share/Heading/Heading';
import Testimon_Card from './Testimon_Card';


const Testimonials = () => {
  const [value, setValue] = React.useState(2);
  return (
    <>
      <Heading heading={`Testimonials`} subHeading={`What Our Client Sa`}></Heading>

      <div className='w-[80%] m-auto'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
           <Testimon_Card rating={5} para={`Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`} name={`JHONE SIN`}></Testimon_Card>
          </SwiperSlide>
          <SwiperSlide>
           <Testimon_Card rating={4.9} para={`Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`} name={`JHONE SIN`}></Testimon_Card>
          </SwiperSlide>
          <SwiperSlide>
           <Testimon_Card rating={4.5} para={`Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`} name={`JHONE SIN`}></Testimon_Card>
          </SwiperSlide>
          <SwiperSlide>
           <Testimon_Card rating={3} para={`Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`} name={`JHONE SIN`}></Testimon_Card>
          </SwiperSlide>
          <SwiperSlide>
           <Testimon_Card rating={5} para={`Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`} name={`JHONE SIN`}></Testimon_Card>
          </SwiperSlide>
         
        </Swiper>

      </div>
    </>
  );
};

export default Testimonials;