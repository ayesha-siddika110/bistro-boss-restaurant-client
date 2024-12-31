import React from 'react';
import banner from '../../../assets/assets/home/chef-service.jpg'

const Hero = () => {
    return (
        <div 
        style={{
            backgroundImage: `url(${banner})`,

            height: '480px',
            backgroundSize: 'cover'
        }} className='w-[80%] m-auto my-28 flex justify-center items-center'>

            <div className='bg-white w-[80%] text-center p-16 space-y-5'>
                <h1 className='text-4xl'>Bistro Boss</h1>
                <p>Welcome to Bitro Restaurant, where flavor meets elegance! At Bitro, we pride ourselves on crafting unforgettable dining experiences with a menu inspired by global cuisines and fresh, locally-sourced ingredients. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, our inviting ambiance and attentive service ensure every moment is extraordinary. </p>
            </div>
            
            
        </div>
    );
};

export default Hero;