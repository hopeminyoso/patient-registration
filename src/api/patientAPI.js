import axios from 'axios';

const baseURL = 'http://localhost:5000/api/patients'; // Replace with your actual backend server URL

// Function to create a new patient
const createPatient = async (patientData) => {
  try {
    const response = await axios.post(baseURL, patientData);
    return response.data;
  } catch (error) {
    console.error('Error creating patient:', error);
    throw error;
  }
};

// Function to get a list of all patients
const getAllPatients = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error getting patients:', error);
    throw error;
  }
};

// Define other patient-related functions (update, delete, etc.) as needed

export { createPatient, getAllPatients };

