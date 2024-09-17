import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AirwaySpecialPopulation.css'; // Import the CSS file
import facial from './images/facial.jpg';
import geriatric from './images/geriatric.webp';
import neuro from './images/neuro.jpg';
import obese from './images/obese.png';
import pediatric from './images/pediatric.jpg';
import pregnant from './images/pregnant.jpg';

const AirwaySpecialPopulation = () => {
  // State to handle image visibility for each section
  const [imageVisibility, setImageVisibility] = useState({
    pediatric: false,
    obese: false,
    pregnant: false,
    geriatric: false,
    facialTrauma: false,
    neuromuscular: false,
  });

  const toggleImageVisibility = (section) => {
    setImageVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
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
    <div className="airway-special-population">
      <h1>Airway Management in Special Populations</h1>

      <section>
        <h2>Pediatric Patients</h2>
        <p>
          <strong>Anatomical Considerations:</strong> Children have proportionally larger heads and tongues, smaller airways, and a higher larynx, making intubation more challenging.
          <br />
          <strong>Pysiological Differences:</strong> Infants and young children have a higher oxygen consumption rate and lower functional residual capacity, leading to quicker desaturation.
          <br />
          <strong>Management Tips:</strong> Use appropriately sized equipment, including smaller endotracheal tubes (ETT) without a cuff in infants. Preoxygenation and rapid sequence intubation (RSI) are essential, and careful monitoring of oxygenation and ventilation is critical.
        </p>
        <button onClick={() => toggleImageVisibility('pediatric')}>
          {imageVisibility.pediatric ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.pediatric && <img src={pediatric} alt="Pediatric Airway" />}
      </section>

      <section>
        <h2>Obese Patients</h2>
        <p>
        <strong>Anatomical Considerations:</strong> Obesity can lead to difficult airway management due to excessive soft tissue in the neck and airway, reduced neck mobility, and a higher risk of obstructive sleep apnea (OSA).
          <br />
          <strong>Pysiological Differences:</strong> These patients often have decreased functional residual capacity and may desaturate more rapidly.
          <br />
          <strong>Management Tips:</strong> Position the patient in a "ramped" position to align the ear with the sternal notch for optimal intubation. Use larger airway adjuncts and consider video laryngoscopy to improve visualization.
        </p>
        <button onClick={() => toggleImageVisibility('obese')}>
          {imageVisibility.obese ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.obese && <img src={obese} alt="Obese Patient Airway" />}
      </section>

      <section>
        <h2>Pregnant Patients</h2>
        <p>
        <strong>Anatomical Considerations:</strong> Pregnancy causes airway edema and increased vascularity, leading to friability of the tissues and a higher risk of bleeding. The stomach is displaced upward, increasing the risk of aspiration.
          <br />
          <strong>Pysiological Differences:</strong> Pregnant women have increased oxygen consumption and a reduced functional residual capacity, making preoxygenation and rapid sequence intubation crucial.
          <br />
          <strong>Management Tips:</strong> Use smaller ETT sizes due to airway edema. Ensure left lateral tilt to prevent aortocaval compression by the gravid uterus. Prepare for rapid desaturation and have suction readily available due to the increased risk of aspiration.
        </p>
        <button onClick={() => toggleImageVisibility('pregnant')}>
          {imageVisibility.pregnant ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.pregnant && <img src={pregnant} alt="Pregnant Patient Airway" />}
      </section>

      <section>
        <h2>Geriatric Patients</h2>
        <p>
        <strong>Anatomical Considerations:</strong> Aging causes loss of tissue elasticity and muscle tone, which can make airway management more difficult. Additionally, cervical arthritis can limit neck mobility.
          <br />
          <strong>Pysiological Differences:</strong> Reduced lung elasticity and comorbidities like COPD or heart disease complicate airway management.
          <br />
          <strong>Management Tips:</strong> Gentle handling of the airway is crucial to prevent trauma. Consider using advanced airway management tools like video laryngoscopy. Be cautious with drug dosages for sedation and RSI, as older adults are more susceptible to adverse effects.
        </p>
        <button onClick={() => toggleImageVisibility('geriatric')}>
          {imageVisibility.geriatric ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.geriatric && <img src={geriatric} alt="Geriatric Patient Airway" />}
      </section>

      <section>
        <h2>Patients with Facial Trauma</h2>
        <p>
        <strong>Anatomical Considerations:</strong>: Facial trauma can lead to distorted anatomy, bleeding, and swelling, complicating airway visualization and securing the airway.
          <br />
          <strong>Management Tips:</strong> Consider alternative methods such as a surgical airway (cricothyrotomy) if intubation is not feasible. Avoid nasal intubation in cases of suspected skull fractures. Keep the patient immobilized if there is a risk of cervical spine injury.
        </p>
        <button onClick={() => toggleImageVisibility('facialTrauma')}>
          {imageVisibility.facialTrauma ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.facialTrauma && <img src={facial} alt="Facial Trauma Airway" />}
      </section>

      <section>
        <h2>Patients with Neuromuscular Disorders</h2>
        <p>
        <strong>Anatomical Considerations:</strong> Neuromuscular disorders like ALS or muscular dystrophy can lead to weakened respiratory muscles, making airway protection and ventilation challenging.
          <br />
          <strong>Management Tips:</strong> These patients may require non-invasive ventilation support or early intubation to protect the airway. Use caution with muscle relaxants, as they may exacerbate muscle weakness.
        </p>
        <button onClick={() => toggleImageVisibility('neuromuscular')}>
          {imageVisibility.neuromuscular ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.neuromuscular && <img src={neuro} alt="Neuromuscular Disorder Airway" />}
      </section>
    </div>
    </>
  );
};

export default AirwaySpecialPopulation;
