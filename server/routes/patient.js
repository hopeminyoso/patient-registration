const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  user: String,
  age: Number,
  height: Number,
  weight: Number,
});

module.exports = mongoose.model('Patient', patientSchema);
