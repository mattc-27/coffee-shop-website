import React, { useState, useEffect } from 'react';

import heroImg1 from '../../public/heroImg1.jpg'


export default function About() {

    const [aboutpageImages, setAboutpageImages] = useState({
        coffeePlant: 'https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE1OTV8&ixlib=rb-4.0.3&q=80&w=1080',
        coffeeHeart: 'https://images.unsplash.com/photo-1587403090535-cbf88ede773a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE2Mzh8&ixlib=rb-4.0.3&q=80&w=1080',
        coffeeBeansRoast: 'https://images.unsplash.com/photo-1625021659159-f63f546d74a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE3MDl8&ixlib=rb-4.0.3&q=80&w=1080',
        storeInterior2: 'https://images.unsplash.com/photo-1449198063792-7d754d6f3c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTQyMjh8&ixlib=rb-4.0.3&q=80&w=1080',
        heroImage: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE0MzZ8&ixlib=rb-4.0.3&q=80&w=1080'
    })
    return (
        <>
            <div className='mainContainer'>
                <div className='heroSection' style={{ backgroundImage: `url(${heroImg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                    <div className='heroText' >
                        <p>At Bean Haven, we are passionate about coffee and dedicated to delivering the finest coffee experience.</p>
                    </div>

                </div>
                <div className='aboutPageSection'>

                    <div className='sectionStyle-a' >
                        <div className='aboutPageText'>
                            <h1>About Us</h1>
                            <p>Welcome to Bean Haven! We believe in the power of exceptional coffee to bring joy to your day. Step into our cozy haven, where every cup is crafted with passion and care. Whether you're seeking a delightful morning pick-me-up or a serene spot to unwind, our warm ambiance and delightful brews will make your coffee experience truly memorable.</p>

                        </div>
                    </div>
                    <div className='aboutImg'>
                        <img src={aboutpageImages.coffeeHeart} style={{ height: '100%', width: '60%' }} />
                    </div>
                </div>


                <div className='aboutPageSection' style={{ height: '' }} >
                    <div className='aboutImg-2'>
                        <img src={aboutpageImages.coffeeBeansRoast} style={{ height: '100%', width: '40%' }} />
                        <img src={aboutpageImages.coffeePlant} style={{ height: '100%', width: '40%' }} />

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
                        <img src={aboutpageImages.storeInterior2} style={{ height: '80%', width: '90%' }} />
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