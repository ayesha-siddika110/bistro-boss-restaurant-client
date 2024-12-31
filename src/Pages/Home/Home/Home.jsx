import React from 'react';
import Slider from '../Slider/Slider';
import OrderOnline from '../OrderOnline/OrderOnline';
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu';
import CallUS from '../CallUS/CallUS';
import ChefRecomends from '../ChefRecomends/ChefRecomends';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OrderOnline></OrderOnline>
            <Hero></Hero>
            <Menu></Menu>
            <CallUS></CallUS>
            <ChefRecomends></ChefRecomends>
            <FromOurMenu></FromOurMenu>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;