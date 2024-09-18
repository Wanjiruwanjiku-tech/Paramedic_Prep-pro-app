import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


function App() {
  return (
        <>
        <html lang="en">
          <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible"content="IE=edge"/>
            <meta name="viewport"content="width=device-width,initial-scale=1.0"/>
            <title>Paramedic Prep-Pro</title>
          </head>
            <Router>
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
              </Routes>
            </Router>
            <Footer />
          </html>

        </>
  );
}

export default App;
