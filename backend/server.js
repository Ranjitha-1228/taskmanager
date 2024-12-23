const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();
// Enable CORS for all routes

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));
// Connect to MongoDB 
const uri = "mongodb+srv://Test123:test123@cluster1.lvyrj.mongodb.net/taskdetail?retryWrites=true&w=majority&appName=Cluster1";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB:', err));




const taskRoutes = require('./routes/task');
// Use the task routes
app.use('/tasks', taskRoutes);



// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
