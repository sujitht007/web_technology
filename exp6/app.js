const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const crudRoutes = require('./routes/crud');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(crudRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
