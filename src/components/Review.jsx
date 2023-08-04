import React, { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { CiCoffeeBean } from 'react-icons/ci'


export default function Review({ item }) {

    const renderStarIcons = () => {
        const starIcons = [];
        //const rating = item.rating;
        for (let i = 0; i < item.rating; i++) {
            starIcons.push(<CiCoffeeBean size={25} />);
        }
        return starIcons;
    }


    return (
        <>
            <div className='rating'>
                {renderStarIcons(item.rating)}
            </div>

            <div className='reviewTitle'>
                <p>{item.title}</p>
                <p id='reviewDate'>{item.date}</p>
            </div>

            <div className='body'>
                <p>{item.body}</p>
            </div>
            {/*   <div className=''>
            
        </div> <div className='date'>
               
            </div>
            */}
        </>
    );
}