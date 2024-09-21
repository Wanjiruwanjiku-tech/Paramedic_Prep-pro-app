import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import EmergencyList from './EmergencyList/EmergencyList';
import Footer from './Footer/Footer';
import AboutUs from './SecondaryComponents/AboutUs/AboutUs';
import PatientAssessment from './ScenarioDetails/VariousTopics/PatientAssessment/PatientAssessment';
import Contact from './SecondaryComponents/Contact/Contact';
import AirWay from './ScenarioDetails/VariousTopics/AirWay/AirWay';
import Introduction from './ScenarioDetails/VariousTopics/AirWay/Introduction/introduction';
import BasicAdjuncts from './ScenarioDetails/VariousTopics/AirWay/BasicAdjuncts/BasicAdjuncts';
import Advanced from './ScenarioDetails/VariousTopics/AirWay/Advanced/Advanced';
import AirwayPharma from './ScenarioDetails/VariousTopics/AirWay/AirwayPharma/AirwayPharma';
import AirwaySpecialPopulation from './ScenarioDetails/VariousTopics/AirWay/AirwaySpecialPopulation/AirwaySpecialPopulation';
import AirwayComplications from './ScenarioDetails/VariousTopics/AirWay/AirComp/AirwayComplications';
import AirwayMonitoringTools from './ScenarioDetails/VariousTopics/AirWay/AirwayMonitoringTools/AirwayMonitoringTools';
import Cardiac from './ScenarioDetails/VariousTopics/Cardiac/Cardiac';
import CardiacNextPage from './ScenarioDetails/VariousTopics/Cardiac/CardiacNextPage';
import Fractures from './ScenarioDetails/VariousTopics/Fractures/Fractures';
import Burns from './ScenarioDetails/VariousTopics/Burns/Burns';
import ShowImages from './ScenarioDetails/VariousTopics/Burns/BurnImages';
import Bleeding from './ScenarioDetails/VariousTopics/Bleeding/Bleeding'; 
import Shock from './ScenarioDetails/VariousTopics/Bleeding/Shock';
import DiabeticEmergencies from './ScenarioDetails/VariousTopics/Diabetic/Diabetic';
import AllergicReactions from './ScenarioDetails/VariousTopics/Allergy/Allergy';
import GeneralPharmacology from './ScenarioDetails/VariousTopics/GeneralPharma/GeneralPharmacology';
import Quiz from './Quiz/Quiz';
import PtQuiz from './Quiz/PtAssesQuiz/PtQuiz';
import CardiacQuiz from './Quiz/CardiacQuiz/CardiacQuiz';
import BurnQuiz from './Quiz/BurnQuiz/BurnQuiz';
import DiabetesQuiz from './Quiz/DMQuiz/DMQuiz';
import PharmaQuiz from './Quiz/PharmaQuiz/PharmaQuiz';


function App() {
  return (
        <>
          <div className="container">
          <div className="text-container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/emergencylist' element={<EmergencyList />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/patient-assessment" element={<PatientAssessment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/airway-management" element={<AirWay />} />
                <Route path="/introduction-to-airway-management" element={<Introduction />} />
                <Route path="/basic-airway-techniques" element={<BasicAdjuncts />} />
                <Route path="/advanced-airway-techniques" element={<Advanced />} />
                <Route path="/pharmacology-related-to-airway-management" element={<AirwayPharma />} />
                <Route path="/airway-management-in-special-populations" element={<AirwaySpecialPopulation />} />
                <Route path="/complications-of-airway-management" element={<AirwayComplications />} />
                <Route path="/assessment-and-monitoring-tools" element={<AirwayMonitoringTools />} />
                <Route path="/cardiac-emergencies" element={<Cardiac />} />
                <Route path="/cardiac-next-page" element={<CardiacNextPage />} />
                <Route path='/fractures' element={<Fractures />} />
                <Route path='/burns' element={<Burns />} />
                <Route path='/burn-images' element={<ShowImages />} />
                <Route path='/bleeding-and-shock' element={<Bleeding />} />
                <Route path='/shock' element={<Shock />} />
                <Route path='/diabetic-emergencies' element={<DiabeticEmergencies />} />
                <Route path='/allergic-reactions' element={<AllergicReactions />} />
                <Route path='/general-pharmacology' element={<GeneralPharmacology />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/patient-quiz' element={<PtQuiz />} />
                <Route path='/cardiac-quiz' element={<CardiacQuiz />} />
                <Route path='/burns-quiz' element={<BurnQuiz />} />
                <Route path='/diabetes-quiz' element={<DiabetesQuiz />} />
                <Route path='/genpharma-quiz' element={<PharmaQuiz />} />
                <Route path="*" element={<><h2>PAGE NOT FOUND</h2><h2>CAUSE...</h2><h1>I'm Slim Shady, yes I'm the real Shady, All you other slim Shadys are just immitating, SO won't the real Slim Shady please stand up!!</h1></>} />
              </Routes>
            <Footer />
            </div>
            </div>

        </>
  );
}

export default App;
