import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext)
    const handleSignOut =()=>{
        signOutUser()
        .then(res=>{
            console.log(res);
            
        })
        .catch(err=>{
            console.log(err);
            
        })

    }

    const links = <>
        <Link>HOME</Link>
        <Link>CONTACT US</Link>
        <Link>DASHBOARD</Link>
        <Link to="/ourMenu">OUR MENU</Link>
        <Link>OUR SHOP</Link>

    </>
    const profile = <>
    {
        user ? <>
         <div className="drawer drawer-end">
                    
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button ">
                            <img src={user?.photoURL} alt="Profile" className="border w-12 h-12 rounded-full" /></label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className={`bg-base-200  mt-[78px]   lg:w-[30%] md:w-[30%] w-[50%]  p-4  `}>
                            <li className="hover:bg-gray-400 py-2 pl-3 border-b">sa</li>
                            <li className="hover:bg-gray-400 py-2 pl-3 border-b">sad</li>
                            <li className="hover:bg-gray-400 py-2 pl-3">fds</li>
                            
                            <li className="hover:bg-gray-400 py-2 pl-3" onClick={handleSignOut}><Link >Sign Out <FaArrowRight /></Link></li>
                        </ul>
                    </div>
                </div>


        </>: <>
        <Link to="/login" className="border-b-4 rounded-b-md px-5 py-1 bg-orange-100 bg-opacity-30">Login</Link>
        </>
    }
    
    </>
    return (
        <div>
        
        <div className='Navbar bg-black  bg-opacity-40 fixed z-10'>
            <div className="navbar flex justify-between w-[100%] bg-black  bg-opacity-40 fixed z-1">
                <div className="navbar-start pl-[2%]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3">
                            {links}
                        </ul>
                    </div>
                    <a className=" text-2xl font-semibold text-white"><p>BISTRO BOSS</p><span className='text-justify text-base tracking-[7px]'>RESTURANT</span></a>
                </div>
                <div className="navbar-end hidden pr-[2%] lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold space-x-3 text-white">
                        {links}
                    </ul>
                    <div>

                    {profile}
                    </div>
                </div>

            </div>

        </div>
        
        </div>
    );
};

export default Navbar;