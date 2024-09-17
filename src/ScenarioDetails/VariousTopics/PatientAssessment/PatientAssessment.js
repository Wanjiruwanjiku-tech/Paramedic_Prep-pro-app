import React from 'react';
import { Link } from 'react-router-dom';
import './PatientAssessment.css';
import AssessmentContainer from './AssessmentContainer';
import image from '../../../Assets/images/patientasessment.jpg';
import scene from './images/scenesizeup.jpg';
import prime from './images/prime.jpg';
import number from './images/numberofpts.jpg'
import intro from './images/intro.jpg';
import medic from './images/medic.jpg';
import hero from './images/hero1.jpg';

const PatientAssessment = () => {
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
            <div className='patient-assessment-container'>
                <div className='assessment-title'>
                    <h1> <img src={image} alt='' />Patient Assessment</h1>
                </div>
            </div>
            <AssessmentContainer />
            <div className='assessment-content'>
                
                <h2>Introduction<img src={intro} alt='intro'/></h2>
                <p>
                    Patient Assessment is a <span className='high'>critical</span>, systematic 
                    process that is used to identify and treat life-threatening conditions in the pre-hospital setting
                </p>
                <div className='assess-container'>
                    <h2>Process</h2>
                    <div className='assess-grid'>
                        <div className='assess-card'>
                        <img src={scene} alt='scene'/>   
                        <h3>1. Scene Size-Up</h3>
                        
                        <p>
                            Before you approach the patient, you must assess the scene for safety. 
                            This includes looking for hazards such as traffic, fire, or downed power lines. 
                            You should also determine the mechanism of injury or nature of illness. 
                            This information will help you determine how to approach the patient.
                        </p>
                        <div className="dropdown">
                            <button className="dropdown-button">Scene size-up steps</button>
                            <div className="dropdown-content">
                                <ol>
                                    <li>Ensure Scene safety.</li>
                                    <li>Identify the Mechanism of Injury or the Nature of illness.</li>
                                    <li>Determine the Number of patients.</li>
                                    <li>Consider the need for additional resources.</li>
                                    <li>Take BSI Precautions.</li>
                                </ol>
                            </div>
                        </div>
                        </div>

                        <div className='assess-card'>
                        <img src={prime} alt='prime'/>
                        <h3>2. Primary Assessment</h3>
                        <p>
                            The primary assessment is a quick assessment of the patient's <span className='high'>Airway</span>, <span className='high'>Breathing</span>, and <span className='high'>Circulation</span>. 
                            This will help you determine if the patient is in immediate danger and needs immediate intervention.
                        </p>
                        <div className="dropdown">
                            <button className="dropdown-button">Primary Assessment steps</button>
                            <div className="dropdown-content">
                                <ol>
                                    <li><strong>General Impression:</strong> Quickly Assess the patient's overall condition.</li>
                                    <li><strong>Level of Consciousness (LOC):</strong> Check the responsiveness using AVPU.
                                        <ul>
                                            <li><strong>A</strong>lert</li>
                                            <li><strong>V</strong>erbal</li>
                                            <li><strong>P</strong>ain</li>
                                            <li><strong>U</strong>nresponsive</li>
                                        </ul>
                                    </li>
                                    <li><strong>Airway:</strong> Ensure the airway is clear if not take necessary steps to remove the obstruction.</li>
                                    <li><strong>Breathing:</strong> Assess the breathing rate, rhythm and quality. Provide ventilation if indicated.
                                        <ul>
                                            <li>Look</li>
                                            <li>Listen</li>
                                            <li>Feel</li>
                                        </ul>
                                    </li>
                                    <li><strong>Circulation:</strong> Check for Pulse, skin condition ie <span className='highbox'> color, temperature, moisture</span> and control bleeding.</li>
                                    <li><strong>Disability and Exposure:</strong> Perform a rapid body scan, head to toe looking for other injuries.</li>
                                    <li><strong>Transprot Decision:</strong> From your Assessment Determine whether to <span className='highbox'>load and go</span> or <span className='highbox'>stay and play</span>.</li>

                                </ol>
                            </div>
                        </div>
                        </div>

                        <div className='assess-card'>
                        <img src={number} alt='assess'/>
                        <h3>3. Secondary Assessment</h3>
                        <p>
                            The secondary assessment is a more detailed assessment of the patient's injuries or illness. 
                            This will help you determine the patient's condition and develop a treatment plan.
                        </p>
                        <div className="dropdown">
                            <button className="dropdown-button">Secondary Assessment steps</button>
                            <div className="dropdown-content">
                                <ol>
                                    <li><strong>Focussed History and Physical Exam:</strong> 
                                    Gather more details as well as the Patient's history and symptoms.
                                    perform a more detailed physical Exam</li>
                                    <li><strong>Vital Signs:</strong> 
                                    Take the patient's vitals.
                                        <ul>
                                            <li><strong>Blood pressure</strong></li>
                                            <li><strong>Heart rate</strong></li>
                                            <li><strong>Respiratory Rate</strong></li>
                                            <li><strong>Oxygen Saturation</strong></li>
                                        </ul>
                                    </li>
                                    <li><strong>SAMPLE History:</strong> 
                                    Gather more information.</li>
                                    <li><strong>Breathing:</strong> Assess the breathing rate, rhythm and quality. Provide ventilation if indicated.
                                        <ul>
                                            <li>Symptoms</li>
                                            <li>Allergies</li>
                                            <li>Medications</li>
                                            <li>Past Medical History</li>
                                            <li>Last Oral Intake</li>
                                            <li>Events Leading to the current situation</li>
                                        </ul>
                                    </li>
                                    <li><strong>Pain Assessment:</strong> 
                                    Use OPQRST to assess for pain.
                                        <ul>
                                            <li>Onset</li>
                                            <li>Provocation</li>
                                            <li>Quality</li>
                                            <li>Region/Radiation</li>
                                            <li>Severity</li>
                                            <li>Time</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        </div>

                        <div className='assess-card'>
                        <img src={medic} alt='medic'/>
                        <h3>4. Reassessment/Ongoing Assessment</h3>
                        <p>
                        The reassessment is a continuous process that is done throughout the patient's care. 
                        This will help you determine if the patient's condition is improving, worsening, or staying the same.
                        </p>
                        <div className="dropdown">
                        <button className="dropdown-button">Ongoing Assessment steps</button>
                        <div className="dropdown-content">
                            <ol>
                                <li>Monitor vitals.</li>
                                <li>May involve providing medication or initiating IV lines.</li>
                                <li><h4>Reasess every 5mins for critical 
                                    patients and every 15mins for non-critical patients</h4>.</li>
                            </ol>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tagline-0'>
                <p>"This systematic approach helps paramedics prioritize life-threatening conditions and ensures 
                that critical interventions are not missed during the chaotic moments."</p>
                <blockquote className='large'><small>Natalie .W. Wanjiku - Mentor <img src={hero} alt='hero' className='hero' /></small></blockquote>
            </div>
        </>
    );
}

export default PatientAssessment;