const express = require('express');
const cors = require('cors');  
const connectDB = require('./config/db');
const referralRoutes = require('./routes/referralRoutes');
const { submitReferral } = require('../controllers/referralController');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({ origin: 'https://accredian-frontend-task-nj16.vercel.app', credentials: true })); 
app.use(express.json());

app.post('/api', submitReferral);

// Simple GET method
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
