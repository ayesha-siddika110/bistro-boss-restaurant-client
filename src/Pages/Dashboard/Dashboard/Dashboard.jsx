
import { FaBook, FaCalendarAlt, FaCartArrowDown, FaHome, FaList, FaShoppingBag, FaUsers, FaUtensils,FaEnvelope } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { IoWallet } from "react-icons/io5";  
import { useState } from 'react';
import './dashboard.css'
import useAdmin from '../../../Hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-300'>
                <div className='flex justify-center items-center pt-10'>
                <a className=" text-2xl  text-black font-semibold"><p>BISTRO BOSS</p><span className='text-justify text-base tracking-[7px]'>RESTURANT</span></a>
                </div>
                {
                    isAdmin ? <>
                    <ul className='uppercase mt-16 space-y-1'>
                    <li className=''>
                        <NavLink to="/dashboard/adminHome" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white `}>
                            <FaHome className='font-semibold text-xl'></FaHome>
                            <p>admin home</p>
                        </NavLink>  
                    </li>
                    <li>
                    <NavLink to="/dashboard/addItem" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'>< FaUtensils/></p>
                            <p>add item</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/manageItem" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaList /></p>
                            <p>manage items</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/manageBookings" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaBook></FaBook></p>
                            <p>manage bookings</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/allUsers" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaUsers></FaUsers></p>
                            <p>all users</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/myBookings" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCartArrowDown></FaCartArrowDown></p>
                            <p>my booking</p>
                        </NavLink>
                    </li>
 

                </ul>
                    
                    </> : <>
                    <ul className='uppercase mt-16'>
                    <li className=''>
                        <NavLink to="" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white `}>
                            <FaCartArrowDown className='font-semibold text-xl'></FaCartArrowDown>
                            <p>User Home</p>
                        </NavLink>  
                    </li>
                    <li>
                    <NavLink to="/dashboard/reservation" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCalendarAlt /></p>
                            <p>Reservation</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/paymentHistory" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><IoWallet /></p>
                            <p>payment history</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/myCart" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCartArrowDown></FaCartArrowDown></p>
                            <p>my cart</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/addReview" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCartArrowDown></FaCartArrowDown></p>
                            <p>add review</p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/myBookings" className={`flex items-center py-1 space-x-2 ml-6 hover:text-white`}>
                            <p className='font-semibold text-xl'><FaCartArrowDown></FaCartArrowDown></p>
                            <p>my booking</p>
                        </NavLink>
                    </li>
 

                </ul>
                    
                    </>
                }
                

                <div className='divider divider-neutral px-6'>

                </div>

                <ul className=' pl-6 text-lg  space-y-2'>
                    <NavLink className={`flex items-center gap-2`} to="/"><FaHome className='font-semibold'></FaHome><Link to="/">Home</Link></NavLink>
                    <NavLink className={`flex items-center gap-2`}><FaList className='font-semibold'></FaList>menu</NavLink>
                    <NavLink className={`flex items-center gap-2`}><FaShoppingBag className='font-semibold'></FaShoppingBag>shop</NavLink>
                    <NavLink className={`flex items-center gap-2`}> <FaEnvelope className='font-semibold'></FaEnvelope>contact</NavLink>
                </ul>
               

            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;