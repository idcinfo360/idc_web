
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const sponsorsRoute = require('./routes/sponsors');
const communityRoute = require('./routes/community');
const marketingRoute = require('./routes/marketing');
const sponsorContactRoute = require('./routes/sponsorContact');

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/sponsors', sponsorsRoute);
app.use('/api/community', communityRoute);
app.use('/api/marketing', marketingRoute);
app.use('/api/sponsor-contact', sponsorContactRoute);

app.get('/', (req, res) => {
  res.send('IDC Server Running');
});

// Connect to MongoDB using env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
