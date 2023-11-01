import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './PatientRegistrationForm.css';
import { getAllPatients } from '../api/patientAPI';

function PatientRegistrationForm({ onNavigate }) {
  const [patients, setPatients] = useState([]); // To store patient data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'Male',
  });

  useEffect(() => {
    getAllPatients()
      .then((data) => {
        setPatients(data);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the 'formData' state to send the patient registration data to the server
    // Make sure the createPatient function sends the data to the API
  };

  return (
    <div className="background-container">
      <div className="registration-container">
        <h2>Patient Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName} // Bind form data to the input value
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName} // Bind form data to the input value
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth} // Bind form data to the input value
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender} // Bind form data to the input value
              onChange={handleChange}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default PatientRegistrationForm;
