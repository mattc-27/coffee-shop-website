import React from 'react';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';

export default function Footer() {


    return (
        <footer>
            
                {/*<div className='pageFooter'>
                <div className='siteMap'>
                    <p>Site Map</p>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                    </ul>
                </div>    </div>*/}
                <div className='footerLocation'>
                    <div className='address'>
                        <ul>
                            <li>12345 Main St, Denver, CO, 80021</li>

                        </ul>
                    </div>
                    <div className='hours'>
                        <ul>
                            <li>Monday to Friday: 7:00 AM - 6:00 PM</li>
                            <li>Saturday and Sunday: 8:00 AM - 5:00 PM</li>
                        </ul>
                    </div>
                </div>
                <div className='footerContact'>
                    <div className='contactUl'>
                        <ul>
                            <li> 303-555-5555</li>
                            <li>contact@beanhaven.com</li>
                        </ul>
                    </div>
                    <div className='socialUl'>
                        <ul>
                            <li><AiOutlineFacebook size={45} color={'#fff'} /></li>
                            <li><AiOutlineInstagram size={45} color={'#fff'} /></li>
                        </ul>
                    </div>
                </div>
         
        </footer>
    );
}