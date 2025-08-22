const express = require('express');
const router = express.Router();
const CommunityHighlight = require('../models/CommunityHighlight');

// Get all highlights
router.get('/', async (req, res) => {
  const highlights = await CommunityHighlight.find();
  res.json(highlights);
});

// Add a highlight
router.post('/', async (req, res) => {
  const { title, desc, img } = req.body;
  const highlight = new CommunityHighlight({ title, desc, img });
  await highlight.save();
  res.json(highlight);
});

module.exports = router;
