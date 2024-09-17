import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Shock.css';
import explainer1 from './images/explainer1.jpg';
import explainer2 from './images/explainer2.jpg';
import explainer3 from './images/explainer3.jpg';
import explainer4 from './images/explainer4.jpg';
import explainer5 from './images/explainer5.jpg';
import explainer6 from './images/explainer6.jpg';
import explainer7 from './images/explainer7.jpg';
import hypo from './images/hypovolemic.jpg';
import cardio from './images/cardiogenic.jpg';
import obstruct from './images/obstructive.jpg';
import septic from './images/distributive.webp';


const Shock = () => {
    const navigate = useNavigate();
    const handleback = () => {
        navigate ('/bleeding-and-shock')
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
            <div className='shock-container'>
                <div className='shock-header'>
                    <h1>Pathophysiology of Bleeding</h1>
                    <h2>SHOCK</h2>
                    <img src={explainer6} alt='explainer' className='explainer' />
                    <p><span className='hi'>Definition: </span>
                    Shock is a life-threatening condition that arises when the <span className='hi'>circulatory system fails to deliver adequate</span> blood flow, oxygen, 
                    and nutrients to tissues and organs. 
                    <br/>
                    This lack of perfusion leads to cellular injury, organ dysfunction, and, if untreated, can lead to death.
                    Shock is classified based on its underlying cause, and each type of shock involves a distinct pathophysiology and treatment 
                    approach.
                    </p>
                </div>
                <div className='shock-intro'>
                    <h2>Pathophysiology of Bleeding and Hypovolemic Shock.</h2>
                    <img src={explainer1} alt='explainer' className='explainer' />
                    <p><span className='hi'>Hemorrhage</span> is a major cause of hypovolemic shock, resulting from traumatic injury, gastrointestinal bleeding, ruptured aneurysm, 
                        or other causes. 
                        When significant blood volume is lost, the body cannot maintain adequate perfusion pressure to vital organs.
                    </p>
                    <h3>Phases of Hemorrhagic Shock</h3>
                    <p>There are Three phases of hemorrhagic shock:</p>
                    <ul>
                        <li>Compensatory phase</li>
                        <li>Decompensated phase</li>
                        <li>Irreversible phase</li>
                    </ul>
                    <div className='shock-intro-b'>
                    <img src={explainer2} alt='explainer' className='explainer' />
                        <h3>Compensated Phase</h3>
                        <p>
                            Early stages where the body compensates for blood loss by <span className='hi'>increasing heart rate and vasoconstriction</span>. The 
                            sympathetic nervous system is activated, leading to release of catecholamines <span className='hi'>(epinephrine and norepinephrine)</span>, 
                            which increases heart rate and cardiac output.
                            <br/>
                            Blood Pressure is maintained but at the cost of reduced perfusion to less vital organs (e.g., skin, gut).
                        </p>
                        <img src={explainer6} alt='explainer' className='explainer' />
                        <h3>Decompensated Phase</h3>
                        <p>
                            As blood loss continues, compensatory mechanisms begin to fail. Cardiac output and blood pressure drop. 
                            Cells become hypoxic and shift to anaerobic metabolism, leading to the production of lactic acid, causing <span className='hi'>metabolic acidosis.</span>
                            <br/>
                            Hypoxia and acidosis lead to further deterioration of cellular function and organ failure.
                        </p>
                        <img src={explainer7} alt='explainer' className='explainer' />
                        <h3>Irreversible Phase</h3>
                        <p>
                        When shock progresses without intervention, tissue <span className='hi'>ischemia</span> leads to cellular death and organ failure. 
                        Despite fluid resuscitation, the damage may become irreversible.
                        </p>
                    </div>
                    <div className='shock-intro-c'>
                        <h2>Signs and Symptoms of Shock</h2>
                        <h3>Early Signs (Compensated Shock)</h3>
                        <img src={explainer4} alt='explainer' className='explainer' />
                        <ul>
                            <li>Tachycardia (increased heart rate)</li>
                            <li>Pale, cool, clammy skin</li>
                            <li>Delayed capillary refill (more than 2 seconds)</li>
                            <li>Weak, thready pulse</li>
                            <li>Anxiety or restlessness (altered mental status)</li>
                        </ul>
                        <h3>Late Signs (Decompensated Shock)</h3>
                        <img src={explainer5} alt='explainer' className='explainer' />
                        <ul>
                            <li>Hypotension (low blood pressure)</li>
                            <li>Cyanosis (bluish discoloration of the skin)</li>
                            <li>Altered level of consciousness or unresponsiveness</li>
                            <li>Tachypnea (rapid breathing) or shallow breathing</li>
                            <li>Decreased urine output (oliguria)</li>
                        </ul>
                    </div>
                    <div className='shock-intro-d'>
                        <h2>Assessment of Shock</h2>
                        <img src={explainer3} alt='explainer' className='explainer' />
                        <p>
                        <span className='hi'>Primary Survey (ABCDE Approach):</span>
                        <br/>
                            A (Airway): Assess and ensure a clear airway. Manage any obstructions or need for intubation. <br/>
                            B (Breathing): Check for adequate ventilation and oxygenation. Administer oxygen if needed. <br/>
                            C (Circulation): Assess heart rate, blood pressure, and signs of external or internal bleeding. Measure capillary refill and skin temperature. <br/>
                            D (Disability): Assess the patient’s neurological status (using AVPU: Alert, responds to Voice, responds to Pain, Unresponsive). <br/>
                            E (Exposure): Fully expose the patient to identify signs of trauma or bleeding. <br/>
                        
                            <span className='hi'>Hemodynamic Monitoring:</span>
                        <br/>

                            Blood Pressure: Hypotension is a key sign of decompensated shock. <br/>
                            Pulse: Tachycardia may indicate the body’s attempt to compensate for blood loss. <br/>
                            Capillary Refill: Delayed refill may signal poor perfusion. <br/>
                            Urine Output: Oliguria indicates decreased kidney perfusion and worsening shock. <br/>
                        </p>

                        <h3>Management of Hypovolemic Shock</h3>
                        <img src={explainer4} alt='explainer' className='explainer' />
                        <p>
                            <span className='hi'>Early recognition and intervention are crucial in managing hypovolemic shock.</span> 
                            The goal is to restore circulating volume and maintain tissue perfusion. 
                            <br/>
                            Initial management includes:
                        </p>
                        <ul>
                            <li>Control bleeding: Apply direct pressure, elevate extremities, and use tourniquets if needed.</li>
                            <li>Establish IV access: Administer crystalloid fluids (e.g., normal saline or lactated Ringer’s solution).</li>
                            <li>Monitor vital signs: Assess heart rate, blood pressure, respiratory rate, and oxygen saturation.</li>
                            <li>Consider blood transfusion: In cases of severe hemorrhage, blood products may be needed.</li>
                            <li>Consult with a trauma team or surgeon for definitive management.</li>
                        </ul>
                    </div>
                    <ShockTypes />
                </div>
                <div>
                <button className='nav-btn' onClick={handleback}>
                    <span>Back-Bleeding</span>
                    <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                    </svg>
                </button>
            </div>
            </div>
        </>
    )
}

const ShockTypes = () => {
    const shocktypes = [
        {
            title: 'Hypovolemic Shock',
            definition: ' Hypovolemic shock is caused by a significant loss of blood volume, leading to inadequate circulation and oxygen delivery to tissues. This can be due to external blood loss (e.g., from trauma) or internal fluid loss (e.g., burns or dehydration).',
            pathophysiology: 'A decrease in blood volume leads to reduced venous return to the heart, which lowers stroke volume and cardiac output. As a result, perfusion to tissues drops.To compensate, the body activates the sympathetic nervous system, increasing heart rate and vasoconstriction to maintain blood pressure and perfusion to vital organs.Without intervention, this compensatory mechanism eventually fails, leading to decompensation, tissue hypoxia, and organ failure.',
            causes: [
                "Hemorrhage: Trauma, gastrointestinal bleeding, ruptured aneurysm.",
                "Fluid Loss: Severe burns, diarrhea, vomiting, excessive sweating.",
            ],
            management: [
                'Control the source of bleeding.',
                'Fluid resuscitation with IV fluids or blood products.',
                'Oxygen therapy and ongoing monitoring of vital signs.'
            ],
            explainer: explainer7,
            card: hypo
        },

        {
            title: 'Cardiogenic Shock',
            definition: 'Cardiogenic shock occurs when the heart fails to pump blood effectively, leading to a reduction in cardiac output despite adequate blood volume.',
            pathophysiology: "The heart's pumping ability is impaired, which leads to a decreased ejection fraction and reduced stroke volume. As a result, blood flow to vital organs is insufficient, causing tissue hypoxia and metabolic acidosis. The body attempts to compensate by increasing systemic vascular resistance, but this further increases the heart's workload, exacerbating heart failure.",
            causes: [
                'Myocardial infarction (heart attack).',
                'Arrhythmias: Ventricular tachycardia, ventricular fibrillation.',
                'Heart failure: End-stage congestive heart failure.',
                'Valvular disease: Severe aortic stenosis, mitral valve regurgitation.',
            ],
            management: [
                'Improve cardiac output through the use of medications (inotropes like dobutamine) or mechanical support (intra-aortic balloon pump).',
                'Revascularization for myocardial infarction (PCI or thrombolysis).',
                'Oxygen therapy and circulatory support (vasopressors if needed).',
            ],
            explainer: explainer5,
            card: cardio
        },

        {
            title: 'Obstructive Shock',
            definition: ' Obstructive shock results from a mechanical obstruction that prevents adequate blood flow through the cardiovascular system, despite normal blood volume and cardiac function.',
            pathophysiology: "A physical obstruction impairs the heart's ability to pump blood effectively, resulting in reduced venous return, decreased cardiac output, and tissue hypoperfusion. Common causes involve external compression of the heart or blood vessels, which restricts the heart's ability to fill or eject blood properly.",
            causes: [
                "Tension pneumothorax: Air in the pleural space compresses the lungs and heart, decreasing venous return and cardiac output.",
                "Cardiac tamponade: Accumulation of fluid in the pericardial sac compresses the heart, preventing adequate filling.",
                "Pulmonary embolism: A clot in the pulmonary artery blocks blood flow to the lungs, reducing oxygenation and venous return to the heart.",
                "Aortic dissection: A tear in the aortic wall can obstruct blood flow.",
            ],
            management: [
                "Relieve the obstruction through interventions like needle decompression for tension pneumothorax, pericardiocentesis for cardiac tamponade, or thrombolysis for pulmonary embolism.",
                "Oxygen therapy and hemodynamic support (vasopressors, fluids).",
            ],
            explainer: explainer3,
            card: obstruct
        },

        {
            title: 'Distributive Shock',
            definition: 'Distributive shock occurs when there is widespread vasodilation, leading to a relative hypovolemia even though blood volume is normal. This type of shock results in inadequate blood flow to organs and tissues.',
            pathophysiology: 'Vasodilation causes a significant drop in systemic vascular resistance, resulting in low blood pressure and maldistribution of blood flow. This leads to poor perfusion and tissue hypoxia, despite normal or increased cardiac output. The body’s compensatory mechanisms, such as increased heart rate, may not be sufficient to restore adequate blood pressure and perfusion.',
            causes: [
                "Septic Shock: Infections trigger an inflammatory response that releases cytokines and other mediators, causing vasodilation, increased capillary permeability, and reduced vascular resistance. This leads to hypotension and maldistribution of blood flow, impairing tissue perfusion.",
                "Anaphylactic Shock: Exposure to an allergen causes the release of histamines and other inflammatory mediators, leading to systemic vasodilation and increased capillary permeability. This results in rapid swelling, hypotension, and bronchoconstriction (airway narrowing).",
                "Neurogenic Shock: Injury to the sympathetic pathways results in loss of vasomotor tone and unopposed parasympathetic activity, causing hypotension and bradycardia (slow heart rate).",
            ],
            management: [
                "Septic Shock Goal: Early recognition and treatment to control infection, restore perfusion, and prevent organ failure.",
                "Key Steps:",
                "Early Antibiotics: Administer broad-spectrum antibiotics within the first hour of recognition, targeting the suspected source of infection.",
                "Fluid Resuscitation: Administer 30 mL/kg of IV crystalloid fluids within the first 3 hours, titrating based on blood pressure and urine output.",
                "Vasopressors: If hypotension persists after fluid resuscitation, initiate vasopressors (e.g., norepinephrine) to maintain a mean arterial pressure (MAP) ≥ 65 mmHg.",
                "Source Control: Identify and eliminate the source of infection (e.g., draining an abscess, removing infected devices).",
                "Monitor Lactate: Elevated lactate levels suggest tissue hypoperfusion. Repeat lactate measurements to assess the effectiveness of treatment.",
                "",
                "Anaphylactic Shock Goal: Rapidly reverse the allergic response, prevent airway compromise, and restore hemodynamic stability.",
                "Key Steps:",
                "Epinephrine (IM): Administer intramuscular epinephrine (0.3–0.5 mg) into the mid-outer thigh immediately. Repeat every 5–15 minutes as needed.",
                "Airway Support: Be prepared to manage airway swelling or bronchospasm. Administer oxygen and, if necessary, initiate endotracheal intubation to protect the airway.",
                "IV Fluids: Administer IV fluids (crystalloid) to support circulation if hypotension persists after epinephrine.",
                "Antihistamines: Administer H1 blockers (e.g., diphenhydramine) and H2 blockers (e.g., ranitidine) to reduce the allergic response.",
                "Steroids: Administer corticosteroids (e.g., methylprednisolone) to prevent delayed reactions, though these take several hours to have an effect.",
                "Bronchodilators: Administer inhaled beta-agonists (e.g., albuterol) to relieve bronchoconstriction if needed.",
                "",
                "Neurogenic Shock Goal: Restore vascular tone, stabilize the spine if spinal cord injury is involved, and support organ perfusion.",
                "Key Steps:",
                "Fluid Resuscitation: Administer IV fluids to restore intravascular volume, although the response to fluids may be minimal.",
                "Vasopressors: Initiate vasopressors (e.g., norepinephrine, phenylephrine) to counteract vasodilation and restore blood pressure.",
                "Bradycardia Management: If bradycardia is present, administer atropine or initiate pacing if necessary.",
                "Spinal Stabilization: Immobilize the spine in cases of traumatic spinal injury. Immediate surgical intervention may be required.",
                "Temperature Regulation: In neurogenic shock, there is a loss of thermoregulation, so maintain normothermia.",
            ],
            explainer: explainer4,
            card: septic,
        },
    ];

    return (
        <>
            <div className='shock-types-container'>
                <div shock-types-header>
                   <h2>Types of Shock</h2>
                </div>
                <div className='shock-types-body'>
                    <div className='shock-types'>
                        {shocktypes.map((shocktype, index) => (
                            <div key={index} className='shock-type'>
                                <img src={shocktype.card} alt='cardimage' className='card-image' />
                                <h3>{shocktype.title}</h3>
                                <img src={shocktype.explainer} alt='explainer' className='explainer' />
                                <p><span className='hi'>Definition:</span> {shocktype.definition}</p>
                                <p><span className='hi'>Pathophysiology:</span> {shocktype.pathophysiology}</p>
                                <h4>Causes:</h4>
                                <ul>
                                    {shocktype.causes.map((cause, index) => (
                                        <li key={index}>{cause}</li>
                                    ))}
                                </ul>
                                <h4>Management:</h4>
                                <ul>
                                    {shocktype.management.map((manage, index) => (
                                        <li key={index}>{manage}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shock;