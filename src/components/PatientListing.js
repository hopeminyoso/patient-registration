import React, { useState, useEffect } from 'react';
import './Patient.css';

const PatientListing = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetch('/src/data/db.json')
      .then((response) => response.text()) // Read the response as text
      .then((data) => {
        const parsedData = JSON.parse(data); // Parse the JSON data
        console.log('Parsed Data:', parsedData);
        
        // Convert the visitDate format to "YYYY-MM-DD"
        const convertedData = parsedData.patients.map((patient) => ({
          ...patient,
          //visitDate: convertDateFormat(patient.visitDate),
        }));
        
        setPatients(convertedData);
        setFilteredPatients(convertedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const classifyBMI = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal';
    return 'Overweight';
  };

  const handleDateFilterChange = (e) => {
    const selectedDate = e.target.value;
    console.log('Selected Date:', selectedDate);
    setSelectedDate(selectedDate);
  
    // Filter patient records based on the selected visit date
    const filtered = patients?.filter((patient) => {
      console.log('Patient Visit Date:', patient.visitDate);
      console.log('SelectedDate:', selectedDate);
      return patient.visitDate === selectedDate;
    }) || [];
    console.log('Filtered Patients:', filtered);
    setFilteredPatients(filtered);
  };

  return (
    <div className="container">
    <h2>Patient Listing (Report)</h2>
    <div className="filter-container">
      <label htmlFor="filterDate">Filter by Visit Date:</label>
      <input
        type="date"
        id="filterDate"
        value={selectedDate}
        onChange={handleDateFilterChange}
      />
    </div>
    <div className="table-container"> {/* Wrap the table in a container */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>BMI</th>
            <th>BMI Status</th>
          </tr>
        </thead>
        <tbody>
        {filteredPatients.map((patient) => (
          <tr key={patient.id}>
            <td>{`${patient.firstName} ${patient.lastName}`}</td>
            <td>{patient.dateOfBirth}</td>
            <td>{patient.bmi}</td>
            <td>{classifyBMI(patient.bmi)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
      {console.log('Component Rerendered')}
    </div>
  );
};

export default PatientListing;

