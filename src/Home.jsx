import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiCoffeeBeans } from 'react-icons/gi';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Menu from './components/Menu';

import heroImg1 from '../public/heroImg1.jpg'
import coffeeDrinks03 from '../public/coffeeDrinks03.jpg'
import storeInterior01 from '../public/storeInterior01.jpg'
import menuCoffeeScone01 from '../public/menuCoffeeScone01.jpg'

import Review from './components/Review';
import Reviews from './Reviews';

export default function Home() {

    const [reviewList, setReviewList] = useState(Reviews);

    useEffect(() => {
        console.log(reviewList)
    }, [])

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/menu')
    }

    return (
        <>
            <div className='mainContainer'>
                {/* */}
                <div className='heroSection' style={{ backgroundImage: `url(${heroImg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <div className='heroText' >
                    <p>Indulge in our wide range of coffee drinks, from classic espresso and pour-over to seasonal specialties. Pair your coffee with a delightful selection of snacks and pastries made with love by local bakers.</p>
                </div>

            </div>
                <div  className='sectionStyle-b' id=''  >

                    <div className='welcomeDesc' >
                        <div className='welcomeText'>
                            <p>At <b>Bean Haven</b>,  our mission is to create a <u>haven of warmth and camaraderie</u>, where our passion for exceptional coffee is reflected in every cup we serve.</p>
                            <p>We aim to be the <u>heart of the community</u>, bringing people together to savor moments of delight, laughter, and connection.</p>
                        </div>
                    </div>
                    <div className='welcomeImg'>
                        <img src={storeInterior01} style={{ height: '100%', width: '100%' }} />
                    </div>
                </div>
                <div className='sectionStyle-a'>
                    <div className='menuImg'>
                        <img src={menuCoffeeScone01} style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className='sectionDesc-b' >
                        <div className='menuText'>
                            <p>Indulge in our wide range of coffee drinks, from classic espresso and pour-over to seasonal specialties.</p>
                            <p>Pair your coffee with a delightful selection of snacks and pastries made with love by local bakers.</p>
                            <button id="viewMenu" onClick={handleClick}>Menu</button>
                        </div>
                    </div>
                </div>
                {/* */}
                {/* */}
                {/* 
                <div className='sectionStyle-a' id='Contact'>
                    <div className='contactSection '>
                        <div className='contactBody'>
                        <h2>Contact us</h2>
                        <p>We'd love to hear from you! If you have any questions, suggestions, or just want to say hello, please feel free to reach out to us.</p>
                        <p>Visit our cafe or use the contact form to the side to get in touch. We look forward to welcoming you.</p>
                        </div>
                       
                        <GiCoffeeBeans size={100} color={'#fff'} style={{ alignSelf: 'center', margin: '1%' }} />
    </div>*/}
                    {/* Contact Form */}
                       {/* <div className='contactForm'>
                    <ContactForm />
                    </div>
                </div>

                <div className='sectionStyle-a' id='Reviews'>
                    <div className='reviewSectionTitle'>
                        <h1>Reviews</h1>
                    </div>
                    <div className='reviewList'>
                        {reviewList.map(item => (
                            <div className='reviewCard ' key={item.id}>
                                <Review item={item} />
                            </div>
                        ))}
                    </div>
                </div>*/}
            </div > 
        </>
    );
}