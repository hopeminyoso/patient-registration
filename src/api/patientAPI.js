import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; 
const createPatient = async (patientData) => {
  try {
    const response = await axios.post(`${baseURL}/patients/register`, patientData);
    return response.data;
  } catch (error) {
    console.error('Error creating patient:', error);
    throw error;
  }
};

const getAllPatients = async () => {
  try {
    const response = await axios.get(`${baseURL}/patients`);
    return response.data;
  } catch (error) {
    console.error('Error getting patients:', error);
    throw error;
  }
};

export { createPatient, getAllPatients };
