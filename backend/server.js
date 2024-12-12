const express = require('express');
const path = require('path');
// const connectDB = require('./db');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const mobileRouter = require('./routes/mobile.router');

const app = express();

// connectDB();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use('/site', express.static(path.join(__dirname, 'public')));

// MongoDB Connection
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }
mongoose.connect('mongodb+srv://pandu:test@123@cluster0.rekc5.mongodb.net/todoappdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/mobiles', mobileRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
