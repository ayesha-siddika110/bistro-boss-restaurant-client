import { Rating, Stack } from '@mui/material';
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const Testimon_Card = ({ rating, para, name }) => {
    return (
        <div className='text-center space-y-5 flex flex-col justify-center items-center'>
            <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </Stack>
            <FaQuoteLeft className='text-7xl' />
            <p className='text-sm px-32'>{para}</p>
            <p className='text-orange-600 font-semibold text-2xl'>{name}</p>

        </div>
    );
};

export default Testimon_Card;