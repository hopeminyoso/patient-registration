import React, { useState } from 'react';
import './VisitPage.css';

function VisitPage({ onSave, onNavigate }) {
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
      const bmi = weight / (heightInMeters * heightInMeters);
      return bmi.toFixed(2);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedBMI = calculateBMI();
    setFormData({ ...formData, bmi: calculatedBMI });

    onSave(formData);
    onNavigate();
  }

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
              <div>
                {/* Section A */}
                <h3>Section A</h3>
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
                </div>
                <div>
                  <label htmlFor="loosingWeight">Have you ever been on a diet to lose weight?</label>
                  <select
                    id="loosingWeight"
                    name="loosingWeight"
                    value={formData.loosingWeight}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="comment">Comments</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <div>
                {/* Section B */}
                <h3>Section B</h3>
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
                </div>
                <div>
                  <label htmlFor="takingDrugs">Are you currently taking any drugs?</label>
                  <select
                    id="takingDrugs"
                    name="takingDrugs"
                    value={formData.takingDrugs}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="comment">Comments</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function PatientListing() {
  // Patient listing component content
  return (
    <div>
      <h2>Patient Listing</h2>
      {/* Render Patient Listing report content */}
    </div>
  );
}

export default VisitPage;