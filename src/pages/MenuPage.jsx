import React, { useState, useEffect } from 'react';
import MenuItems from '../MenuItems';
import { FoodMenu } from '../components/FoodMenu';
import { DrinkMenu } from '../components/DrinkMenu';
import heroImg1 from '../../public/heroImg1.jpg'
import menuCoffee01 from '../../public/menuCoffee01.jpg'
import menuCoffeeMuffin01 from '../../public/menuCoffeeMuffin01.jpg'
import menuCoffeeScone01 from '../../public/menuCoffeeScone01.jpg'
export default function MenuPage() {

    const [menuList, setMenuList] = useState(MenuItems);

    useEffect(() => {
        console.log(menuList)
    }, [])

    return (
        <div className='mainContainer'>

            {/* */}
            <div className='heroSection' style={{ backgroundImage: `url(${heroImg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <div className='heroText' >
                    <p>Indulge in our wide range of coffee drinks, from classic espresso and pour-over to seasonal specialties. Pair your coffee with a delightful selection of snacks and pastries made with love by local bakers.</p>
                </div>
            </div>
            <div className='menuSection'>
                <div className='menuImg-Drinks'>
                    <img src={menuCoffee01} style={{ height: '90%', width: '80%'}} />
                </div>

                <div className='menuPage'>
                    <div className='menuTableTitle'>
                        <h1>Drinks</h1>
                    </div>
                    <div className='menuContainer'>
                        <DrinkMenu menuList={menuList} />
                    </div>
                </div>
            </div>
            <div className='menuSection'>
                <div className='menuPage'>
                    <div className='menuTableTitle'>
                        <h1>Menu</h1>
                    </div>
                    <div className='menuContainer'>
                        <FoodMenu menuList={menuList} />
                    </div>
                </div>
                {/*  <div className='menuDesc' ></div>*/}
                <div className='menuImg-Drinks'>
                    <img src={menuCoffeeMuffin01} style={{ height: '90%', width: '80%'}} />
                </div>
            </div>
        </div>
    );
}