import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../componants/Navbar/Navbar';
import Footer from '../../componants/Footer/Footer';

const MainLayouts = () => {
    const location = useLocation()

    // const [hideNav,setHIdeNav] = useState(false)
    const hideNav = location.pathname === '/login' || location.pathname === '/register'
    
    return (
        <div>
            {hideNav || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideNav || <Footer></Footer>}
            
        </div>
    );
};

export default MainLayouts;