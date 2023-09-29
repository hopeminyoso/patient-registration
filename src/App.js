import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PatientRegistrationForm from './components/PatientRegistrationForm';
import VisitPage from './components/VisitPage';
import PatientListing from './components/PatientListing';
import Home from './components/Home'

function App() {
  const [currentPage, setCurrentPage] = useState('registration');
  // eslint-disable-next-line no-unused-vars
  const [visitData, setVisitData] = useState([]); // Initialize an empty array to store visit data

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page); // Update the currentPage state
  };

  const handleVisitSave = (formData) => {
    // Logic to save the visit data, e.g., store it in state or send it to an API
    console.log('Visit data:', formData);
    // Navigate to the Patient Listing page or perform other actions as needed
    setCurrentPage('patientListing'); // Update the currentPage state
  };

  const jsonData = '{"name": "Brian", "age": 30}';
try {
  const parsedData = JSON.parse(jsonData);
  console.log(parsedData);
} catch (error) {
  console.error("Error parsing JSON data:", error);
}


  return (
    <div className="App">
      <Navbar />
      <Home />

      {currentPage === 'registration' && (
        <PatientRegistrationForm onNavigate={() => handleNavigation('visit')} />
      )}

      {currentPage === 'visit' && (
        <VisitPage
          onSave={handleVisitSave}
          onNavigate={() => handleNavigate('patientListing')}
        />
      )}

      {currentPage === 'patientListing' && <PatientListing visitData={visitData} />}
    </div>
  );
}

export default App;







