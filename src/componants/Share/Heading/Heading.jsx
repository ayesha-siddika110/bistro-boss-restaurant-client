import React from 'react';

const Heading = ({heading, subHeading}) => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <p className='text-orange-500 italic pb-3'>-----{subHeading}-----</p>
            <p className='text-3xl py-2 border-y-4'>{heading}</p>
            
        </div>
    );
};

export default Heading;