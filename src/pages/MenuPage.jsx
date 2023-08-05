import React, { useState, useEffect } from 'react';
import MenuItems from '../MenuItems';
import { FoodMenu } from '../components/FoodMenu';
import { DrinkMenu } from '../components/DrinkMenu';
import heroImg1 from '../../public/heroImg1.jpg'

export default function MenuPage() {

    const [menuList, setMenuList] = useState(MenuItems);
    const [menuImages, setMenuImages] = useState({
        menuFoodImage: 'https://images.unsplash.com/photo-1476549427829-9b146dac7b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE1MDF8&ixlib=rb-4.0.3&q=80&w=1080',
        menuDrinkImage: 'https://images.unsplash.com/photo-1522120573867-e574959f84c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
        coffeeBeanHeart: 'https://images.unsplash.com/photo-1518831449057-63cc79a76488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE0MDZ8&ixlib=rb-4.0.3&q=80&w=1080',
        heroImage: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTExOTE0MzZ8&ixlib=rb-4.0.3&q=80&w=1080'
    })

    useEffect(() => {
        console.log(menuList)
    }, [])

    return (
        <div className='mainContainer'>

            {/* */}
            <div className='heroSection' style={{ backgroundImage: `url(${heroImg1})` /*menuImages.heroImage*/, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <div className='heroText' >
                    <p>Indulge in our wide range of coffee drinks, from classic espresso and pour-over to seasonal specialties. Pair your coffee with a delightful selection of snacks and pastries made with love by local bakers.</p>
                </div>
            </div>
            <div className='menuSection'>
                <div className='menuImg-Drinks'>
                    <img src={menuImages.menuDrinkImage} style={{ height: '90%', width: '80%' }} />
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
                    <img src={menuImages.menuFoodImage} style={{ height: '90%', width: '80%' }} />
                </div>
            </div>
        </div>
    );
}