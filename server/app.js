const express = require('express');
const app = express();

// Define and use your routes
const patientsRoutes = require('./routes/patients');
app.use('/api/patients', patientsRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
