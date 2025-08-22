const express = require('express');
const router = express.Router();
const MarketingInquiry = require('../models/MarketingInquiry');

// POST /api/marketing - Submit marketing partnership inquiry
router.post('/', async (req, res) => {
  try {
    const { companyName, contactPerson, email, phone, budget, marketingGoals, targetAudience, message } = req.body;
    
    // Basic validation
    if (!companyName || !contactPerson || !email || !phone || !budget) {
      return res.status(400).json({ 
        success: false, 
        message: 'Required fields: companyName, contactPerson, email, phone, budget' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    const newInquiry = new MarketingInquiry({
      companyName,
      contactPerson,
      email,
      phone,
      budget,
      marketingGoals,
      targetAudience,
      message
    });

    await newInquiry.save();

    res.status(201).json({
      success: true,
      message: 'Marketing partnership inquiry submitted successfully',
      data: {
        id: newInquiry._id,
        companyName: newInquiry.companyName,
        submittedAt: newInquiry.submittedAt
      }
    });

  } catch (error) {
    console.error('Marketing inquiry submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit marketing inquiry'
    });
  }
});

// GET /api/marketing - Get all marketing inquiries (admin only)
router.get('/', async (req, res) => {
  try {
    const inquiries = await MarketingInquiry.find()
      .sort({ submittedAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });

  } catch (error) {
    console.error('Error fetching marketing inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch marketing inquiries'
    });
  }
});

// GET /api/marketing/:id - Get specific marketing inquiry
router.get('/:id', async (req, res) => {
  try {
    const inquiry = await MarketingInquiry.findById(req.params.id).select('-__v');
    
    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Marketing inquiry not found'
      });
    }

    res.json({
      success: true,
      data: inquiry
    });

  } catch (error) {
    console.error('Error fetching marketing inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch marketing inquiry'
    });
  }
});

// PUT /api/marketing/:id/status - Update inquiry status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'contacted', 'in-discussion', 'completed', 'rejected'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Valid statuses: ' + validStatuses.join(', ')
      });
    }

    const inquiry = await MarketingInquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Marketing inquiry not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: inquiry
    });

  } catch (error) {
    console.error('Error updating marketing inquiry status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update inquiry status'
    });
  }
});

module.exports = router;
