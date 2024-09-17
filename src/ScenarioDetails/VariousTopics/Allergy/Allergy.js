import React from "react";
import { Link } from "react-router-dom";
import './Allergy.css';
import explainer1 from './images/explainer1.jpg';
import explainer2 from './images/explainer2.jpg';
import explainer3 from './images/explainer3.jpg';
import explainer4 from './images/explainer4.jpg';
import explainer5 from './images/explainer5.jpg';
import explainer6 from './images/explainer6.jpg';
import explainer7 from './images/explainer7.jpg';
import explainer8 from './images/explainer8.jpg';

const AllergicReactions = () => {

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
            <div className="allergic-container">
                <div className="allergic-title">
                    <h1>ALLERGIC REACTIONS</h1>
                    <img src={explainer1} alt='explainer' className="explainer"/>
                    <p>
                        Allergic reactions are hypersensitive responses by the immune system to substances that are typically harmless to most people. 
                        These reactions can vary from mild skin rashes to life-threatening anaphylaxis.
                    </p>
                </div>
                <div className='allergic-body'>
                    <div className="allergic-overview">
                        <img src={explainer2} alt='explainer' className="explainer"/>
                        <h2>Common Triggers</h2>
                        <ul>
                            <li>Food allergies (e.g., peanuts, shellfish)</li>
                            <li>Insect stings (e.g., bees, wasps)</li>
                            <li>Medications (e.g., penicillin)</li>
                            <li>Latex</li>
                            <li>Environmental factors (e.g., pollen, pet dander)</li>
                        </ul>
                    </div>
                    <div className="allergic-topics">
                        <div className='allergic-topic'>
                            <div className="each-allergic-topic">
                                <h2>Mild Allergic Reactions</h2>
                                <img src={explainer3} alt='explainer' className="explainer"/>
                                <p>
                                    Mild allergic reactions typically involve localized symptoms and do not threaten life. They are usually manageable with minimal intervention.
                                </p>
                                <h3>Symptoms</h3>
                                <ul>
                                    <li>Itching</li>
                                    <li>Hives or rash</li>
                                    <li>Sneezing or runny nose</li>
                                    <li>Watery eyes</li>
                                    <li>Localized swelling</li>
                                </ul>
                                <h3>Management</h3>
                                <img src={explainer4} alt='explainer' className="explainer"/>
                                <p>
                                    <span className="hi">Antihistamines:</span> Administer oral antihistamines (e.g., diphenhydramine) to reduce itching and hives.<br />
                                    <span className="hi">Topical Treatments:</span> Apply corticosteroid creams or lotions to affected areas.<br />
                                    <span className="hi">Monitor:</span> Observe the patient for any progression of symptoms.
                                </p>
                            </div>
                            <div className="each-allergic-topic">
                                <h2>Severe Allergic Reactions (Anaphylaxis)</h2>
                                <img src={explainer5} alt='explainer' className="explainer"/>
                                <p>
                                    Anaphylaxis is a severe, potentially life-threatening allergic reaction that requires immediate medical intervention. It involves multiple body systems and can rapidly progress to respiratory and cardiovascular compromise.
                                </p>
                                <h3>Pathophysiology</h3>
                                <p>
                                    Anaphylaxis occurs when allergens trigger the release of large amounts of histamines and other inflammatory mediators from mast cells and basophils. This leads to widespread vasodilation, increased vascular permeability, and bronchoconstriction.
                                </p>
                                <h3>Causes</h3>
                                <ul>
                                    <li>Food allergens (e.g., peanuts, shellfish)</li>
                                    <li>Insect stings (e.g., bees, wasps)</li>
                                    <li>Medications (e.g., antibiotics, NSAIDs)</li>
                                    <li>Latex</li>
                                    <li>Exercise-induced anaphylaxis</li>
                                </ul>
                                <h3>Signs and Symptoms</h3>
                                <ul>
                                    <li>Difficulty breathing or wheezing</li>
                                    <li>Swelling of the lips, tongue, or throat</li>
                                    <li>Rapid or weak pulse</li>
                                    <li>Dizziness or fainting</li>
                                    <li>Hives, flushing, or itching</li>
                                    <li>Gastrointestinal symptoms (e.g., nausea, vomiting, diarrhea)</li>
                                </ul>
                                <h3>Management</h3>
                                <img src={explainer6} alt='explainer' className="explainer"/>
                                <p>
                                    <span className="hi">Epinephrine:</span> Administer intramuscular epinephrine (0.3 mg for adults, 0.15 mg for children) immediately.<br />
                                    <span className="hi">Airway Management:</span> Ensure the airway is open and provide oxygen therapy. Prepare for possible intubation if airway compromise occurs.<br />
                                    <span className="hi">Intravenous Fluids:</span> Administer IV fluids to support blood pressure and circulation.<br />
                                    <span className="hi">Adjunct Medications:</span> Consider antihistamines (e.g., diphenhydramine), corticosteroids (e.g., methylprednisolone), and bronchodilators (e.g., albuterol) to manage symptoms.<br />
                                    <span className="hi">Monitor:</span> Continuously monitor vital signs and be prepared for repeat doses of epinephrine if symptoms persist or recur.<br />
                                    <span className="hi">Rapid Transport:</span> Expedite transport to a medical facility for further evaluation and treatment.
                                </p>
                                <p>
                                    Management of anaphylaxis involves rapid administration of epinephrine to counteract the allergic response, ensuring airway patency, and supporting circulation with fluids and vasopressors if necessary. Immediate transport to a hospital is essential for ongoing care and monitoring.
                                </p>
                            </div>
                            <div className="each-allergic-topic">
                                <h2>Assessment</h2>
                                <img src={explainer7} alt='explainer' className="explainer"/>
                                <h3>History</h3>
                                <p>
                                    - Ask about known allergies or previous allergic reactions.<br />
                                    - Inquire about recent exposures to potential allergens (foods, medications, insect stings, etc.).<br />
                                    - Determine the onset and progression of symptoms.
                                </p>
                                <h3>Physical Examination</h3>
                                <p>
                                    - Assess for skin manifestations such as hives, rashes, and swelling.<br />
                                    - Evaluate respiratory status, including rate, effort, and breath sounds.<br />
                                    - Check cardiovascular stability: heart rate, blood pressure, and peripheral pulses.<br />
                                    - Look for signs of airway compromise: stridor, hoarseness, or swelling of the tongue and lips.
                                </p>
                                <h3>Vital Signs Monitoring</h3>
                                <ul>
                                    <li>Heart Rate: Tachycardia or bradycardia</li>
                                    <li>Blood Pressure: Hypotension</li>
                                    <li>Respiratory Rate: Tachypnea or respiratory distress</li>
                                    <li>Oxygen Saturation: Low levels indicating hypoxia</li>
                                    <li>Level of Consciousness: Altered mental status or confusion</li>
                                </ul>
                            </div>
                            <div className="each-allergic-topic">
                                <h2>Complications</h2>
                                <img src={explainer8} alt='explainer' className="explainer"/>
                                <ul>
                                    <li>Airway obstruction</li>
                                    <li>Cardiovascular collapse</li>
                                    <li>Recurrent anaphylaxis (biphasic reaction)</li>
                                    <li>Secondary infections from skin lesions</li>
                                    <li>Respiratory failure</li>
                                </ul>
                                <p>
                                    Complications from severe allergic reactions can include life-threatening airway obstruction, cardiovascular collapse, and recurrent episodes of anaphylaxis even after initial treatment. Continuous monitoring and preparedness for advanced interventions are crucial to prevent these complications.
                                </p>
                            </div>
                        </div>
                        <div className='allergic-types'>
                            <h2>Types of Allergic Reactions</h2>
                            <img src={explainer4} alt='explainer' className="explainer"/>
                            <h3>Type I: Immediate Hypersensitivity (Anaphylaxis)</h3>
                            <p>
                                Type I hypersensitivity reactions are IgE-mediated and occur rapidly after exposure to an allergen. They can range from mild symptoms like itching and hives to severe, life-threatening anaphylaxis.
                            </p>
                            <img src={explainer7} alt='explainer' className="explainer"/>
                            <h3>Type II: Cytotoxic Hypersensitivity</h3>
                            <p>
                                Type II reactions involve IgG or IgM antibodies targeting cells or extracellular matrix, leading to cell destruction through complement activation or antibody-dependent cellular cytotoxicity. Examples include hemolytic anemia and transfusion reactions.
                            </p>
                            <img src={explainer5} alt='explainer' className="explainer"/>
                            <h3>Type III: Immune Complex-Mediated Hypersensitivity</h3>
                            <p>
                                Type III reactions occur when immune complexes (antigen-antibody complexes) deposit in tissues, leading to inflammation and tissue damage. Examples include serum sickness and certain forms of vasculitis.
                            </p>
                            <img src={explainer1} alt='explainer' className="explainer"/>
                            <h3>Type IV: Delayed-Type Hypersensitivity</h3>
                            <p>
                                Type IV reactions are T-cell mediated and occur hours to days after exposure to an antigen. They involve macrophage activation and cytokine release, leading to inflammation. Examples include contact dermatitis and the tuberculin skin test reaction.
                            </p>
                        </div>

                        <div className="allergic-summary">
                            <h2>Key Considerations for Paramedics</h2>
                            <img src={explainer3} alt='explainer' className="explainer"/>
                            <ol>
                                <li>Always assess for signs of anaphylaxis in patients presenting with potential allergic reactions.</li>
                                <li>Rapid administration of epinephrine is critical in managing anaphylaxis.</li>
                                <li>Ensure airway patency and be prepared for advanced airway management if necessary.</li>
                                <li>Monitor vital signs continuously and manage hypotension with IV fluids and vasopressors as needed.</li>
                                <li>Educate patients and caregivers on the use of epinephrine auto-injectors and avoidance of known allergens.</li>
                                <li>Be prepared for biphasic anaphylactic reactions and monitor patients for recurrence of symptoms even after initial stabilization.</li>
                            </ol>
                            <img src={explainer4} alt='explainer' className="explainer"/>
                            <img src={explainer8} alt='explainer' className="explainer"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllergicReactions;
