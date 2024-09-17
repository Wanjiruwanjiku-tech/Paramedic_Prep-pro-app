import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Bleeding.css';
import explainer1 from './images/explainer1.jpg';
import explainer2 from './images/explainer2.jpg';
import explainer3 from './images/explainer3.jpg';
import explainer4 from './images/explainer4.jpg';
import explainer5 from './images/explainer5.jpg';
import explainer6 from './images/explainer6.jpg';
import explainer7 from './images/explainer7.jpg';
import arterial from './images/aterial.jpg';
import venous from './images/venous.jpg';
import cap from './images/cap.jpg';


const Bleeding = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/shock');
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

            <div className='bleeding-container'>
                <h1>Bleeding and Shock</h1>
                <BleedingLearningOutcomes />
                <div className='bleeding-body'>
                    <h2>Bleeding</h2>
                    <img src={explainer1} alt='explainer' className='explainer' />
                    <p><strong>Bleeding, hemorrhage, haemorrhage or blood loss</strong> is blood escaping from the circulatory system from a damaged blood vessel.</p>
                    <p>Bleeding can occur internally, or externally either through a <strong>puncture in the skin</strong> or through a natural opening such as the:</p>
                    <ul>
                        <li>Mouth</li>
                        <li>Nose</li>
                        <li>Ear</li>
                        <li>Urethra</li>
                        <li>Vagina</li>
                        <li>Anus</li>
                    </ul>

                    <p>
                        <span className='hi'>Hypovolemia</span> is a massive decrease in blood volume and death by excessive blood loss is known as <span className='hi'>Exsanguination.</span><br/>
                        Typically, a healthy person can endure a loss of 10–15% of the total blood volume without serious medical difficulties. 
                        The stopping or controlling of bleeding is called <span className='hi'>Hemostasis</span> and is an important part of both first aid and surgery. 
                    </p>

                    <h3>Blood Loss Classification.</h3>
                    <p>Hemorrhaging is broken down into four classes by the American College of Surgeons' advanced trauma life support (ATLS)</p>
                    <BleedingClassifications />

                    <h3>Types of Blood Loss</h3>
                    <p>There are three main types of bleeding: <span className='hi'>Capillary, Venous,</span> and <span className='hi'>Arterial</span> bleeding. The main difference between the three is the type of blood vessels where hemorrhaging occurs, which can impact severity.</p>
                    <BleedingTypes />
                </div>
                <div>
                <button className='nav-btn' onClick={handleNext}>
                    <span>Next Page-Shock</span>
                    <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                    </svg>
                </button>
            </div>
            </div>
        </>
    );
}

const BleedingLearningOutcomes = () => {
    const [showLearningOutcomes, setShowLearningOutcomes] = useState(false);

    const toggleLearningOutcomes = () => setShowLearningOutcomes(!showLearningOutcomes);

    const learningOutcomes = [
        { title: 'Recognize the types of bleeding', description: 'Identify the differences between arterial, venous, and capillary bleeding, including their characteristics.' },
        { title: 'Understand the physiological response to blood loss', description: 'Explain how the body compensates for blood loss and the stages of shock (compensated, decompensated, irreversible).' },
        { title: 'Assess the signs and symptoms of shock', description: 'Demonstrate the ability to recognize early and late signs of shock, including changes in mental status, skin condition, and vital signs.' },
        { title: 'Classify different types of shock', description: 'Differentiate between hypovolemic, cardiogenic, distributive (anaphylactic, septic), and obstructive shock, and their causes.' },
        { title: 'Apply the principles of hemorrhage control', description: 'Understand the use of direct pressure, tourniquets, hemostatic agents, and pressure dressings to control bleeding.' },
        { title: 'Develop an effective treatment plan for shock', description: 'Outline the steps to manage a patient in shock, including fluid resuscitation, oxygen therapy, and rapid transport.' },
        { title: 'Explain the importance of rapid intervention', description: 'Understand the critical nature of timely treatment for bleeding and shock to prevent complications like organ failure and death.' },
        { title: 'Identify the need for advanced interventions', description: 'Recognize when paramedic interventions such as intravenous fluid administration or medications are necessary.' },
        { title: 'Discuss complications associated with untreated shock', description: 'Explain the potential consequences of untreated shock, including multiple organ failure, hypoxia, and death.' },
        { title: 'Understand the role of the circulatory system in shock', description: 'Explain the relationship between the heart, blood vessels, and blood volume in maintaining adequate perfusion and how shock disrupts this balance.' },
    ];

    return (
        <div className="learning-outcomes">
            <button className='nav-btn' onClick={toggleLearningOutcomes}>
                <span>{showLearningOutcomes ? 'Hide Learning Outcomes' : 'Show Learning Outcomes'}</span>
                <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                </svg>
            </button>

            {showLearningOutcomes && (
                <ol>
                    {learningOutcomes.map((outcome, index) => (
                        <li key={index}>
                            <h3>{outcome.title}</h3>
                            <p>{outcome.description}</p>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

const BleedingClassifications = () => {
    const bleedingClasses = [
        { 
            title: 'Class I', 
            description: 'Up to 15% of blood volume (750 mL) – the body can compensate without any medical intervention.',
            explainer: explainer7,
        },

        { 
            title: 'Class II', 
            description: '15-30% of blood volume (750-1500 mL) – the body can still compensate, but medical intervention may be required.',
            explainer: explainer2,
        },

        { 
            title: 'Class III', 
            description: '30-40% of blood volume (1500-2000 mL) – the body can no longer compensate, and medical intervention is necessary.',
            explainer: explainer4,
        },

        { 
            title: 'Class IV', 
            description: 'More than 40% of blood volume (2000 mL or more) – severe hemorrhage that requires immediate medical attention.',
            explainer: explainer6, 
        },
    ];

    return (
        <>
        <div className="bleeding">
            <div className="bleeding-classifications">
                {bleedingClasses.map((bleedingClass, index) => {
                    return (
                        <div key={index} className='bleeding-classess'>
                            <img src={bleedingClass.explainer} alt='explainer' className='explainer' />
                            <h3>{bleedingClass.title}</h3>
                            <p>{bleedingClass.description}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
        </>
    );
}

const BleedingTypes = () => {
    const bleedingtypes = [
        { 
            title: 'Arterial bleeding', 
            description: 'Arterial bleeding is the most severe and urgent type of bleeding. It can result from a penetrating injury, blunt trauma, or damage to organs or blood vessels. Arterial bleeding is the most severe and urgent type of bleeding. It can result from a penetrating injury, blunt trauma, or damage to organs or blood vessels.',
            explainer: explainer3,
            treatment: [
                "The initial step is to put pressure over the wound causing the bleeding with a latex-gloved hand and sterile gauze. It is also important to contact an emergency number to get medical help.",
                "If this stops the bleeding, the next step is to cover the wound with a sterile gauze dressing and bandage to continue to exert pressure on the wound.",
                "When the bleeding comes from an artery in the arm or leg, it may help to elevate the body part above the level of the heart.",
                "If all efforts to stop the bleeding fail, the last resort involves applying a tourniquet above the bleeding wound.",
            ],
            cardimage: arterial,
        },

        { 
            title: 'Venous bleeding', 
            description: 'Venous bleeding is less severe than arterial bleeding, but it can still be life threatening. For this reason, it requires immediate medical attention. As the blood is coming from a vein, it is dark red. This is because it does not contain as much oxygen. Also, because veins are not under direct pressure, the blood flows steadily but comes out less forcefullyTrusted Source than it does with arterial bleeding.',
            explainer: explainer5,
            treatment: [
                "The initial step is to put pressure over the wound causing the bleeding with a latex-gloved hand and sterile gauze. It is also important to contact an emergency number to get medical help.",
                "If this stops the bleeding, the next step is to cover the wound with a sterile gauze dressing and bandage to continue to exert pressure on the wound.",
                "When the bleeding comes from an artery in the arm or leg, it may help to elevate the body part above the level of the heart.",
                "If all efforts to stop the bleeding fail, the last resort involves applying a tourniquet above the bleeding wound.",
            ],
            cardimage: venous,
        },

        { 
            title: 'Capillary bleeding', 
            description: 'Capillary bleeding typically happens due to injury to the skin, and it is much more commonTrusted Source than the other types. Instead of spurting out, as in arterial bleeding, or flowing out, as in venous bleeding, it oozes from the damaged body part. Not only is capillary bleeding the least severe, but it is also the easiest to control because it comes from blood vessels on the surface rather than from deep inside the body.',
            explainer: explainer4,
            treatment: [
                "The initial step is to cleanse the wound with soap and water or a cleanser that is nontoxic to the cells.",
                "The wound may need irrigation under pressure to remove contaminants, which will help prevent infections.",
                "The final step is to apply pressure with a latex-gloved hand and sterile dressing. TypicallyTrusted Source, pressure is sufficient to control the bleeding, and the additional steps that a doctor may use to stop arterial or venous bleeding are not necessary.",
            ],
            cardimage: cap,
        },
    ];

    return (
        <>
        <div className="bleeding">
            <div className="bleeding-classifications">
                {bleedingtypes.map((bleedingtypes, index) => {
                    return (
                        <div key={index} className='bleeding-types'>
                            <img src={bleedingtypes.cardimage} alt='explainer' className='card-image' />
                            <img src={bleedingtypes.explainer} alt='explainer' className='explainer' />
                            <h3>{bleedingtypes.title}</h3>
                            <p>{bleedingtypes.description}</p>
                            <h4>Treatment</h4>
                            <ol>
                                {bleedingtypes.treatment.map((treatment, index) => (
                                    <li key={index}>{treatment}</li>
                                ))}
                            </ol>
                        </div>
                    )
                }
                )}
            </div>
        </div>
        </>
    );
}

export default Bleeding;