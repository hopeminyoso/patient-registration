import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import PatientRegistrationForm from './components/PatientRegistrationform';
import VisitPage from './components/VisitPage';
import PatientListing from './components/PatientListing';

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
      <Header />

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







