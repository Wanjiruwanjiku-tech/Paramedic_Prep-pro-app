import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import explaoiner5 from '../images/explainer5.jpg';
import explaoiner6 from '../images/explainer6.jpg';
import explaoiner7 from '../images/explainer7.jpg';
import explaoiner8 from '../images/explainer8.jpg';
import explaoiner1 from '../images/explainer1.jpg';
import explaoiner2 from '../images/explainer2.jpg';
import explaoiner3 from '../images/explainer3.jpg';
import explaoiner4 from '../images/explainer4.jpg';

const DiabetesQuiz = () => {

    const ptQuestions = [
        {
            'question': "You arrive at the scene to find a 45-year-old male who is confused and sweating profusely. His family states he has diabetes and missed lunch. What is your first intervention?",
            'options': [
                'Administer glucagon',
                'Administer insulin',
                'Check his blood glucose level',
                'Give him fluids'
            ],
            'answer': 'Check his blood glucose level',
            'explainer': explaoiner1
        },

        {
            'question': "A 60-year-old female with type 1 diabetes is found unconscious. Her blood glucose is 20 mg/dL (1.1 mmol/L). What is your immediate treatment?",
            'options': [
                'Administer IV dextrose',
                'Administer insulin',
                'Administer oral glucose',
                'Place the patient in a recovery position'
            ],
            'answer': 'Administer IV dextrose',
            'explainer': explaoiner2
        },

        {
            'question': " A 55-year-old male with a history of diabetes presents with altered mental status and a fruity odor on his breath. His blood glucose reads 600 mg/dL (33.3 mmol/L). What is your working diagnosis?",
            'options': [
                'Hyperosmolar hyperglycemic state (HHS)',
                'Diabetic ketoacidosis (DKA)',
                'Hypoglycemia',
                'Acute stroke'
            ],
            'answer': 'Diabetic ketoacidosis (DKA)',
            'explainer': explaoiner3
        },

        {
            'question': "You are treating a patient with type 2 diabetes who is complaining of extreme thirst, frequent urination, and weakness. His blood glucose is 900 mg/dL (50 mmol/L), and he is lethargic. What condition is most likely?",
            'options': [
                'Diabetic ketoacidosis (DKA)',
                'Hypoglycemia',
                'Hyperosmolar hyperglycemic state (HHS)',
                'Septic shock'
            ],
            'answer': 'Hyperosmolar hyperglycemic state (HHS)',
            'explainer': explaoiner4
        },

        {
            'question': " A 40-year-old woman with type 1 diabetes presents with nausea, vomiting, and abdominal pain. Her blood glucose is 450 mg/dL (25 mmol/L). What should you suspect?",
            'options': [
                'Myocardial infarction',
                'Diabetic ketoacidosis (DKA)',
                'Gastroenteritis',
                'Hypoglycemia'
            ],
            'answer': 'Diabetic ketoacidosis (DKA)',
            'explainer': explaoiner5
        },

        {
            'question': "A 30-year-old male with diabetes is found unconscious at work. His coworkers report that he skipped breakfast. What is your immediate management?",
            'options': [
                'Administer oral glucose',
                'Administer glucagon IM',
                'Administer insulin',
                'Check his temperature'
            ],
            'answer': 'Administer glucagon IM',
            'explainer': explaoiner6
        },

        {
            'question': "A patient with type 1 diabetes presents with deep, rapid breathing and confusion. Her blood glucose is 500 mg/dL (27.7 mmol/L). What respiratory pattern is she likely exhibiting?",
            'options': [
                'Kussmaul respirations',
                'Cheyne-Stokes respirations',
                'Agonal respirations',
                'Biot’s respirations'
            ],
            'answer': 'Kussmaul respirations',
            'explainer': explaoiner7
        },

        {
            'question': " You are called to a 68-year-old male who appears lethargic and confused. His blood glucose is 40 mg/dL (2.2 mmol/L). What is your initial treatment?",
            'options': [
                'Administer insulin',
                'Administer oral glucose',
                'Administer IV dextrose or glucagon IM',
                'Start an IV of normal saline'
            ],
            'answer': 'Administer IV dextrose or glucagon IM',
            'explainer': explaoiner8
        },

        {
            'question': " A 65-year-old woman with type 2 diabetes is brought in for altered mental status. Her blood glucose is 700 mg/dL (38.8 mmol/L), and she has no ketones in her urine. What condition is she most likely experiencing?",
            'options': [
                'Diabetic ketoacidosis (DKA)',
                'Hyperosmolar hyperglycemic state (HHS)',
                'Hypoglycemia',
                'Acute stroke'
            ],
            'answer': 'Hyperosmolar hyperglycemic state (HHS)',
            'explainer': explaoiner1
        },

        {
            'question': " A patient with diabetes is found unconscious with cool, clammy skin. His blood glucose is 40 mg/dL (2.2 mmol/L). What is your immediate action?",
            'options': [
                'Administer insulin',
                'Administer oral glucose if he can swallow',
                'Administer high-flow oxygen',
                'Start CPR'
            ],
            'answer': 'Administer oral glucose if he can swallow',
            'explainer': explaoiner2
        },

        {
            'question': "A 50-year-old female with a history of diabetes reports dizziness and weakness after a strenuous workout. Her blood glucose is 60 mg/dL (3.3 mmol/L). What is your next step?",
            'options': [
                'Administer 50% dextrose IV',
                'Administer insulin',
                'Give her a fast-acting carbohydrate',
                'Start a fluid bolus'
            ],
            'answer': 'Give her a fast-acting carbohydrate',
            'explainer': explaoiner3
        },

        {
            'question': 'You are treating a 45-year-old male with type 2 diabetes. He is unresponsive, and his blood glucose is 30 mg/dL (1.6 mmol/L). What is the best route of glucose administration?',
            'options': [
                'Oral glucose',
                'Glucagon IM', 
                'Dextrose IV',
                'Insulin IV'
            ],
            'answer': 'Dextrose IV',
            'explainer': explaoiner4
        },

        {
            'question': "A 70-year-old man is found disoriented and severely dehydrated. He has a history of type 2 diabetes. His blood glucose is 800 mg/dL (44.4 mmol/L), and his vital signs indicate shock. What condition should you suspect?",
            'options': [
                'Diabetic ketoacidosis (DKA)',
                'Hyperosmolar hyperglycemic state (HHS)',
                'Septic shock',
                'Hypoglycemia'
            ],
            'answer': 'Hyperosmolar hyperglycemic state (HHS)',
            'explainer': explaoiner5
        },

        {
            'question': " A 22-year-old woman with type 1 diabetes complains of severe abdominal pain and vomiting. Her blood glucose is 500 mg/dL (27.7 mmol/L), and she has ketones in her urine. What acid-base imbalance is most likely?",
            'options': [
                'Metabolic alkalosis',
                'Respiratory alkalosis',
                'Metabolic acidosis',
                'Respiratory acidosis'
            ],
            'answer': 'Metabolic acidosis',
            'explainer': explaoiner6
        },

        {
            'question': "A patient has sustained chemical burns to his right arm from a strong acid. After ensuring safety, what is the next step in management?",
            'options': [
                'Apply sterile dressings',
                'Brush off the chemical',
                'Irrigate the area with copious water',
                'Apply a neutralizing agent'
            ],
            'answer': 'Irrigate the area with copious water',
            'explainer': explaoiner7
        },

        {
            'question': "A 65-year-old male with type 2 diabetes has a blood glucose reading of 30 mg/dL (1.6 mmol/L) and is conscious but confused. What is your treatment plan?",
            'options': [
                'Administer insulin',
                'Give him orange juice',
                'Start an IV and administer glucagon',
                'Place him on a cardiac monitor'
            ],
            'answer': 'Give him orange juice',
            'explainer': explaoiner8
        },

        {
            'question': " You respond to a patient with a history of type 1 diabetes who is found unconscious. His glucometer reads “High” (>600 mg/dL). His skin is warm and dry. What is your next action?",
            'options': [
                'Administer glucagon',
                ' Administer IV fluids and transport',
                'Administer oral glucose',
                'Start CPR'
            ],
            'answer': 'Administer IV fluids and transport',
            'explainer': explaoiner1
        },

        {
            'question': "You are treating a 70-year-old female with altered mental status. Her blood glucose is 35 mg/dL (1.9 mmol/L). She is conscious but unable to swallow. What is your next step?",
            'options': [
                'Administer IV dextrose',
                'Administer oral glucose',
                'Administer insulin',
                'Encourage the patient to eat'
            ],
            'answer': 'Administer IV dextrose',
            'explainer': explaoiner2
        },

        {
            'question': "A patient with diabetes presents with polyuria, polydipsia, and polyphagia. His blood glucose is 600 mg/dL (33.3 mmol/L), and he has ketones in his urine. What condition is likely?",
            'options': [
                'Diabetic ketoacidosis (DKA)',
                'Hypoglycemia',
                'Hyperosmolar hyperglycemic state (HHS)',
                'Pancreatitis'
            ],
            'answer': 'Diabetic ketoacidosis (DKA)',
            'explainer': explaoiner3
        },

        {
            'question': "A 72-year-old male presents with altered mental status and is severely dehydrated. His blood glucose is 1000 mg/dL (55.5 mmol/L). He has no ketones in his urine. What is the most appropriate intervention?",
            'options': [
                'Administer insulin IM',
                'Administer IV fluids and insulin',
                'Administer IV dextrose',
                'Encourage the patient to drink fluids'
            ],
            'answer': 'Administer IV fluids and insulin',
            'explainer': explaoiner5
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);

    const handleAnswer = (optionIndex) => {
        if (optionIndex === ptQuestions[currentQuestion].answer) {
          setScore(score + 1);
        }
        if (currentQuestion < ptQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setQuizComplete(true);
        }
      };

      useEffect(() => {
        if (quizComplete) {
            const timer = setTimeout(() => {
                window.location.reload(); // Refresh the page
            }, 5000); // 5 seconds delay

            return () => clearTimeout(timer); // Cleanup on component unmount
        }
    }, [quizComplete]);

      if (quizComplete) {
        return (
                <div className="each-pt-quizs">
                    <h1>Quiz Complete!</h1>
                    <img src={explaoiner5} alt="Quiz complete" />
                    <h2>Your score is: {score} out of {ptQuestions.length}</h2>
                    <p>The page will refresh automatically in 5 seconds.</p>
                </div>
                );
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
                        <li><Link to={'/quiz'}>Back</Link></li>
                        <li><Link to={'/'}>Resources</Link></li>
                        <li><Link to={'/contact'}>Contact us</Link></li>
                    </ul>
                </nav>
                    </div>
                    <div className="quiz-pt-container">
                        <div className="each-pt-quizs">
                            <h2>Question {currentQuestion + 1}</h2>
                            <img src={ptQuestions[currentQuestion].explainer} alt="Quiz complete" className="explainer" />
                            <h1>{ptQuestions[currentQuestion].question}</h1>
                            <div className="each-pt-quiz">
                            {ptQuestions[currentQuestion].options.map((option, index) => (
                                <button className='nav-btn' onClick={() => handleAnswer(option)}>
                                <span>{option} </span>
                                <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                                    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                                </svg>
                                </button>
                            ))}
                            </div>
                        </div>

                    </div>
             </>
      );
}

export default DiabetesQuiz;