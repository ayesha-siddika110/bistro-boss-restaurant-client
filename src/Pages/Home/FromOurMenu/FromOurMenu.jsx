import React from 'react';
// import SimpleParallax from "simple-parallax-js";
import img from '../../../assets/assets/home/featured.jpg'
import Heading from '../../../componants/Share/Heading/Heading';
import { Parallax, Background } from "react-parallax";


const FromOurMenu = () => {

    const insideStyles = {

        
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };
    return (
        <div className=' m-auto py-20'>

            {/* <Hello name="Parallax" /> */}
            <Parallax bgImage={img}  strength={500}>
                <div style={{ height: 500 , backgroundColor: '#2c2c2c75', backgroundBlendMode: 'multiply'}}>
                    <div style={insideStyles}>

                        <div className=' text-white'>
                            <Heading heading={'FORM OUR MENU'} subHeading={'Check it out'}></Heading>

                        </div>
                        <div className='text-white'>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 w-[130%]'>
                                <img src={img} className='w-[400px]' alt="" />
                                
                                <div className='flex flex-col justify-center w-[80%]'>
                                    <p>18 dec 2024</p>
                                    <p>WHERE CAN I GET SOME?
                                    </p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima delectus magnam sequi laborum maxime, expedita architecto laudantium. Quasi dolorum, perspiciatis nostrum ab, fugit maxime nam consectetur ipsa deserunt, dolorem laudantium?</p>
                                    <div className=' pt-7'>
                                        <button className='uppercase border-b-4 border-black hover:bg-black hover:text-orange-600 px-4 py-2 rounded-lg '>View Full MENU</button>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Parallax>





        </div>
    );
};

export default FromOurMenu;