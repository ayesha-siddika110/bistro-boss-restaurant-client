// import React from 'react';
import Banner from '../../componants/Banner/Banner';
import shopimg from '../../assets/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import ShopCard from '../../componants/ShopCard/ShopCard';

const OurShop = () => {
    const [menu, loading] = useMenu()
    // console.log(menu);

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Banner banner={shopimg} heading={`OUR SHOP`} subheading={`Would you like to try a dish?`}></Banner>
            <div className='w-[80%] m-auto py-20'>

                <Tabs>
                    <TabList>
                        <Tab>Offered</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
                            {
                                offered?.map((item, index) => <ShopCard key={index} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                            {
                                dessert?.map((item, index) => <ShopCard key={index} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                            {
                                pizza?.map((item, index) => <ShopCard key={index} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                            {
                                soup?.map((item, index) => <ShopCard key={index} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
                            {
                                salad?.map((item, index) => <ShopCard key={index} item={item}></ShopCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>



        </div>
    );
};

export default OurShop;