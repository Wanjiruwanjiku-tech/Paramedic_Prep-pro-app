import React from "react";
import { Link } from "react-router-dom";
import './Diabetic.css';
import explainer1 from './images/explainer1.jpg';
import explainer2 from './images/explainer2.jpg';
import explainer3 from './images/explainer3.jpg';
import explainer4 from './images/explainer4.jpg';
import explainer5 from './images/explainer5.jpg';
import explainer6 from './images/explainer6.jpg';
import explainer7 from './images/explainer7.jpg';
import explainer8 from './images/explainer8.jpg';

const DiabeticEmergencies = () => {

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
            <div className="diabetic-container">
                <div className="diabetic-title">
                    <h1>DIABETIC EMERGENCIES</h1>
                    <img src={explainer1} alt='explainer' className="explainer"/>
                    <p>
                        Diabetes is a metabolic disorder characterized by high blood sugar levels over a prolonged period due to either insufficient 
                        insulin production or the body’s inability to use insulin effectively. For paramedic students and professionals, 
                        understanding the types of diabetes, their causes, and clinical management is crucial when handling diabetic emergencies. 
                    </p>
                    <p>Diabetic emergencies arise from severe imbalances in blood glucose levels, either too high or too low. These conditions require immediate intervention to prevent long-term damage or death.</p>
                </div>
                <div className='diabetic-body'>
                    <div className="diabetic-overview">
                    <img src={explainer2} alt='explainer' className="explainer"/>
                        <h2>Types of Diabetic Emergencies</h2>
                        <ul>
                            <li>Hypoglycemia</li>
                            <li>Hyperglycemia - Diabetic Ketoacidosis (DKA)</li>
                            <li>Hyperglycemia - Hyperosmolar Hyperglycemic State (HHS)</li>
                        </ul>
                    </div>
                    <div className="diabetic-topics">
                        <div className='diabetic-topic'>
                            <div className="each-diabetic-tipic">
                            <h2>Hypoglycemia</h2>
                            <img src={explainer3} alt='explainer' className="explainer"/>
                            <p>
                            Hypoglycemia is defined as a blood glucose level of less than <span className="hi">70 mg/dL</span>. 
                            It is considered a true medical emergency when the level is so low that it leads to altered mental status or seizures.
                            </p>
                            <img src={explainer4} alt='explainer' className="explainer"/>
                            <h3>Pathophysiology</h3>
                            <p>
                            Hypoglycemia occurs when there is too much insulin in the bloodstream relative to the 
                            glucose available, leading to cellular energy deprivation, especially in the brain.
                            </p>
                            <h3>Causes</h3>
                            <ul>
                                <li>Insulin overdose</li>
                                <li>Skipping meals</li>
                                <li>Excessive exercise</li>
                                <li>Alcohol consumption</li>
                                <li>Renal failure</li>
                            </ul>
                            <h3>Signs and Symptoms</h3>
                            <ul>
                                <li><span className="hi">Mild:</span> Shaking, sweating, tachycardia, anxiety, hunger.</li>
                                <li><span className="hi">Moderate:</span> Confusion, irritability, dizziness, headache, blurred vision.</li>
                                <li><span className="hi">Severe:</span> Seizures, loss of consciousness, coma.</li>
                            </ul>
                            <h3>Management</h3>
                            <img src={explainer5} alt='explainer' className="explainer"/>
                            <p>
                                <span className="hi">Conscious Patient:</span> Administer oral glucose (15-20g of fast-acting carbohydrates)
                                Recheck glucose after 15 minutes, repeat glucose administration if still low.<br />
                                <span className="hi">Unconscious Patient:</span>
                                IV dextrose 25-50mL of D50 (50% dextrose in water) or glucagon 1mg IM/IV if IV access is unavailable.
                                Recheck blood glucose frequently until stabilized.
                            </p>
                            <p>Management of hypoglycemia involves administering glcose to raise blood sugar levels. This can be done through oral glucose, IV dextrose, or glucagon injections.

                            </p>
                            </div>
                            <div className="each-diabetic-tipic">
                            <h2>Hyperglycemia - Diabetic Ketoacidosis (DKA)</h2>
                            <img src={explainer6} alt='explainer' className="explainer"/>
                            <p>
                                DKA is a serious complication of diabetes, most often seen in type 1 diabetes, 
                                characterized by <span className='hi'>hyperglycemia (more than 250 mg/dL), metabolic acidosis 
                                (pH less than 7.3), and ketonuria.</span>
                            </p>
                            <img src={explainer6} alt='explainer' className="explainer"/>
                            <h3>Pathophysiology</h3>
                            <p>
                                DKA results from insulin deficiency, which leads to the breakdown of fat stores into fatty acids. 
                                The liver converts these fatty acids into ketones, leading to acidosis.
                            </p>
                            <h3>Causes</h3>
                            <ul>
                                <li>Missed insulin doses or improper management of diabetes.</li>
                                <li>Infection or illness (increased metabolic demand).</li>
                                <li>Myocardial infarction or stroke.</li>
                            </ul>

                            <h3>Signs and Symptoms</h3>
                            <ul>
                                <li>Polyuria (increased urination), polydipsia (increased thirst), and polyphagia (increased hunger).</li>
                                <li>Fruity odor on breath (due to acetone).</li>
                                <li>Abdominal pain, nausea, vomiting.</li>
                                <li>Kussmaul respirations (deep, rapid breathing).</li>
                                <li>Confusion or altered mental status.</li>
                                <li>Dry skin, sunken eyes (signs of dehydration).</li>
                            </ul>

                            <h3>Management</h3>
                            <img src={explainer7} alt='explainer' className="explainer"/>
                            <p>
                                Fluid Replacement: <br/>
                                Administer normal saline (0.9% NaCl) to restore circulating volume. Switch to 0.45% NaCl if corrected sodium is elevated.
                                Add dextrose to IV fluids once blood glucose falls below 200-250 mg/dL to prevent hypoglycemia.<br/>
                                Insulin Therapy:<br/>
                                Continuous IV insulin infusion to reduce blood glucose and halt ketogenesis.
                                Monitor potassium levels and replace as needed (insulin drives potassium into cells, leading to hypokalemia).<br/>
                                Electrolyte Monitoring:<br/>
                                Monitor potassium, sodium, and bicarbonate levels.
                                Correct electrolyte imbalances, especially potassium, before administering insulin.
                            </p>
                            </div>
                            <div className="each-diabetic-tipic">
                            <h2>Hyperglycemia - Hyperosmolar Hyperglycemic State (HHS)</h2>
                            <img src={explainer1} alt='explainer' className="explainer"/>
                            <p>
                                HHS is a life-threatening condition characterized by severe hyperglycemia (blood glucose greater than 600 mg/dL) 
                                and severe dehydration without significant ketosis.
                            </p>
                            <img src={explainer2} alt='explainer' className="explainer"/>
                            <h3>Pathophysiology</h3>
                            <p>
                                HHS results from insulin deficiency and increased counter-regulatory hormones, leading to severe hyperglycemia.
                                The lack of ketosis differentiates HHS from DKA.
                            </p>
                            <h3>Causes</h3>
                            <ul>
                                <li>Missed insulin doses or improper management of diabetes.</li>
                                <li>Infection or illness (increased metabolic demand).</li>
                                <li>Renal failure or other medical conditions.</li>
                            </ul>
                            <h3>Signs and Symptoms</h3>
                            <ul>
                                <li>Severe dehydration, hypotension, tachycardia.</li>
                                <li>Altered mental status, confusion, lethargy.</li>
                                <li>Seizures, focal neurological deficits.</li>
                                <li>Hyperosmolarity (serum osmolality greater than 320 mOsm/kg).</li>
                            </ul>
                            <h3>Management</h3>
                            <img src={explainer5} alt='explainer' className="explainer"/>
                            <p>
                                Fluid Replacement:<br/>
                                Administer normal saline (0.9% NaCl) to restore circulating volume.
                                Monitor for signs of fluid overload and adjust fluid rate accordingly.<br/>
                                Insulin Therapy:<br/>
                                Continuous IV insulin infusion to reduce blood glucose levels.
                                Monitor potassium levels and replace as needed (insulin drives potassium into cells, leading to hypokalemia).<br/>
                                Electrolyte Monitoring:<br/>
                                Monitor potassium, sodium, and bicarbonate levels.
                                Correct electrolyte imbalances, especially potassium, before administering insulin.
                            </p>
                            </div>
                        </div>
                        <div className='diabetic-types'>
                            <h2>Types of Diabetes</h2>
                            <img src={explainer4} alt='explainer' className="explainer"/>
                            <h3>Type 1 Diabetes</h3>
                            <p>
                                Type 1 diabetes is an autoimmune disorder in which the body's immune system attacks and destroys the insulin-producing beta cells in the pancreas. 
                                As a result, the body produces little or no insulin, which is essential for glucose metabolism.
                            </p>
                            <h3>Pathophysiology</h3>
                            <p>
                            Insulin is responsible for allowing glucose to enter cells to be used as energy. 
                            Without insulin, glucose builds up in the bloodstream, leading to hyperglycemia (high blood sugar levels).
                            Patients with Type 1 diabetes are insulin-dependent for life
                            </p>
                            <h3>Common Onset</h3>
                            <p>
                                Most often develops in childhood or adolescence but can occur at any age. 
                                It has a rapid onset with symptoms developing over days or weeks.
                            </p>
                            <h3>Symptoms</h3>
                            <ul>
                                <li>Polyuria (frequent urination)</li>
                                <li>Polydipsia (excessive thirst)</li>
                                <li>Polyphagia (increased hunger)</li>
                                <li>Weight loss despite eating more</li>
                                <li>Fatigue</li>
                                <li>Blurred vision</li>
                            </ul>
                            <h3>Management</h3>
                            <p>
                                Patients with Type 1 diabetes require lifelong insulin therapy to manage their blood sugar levels. 
                                They must monitor their blood glucose levels regularly and adjust their insulin doses accordingly.
                            </p>
                            <h3>Type 2 Diabetes</h3>
                            <img src={explainer1} alt='explainer' className="explainer"/>
                            <p>
                                Type 2 diabetes is a metabolic disorder characterized by insulin resistance and relative insulin deficiency. 
                                The body is unable to use insulin effectively, leading to high blood sugar levels.
                            </p>
                            <h3>Pathophysiology</h3>
                            <p>
                                Insulin resistance occurs when the body's cells do not respond to insulin properly, leading to high blood sugar levels. 
                                Over time, the pancreas may produce less insulin, further exacerbating the condition.
                            </p>
                            <h3>Common Onset</h3>
                            <p>
                                Most often develops in adults, but it is becoming more common in children and adolescents due to rising obesity rates.
                            </p>
                            <h3>Symptoms</h3>
                            <ul>
                                <li>Similar to Type 1 diabetes but may develop more slowly.</li>
                                <li>Often asymptomatic or mild symptoms initially.</li>
                                <li>Increased risk of cardiovascular disease, neuropathy, and other complications.</li>
                            </ul>
                            <h3>Management</h3>
                            <p>
                                Type 2 diabetes can often be managed through lifestyle changes, including diet, exercise, and weight loss. 
                                Some patients may require oral medications or insulin therapy to control their blood sugar levels.
                            </p>
                            <img src={explainer8} alt='explainer' className="explainer"/>
                            <h3>Gestational Diabetes</h3>
                            <p>
                                Gestational diabetes occurs during pregnancy and is characterized by high blood sugar levels that develop or are first recognized during pregnancy.
                            </p>
                            <h3>Pathophysiology</h3>
                            <p>
                                Hormonal changes during pregnancy can lead to insulin resistance, causing blood sugar levels to rise. 
                                In some cases, the pancreas may not be able to produce enough insulin to compensate.
                            </p>
                            <h3>Common Onset</h3>
                            <p>
                                Develops during pregnancy and usually resolves after childbirth.
                            </p>
                            <h3>Symptoms</h3>
                            <ul>
                                <li>Often asymptomatic or mild symptoms.</li>
                                <li>Increased risk of complications for both mother and baby.</li>
                            </ul>
                            <h3>Management</h3>
                            <p>
                                Gestational diabetes is managed through diet, exercise, and monitoring blood sugar levels. 
                                Some patients may require insulin therapy to control their blood sugar levels during pregnancy.
                            </p>
                        </div>

                        <div className="diabetic-summary">
                            <h2>Key Considerations for Paramedics</h2>
                            <img src={explainer3} alt='explainer' className="explainer"/>
                            <ol>
                                <li>Always assess blood glucose in any patient with altered mental status.</li>
                                <li>Rapid recognition and differentiation between hypoglycemia, DKA, and HHS are critical for appropriate treatment.</li>
                                <li>Management in the prehospital setting focuses on stabilizing the patient, preventing complications, and ensuring safe transport to a medical facility.</li>
                                <li>Be prepared to manage airway and breathing issues, especially in DKA and HHS, where altered mental status may lead to respiratory compromise.</li>
                                <li>Continuous monitoring of vital signs and blood glucose is essential, especially when insulin or dextrose is administered.</li>
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

export default DiabeticEmergencies;