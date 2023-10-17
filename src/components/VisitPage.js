import React, { useState } from 'react';
import './VisitPage.css';

function VisitPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    date: '',
    height: '',
    weight: '',
    bmi: '',
    generalHealth: 'Good',
    loosingWeight: 'No',
    comment: '',
    takingDrugs: 'No',
  });

  const calculateBMI = () => {
    const { height, weight } = formData;
    if (height && weight) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
      return bmi;
    }
    return '';
  };

  const isBMIUnder25 = () => {
    const bmi = parseFloat(calculateBMI());
    return !isNaN(bmi) && bmi < 25;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate BMI
    const calculatedBMI = calculateBMI();
    setFormData({ ...formData, bmi: calculatedBMI });

    // Prepare visit data
    const visitData = {
      date: formData.date,
      height: formData.height,
      weight: formData.weight,
      bmi: calculatedBMI,
      generalHealth: formData.generalHealth,
      loosingWeight: formData.loosingWeight,
      comment: formData.comment,
      takingDrugs: formData.takingDrugs,
    };

    try {
      // Send a POST request to your backend API
      const response = await fetch('/api/visits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitData),
      });

      if (response.ok) {
        // Handle a successful response
        // You might want to navigate to a different page or show a success message
        onNavigate(); // Placeholder for navigating to another page
      } else {
        // Handle errors, e.g., validation errors from the backend
        console.error('Error saving visit data');
      }
    } catch (error) {
      console.error('Error connecting to the server:', error);
    }
  };
  return (
    <div className="visit-container">
      <h2>Visit Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="bmi">BMI</label>
          <input
            type="text"
            id="bmi"
            name="bmi"
            value={calculateBMI()}
            readOnly
          />
        </div>

        {calculateBMI() && (
          <div>
            {isBMIUnder25() ? (
              /* Section A */
              <div>
                <label htmlFor="generalHealth">General Health</label>
                <select
                  id="generalHealth"
                  name="generalHealth"
                  value={formData.generalHealth}
                  onChange={handleChange}
                >
                  <option value="Good">Good</option>
                  <option value="Poor">Poor</option>
                </select>
                <label htmlFor="loosingWeight">
                  Have you ever been on a diet to lose weight?
                </label>
                <select
                  id="loosingWeight"
                  name="loosingWeight"
                  value={formData.loosingWeight}
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label htmlFor="comment">Comments</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                />
              </div>
            ) : (
              /* Section B */
              <div>
                <label htmlFor="generalHealth">General Health</label>
                <select
                  id="generalHealth"
                  name="generalHealth"
                  value={formData.generalHealth}
                  onChange={handleChange}
                >
                  <option value="Good">Good</option>
                  <option value="Poor">Poor</option>
                </select>
                <label htmlFor="takingDrugs">
                  Are you currently taking any drugs?
                </label>
                <select
                  id="takingDrugs"
                  name="takingDrugs"
                  value={formData.takingDrugs}
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label htmlFor="comment">Comments</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default VisitPage;
