const express = require('express');
const app = express();
require('dotenv').config();
const meetingRoutes = require('./routes/meetingRoutes');
const PORT = process.env.PORT || 5000; // Set the port number (you can change it as needed)

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', meetingRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));