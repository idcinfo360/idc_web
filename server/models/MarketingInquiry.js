const mongoose = require('mongoose');

const marketingSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  contactPerson: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  budget: {
    type: String,
    required: true
  },
  marketingGoals: {
    type: String,
    trim: true
  },
  targetAudience: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'in-discussion', 'completed', 'rejected'],
    default: 'pending'
  }
});

module.exports = mongoose.model('MarketingInquiry', marketingSchema);
