import React from 'react';

export default function ContactForm() {


    return (

        <form>

            <div className='formGroup'>
                <label >First name</label>
                <input

                    type='text'
                    placeholder=''
                />
            </div>

            <div className='formGroup'>
                <label >Last name</label>
                <input

                    type='text'
                    placeholder=''
                />
            </div>

            <div className='formGroup'>
                <label>Email</label>
                <input
                    type='email'
                    placeholder='email@text.com'
                />
            </div>

            <div className='formGroup'>
                <label>Phone number</label>
                <input
                    type='email'
                    placeholder='555-555-5555'
                />
            </div>

            <div className='formGroup'>
                <label>Message</label>
                <textarea />
            </div>

            <div className='formGroup'>
                <button id="submitBtn">Submit</button>
            </div>
            
        </form >
    );
}