import React from 'react';

const MenuBanner = ({ banner, heading, subheading }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${banner})`,

                height: '480px',
                backgroundSize: 'cover'
            }} className=' flex justify-center items-center text-white'>

            <div className='bg-black bg-opacity-50 w-[70%] text-center p-20 space-y-5'>
                <h1 className='text-4xl'>{heading}</h1>
                <p>{subheading}</p>
            </div>


        </div>
    );
};

export default MenuBanner;