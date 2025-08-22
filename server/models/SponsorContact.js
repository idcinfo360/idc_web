const mongoose = require('mongoose');

const SponsorContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('SponsorContact', SponsorContactSchema);
