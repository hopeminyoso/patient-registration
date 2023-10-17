import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import PatientRegistrationForm from './components/PatientRegistrationForm';
import VisitPage from './components/VisitPage';
import PatientListing from './components/PatientListing';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<PatientRegistrationForm />} />
          <Route path="/Visit" element={<VisitPage />} />
          <Route path="/Listing" element={<PatientListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





