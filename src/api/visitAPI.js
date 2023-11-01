import axios from 'axios';

const baseURL = 'http://localhost:5000/api/visits';

// Function to create a new visit
const createVisit = async (visitData) => {
  try {
    const response = await axios.post(baseURL, visitData);
    return response.data;
  } catch (error) {
    console.error('Error creating visit:', error);
    throw error;
  }
};

// Function to get a list of all visits
const getAllVisits = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error getting visits:', error);
    throw error;
  }
};

export { createVisit, getAllVisits };
