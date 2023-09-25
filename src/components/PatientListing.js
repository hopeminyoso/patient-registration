import React, { useState, useEffect } from 'react';

function PatientListing() {
  const [patientRecords, setPatientRecords] = useState([  {
    id: 1,
    firstName: 'Brian',
    lastName: 'Omondi',
    dateOfBirth: '1997-02-11',
    bmi: 24.5,
  },
  {
    id: 2,
    firstName: 'Hope',
    lastName: 'Shirley',
    dateOfBirth: '2000-05-26',
    bmi: 22.0,
  },
{id: 2,
    firstName: 'Ryan',
    lastName: 'John',
    dateOfBirth: '2005-12-26',
    bmi: 22.0,
  },]); 
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // Simulate loading patient records (Replace with actual data retrieval)
    const fetchData = async () => {
      // Replace with your data fetching logic
      const response = await fetch('/api/patients');
      const data = await response.json();
      setPatientRecords(data);
    };

    fetchData();
  }, []);

  const classifyBMI = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal';
    return 'Overweight';
  };

  const handleDateFilterChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);

    // Filter patient records based on the selected date
    const filtered = patientRecords.filter((record) => {

      return record.date === selectedDate;
    });

    setFilteredRecords(filtered);
  };

  return (
    <div>
      <h2>Patient Listing</h2>
      <div>
        <label htmlFor="filterDate">Filter by Date:</label>
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
          {filteredRecords.map((patient) => (
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
  );
}

export default PatientListing;

