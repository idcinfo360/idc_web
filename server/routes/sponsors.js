const express = require('express');
const router = express.Router();
const Sponsor = require('../models/Sponsor');

// Get all sponsors
router.get('/', async (req, res) => {
  const sponsors = await Sponsor.find();
  res.json(sponsors);
});

// Add a sponsor
router.post('/', async (req, res) => {
  const { name, logo } = req.body;
  const sponsor = new Sponsor({ name, logo });
  await sponsor.save();
  res.json(sponsor);
});

module.exports = router;
