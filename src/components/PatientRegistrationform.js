import React, { useState } from "react";
import Swal from "sweetalert2";
import './PatientRegistrationForm.css';

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
    e.preventDefault(); // Prevent the default form submission behavior

    // Save patient registration details

    // Generate a random patient number (adjust the range as needed)
    const randomNumber = Math.floor(Math.random() * 1000000);

    // Display a SweetAlert success message with the patient number
    Swal.fire({
      title: "Registration Successful",
      text: `Your unique patient number is: ${randomNumber}`,
      icon: "success",
    }).then(() => {
      // Navigate to the VisitPage after clicking "OK" in SweetAlert
      onNavigate();
    });
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "Male",
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
          <button type="button" onClick={handleClear}>
            Clear
          </button>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default PatientRegistrationForm;




