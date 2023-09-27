import React, { useState, useEffect } from 'react';
import './Patient.css';

const PatientListing = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetch('/src/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        // Convert the visitDate format to "YYYY-MM-DD"
        const convertedData = data.patients.map((patient) => ({
          ...patient,
          visitDate: convertDateFormat(patient.visitDate),
        }));
        setPatients(convertedData);
        setFilteredPatients(convertedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const convertDateFormat = (dateString) => {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const [month, day, year] = parts;
      return `${year}-${month}-${day}`;
    }
    return dateString; 
  };

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
      return patient.visitDate === selectedDate;
    }) || [];
    console.log('Filtered Patients:', filtered);
    setFilteredPatients(filtered);
  };

  return (
    <div>
      <h2>Patient Listing (Report)</h2>
      <div>
        <label htmlFor="filterDate">Filter by Visit Date:</label>
        <input
          type="date"
          id="filterDate"
          value={selectedDate}
          onChange={handleDateFilterChange}
        />
      </div>
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
      {console.log('Component Rerendered')}
    </div>
  );
};

export default PatientListing;

