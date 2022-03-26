const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  startDate: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true },
  department: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);