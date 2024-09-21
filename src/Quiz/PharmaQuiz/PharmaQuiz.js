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

const PharmaQuiz = () => {

    const ptQuestions = [
        {
            'question': "What is the term used to describe the effect of a drug on the body?",
            'options': [
                'Pharmacokinetics',
                'Pharmacodynamics',
                'Bioavailability',
                'First-pass effect'
            ],
            'answer': 'Pharmacodynamics',
            'explainer': explaoiner3
        },

        {
            'question': 'Which term describes the movement of a drug through the body, including absorption, distribution, metabolism, and excretion?',
            'options': [
                'Pharmacodynamics',
                'Therapeutic index', 
                'Pharmacokinetics',
                'Half-life'
            ],
            'answer': 'Pharmacokinetics',
            'explainer': explaoiner4
        },

        {
            'question': "You are administering an IV drug with a narrow therapeutic index. What does this imply?",
            'options': [
                'The drug is safe at high doses',
                'The drug requires close monitoring of blood levels',
                'The drug takes a long time to be metabolized',
                'The drug has few side effects'
            ],
            'answer': 'The drug requires close monitoring of blood levels',
            'explainer': explaoiner5
        },

        {
            'question': "A 50-year-old patient is receiving a drug via the sublingual route. What is the main advantage of this route of administration?",
            'options': [
                'Avoids first-pass metabolism',
                'Ensures slow, prolonged absorption',
                'Is easier for patients to take',
                'Reduces the risk of overdose'
            ],
            'answer': 'Avoids first-pass metabolism',
            'explainer': explaoiner6
        },

        {
            'question': "What term refers to the time it takes for the concentration of a drug to decrease by half in the body?",
            'options': [
                'Peak effect',
                'Onset of action',
                'Half-life',
                'Duration of action'
            ],
            'answer': 'Half-life',
            'explainer': explaoiner7
        },

        {
            'question': "Which class of medications is commonly used by paramedics to manage bronchospasm in asthmatic patients?",
            'options': [
                'Anticholinergics',
                'Beta-2 agonists',
                'Calcium channel blockers',
                'ACE inhibitors'
            ],
            'answer': 'Beta-2 agonists',
            'explainer': explaoiner8
        },

        {
            'question': "What is the term used to describe the process of drug elimination from the body, primarily via the liver or kidneys?",
            'options': [
                'Metabolism',
                'Distribution',
                'Absorption',
                'Excretion'
            ],
            'answer': 'Excretion',
            'explainer': explaoiner1
        },

        {
            'question': " You administer a medication with a high first-pass effect. What does this imply about its metabolism?",
            'options': [
                'It will require a lower dose to be effective',
                'It will be extensively metabolized in the liver before reaching systemic circulation',
                'It will bypass the liver entirely',
                'It has a longer half-life'
            ],
            'answer': 'It will be extensively metabolized in the liver before reaching systemic circulation',
            'explainer': explaoiner2
        },

        {
            'question': "A paramedic is administering a medication with a rapid onset of action but short duration. What term best describes the time it takes for the drug to begin working?",
            'options': [
                'Half-life',
                'Onset of action',
                'Peak effect',
                'Bioavailability'
            ],
            'answer': 'Onset of action',
            'explainer': explaoiner3
        },

        {
            'question': "Which of the following medications is an example of a Schedule II controlled substance, requiring strict regulation in paramedic practice?",
            'options': [
                'Morphine',
                'Lorazepam',
                'Aspirin',
                'Ibuprofen'
            ],
            'answer': 'Morphine',
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

export default PharmaQuiz;