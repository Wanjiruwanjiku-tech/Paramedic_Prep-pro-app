import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Home.css';
import clock from '../Assets/images/clock.png'
import hero1 from '../Assets/images/hero1.jpg'
import hero2 from '../Assets/images/hero2.jpg'
import hero3 from '../Assets/images/hero3.jpg'
import logo from '../Assets/images/logo.jpg'
import student2 from '../Assets/images/student2.jpg'
import mentor1 from '../Assets/images/mentor1.jpg'


const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    }
    return (
        <>
            <div className='homepage-container'>
                <nav className='navbar'>
                    <div className='logo'>
                        Paramedic Prep-Pro
                    </div>
                    <ul className='nav-links'>
                        <li><Link to={'/about'} >About</Link></li>
                        <li><a href='/'>Resources</a></li>
                        <li><a href='/contact'>Contact us</a></li>
                    </ul>
                    <button className='loginbutton' onClick={handleGetStarted}>Login</button>
                </nav>

                <div className='hero-section'>
                    <div className='hero-text'>
                        <h1><span className='highlight'>Prep</span> on your Schedule. <img src={clock} alt='clock' width={20} /></h1>
                        <p>Anywhere, Anytime, Start Preping Today.</p>

                        <div className='search-bar'>
                            <input type='text' placeholder='Search for a topic' />
                            <button className='search-button'>🔍</button>
                        </div>
                        <button className='get-started-button' onClick={handleGetStarted}>Start Learning</button>

                        <div className='mentors'>
                            <div className='mentor-avatars'>
                                <img src={hero1} alt='mentor1' />
                                <img src={hero2} alt='mentor2' />
                                <img src={hero3} alt='mentor3' />
                                <img src={hero1} alt='mentor4' />
                                <img src={hero2} alt='mentor5' />
                            </div>
                            <span className='highlight'>20k+ Verified Mentors</span>
                        </div>
                    </div>

                    <div className='hero-images'>
                        <img src={logo} alt='hero1' className='student-image' />
                        <img src={student2} alt='hero2' className='student-image' />
                        <img src={mentor1} alt='hero3' className='student-image' />
                    </div>   
                </div>
            </div>
            <div className='tagline-2'><h3>WE HELP ACHIEVE THE <span className='highlight'>BIGGEST</span> GOALS</h3></div>
        </>
    )
};

export default Home;