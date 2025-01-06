import React from 'react';
import { FaCalendarAlt, FaCartArrowDown } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { IoWallet } from "react-icons/io5";  

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-300'>
                <div className='flex justify-center items-center pt-10'>
                <a className=" text-2xl  text-black font-semibold"><p>BISTRO BOSS</p><span className='text-justify text-base tracking-[7px]'>RESTURANT</span></a>
                </div>
                <ul className='uppercase mt-16'>
                    <li className=''>
                        <NavLink to="" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white `}>
                            <FaCartArrowDown className='font-semibold text-xl'></FaCartArrowDown>
                            <p>User Home</p>
                        </NavLink>  
                    </li>
                    <li>
                    <NavLink to="/dashboard/cart" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCalendarAlt /></p>
                            <p>Reservation</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/cart" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><IoWallet /></p>
                            <p>payment history</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/cart" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCartArrowDown></FaCartArrowDown></p>
                            <p>my cart</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/cart" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCartArrowDown></FaCartArrowDown></p>
                            <p>add review</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/cart" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCartArrowDown></FaCartArrowDown></p>
                            <p>my booking</p>
                        </NavLink>
                    </li>
 

                </ul>

                <div className='divider divider-neutral px-6'>

                </div>

                <ul className=''>
                    <li><Link to="/">Home</Link></li>
                    <li>menu</li>
                    <li>shop</li>
                    <li>contact</li>
                </ul>
               

            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;