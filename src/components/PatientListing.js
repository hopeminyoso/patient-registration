import React, { useState, useEffect } from 'react';
import './Patient.css';

const PatientListing = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // Make an API request to fetch patient data from the backend
    fetch('/api/patients') // Replace with the correct backend route
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
        setFilteredPatients(data);
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
    setSelectedDate(selectedDate);

    // Filter patient records based on the selected visit date
    const filtered = patients?.filter((patient) => {
      return patient.visitDate === selectedDate;
    }) || [];
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
      <div className="table-container">
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
    </div>
  );
};

export default PatientListing;

