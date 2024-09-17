import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Advanced.css';
import ETT from './images/ETT.jpg';
import CRIC from './images/cricothyrotomy.png';
import RSI from './images/RSI.jpg';
import SGA from './images/SGA.jpg';
import TRACH from './images/Tracheostomy.jpg';
import VIDLARG from './images/videolaryngoscope.jpg';

const AirwayComparisonTable = () => {
    return (
        <>
            <table style={{ border: '1px solid black', width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Feature</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Cricothyrotomy</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Tracheostomy</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Location</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Performed through the cricothyroid membrane, between the thyroid and cricoid cartilage.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Performed on the trachea, usually between the second and fourth tracheal rings.
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Purpose</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Emergency procedure to establish a temporary airway when other methods fail.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Can be elective or emergency procedure for long-term airway management.
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Indications</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Severe upper airway obstruction, facial trauma, or when rapid airway access is needed.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Chronic respiratory failure, prolonged ventilation, or bypassing upper airway obstruction.
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Duration</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Typically temporary, used until a more definitive airway is established.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Can be temporary or permanent, depending on the patient’s condition.
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Procedure Complexity</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Quicker and easier to perform in an emergency.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    More complex, requires surgical precision, usually performed in a controlled environment.
                    </td>
                </tr>
                </tbody>
            </table>
      </>
    );
  };

const Advanced = () => {
    // handle state and image visibility
    const [VisibleImages, setVisibleImages] = useState({
        ETT: false,
        SGA: false,
        Tracheostomy: false,
        Cricothyrotomy: false,
        RSI: false,
        VideoLaryngoscopy: false
    });

    const toggleVisibility = (imageKey) => {
        setVisibleImages((prevVisibleImages) => ({
            ...prevVisibleImages,
            [imageKey]: !prevVisibleImages[imageKey]
        }));
    };

    return (
        <>
            <div className='homepage-container'>
                <nav className='navbar'>
                    <div>
                        <Link to={'/'} className='logo'>Paramedic Prep-Pro</Link>
                    </div>
                    <ul className='nav-links'>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/airway-management'}>Back</Link></li>
                        <li><Link href='/'>Resources</Link></li>
                        <li><Link href='/contact'>Contact us</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="advanced">
                <div className='advanced-header'>
                <h1>Advanced Airway Management</h1>
                </div>
                <div className='advanced-body'>
                    <p>Advanced airway management techniques are critical in situations where basic airway interventions are insufficient to maintain a patent airway.</p>
                    <p>These techniques require more specialized skills and are often used in more severe cases where the patient's airway is compromised, or when providing long-term ventilation support.</p>
                    <p>Below are the key advanced airway management techniques and tools:</p>
                </div>
                <div className='advanced-list'>
                    <ul>
                        <li>Endotracheal Intubation</li>
                        <li>Supraglottic Airway Devices</li>
                        <li>Tracheostomy</li>
                        <li>Emergency Cricothyrotomy</li>
                        <li>Rapid Sequence Intubation</li>
                        <li>Video Laryngoscopy</li>
                    </ul>
                </div>
                <div className='each-advanced-list'>
                    <h2>Endotracheal Intubation</h2>
                    <p><strong>Purpose:</strong> Endotracheal intubation is used to secure the airway by inserting a tube into the trachea, ensuring that the airway remains open and allowing for continuous mechanical ventilation.</p>
                    <p><strong>Indications:</strong> Endotracheal intubation is indicated in patients who are unable to maintain their airway, have severe respiratory distress, or require long-term ventilation support.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: endotracheal tube, laryngoscope, stylet, lubricant, bag-valve mask, and suction.</li>
                        <li>Position the patient: Place the patient in the sniffing position with the head extended and the neck flexed.</li>
                        <li>Preoxygenate the patient: Administer high-flow oxygen to the patient to ensure adequate oxygenation before intubation.</li>
                        <li>Insert the laryngoscope: Insert the laryngoscope into the mouth and visualize the vocal cords.</li>
                        <li>Insert the endotracheal tube: Advance the endotracheal tube through the vocal cords into the trachea.</li>
                        <li>Confirm placement: Confirm the placement of the endotracheal tube by auscultating breath sounds and observing chest rise.</li>
                        <li>Secure the tube: Secure the endotracheal tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('ETT')} className='advanced-btn'>
                        {VisibleImages.ETT ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.ETT && (
                        <img src={ETT} alt='Endotracheal Intubation' className='advanced-image' />
                    )}
                    <br/>

                    <h2>Supraglottic Airway Devices (SGAs)</h2>
                    <p><strong>Purpose:</strong> Supraglottic airway devices (like the Laryngeal Mask Airway (LMA) or King LT) are used to maintain a patent airway by inserting a tube into the pharynx, above the glottis, allowing for ventilation and oxygenation.</p>
                    <p><strong>Indications:</strong> SGAs are indicated in patients who are unable to maintain their airway, have mild to moderate respiratory distress, or require short-term ventilation support.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: SGA device, lubricant, bag-valve mask, and suction.</li>
                        <li>Insert the SGA: Insert the SGA device into the mouth and advance it into the pharynx above the glottis.</li>
                        <li>Confirm placement: Confirm the placement of the SGA device by auscultating breath sounds and observing chest rise.</li>
                        <li>Secure the device: Secure the SGA device in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('SGA')} className='advanced-btn'>
                        {VisibleImages.SGA ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.SGA && (
                        <img src={SGA} alt='Supraglottic Airway Devices' className='advanced-image' />
                    )}
                    <br/>

                    <h2>Tracheostomy</h2>
                    <p><strong>Purpose:</strong> A tracheostomy is a surgical procedure that creates an opening in the trachea, allowing for direct access to the airway for ventilation and oxygenation.</p>
                    <p><strong>Indications:</strong> Tracheostomy is indicated in patients who require long-term ventilation support, have upper airway obstruction, or are unable to maintain their airway.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: tracheostomy tube, tracheostomy kit, suction, and bag-valve mask.</li>
                        <li>Position the patient: Place the patient in a supine position with the neck extended.</li>
                        <li>Perform the tracheostomy: Make an incision in the neck and create an opening in the trachea to insert the tracheostomy tube.</li>
                        <li>Secure the tube: Secure the tracheostomy tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('Tracheostomy')} className='advanced-btn'>
                        {VisibleImages.Tracheostomy ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.Tracheostomy && (
                        <img src={TRACH} alt='Tracheostomy' className='advanced-image' />
                    )}
                    <br/>

                    <h2>Emergency Cricothyrotomy</h2>
                    <p><strong>Purpose:</strong> Emergency cricothyrotomy is a surgical procedure that creates an opening in the cricothyroid membrane, allowing for direct access to the trachea for ventilation and oxygenation.</p>
                    <p><strong>Indications:</strong> Emergency cricothyrotomy is indicated in patients who have a complete upper airway obstruction and are unable to maintain their airway.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: cricothyrotomy kit, scalpel, tracheostomy tube, and bag-valve mask.</li>
                        <li>Position the patient: Place the patient in a supine position with the neck extended.</li>
                        <li>Perform the cricothyrotomy: Make an incision in the cricothyroid membrane and insert the tracheostomy tube into the trachea.</li>
                        <li>Secure the tube: Secure the tracheostomy tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('Cricothyrotomy')} className='advanced-btn'>
                        {VisibleImages.Cricothyrotomy ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.Cricothyrotomy && (
                        <img src={CRIC} alt='Emergency Cricothyrotomy' className='advanced-image' />
                    )}
                    <br/>

                    <h4>Cricothyrotomy and Tracheostomy Differences.</h4>
                    <AirwayComparisonTable />

                    <h2>Rapid Sequence Intubation (RSI)</h2>
                    <p><strong>Purpose:</strong> Rapid sequence intubation is a technique used to secure the airway quickly and safely by administering sedatives and paralytics to facilitate endotracheal intubation.</p>
                    <p><strong>Indications:</strong> RSI is indicated in patients who require immediate airway management and are at risk of aspiration or respiratory failure.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: sedatives, paralytics, endotracheal tube, laryngoscope, and bag-valve mask.</li>
                        <li>Preoxygenate the patient: Administer high-flow oxygen to the patient to ensure adequate oxygenation before intubation.</li>
                        <li>Administer sedatives and paralytics: Administer sedatives and paralytics to facilitate endotracheal intubation.</li>
                        <li>Insert the laryngoscope: Insert the laryngoscope into the mouth and visualize the vocal cords.</li>
                        <li>Insert the endotracheal tube: Advance the endotracheal tube through the vocal cords into the trachea.</li>
                        <li>Confirm placement: Confirm the placement of the endotracheal tube by auscultating breath sounds and observing chest rise.</li>
                        <li>Secure the tube: Secure the endotracheal tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('RSI')} className='advanced-btn'>
                        {VisibleImages.RSI ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.RSI && (
                        <img src={RSI} alt='Rapid Sequence Intubation' className='basics-image' />
                    )}
                    <br/>

                    <h2>Video Laryngoscopy</h2>
                    <p><strong>Purpose:</strong> Video laryngoscopy is a technique used to visualize the airway and facilitate endotracheal intubation using a video laryngoscope.</p>
                    <p><strong>Indications:</strong> Video laryngoscopy is indicated in patients who have difficult airways or require visualization of the airway for intubation.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: video laryngoscope, endotracheal tube, and bag-valve mask.</li>
                        <li>Insert the video laryngoscope: Insert the video laryngoscope into the mouth and visualize the airway on the screen.</li>
                        <li>Insert the endotracheal tube: Advance the endotracheal tube through the vocal cords into the trachea.</li>
                        <li>Confirm placement: Confirm the placement of the endotracheal tube by auscultating breath sounds and observing chest rise.</li>
                        <li>Secure the tube: Secure the endotracheal tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('VideoLaryngoscopy')} className='advanced-btn'>
                        {VisibleImages.VideoLaryngoscopy ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.VideoLaryngoscopy && (
                        <img src={VIDLARG} alt='Video Laryngoscopy' className='basics-image' />
                    )}

                </div>

                <div className='key-points'>
                    <h2>Key Points to Remember</h2>
                    <ul>
                        <li>Advanced airway management techniques are used when basic airway interventions are insufficient.</li>
                        <li>Endotracheal intubation is used to secure the airway and provide mechanical ventilation.</li>
                        <li>Supraglottic airway devices are used to maintain a patent airway and provide short-term ventilation support.</li>
                        <li>Tracheostomy and cricothyrotomy are surgical procedures that create direct access to the airway for ventilation.</li>
                        <li>Rapid sequence intubation is used to secure the airway quickly and safely in emergency situations.</li>
                        <li>Video laryngoscopy is used to visualize the airway and facilitate endotracheal intubation.</li>
                        <li>Effective communication and teamwork are essential, especially during complex procedures .</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Advanced;