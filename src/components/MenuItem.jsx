import React  from 'react';
import '../style.css';

export function MenuItem({ item }) {

    return (
        <div className='projectCard'>
            <div className='projectTitle'>
                <h1>{item.item}</h1>
            </div>
            <div className='projectDescription'>
                <p>{item.price}</p>
            </div>
            
        </div>
    );
}