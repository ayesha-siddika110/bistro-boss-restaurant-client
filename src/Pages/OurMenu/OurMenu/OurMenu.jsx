import React from 'react';
import Banner from '../../../componants/Banner/Banner';
import img from '../../../assets/assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import Heading from '../../../componants/Share/Heading/Heading';

const OurMenu = () => {
    const [menu, loading] = useMenu()
    // console.log(menu);

    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const offered = menu.filter(item=> item.category === 'offered');
    // console.log(dessert, soup,salad,pizza,offered);
    
    
    return (
        <div>

            <Banner banner={img} heading={`OUR MENU`} subheading={`Would you like to try a dish?`}></Banner>

            <Heading   heading={`Todays offer`} subHeading={`Don't miss out`}></Heading>
            

            {/* conditional loading */}
            {
             loading && <div className='flex justify-end items-center'>
             <span className="loading loading-spinner loading-lg "></span>
            
             </div>
            }
        </div>
    );
};

export default OurMenu;