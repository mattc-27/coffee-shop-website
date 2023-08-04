import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import MenuPage from '../pages/MenuPage';
import About from '../pages/About';
import Footer from './Footer';
import { CiCoffeeBean } from 'react-icons/ci'
import { RiAlignJustify } from 'react-icons/ri'
export default function Layout() {

    const location = useLocation();

    console.log(window.location);

    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false)
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 700) {
                setVisible(false);
            } else if (window.innerWidth < 700) {
                setVisible(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const handleNav = () => {
        if (!show) {
            setShow(true);
        } else setShow(false);
    }


    return (
        <>
            {visible ?
                <header className='mobileHeader' >
                    <div className='mobileTitle' style={{ display: 'flex', flexDirection: 'row', flexGrow: '1', alignItems: 'center' }}>
                        <a href='/' style={{ textDecoration: 'none' }}>

                            <h1 style={{ flexWrap: 'wrap', fontSize: '2em', color: '#fff' }}>Bean Haven</h1>
                            <CiCoffeeBean size={'2em'} color={'white'} style={{ width: 'auto', margin: '1%', padding: '1%' }} />
                        </a>
                    </div>
                    <div className='openNav' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '50%' }}>
                        <button id='showNav' onClick={handleNav}><RiAlignJustify size={35} color={'white'} /></button>
                        {show ?
                            <nav className='mobileNavBar' >
                                <Link className='mobileLink' to={'/'}>Home</Link>
                                <Link className='mobileLink' to={'/menu'}>Menu</Link>
                                <Link className='mobileLink' to={'/about'}>About</Link>
                            </nav>
                            : null}
                    </div>
                </header>
                :
                <header>
                    <div className='titleContainer'>
                        <a href='/'>

                            <h1>Bean Haven</h1>
                            <CiCoffeeBean size={'3em'} color={'white'} style={{ width: 'auto', margin: '1%', padding: '1%' }} />
                        </a>
                    </div>
                    <nav className='navBar'>
                        <Link className='navLink' to={'/'}>Home</Link>
                        <Link className='navLink' to={'/menu'}>Menu</Link>
                        <Link className='navLink' to={'/about'}>About</Link>
                    </nav>
                </header>
            }
            <Outlet />
            <Footer />
        </>
    );
}