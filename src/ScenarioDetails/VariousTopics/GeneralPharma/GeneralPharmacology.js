import React from "react";
import { Link } from "react-router-dom";
import './GeneralPharmacology.css';
import explainer1 from './images/explainer1.jpg';
import explainer2 from './images/explainer2.jpg';
import explainer3 from './images/explainer3.jpg';
import explainer4 from './images/explainer4.jpg';
import explainer5 from './images/explainer5.jpg';
import explainer6 from './images/explainer6.jpg';
import explainer7 from './images/explainer7.jpg';
import explainer8 from './images/explainer8.jpg';

const GeneralPharmacology = () => {
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
            <div className="pharmacology-container">
                <div className="pharmacology-title">
                    <h1>GENERAL PHARMACOLOGY</h1>
                    <img src={explainer1} alt='explainer' className="explainer"/>
                    <p>
                        Pharmacology is the study of drugs, their uses, and their effects on the body. 
                        In paramedic practice, understanding the basic principles of pharmacology is crucial for safe and effective treatment of patients.
                    </p>
                </div>

                <div className='pharmacology-body'>
                    <div className="pharmacology-overview">
                        <img src={explainer2} alt='explainer' className="explainer"/>
                        <h2>Basic Principles</h2>
                        <p>Drugs can be classified based on their effects on specific body systems, their mechanisms of action, and their therapeutic uses.</p>
                    </div>

                    <div className="pharmacology-topics">
                        <div className="each-pharmacology-topic">
                            <h2>Common Drug Classes</h2>
                            <img src={explainer3} alt='explainer' className="explainer"/>
                            <h3>1. Analgesics</h3>
                            <p>Used to relieve pain. Includes opioids like morphine and non-opioids like acetaminophen.</p>
                            <h3>2. Antihypertensives</h3>
                            <p>Drugs used to lower blood pressure. Common examples include beta-blockers, ACE inhibitors, and calcium channel blockers.</p>
                            <img src={explainer4} alt='explainer' className="explainer"/>
                        </div>

                        <div className="each-pharmacology-topic">
                            <h3>3. Anticoagulants</h3>
                            <p>Prevent blood clotting and are used in patients with a risk of heart attacks or strokes. Examples include heparin and warfarin.</p>
                            <img src={explainer5} alt='explainer' className="explainer"/>

                            <h3>4. Bronchodilators</h3>
                            <p>Used to relax airway muscles and treat conditions such as asthma or COPD. Albuterol is a common bronchodilator.</p>
                        </div>
                        
                        <div className="each-pharmacology-topic">
                            <h3>5. Antidiabetic Drugs</h3>
                            <p>Help manage blood sugar levels. Insulin and metformin are widely used antidiabetic drugs.</p>
                            <img src={explainer6} alt='explainer' className="explainer"/>
                        </div>
                    </div>

                    <div className="pharmacology-summary">
                        <h2>Key Considerations for Paramedics</h2>
                        <img src={explainer7} alt='explainer' className="explainer"/>
                        <ul>
                            <li>Always assess a patient's medication history during an emergency.</li>
                            <li>Be aware of potential drug interactions when administering medications.</li>
                            <li>Monitor for adverse effects and be prepared to manage allergic reactions or anaphylaxis.</li>
                            <li>Accurately calculate drug dosages to avoid medication errors.</li>
                        </ul>
                        <img src={explainer8} alt='explainer' className="explainer"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GeneralPharmacology;
