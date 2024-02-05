const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://vatsalpipalava:vatsal0669@todocluster.j82xxkq.mongodb.net/todoDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routers
const itemRouter = require('./routers');

// Use routers
app.use('/', itemRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
