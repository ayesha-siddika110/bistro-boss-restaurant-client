import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='pt-16 text-white'>
            <div className='lg:flex md:flex  lg:h-[300px]  w-full'>
                <div className='bg-[#1F2937] lg:w-[50%] md:w-[50%] flex flex-col items-center justify-center lg:pl-48 py-4'>
                    <p className='text-xl uppercase pb-3 font-semibold'>contact us</p>
                    <p className=''>123 ABS street. Uni 21 , Bangladesh</p>
                    <p className=''>+88 12548925474</p>
                    <p className=''>Mon - Fri: 08:00 - 22:00
                    </p>
                    <p className=''>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] h-full lg:w-[50%] md:w-[50%] flex flex-col items-center justify-center lg:pr-48 py-4 h-full'>

                <p className='text-xl uppercase pb-3 font-semibold'>Follow US</p>
                    <p className=''>Join us on social media</p>
                    <div className='flex gap-3 text-3xl pt-3'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    </div>
                </div>
            </div>
            <div className='bg-[#151515] py-2 text-sm text-center'>
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
            
        </div>
    );
};

export default Footer;