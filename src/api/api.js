const API_BASE_URL = 'http://localhost:5000'; 

export const registerPatient = (patientData) => {
  return fetch(`${API_BASE_URL}/api/patients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patientData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to register the patient');
      }
      return response.json();
    });
};

export const fetchPatients = (filterDate) => {
  const url = filterDate
    ? `${API_BASE_URL}/api/patients?filterDate=${filterDate}`
    : `${API_BASE_URL}/api/patients`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch patient data');
      }
      return response.json();
    });
};