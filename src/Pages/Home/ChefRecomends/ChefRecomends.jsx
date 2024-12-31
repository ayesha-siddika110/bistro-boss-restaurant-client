import React from 'react';
import Heading from '../../../componants/Share/Heading/Heading';
import img1 from '../../../assets/assets/menu/pizza-bg.jpg'
import img2 from '../../../assets/assets/menu/salad-bg.jpg'
import img3 from '../../../assets/assets/menu/soup-bg.jpg'

const ChefRecomends = () => {
    return (
        <div>
            <Heading heading={`CHEF RECOMMENDS`} subHeading={`Should Try`}></Heading>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[70%] m-auto gap-6'>
                <div className='text-center bg-orange-100 pb-3'>
                    <img src={img1} alt="pizza" className='h-[200px] w-full' />
                    <p className='font-semibold text-lg'>Pizza Hut</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, non.</p>

                    <div className='flex flex-col justify-center items-center pt-7'>
                        <button className='uppercase border-b-4 border-orange-600 hover:border-black px-4 py-2 rounded-lg bg-orange-200 hover:bg-slate-900  hover:text-orange-600'>ADD TO CART</button>

                    </div>


                </div>
                <div className='text-center bg-orange-100 pb-3'>
                    <img src={img1} alt="pizza" className='h-[200px] w-full' />
                    <p className='font-semibold text-lg'>Pizza Hut</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, non.</p>

                    <div className='flex flex-col justify-center items-center pt-7'>
                        <button className='uppercase border-b-4 border-orange-600 hover:border-black px-4 py-2 rounded-lg bg-orange-200 hover:bg-slate-900  hover:text-orange-600'>ADD TO CART</button>

                    </div>


                </div>
                <div className='text-center bg-orange-100 pb-3'>
                    <img src={img1} alt="pizza" className='h-[200px] w-full' />
                    <p className='font-semibold text-lg'>Pizza Hut</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, non.</p>

                    <div className='flex flex-col justify-center items-center pt-7'>
                        <button className='uppercase border-b-4 border-orange-600 hover:border-black px-4 py-2 rounded-lg bg-orange-200 hover:bg-slate-900  hover:text-orange-600'>ADD TO CART</button>

                    </div>


                </div>


            </div>
        </div>
    );
};

export default ChefRecomends;