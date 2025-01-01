import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../componants/Navbar/Navbar';
import Footer from '../../componants/Footer/Footer';

const MainLayouts = () => {
    const location = useLocation()
    console.log(location.pathname);
    const hideHederFooter = location.pathname === '/login'
    
    return (
        <div>
            {hideHederFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideHederFooter || <Footer></Footer>}
            
        </div>
    );
};

export default MainLayouts;