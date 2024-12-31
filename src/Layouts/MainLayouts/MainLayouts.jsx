import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../componants/Navbar/Navbar';
import Footer from '../../componants/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayouts;