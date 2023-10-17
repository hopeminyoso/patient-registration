import React, { useState } from "react";
import Swal from "sweetalert2";
import './PatientRegistrationForm.css';
import { registerPatient } from '../api/api'; // Import the registerPatient function from your API module

function PatientRegistrationForm({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "Male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare patient registration data
    const patientData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
    };

    // Use the registerPatient function to send the patient data to your API
    registerPatient(patientData)
      .then((response) => {
        Swal.fire({
          title: 'Registration Successful',
          text: `Your unique patient number is: ${response.patientNumber}`, // Make sure your API returns the patientNumber
          icon: 'success',
        }).then(() => {
          // Navigate to the VisitPage after clicking "OK" in SweetAlert
          onNavigate();
        });
      })
      .catch((error) => {
        console.error('Error registering the patient:', error);
      });
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
              value={formData.firstName}
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
              value={formData.lastName}
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
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
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
