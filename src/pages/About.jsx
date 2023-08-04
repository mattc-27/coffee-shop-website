import React from 'react';

import heroImg1 from '../../public/heroImg1.jpg'
import menuCoffeeScone01 from '../../public/menuCoffeeScone01.jpg'
import about01 from '../../public/about01.jpg'
import coffeeBeans01 from '../../public/coffeeBeans01.jpg'
import coffeeBeans02 from '../../public/coffeeBeans02.jpg'
import storeInterior02 from '../../public/storeInterior02.jpg'

export default function About() {


    return (
        <>
            <div className='mainContainer'>
                <div className='heroSection' style={{ backgroundImage: `url(${heroImg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                    <div className='heroText' >
                        <p>At Bean Haven, we are passionate about coffee and dedicated to delivering the finest coffee experience.</p>
                    </div>

                </div>
                <div className='aboutPageSection'>

                    <div className='aboutPageDesc' >
                        <div className='aboutPageText'>
                            <h1>About Us</h1>
                            <p>Welcome to Bean Haven! We believe in the power of exceptional coffee to bring joy to your day. Step into our cozy haven, where every cup is crafted with passion and care. Whether you're seeking a delightful morning pick-me-up or a serene spot to unwind, our warm ambiance and delightful brews will make your coffee experience truly memorable.</p>

                        </div>
                    </div>
                    <div className='aboutImg'>
                        <img src={about01} style={{ height: '100%', width: '60%'}}/>
                    </div>
                </div>


                <div className='aboutPageSection' style={{height: ''}} >
                    <div className='aboutImg-2'>
                        <img src={coffeeBeans02} style={{ height: '100%', width: '40%'}} />
                        <img src={coffeeBeans01} style={{ height: '100%', width: '40%'}} />

                    </div>
                    <div className='aboutPageDesc' >
                        <div className='aboutPageText'>
                            <p>We carefully source our coffee beans from small, sustainable farms across various regions, ensuring fair trade and environmentally friendly practices.</p>
                            <p>Our expert roasters bring out the unique flavors and aromas of each bean through meticulous roasting techniques.</p>
                        </div>
                    </div>

                </div>
                <div className='aboutPageSection'>

                    <div className='aboutPageDesc' >
                        <div className='aboutPageText'>
                            <p>Founded in [Year], Bean Delights Cafe began as a dream of sharing the love for coffee and creating a space that fosters a sense of belonging. From humble beginnings, our coffee shop has grown to be a cherished destination for coffee enthusiasts, families, and friends, united by their love for remarkable coffee and cherished moments.</p>
                            <p>Our vision is to be recognized as a beacon of coffee excellence, where connoisseurs and casual coffee lovers alike can indulge in the finest brews and experience the art of coffee-making. We aspire to inspire moments of joy and togetherness, one cup at a time.</p>
                        </div>
                    </div>
                    <div className='aboutImg'>
                        <img src={storeInterior02} style={{ height: '80%', width: '90%'}} />
                    </div>
                </div>
                {/* <div className='aboutSection'>
                    <div className='aboutPageTitle'>
                        <h1>About Us</h1>
                    </div>
                    <div className=''>
                        <div className='aboutSection'>
                           
                    </div>
                    <div className=''>
                        <div className='aboutSection'>
                           
                    </div>
                    <div className=''>
                        <div className='aboutSection'>
                            
                    </div>
                </div> */}
            </div>
        </>
    );
}