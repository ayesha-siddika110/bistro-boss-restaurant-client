import React, { useEffect, useState } from 'react';
import Heading from '../../../componants/Share/Heading/Heading';
import img from '../../../assets/assets/menu/pizza-bg.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/menus`)
        .then(res=>{
            setdata(res.data.slice(0,6));
            
        })
        

    },[])
    return (
        <div className='pb-10 w-[80%] m-auto'>
            <Heading heading={`FROM OUR MENU`} subHeading={`Check it out`}></Heading>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    data?.map((item,index)=><div key={index} className='flex'>

                    <img src={item?.image} style={{ borderRadius: '0px 25px 20px 25px' }} className='w-16 h-16 object-cover' alt="img" />
                    <div className='pl-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='uppercase text-lg'>{item?.name}</h1>
                            <p className='text-lg font-semibold text-orange-600'>{item?.price}</p>
                        </div>
                        <p className='text-sm text-gray-700'>{item?.recipe}</p>
                    </div>
                </div>)
                }
            </div>
            <div className='flex flex-col justify-center items-center pt-7'>
                <Link to="/ourMenu"><button className='uppercase border-b-4 border-black px-4 py-2 rounded-lg hover:bg-black hover:text-orange-600 '>View Full MENU</button></Link>

            </div>

        </div>
    );
};

export default Menu;