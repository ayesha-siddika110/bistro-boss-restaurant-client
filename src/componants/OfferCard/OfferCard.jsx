import React from 'react';
// ----------------------------😑 offercard is working
const OfferCard = ({item}) => {
    return (
        <div key={index} className='flex'>

            <img src={item?.image} style={{ borderRadius: '0px 25px 20px 25px' }} className='w-16 h-16 object-cover' alt="img" />
            <div className='pl-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='uppercase text-lg'>{item?.name}</h1>
                    <p className='text-lg font-semibold text-orange-600'>{item?.price}</p>
                </div>
                <p className='text-sm text-gray-700'>{item?.recipe}</p>
            </div>
        </div>
    );
};

export default OfferCard;