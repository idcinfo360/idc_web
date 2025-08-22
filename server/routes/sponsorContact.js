const express = require('express');
const router = express.Router();
const SponsorContact = require('../models/SponsorContact');

// Submit sponsor contact
router.post('/', async (req, res) => {
  const { name, email, company, message } = req.body;
  const contact = new SponsorContact({ name, email, company, message });
  await contact.save();
  res.json({ success: true });
});

module.exports = router;
