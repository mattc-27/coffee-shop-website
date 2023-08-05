import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { GiCoffeeBeans } from 'react-icons/gi';

import ContactForm from '../components/ContactForm';
import heroImg1 from '../../public/heroImg1.jpg';

import Review from '../components/Review';
import Reviews from '../Reviews';


export default function Home() {

    const [homepageImages, setHomepageImages] = useState({
        sconeCoffee: 'https://images.unsplash.com/photo-1555465683-459c6e696f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTExNDR8&ixlib=rb-4.0.3&q=80&w=1080',
        storeInterior1: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTEzMzZ8&ixlib=rb-4.0.3&q=80&w=1080',
        coffeeBeanHeart: 'https://images.unsplash.com/photo-1518831449057-63cc79a76488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE0MDZ8&ixlib=rb-4.0.3&q=80&w=1080',
        heroImage: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE0MzZ8&ixlib=rb-4.0.3&q=80&w=1080'
    });

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
                <div className='sectionContainer-a' >

                    <div className='sectionStyle-a' >
                        <div className='sectionText-a'>
                            <p>At <b>Bean Haven</b>,  our mission is to create a <u>haven of warmth and camaraderie</u>, where our passion for exceptional coffee is reflected in every cup we serve.</p>
                            <p>We aim to be the <u>heart of the community</u>, bringing people together to savor moments of delight, laughter, and connection.</p>
                        </div>
                    </div>
                    <div className='section-a-img'>
                        <img src={homepageImages.storeInterior1} style={{ height: '100%', width: '100%' }} />
                    </div>
                </div>
                <div className='sectionContainer-a' style={{ flexDirection: 'row-reverse' }}>

                    <div className='sectionStyle-a' >
                        <div className='sectionText-a'>
                            <p>Indulge in our wide range of coffee drinks, from classic espresso and pour-over to seasonal specialties.</p>
                            <p>Pair your coffee with a delightful selection of snacks and pastries made with love by local bakers.</p>
                            <button id="viewMenu" onClick={handleClick}>Menu</button>
                        </div>
                    </div>
                    <div className='section-a-img'>
                        <img src={homepageImages.sconeCoffee} style={{ height: '100%', width: '100%' }} />
                    </div>
                </div>
                {/* */}
                {/* */}

                <div className='sectionContainer-b' id='Contact'>
                    <div className='contactDesc '>
                        <div className='contactBody'>
                            <h2>Contact us</h2>
                            <p>We'd love to hear from you! If you have any questions, suggestions, or just want to say hello, please feel free to reach out to us.</p>
                            <p>Visit our cafe or use the contact form to the side to get in touch. We look forward to welcoming you.</p>
                        </div>
                        <GiCoffeeBeans id='beans' size={100} color={'#fff'} style={{ alignSelf: 'center', margin: '1%' }} />
                    </div>
                    {/* Contact Form */}
                    <div className='contactForm'>
                        <ContactForm />
                    </div>
                </div>

                <div className='sectionStyle-a' style={{ backgroundColor: '#fff' }}>
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
                </div>
            </div >
        </>
    );
}