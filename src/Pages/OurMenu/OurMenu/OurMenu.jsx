import React from 'react';
import Banner from '../../../componants/Banner/Banner';
import img from '../../../assets/assets/menu/banner3.jpg'

const OurMenu = () => {
    return (
        <div>
            <Banner banner={img} heading={`OUR MENU`} subheading={`Would you like to try a dish?`}></Banner>
        </div>
    );
};

export default OurMenu;