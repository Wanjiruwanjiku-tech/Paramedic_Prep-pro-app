import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Burns.css';
import all from './images/all.jpg';
import dos from './images/dos.jpg';
import lund from './images/lundchart.png';
import nines from './images/nines.jpg';

const ShowImages = () => {

    const navigate = useNavigate();

    const handleviewImages = () => {
        navigate('/burns');
    }

    const burnImages = [
        {
            title: 'Types of burns',
            image: all,
            description: "This Image provides a detailed description of the skin layers and how different burn degrees affect the skin layers."
        },

        {
            title: 'Rule of Nines',
            image: nines,
            description: "This Image describes The rule of Nine's and how to compute the percentages to the TBSA"
        },

        {
            title: 'Lund Browder Chart',
            image: lund,
            description: 'This Image Provides a detailed description of what the chart looks like and how to use it.'
        },

        
        {
            title: "Do's and Don'ts",
            image: dos,
            description: 'This Image Describes a List of what to do and what not to do when a Paramedic is faced by Burn patients.'
        },
    ];

    return (
        <>
            <div className="burnimage-container">
                    <div className='burnimage-pictures'>
                        <h1>Images Providing Detailed descriptions of burns</h1>
                        <p>Let's get Preping..</p>
                        <div className='burnimage-pictures-items'>
                            <div className='each-burnimage'>
                                {burnImages.map((item, index) => (
                                    <div key={index} className='single-image'>
                                        <h2>{item.title}</h2>
                                        <img src={item.image} alt='card-image' className='card-image'/>
                                        <p><strong>Description:</strong> {item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                <button className='nav-btn' onClick={handleviewImages}>
                    <span>GO BACK</span>
                    <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                    </svg>
                </button>
            </div>
        </div>
        </>
    )
}

export default ShowImages;