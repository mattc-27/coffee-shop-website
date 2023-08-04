import React, { useState, useEffect } from 'react';
import '../style.css';


export function FoodMenu({ menuList }) {

    console.log(menuList)

    const [drinkList, setDrinkList] = useState()
    const [foodList, setFoodList] = useState()

    useEffect(() => {
        setDrinkList(menuList)
        setFoodList(menuList)
    }, [])

    useEffect(() => {
        console.log(drinkList, foodList)
    }, [foodList, drinkList])


    return (
        <>
            <div className='menuTableContainer'>
                <table id='foodMenuTable'>
                    <tbody>
                        <tr className='tableHeader' >

                            <th >Name</th>
                            <th >Description</th>
                        </tr>
                        {menuList[1].items.map(item => (
                            <tr key={item.id} >
                                <td>
                                    {item.item}
                                </td>

                                <td >
                                    {item.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}