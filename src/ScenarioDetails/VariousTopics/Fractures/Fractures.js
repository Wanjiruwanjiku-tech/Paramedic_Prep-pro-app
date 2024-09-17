import React from 'react';
import { Link } from 'react-router-dom';
import './Fractures.css';
import explainer1 from './images/explainer1.jpg';
import explainer2 from './images/explainer2.jpg';
import explainer3 from './images/explainer3.jpg';
import explainer5 from './images/explainer5.jpg';
import explainer6 from './images/explainer6.jpg';
import explainer7 from './images/explainer7.jpg';
import fractures from './images/fractures.jpg';
import logo from './images/logo.jpg';
import logo2 from './images/logo2.jpg';
import traction from './images/traction.jpg';
import vacuum from './images/vacuum.jpg';
import rigid from './images/rigid.jpg';
import sam from './images/sam.jpg';
import ked from './images/ked.webp';
import binder from './images/binder.jpg';
import air from './images/air.jpg';
import collar from './images/collar.jpg';


const FractureContent = () => {
    const fractureList = [
        {
            title: "Colles' Fracture",
            description: "A Colles' fracture is a break in the distal radius bone, typically occurring from a fall onto an outstretched hand. It's common in older adults, especially those with osteoporosis.",
            symptoms: [
                "Pain and tenderness at the wrist.",
                "Swelling and bruising.",
                "A visible deformity, often described as a 'dinner fork' shape.",
                "Difficulty or inability to move the wrist or hand.",
            ],
            management: [
                "Immobilization: The wrist is usually immobilized in a cast or splint.",
                "Reduction: If the bone fragments are displaced, a closed reduction may be necessary to realign them.",
                "Surgery: In severe cases, surgical intervention with pins, plates, or screws may be required.",
                "Rehabilitation: Physical therapy is crucial for restoring range of motion and strength.",
            ],
            explainer: explainer7,
            cardimage: fractures,
        },

        {
            title: 'Clavicle Fracture',
            description: ' A clavicle fracture, or broken collarbone, is a common injury often caused by falls, sports injuries, or car accidents. It occurs when the clavicle bone between the shoulder and sternum breaks.',
            symptoms: [
                "Sharp pain at the site of the break.",
                "Swelling and tenderness over the collarbone.",
                "A visible bump or deformity.",
                "Difficulty moving the shoulder or arm.",
                "A grinding sensation when trying to lift the arm.",
            ],
            management: [
                "Immobilization: Use of a sling or figure-eight bandage to keep the arm in place.",
                "Pain Management: Over-the-counter pain relievers like ibuprofen or acetaminophen.",
                "Surgery: Indicated for displaced fractures or when the bone ends do not align, requiring plates, screws, or pins.",
                "Rehabilitation: Gentle range-of-motion exercises followed by strengthening exercises.",
            ],
            explainer: explainer1,
            cardimage: fractures,
        },

        {
            title: 'Hip Fracture',
            description: 'A hip fracture is a serious injury, especially in older adults, often resulting from a fall. It typically involves a break in the upper part of the femur (thigh bone).',
            symptoms: [
                "Severe pain in the hip or groin.",
                "Inability to put weight on the affected leg.",
                "Stiffness, bruising, and swelling in the hip area.",
                "The affected leg may appear shorter and turned outward.",
            ],
            management: [
                "Surgery: Most hip fractures require surgical repair or replacement, including options like pinning, hip replacement, or partial hip replacement.",
                "Rehabilitation: Physical therapy begins soon after surgery to restore movement and strength.",
                "Prevention: Address underlying issues such as osteoporosis, and implement fall prevention strategies.",
            ],
            explainer: explainer6,
            cardimage: fractures,
        },

        {
            title: 'Tibia and Fibula Fracture',
            description: ' Fractures of the tibia (shinbone) and fibula (the smaller bone next to it) often occur together, typically due to high-energy trauma such as sports injuries, falls, or motor vehicle accidents.',
            symptoms: [
                "Severe pain in the lower leg.",
                "Inability to bear weight on the affected leg.",
                "Swelling, bruising, and sometimes visible bone fragments.",
                "Deformity or abnormal angulation of the leg.",
            ],
            management: [
                "Immobilization: A long leg cast or splint to keep the bones in place.",
                "Surgery: In many cases, intramedullary nailing, plates, or external fixation may be required to stabilize the bones.",
                "Rehabilitation: Gradual weight-bearing and physical therapy to restore function and strength.",
            ],
            explainer: explainer2,
            cardimage: fractures,
        },

        {
            title: 'Skull Fracture',
            description: 'A skull fracture is a break in one or more of the bones in the skull, usually resulting from a significant impact to the head. Skull fractures can be classified into different types, including linear, depressed, diastatic, and basilar fractures. They can range from mild to severe and may be associated with brain injury.',
            symptoms: [
                "1. General Symptoms",
                "   Headache, often severe.",
                "   Swelling, tenderness, or bruising around the injury site.",
                "   Bleeding from the wound, nose, ears, or around the eyes.",
                "   Visible deformity in cases of depressed fractures.",
                "",
                "2. Neurological Symptoms",
                "   Loss of consciousness.",
                "   Confusion, drowsiness, or irritability.",
                "   Nausea or vomiting.",
                "   Seizures.",
                "   Changes in pupil size or vision problems.",
                "   Clear fluid (cerebrospinal fluid) leaking from the nose or ears, indicating a basilar skull fracture.",
            ],
            management: [
                "1. Initial Care:",
                "   Stabilization: Immobilize the cervical spine if a head or neck injury is suspected.",
                "   Monitoring: Continuous monitoring of neurological status, including consciousness level and vital signs.",
                "   Control Bleeding: Apply gentle pressure with a clean cloth to any external bleeding, avoiding excessive pressure.",
                "",
                "2. Medical Management:",
                "   Imaging: A CT scan or MRI is usually performed to assess the extent of the fracture and any associated brain injury.",
                "   Observation: In cases of mild fractures without significant brain injury, the patient may be observed in the hospital for any signs of worsening condition.",
                "",
                "3. Surgical Intervention:",
                "   Depressed Fractures: May require surgery to elevate and repair the bone fragments, reducing pressure on the brain.",
                "   Basilar Skull Fractures: Surgery may be necessary if there is persistent cerebrospinal fluid leakage or if other complications arise.",
                "   Intracranial Pressure: If the fracture has caused brain swelling, a craniotomy or decompressive surgery may be required to relieve pressure.",
                "",
                "4. Rehabilitation:",
                "   Physical Therapy: Depending on the severity, rehabilitation may be needed to regain motor functions.",
                "   Cognitive Rehabilitation: If there has been brain injury, cognitive therapy may be required to address memory, speech, and behavior issues.",
                "   Long-term Monitoring: Regular follow-ups to monitor for complications such as post-traumatic seizures or chronic headaches.",
            ],
            explainer: explainer5,
            cardimage: fractures,
        },

        {
            title: 'Pelvic Fractures',
            description: ' A pelvic fracture is a break in one or more of the bones that make up the pelvis, which includes the ilium, ischium, pubis, and sacrum. Pelvic fractures can range from minor, stable fractures that heal with minimal treatment to severe, unstable fractures that can be life-threatening. They are often caused by high-energy trauma, such as car accidents, falls from height, or direct impact in sports injuries. In older adults, pelvic fractures can also result from low-energy trauma due to weakened bones from osteoporosis.',
            symptoms: [
                "Pain: Severe pain in the hip, groin, lower back, or abdomen, especially when attempting to walk or move.",
                "Swelling and Bruising: Around the pelvis, hips, or groin area.",
                "Difficulty Moving: Inability to walk or bear weight on the affected side.",
                "Leg Discrepancy: One leg may appear shorter or rotated if the fracture is displaced.",
                "Bleeding: Internal bleeding can occur, leading to signs of shock (e.g., low blood pressure, rapid heart rate, pale skin).",
                "Nerve Damage: Numbness, tingling, or weakness in the legs due to nerve injury.",
            ],
            management: [
                "Stabilization: Immobilize the patient to prevent further injury, often with a pelvic binder or sheet wrap.",
                "Monitoring: Continuous monitoring of vital signs, particularly for signs of shock or internal bleeding.",
                "Pain Management: Administer pain relief medications, such as opioids or nonsteroidal anti-inflammatory drugs (NSAIDs).",
                "Fluids and Blood Transfusions: In cases of significant blood loss, intravenous fluids and blood transfusions may be required.",
            ],
            explainer: explainer3,
            cardimage: fractures,
        },
    ];

    return (
        <>
        <div className="fractures-container">
                    <div className='fractures-sub-topics'>
                        <h1>Common Fractures and their Management.</h1>
                        <p>Let's get started..</p>
                        <div className='fractures-sub-topic-items'>
                            <div className='each-fractures-item'>
                                {fractureList.map((item, index) => (
                                    <div key={index} className='each-fractures-sub-topic'>
                                        <img src={item.cardimage} alt='card-image' className='card-image'/>
                                        <h2>{item.title}</h2>
                                        <img src={item.explainer} alt='explainer' className='explainer'/>
                                        <p><strong>Pathophysiology:</strong> {item.description}</p>
                                        
                                        <h3>Symptoms</h3>
                                        <ul>
                                            {item.symptoms.map((symptom, i) => (
                                                <li key={i}>{symptom}</li>
                                            ))}
                                        </ul>
                                        <h3>Management</h3>
                                        <ul>
                                            {item.management.map((manage, i) => (
                                                <li key={i}>{manage}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
        </div>

        </>
    )
}


const EquipmentList = () => {
    const equipmentList = [
        {
            title: "Traction Splint",
            description: "A traction splint is a specialized device used by paramedics to immobilize and align femur (thigh bone) fractures by applying gentle, steady traction (pulling force). It consists of a frame, adjustable straps, and a mechanism to apply traction.",
            usage: [
                "Femur Fractures: Traction splints are primarily used for mid-shaft femur fractures, where the muscle spasms can cause the broken bone ends to overlap, leading to significant pain and potential blood vessel damage.",
                "Benefits: Reduces pain, prevents further injury, and helps control internal bleeding by aligning the bone properly.",
            ],
            application: [
                "Preparation: Expose the leg, ensuring there is no clothing or objects that could interfere with the splint's application.",
                "Positioning: The splint is placed alongside the injured leg, and the straps are secured above and below the fracture site.",
                "Traction: The traction mechanism (usually a ratchet or pulley system) is activated, applying a controlled pulling force to realign the bone ends and reduce pain.",
                "Securing: Once the desired traction is achieved, the splint is locked in place, and the leg is immobilized for transport.",
                
            ],
            explainer: explainer7,
            cardimage: traction,
        },

        {
            title: " Vacuum Splint",
            description: "A vacuum splint is a versatile immobilization device that conforms to the shape of the injured limb by removing air from within the splint, creating a rigid support. It is made from a flexible material filled with small beads.",
            usage: [
                "Versatile Fracture Immobilization: Used for fractures of the arms, legs, joints, and even neck, where traditional splints may not fit well.",
                "Benefits: Provides custom immobilization, is lightweight, and can be used in various settings, including awkward or difficult-to-reach fractures.",
            ],
            application: [
                "Positioning: Place the splint around the injured limb, ensuring it covers the fracture site adequately.",
                "Molding: Adjust the splint to the shape of the limb by gently molding it around the injury.",
                "Vacuum Activation: Attach the vacuum pump and remove air from the splint, causing it to become rigid and conform to the limb's shape.",
                "Securing: Once the splint is firm, secure it with Velcro straps or tape, ensuring it stays in place during transport.",
            ],
            explainer: explainer6,
            cardimage: vacuum,
        },

        {
            title: "Rigid Splint",
            description: "Rigid splints are solid, non-flexible devices made from materials like plastic, metal, or wood, designed to immobilize a specific area of the body after a fracture. They come in various shapes and sizes to fit different parts of the body.",
            usage: [
                "Basic Fracture Immobilization: Used to immobilize fractures of the arms, legs, wrists, ankles, and other areas where a solid, stable support is needed.",
                "Benefits: Provides strong and reliable support, preventing movement and further injury during transport.",
            ],
            application: [
                "Sizing: Choose a splint that fits the length of the injured limb or joint, extending beyond the fracture site on both ends.",
                "Padding: Place padding between the splint and the skin to prevent pressure sores and increase comfort.",
                "Securing: Use bandages or straps to secure the splint to the limb, ensuring it is tight enough to immobilize the fracture but not so tight that it restricts circulation.",
            ],
            explainer: explainer5,
            cardimage: rigid,
        },

        {
            title: "Air Splint",
            description: "An air splint is an inflatable device that surrounds the injured limb, providing immobilization by inflating to create a rigid form. It is usually made of clear plastic and comes in various sizes to fit different limbs.",
            usage: [
                "Temporary Fracture Support: Ideal for immobilizing fractures of the lower leg, forearm, or wrist in an emergency setting.",
                "Benefits: Quick to apply, lightweight, and transparent, allowing for continuous observation of the injury.",
            ],
            application: [
                "Placement: Slide the deflated splint over the injured limb, ensuring the fracture site is covered.",
                "Inflation: Use a pump or manually blow air into the splint, inflating it until it becomes rigid and provides support to the fracture.",
                "Monitoring: Regularly check the splint's pressure to ensure it remains effective without being too tight, which could affect circulation.",
            ],
            explainer: explainer3,
            cardimage: air,
        },

        {
            title: "Cervical Collar (C-Collar)",
            description: " A cervical collar, or C-collar, is a device used to immobilize the neck and support the cervical spine after a suspected fracture or spinal injury. It is typically made of rigid plastic with foam padding for comfort.",
            usage: [
                "Neck and Spine Immobilization: Used when there is a suspicion of a cervical spine fracture or neck injury, especially in trauma cases.",
                "Benefits: Prevents further injury by stabilizing the cervical spine, crucial in preventing spinal cord damage during transport.",
            ],
            application: [
                "Selection: Choose the correct size of the collar based on the patient's neck circumference and height.",
                "Positioning: While maintaining manual in-line stabilization of the head and neck, apply the collar around the neck, ensuring it is snug but not too tight.",
                "Securing: Secure the collar using the Velcro straps, ensuring it immobilizes the neck effectively while allowing the patient to breathe comfortably.",
                "Monitoring: Continuously monitor the patient for signs of discomfort or airway compromise, and adjust as necessary.",
            ],
            explainer: explainer2,
            cardimage: collar,
        },

        {
            title: "SAM Splint",
            description: " The SAM Splint is a lightweight, malleable splint made from a thin core of aluminum and covered in soft foam. It can be shaped to fit various fractures and injuries and is highly portable.",
            usage: [
                "Customizable Immobilization: Used for fractures of the arm, wrist, leg, and other extremities, as well as for stabilizing sprains and dislocations.",
                "Benefits: Highly adaptable, lightweight, reusable, and easy to store in a paramedic kit.",
            ],
            application: [
                "Molding: Bend the SAM splint into the desired shape, depending on the injury location (e.g., a C-shape for a wrist fracture or a T-shape for an ankle).",
                "Placement: Position the molded splint along the injured limb, covering the fracture site and extending beyond it for stability",
                "Securing: Use bandages, tape, or Velcro straps to secure the splint in place, ensuring it stays firm during transport.",
                "Adjustments: The splint can be re-molded as needed to accommodate changes in swelling or limb position.",
            ],
            explainer: explainer1,
            cardimage: sam,
        },

        {
            title: "KED (Kendrick Extrication Device)",
            description: "The Kendrick Extrication Device (KED) is a semi-rigid splinting system designed to immobilize the head, neck, and torso in a seated position, often used in vehicle extrications.",
            usage: [
                "Seated Spinal Immobilization: Used when a patient is suspected of having spinal injuries, especially in situations where they need to be extricated from a vehicle.",
                "Benefits: Provides excellent spinal immobilization in seated patients, is compact, and can be quickly applied.",
            ],
            application: [
                "Positioning: Place the KED behind the patient’s back while they remain seated, with the head and neck in a neutral position.",
                "Securing: Fasten the torso, leg, and head straps in sequence, ensuring that the KED immobilizes the spine without causing discomfort.",
                "Extrication: Carefully remove the patient from the vehicle or seated position, keeping the spine aligned and the KED in place.",
                "Transport: The patient can then be moved onto a stretcher and transported with the KED still applied for continued spinal immobilization.",
            ],
            explainer: explainer7,
            cardimage: ked,
        },

        {
            
            title: "Pelvic Binder",
            description: "A pelvic binder is a medical device used to stabilize and compress the pelvis in patients with suspected pelvic fractures. The binder is designed to reduce internal bleeding, pain, and prevent further damage by holding the pelvic bones in a stable position. It is typically made of a wide, adjustable belt or strap that wraps around the patient’s hips and is tightened to apply even pressure across the pelvic area.",
            usage: [
                "Indications: Pelvic binders are used in cases of suspected or confirmed pelvic fractures, especially in trauma situations such as car accidents or falls from height. They are crucial in managing open book pelvic fractures, where the pelvis has been forcefully opened due to injury.",
                "Benefits:",
                "Hemorrhage Control: The binder reduces the space in the pelvic cavity, helping to control life-threatening internal bleeding, which is common in severe pelvic fractures.",
                "Pain Reduction: By stabilizing the pelvis, the binder helps reduce pain caused by the movement of fractured bones.",
                "Prevention of Further Injury: The compression provided by the binder prevents further displacement of pelvic bones, which could lead to more damage to blood vessels, nerves, and organs.",
                "Securing: Once tightened, secure the binder in place using Velcro straps or buckles to ensure it remains firm during transport.",
                "Monitoring: Continuously monitor the patient for signs of improved stability, reduced pain, and signs of shock. Check for any issues with circulation, particularly in the lower extremities, due to the compression.",
                "Transport: After the pelvic binder is applied, the patient should be transported to a trauma center as soon as possible for further evaluation and treatment, as pelvic fractures often require surgical intervention."
            ],
            application: [
                "Positioning: The patient is placed in a supine position (lying on their back). The binder is positioned around the greater trochanters, which are the bony prominences on the sides of the upper thighs.",
                "Placement: Ensure the binder is centered over the hips and not the abdomen or lower back. The binder should cover the widest part of the pelvis.",
                "Tightening: Pull the binder tight to apply circumferential pressure around the pelvis. The goal is to bring the pelvic bones back into alignment and reduce the volume of the pelvic cavity, which helps control internal bleeding.",

            ],
            explainer: explainer7,
            cardimage: binder,
        },
       
    ];

    return (
        <>
        <div className="fractures-container">
                    <div className='fractures-sub-topics'>
                        <h1>Equipment used to handle Fracures.</h1>
                        <p>Here's a detailed look at the equipment paramedics use to handle fractures in the field, along with specific usage instructions:</p>
                        <div className='fractures-sub-topic-items'>
                            <div className='each-fractures-item'>
                                {equipmentList.map((item, index) => (
                                    <div key={index} className='each-fractures-sub-topic'>
                                        <img src={item.cardimage} alt='card-image' className='card-image'/>
                                        <h2>{item.title}</h2>
                                        <img src={item.explainer} alt='explainer' className='explainer'/>
                                        <p><strong>Description:</strong> {item.description}</p>
                                        
                                        <h3>Usage</h3>
                                        <ul>
                                            {item.usage.map((symptom, i) => (
                                                <li key={i}>{symptom}</li>
                                            ))}
                                        </ul>
                                        <h3>Application</h3>
                                        <ul>
                                            {item.application.map((manage, i) => (
                                                <li key={i}>{manage}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
        </div>
        <div>
                <button className='nav-btn'>
                    <span>Next Page</span>
                    <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                    </svg>
                </button>
            </div>

        </>
    )
}

const Fractures = () => {

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
        <div className='mycontainer'>
            <div className='mycontent-header'>
                <h1>Fractures</h1>
            </div>
            <div className='mycontent-body'>
            <img src={explainer3} alt='explainer' className='explainerone'/>
                <p>
                    <strong>Definition:</strong> A fracture is a medical condition where there is a break in the continuity of a bone. This break can occur in any bone in the body and can range from a small, hairline crack to a complete break into multiple pieces. Fractures are typically caused by trauma, such as falls, car accidents, or sports injuries, but can also result from overuse, disease, or conditions like osteoporosis that weaken the bones. Fractures are classified based on their pattern, severity, and the specific bone affected.
                </p>

                <h3>Types of Fractures</h3>
                <p>
                    <strong>Simple (Closed) Fracture: </strong> A fracture where the bone is broken but does not puncture the skin.
                </p>
                <p>
                    <strong>Compound (Open) Fracture: </strong> A fracture where the bone breaks through the skin, increasing the risk of infection.
                </p>
                <p>
                    <strong>Comminuted Fracture:</strong> A fracture where the bone is shattered into multiple pieces.
                </p>
                <p>
                    <strong>Greenstick Fracture:</strong>  A fracture common in children, where the bone bends and cracks rather than breaking completely.
                </p>
                <p>
                    <strong>Oblique Fracture: </strong>  A fracture with a diagonal break across the bone.
                </p>
                <p>
                    <strong>Spiral Fracture:</strong> A fracture where at least one part of the bone is twisted.
                </p>
                <p>
                    <strong>Transverse Fracture:</strong>  A fracture with a horizontal break across the bone.
                </p>
                <p>
                    <strong>Stress Fracture: </strong>  A small crack in the bone that often develops from repetitive force or overuse.
                    <br/><br/>
                </p>

                <h3>Causes of Fractures</h3>
                <img src={logo} alt='explainer' className='explainerone'/>
                <ul>
                    <li><strong>Trauma:</strong> Such as falls, car accidents, or sports injuries.</li>
                    <li><strong>Osteoporosis:</strong> A condition that weakens bones, making them more prone to fractures.</li>
                    <li><strong>Overuse:</strong>  Repetitive movements that put stress on the bones.</li>
                </ul>

                <h3>Symptoms of a Fracture</h3>
                <img src={logo2} alt='explainer' className='explainerone'/>
                <ul>
                    <li>Intense pain at the site of the injury.</li>
                    <li>Swelling and bruising.</li>
                    <li>Deformity of the limb or joint.</li>
                    <li>Inability to move the affected part.</li>
                    <li>Crepitus (a grinding noise or sensation).</li>
                </ul>

                <h3>First Aid for Fractures</h3>
                <img src={logo} alt='explainer' className='explainerone'/>
                <ul>
                    <li>Immobilize the Area: Use a splint or sling to keep the bone from moving.</li>
                    <li>Control Bleeding: Apply pressure with a clean cloth or bandage if the fracture is open.</li>
                    <li>Apply Ice: To reduce swelling and pain.</li>
                    <li>Seek Medical Attention: Transport the patient to a medical facility as soon as possible.</li>
                </ul>

                <h3>Complications of Fractures</h3>
                <img src={logo2} alt='explainer' className='explainerone'/>
                <ul>
                    <li>Infection: Especially in open fractures.</li>
                    <li>Delayed Union or Nonunion: Where the bone heals slowly or not at all.</li>
                    <li>Malunion: Where the bone heals in the wrong position.</li>
                    <li>Compartment Syndrome: Increased pressure in the muscles that can cut off blood supply.</li>
                </ul>
            </div>
            <div>
            <img src={explainer6} alt='explainer' className='explainerone'/>
                <FractureContent />
            </div>

            <div>
            <img src={logo2} alt='explainer' className='explainerone'/>
                <EquipmentList />
            </div>
        </div>
        </>
    )

}

export default Fractures;