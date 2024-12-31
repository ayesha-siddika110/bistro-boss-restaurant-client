import React from 'react';
import Heading from '../../../componants/Share/Heading/Heading';
import img from '../../../assets/assets/menu/pizza-bg.jpg'

const Menu = () => {
    return (
        <div className='pb-10 w-[80%] m-auto'>
            <Heading heading={`FROM OUR MENU`} subHeading={`Check it out`}></Heading>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8'>
                <div className='flex'>

                    <img src={img} style={{ borderRadius: '0px 25px 20px 25px' }} className='w-16 h-16 object-cover' alt="img" />
                    <div className='pl-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='uppercase text-lg'>PIZZA --------------</h1>
                            <p className='text-lg font-semibold text-orange-600'>14.95</p>
                        </div>
                        <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex'>

                    <img src={img} style={{ borderRadius: '0px 25px 20px 25px' }} className='w-16 h-16 object-cover' alt="img" />
                    <div className='pl-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='uppercase text-lg'>PIZZA --------------</h1>
                            <p className='text-lg font-semibold text-orange-600'>14.95</p>
                        </div>
                        <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex'>

                    <img src={img} style={{ borderRadius: '0px 25px 20px 25px' }} className='w-16 h-16 object-cover' alt="img" />
                    <div className='pl-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='uppercase text-lg'>PIZZA --------------</h1>
                            <p className='text-lg font-semibold text-orange-600'>14.95</p>
                        </div>
                        <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex'>

                    <img src={img} style={{ borderRadius: '0px 25px 20px 25px' }} className='w-16 h-16 object-cover' alt="img" />
                    <div className='pl-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='uppercase text-lg'>PIZZA --------------</h1>
                            <p className='text-lg font-semibold text-orange-600'>14.95</p>
                        </div>
                        <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex'>

                    <img src={img} style={{ borderRadius: '0px 25px 20px 25px' }} className='w-16 h-16 object-cover' alt="img" />
                    <div className='pl-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='uppercase text-lg'>PIZZA --------------</h1>
                            <p className='text-lg font-semibold text-orange-600'>14.95</p>
                        </div>
                        <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex'>

                    <img src={img} style={{ borderRadius: '0px 25px 20px 25px' }} className='w-16 h-16 object-cover' alt="img" />
                    <div className='pl-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='uppercase text-lg'>PIZZA --------------</h1>
                            <p className='text-lg font-semibold text-orange-600'>14.95</p>
                        </div>
                        <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center pt-7'>
                <button className='uppercase border-b-4 border-black px-4 py-2 rounded-lg '>View Full MENU</button>

            </div>

        </div>
    );
};

export default Menu;