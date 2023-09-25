import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import PatientRegistrationForm from './components/PatientRegistrationform';
import VisitPage from './components/VisitPage';
import PatientListing from './components/PatientListing';

function App() {
  const [currentPage, setCurrentPage] = useState('registration');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };


 

  return (
    <div className="App">
      <Header />
      {currentPage === 'registration' && (
        <PatientRegistrationForm onNavigate={() => handleNavigation('visit')} />
      )}
      {currentPage === 'visit' && <VisitPage />}
      <PatientListing /> 
    </div>
  );
}

export default App;






