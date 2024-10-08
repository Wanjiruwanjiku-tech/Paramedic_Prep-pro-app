import React from 'react';
import { Link } from 'react-router-dom';
import './Aboutus.css';
import logo from '../../Assets/images/logo.jpg';

const AboutUs = () => {
    return (
        <>
            <div className='homepage-container'>
                <nav className='navbar'>
                    <div>
                        <Link to={'/'} className='logo'>Paramedic Prep-Pro</Link>
                    </div>
                    <ul className='nav-links'>
                        <li><Link to={'/emergencylist'}>Keep Learning</Link></li>
                        <li><a href='/'>Resources</a></li>
                        <li><a href='/contact'>Contact us</a></li>
                    </ul>
                </nav>
            </div>
            <div className='aboutus'>
            <div className='log'><img src={logo} alt='' /></div>
                <h1 className='title'>Together we Achieve!</h1>
            </div>
            <div className='tagline'>
                <p>
                    We study our clients interest from all 
                    posible ways so, we can asure 
                    that we get all points to <span className='highlight'>deliver</span> our 
                    service and work. Our Team is experienced 
                    and foccussed to <span className='highlight'>Prep</span> with
                    You.
                </p>
                <div className='logo'><img src={logo} alt='' /></div>
            </div>
            <div className='tagline-2'><h3>WE HELP ACHIEVE THE <span className='highlight'>BIGGEST</span> GOALS</h3></div>
        </>
    )
}

export default AboutUs;