const express = require('express');
const cors = require('cors');  // Import CORS
const connectDB = require('./config/db');
const referralRoutes = require('./routes/referralRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({ origin: 'https://accredian-frontend-task-nj16.vercel.app', credentials: true })); // Enable CORS

app.use(express.json());

app.use('/api', referralRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
