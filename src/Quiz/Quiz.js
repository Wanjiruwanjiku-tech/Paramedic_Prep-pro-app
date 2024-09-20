import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import explainer1 from './images/explainer1.jpg';
import explainer2 from './images/explainer2.jpg';
import explainer3 from './images/explainer3.jpg';
import explainer4 from './images/explainer4.jpg';
import explainer5 from './images/explainer5.jpg';
import explainer6 from './images/explainer6.jpg';
import explainer7 from './images/explainer7.jpg';
import explainer8 from './images/explainer8.jpg';


const Quiz = () => {
    const navigate = useNavigate();

    const handleStartQuiz = (title) => {
        switch (title) {
            case 'Patient Assessment':
                navigate('/patient-quiz');
                break;
            case 'Airway Management':
                navigate('/airway-quiz');
                break;
            case 'Cardiac Emergencies':
                navigate('/cardiac-quiz');
                break;
            case 'Fractures':
                navigate('/fractures-quiz');
                break;
            case 'Burn Emergencies':
                navigate('/burns-quiz');
                break;
            case 'Bleeding and Shock':
                navigate('/bleeding-quiz');
                break;
            case 'Diabetic Emergencies':
                navigate('/diabetes-quiz');
                break;
            case 'Poisoning':
                navigate('/poison-quiz');
                break;
            case 'General Pharmacology':
                navigate('/genpharma-quiz');
                break;
            case 'Obstetrics and Gynecology':
                navigate('/obs-quiz');
                break;
            default:
                break;
        }
    }
    const quiztopics = [
        {
            'title': "Patient Assessment",
            'explainer': explainer3,
        },

        {
            'title': "Airway Management",
            'explainer': explainer4,
        }, 
        
        {
            'title': "Cardiac Emergencies",
            'explainer': explainer5,
        },

        {
            'title': "Fractures",
            'explainer': explainer3,
        },

        {
            'title': "Burn Emergencies",
            'explainer': explainer6,
        },
        
        {
            'title': "Bleeding and Shock",
            'explainer': explainer8,
        },
        
        {
            'title': "Diabetic Emergencies",
            'explainer': explainer2,
        },
        {
            'title': "Poisoning",
            'explainer': explainer7,
        },

        {
            'title': "General Pharmacology",
            'explainer': explainer1,
        },

        {
            'title': "Obstetrics and Gynecology",
            'explainer': explainer8,
        },
        
    ];
    return (
        <>
        <div className='homepage-container'>
                <nav className='navbar'>
                    <div>
                        <Link to={'/'} className='logo'>Paramedic Prep-Pro</Link>
                    </div>
                    <ul className='nav-links'>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/emergencylist'}>Back</Link></li>
                        <li><Link to={'/'}>Resources</Link></li>
                        <li><Link to={'/contact'}>Contact us</Link></li>
                    </ul>
                </nav>
            </div>
        <div className='quiz-container'>
            <h1>Test your Limit..</h1>
            <p>Select a topic</p>
        </div>
        <div className='quiz-items'>
            <div className='each-quiz-items'>
                {quiztopics.map((topic, index) => (
                    <div key={index} className='each-quiz-item'>
                        <h3>{topic.title}</h3>
                        <img src={topic.explainer} alt={topic.title} className='explainer'/>
                        <button className='nav-btn' onClick={() => handleStartQuiz(topic.title)}>
                            <span>Start {topic.title} Quiz </span>
                            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Quiz;