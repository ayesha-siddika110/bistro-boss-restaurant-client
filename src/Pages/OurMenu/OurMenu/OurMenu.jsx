import React from 'react';
import Banner from '../../../componants/Banner/Banner';
import img from '../../../assets/assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import Heading from '../../../componants/Share/Heading/Heading';
import OfferCard from '../../../componants/OfferCard/OfferCard';
import MenuBanner from '../../../componants/MenuBanner/MenuBanner';
import dessertimg from '../../../assets/assets/menu/dessert-bg.jpeg'
import soupimg from '../../../assets/assets/menu/soup-bg.jpg'
import pizzaimg from '../../../assets/assets/menu/pizza-bg.jpg'
import saladimg from '../../../assets/assets/menu/salad-bg.jpg'

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
            <div className='flex justify-center items-center py-11'>
            {
             loading && <div className='flex justify-end items-center'>
             <span className="loading loading-spinner loading-lg "></span>
            
             </div>
            }
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-[80%] m-auto'>
                {
                    offered?.map((item,index)=><OfferCard key={index} item={item}></OfferCard>)
                }
            </div>

            {/* dessert  */}
            
            <MenuBanner banner={dessertimg} heading={`Dessert`} subheading={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque, possimus quo nemo accusantium odit, necessitatibus, repellendus expedita nisi reprehenderit ipsa. A consequuntur expedita ratione`}></MenuBanner>
            <Heading   heading={`Desserts`} subHeading={`Don't miss out`}></Heading>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-[80%] m-auto'>
                {
                    dessert?.map((item,index)=><OfferCard key={index}  item={item}></OfferCard>)
                }
            </div>
            {/* pizza  */}
            
            <MenuBanner banner={pizzaimg} heading={`Pizza`} subheading={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque, possimus quo nemo accusantium odit, necessitatibus, repellendus expedita nisi reprehenderit ipsa. A consequuntur expedita ratione`}></MenuBanner>
            <Heading   heading={`Pizza's`} subHeading={`Don't miss out`}></Heading>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-[80%] m-auto'>
                {
                    pizza?.map((item,index)=><OfferCard key={index}  item={item}></OfferCard>)
                }
            </div>
            {/* soup  */}
            
            <MenuBanner banner={soupimg} heading={`Soup`} subheading={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque, possimus quo nemo accusantium odit, necessitatibus, repellendus expedita nisi reprehenderit ipsa. A consequuntur expedita ratione`}></MenuBanner>
            <Heading   heading={`Soup's`} subHeading={`Don't miss out`}></Heading>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-[80%] m-auto'>
                {
                    soup?.map((item,index)=><OfferCard key={index}  item={item}></OfferCard>)
                }
            </div>
            {/* salad  */}
            
            <MenuBanner banner={saladimg} heading={`Salad`} subheading={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque, possimus quo nemo accusantium odit, necessitatibus, repellendus expedita nisi reprehenderit ipsa. A consequuntur expedita ratione`}></MenuBanner>
            <Heading   heading={`salads`} subHeading={`Don't miss out`}></Heading>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-[80%] m-auto'>
                {
                    salad?.map((item,index)=><OfferCard key={index}  item={item}></OfferCard>)
                }
            </div>

            {/* conditional loading */}
            
        </div>
    );
};

export default OurMenu;