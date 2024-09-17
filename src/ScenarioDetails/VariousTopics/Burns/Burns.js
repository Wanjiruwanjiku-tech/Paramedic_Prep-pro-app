import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Burns.css';
import explainer1 from './images/explainer1.jpg';
import explainer2 from './images/explainer2.jpg';
import explainer3 from './images/explainer3.jpg';
import explainer5 from './images/explainer5.jpg';
import explainer6 from './images/explainer6.jpg';
import explainer7 from './images/explainer7.jpg';
import logo from './images/logo2.jpg';

const BurnTypes = () => {
    const types = [
        {
            type: 'First-Degree Burns (Superficial)',
            description: 'First-degree burns affect only the outer layer of the skin. They cause pain, redness, and swelling.',
            symptoms: [
                'Pain',
                'Redness',
                'Swelling'
            ],
            treatment: [
                'Cool the burn',
                'Cover the burn',
                'Pain relief'
            ],
            explainer: explainer2,
        },

        {
            type: 'Second-Degree Burns (Partial Thickness)',
            description: 'Second-degree burns affect both the outer and underlying layer of skin. They cause pain, redness, swelling, and blistering.',
            symptoms: [
                'Pain',
                'Redness',
                'Swelling',
                'Blisters'
            ],
            treatment: [
                'Cool the burn',
                'Apply a sterile, non-stick dressing.',
                'Pain relief',
                'Prevent infection',
                'Do not break blisters.'
            ],

            explainer: explainer3,
        },

        {
            type: 'Third-Degree Burns (Full Thickness)',
            description: 'Third-degree burns destroy the outer layer of skin and the underlying layer of skin. Third-degree burns can also damage or destroy the deepest skin layer and tissues underneath.',
            symptoms: [
                'White or charred skin',
                'Numbness',
                'Blackened skin',
                'Dry and leathery skin'
            ],
            treatment: [
                'Cool the burn',
                'Cover the burn',
                'Pain relief',
                'Prevent infection'
            ],

            explainer: explainer5,
        },

    ]


    return (
        <>

            <div className='burn-types-container'>
                <h2>Burn Types</h2>
                <div className='burn-types'>
                    {types.map((burn, index) => {
                        return (
                            <div key={index} className='burn-type'>
                                <img src={burn.explainer} alt='explainer' className='explainer'/>
                                <h3>{burn.type}</h3>
                                <p>{burn.description}</p>
                                <h4>Symptoms</h4>
                                <ul>
                                    {burn.symptoms.map((symptom, index) => {
                                        return <li key={index}>{symptom}</li>
                                    })}
                                </ul>
                                <h4>Treatment</h4>
                                <ul>
                                    {burn.treatment.map((treatment, index) => {
                                        return <li key={index}>{treatment}</li>
                                    })}
                                </ul>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

function BurnAssessment() {

    const assesssment = [

        {
            title: 'Initial Assessment',
            steps: [
                'Scene Safety: Ensure the scene is safe to approach. Consider potential hazards like fire, electrical sources, or hazardous chemicals.',
                'Primary Survey: Follow the ABCDE approach (Airway, Breathing, Circulation, Disability, Exposure).',
                'Burn Severity: Assess the extent, depth, and location of burns.',
            ],

            explainer: explainer1,
        },


    {
        title: 'Patient History',
        steps: [
            'Mechanism of Injury: Determine how the burn occurred (e.g., flame, scald, chemical, electrical, radiation).',
            'Time of Injury: Establish when the burn happened to gauge the time elapsed for potential complications.',
            'Past Medical History: Note any pre-existing conditions that may affect healing or complicate treatment (e.g., diabetes, immunosuppression).',
        ],

        explainer: explainer6,
    },
    ]
    return (
        <>
            <div className='burn-assessment-container'>
                <div className='burns'>
                    <h2>Burn Assessment</h2>
                    <p>When assessing a burn, you should consider:</p>
                    <ul>
                        <li>The depth of the burn</li>
                        <li>The extent of the burn</li>
                        <li>The cause of the burn</li>
                        <li>The location of the burn</li>
                    </ul>
                </div>
            <div className='burn-assessments'>
                {assesssment.map((assessment, index) => {
                    return (
                        <div key={index} className='burn-assessment'>
                            <h3>{assessment.title}</h3>
                            <img src={assessment.explainer} alt='explainer' className='explainer'/>
                            <ul>
                                {assessment.steps.map((step, index) => {
                                    return <li key={index}>{step}</li>
                                })}
                            </ul>
                        </div>
                    )
                }
                )}
            </div>
            </div>
        </>
    )
}

function BurnClassification() {
    const classifications = [
        {
            type: 'By Cause',
            explanation: [
                'Thermal Burns: Caused by heat sources like flames, hot liquids, steam, or hot objects.',
                'Chemical Burns: Caused by exposure to corrosive substances like acids, alkalis, or solvents.',
                'Electrical Burns: Caused by contact with electrical sources like power lines, outlets, or lightning.',
                'Radiation Burns: Caused by exposure to radiation sources like X-rays, UV light, or nuclear radiation.'
            ],

            explainer: explainer7,
        },

        {
            type: 'By Depth',
            explanation: [
                'First-Degree Burns: Affect only the outer layer of skin.',
                'Second-Degree Burns: Affect both the outer and underlying layer of skin.',
                'Third-Degree Burns: Destroy the outer layer of skin and the underlying layer of skin.'
            ],
            explainer: explainer6,
        },

        {
            type: 'By Extent/Severity',
            explanation: [
                'Minor Burns:  Superficial burns covering less than 10% TBSA or partial-thickness burns covering less than 5% TBSA in adults.',
                'Moderate Burns: Partial-thickness burns covering 10-20% TBSA or full-thickness burns covering 2-10% TBSA in adults.',
                'Severe/Major Burns:  Partial-thickness burns covering more than 20% TBSA, full-thickness burns covering more than 10% TBSA, or any burn with complications like inhalation injury or involving critical areas.'
            ],
            explainer: explainer5,
        },
    ];

    return (
        <>
            <div className='burn-classification-container'>
                <h2>Burn Classification</h2>
                <p>Burns can be classified based on various factors, including their cause, depth, and extent.</p>
            <div className='burn-classifications'>
                {classifications.map((classification, index) => {
                    return (
                        <div key={index} className='burn-classification'>
                            <img src={classification.explainer} alt='explainer' className='explainer'/>
                            <h3>{classification.type}</h3>
                            <ul>
                                {classification.explanation.map((explanation, index) => {
                                    return <li key={index}>{explanation}</li>
                                })}
                            </ul>
                        </div>
                    )
                }
                )}
            </div>
            </div>
        </>
    )

}

function RuleofNines() {
    return (
      <div className="tip-container">
        <p className="tip-text">
          <strong>Tip:</strong> The <strong>Rule of Nines</strong> helps estimate the total body surface area affected by burns. Each major body section represents 9% (or multiples of 9%) of the total body area, aiding in quick assessment and treatment.
        </p>
      </div>
    );
  };

function LundBrowder() {
    return (
      <div className="tip-container">
        <p className="tip-text">
          <strong>Tip:</strong> The <strong>Lund-Browder Chart</strong> provides a detailed method for estimating burn areas, considering age-related body proportion differences. It's especially useful for pediatric patients.
        </p>
      </div>
    );
  };


const Burns = () => {
    const navigate = useNavigate();

    const handleviewImages = () => {
        navigate('/burn-images');
    }

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
            <div className='burn-container'>
                <div className='burn-header'>
                    <h1>BURNS</h1>
                </div>

                <div className='burn-body'>
                    <section className='burn-overview'>
                        <h2>Overview</h2>
                        <img src={logo} alt='explainer' className='explainerlogo'/>
                        <p>Burns are injuries to the skin or other tissues caused by:</p>
                        <ul>
                            <li>Heat</li>
                            <li>Electricity</li>
                            <li>Chemicals</li>
                            <li>Friction</li>
                            <li>Radiation</li>
                        </ul>
                        <p> They vary in severity from minor to life-threatening and are classified by depth and extent of tissue damage.</p>
                    </section>

                    <section className='burn-typess'>
                        <BurnTypes />
                    </section>

                    <RuleofNines />

                    <section>
                        <BurnAssessment />
                    </section>

                    <LundBrowder />

                    <section>
                        <BurnClassification />
                    </section>


                </div>
                <div>
                <button className='nav-btn' onClick={handleviewImages}>
                    <span>View Images</span>
                    <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                    </svg>
                </button>
            </div>
            </div>
        </>
    )
}

export default Burns;