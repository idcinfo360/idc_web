const mongoose = require('mongoose');

const SponsorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true }
});

module.exports = mongoose.model('Sponsor', SponsorSchema);
