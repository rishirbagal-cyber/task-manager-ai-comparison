/**
 * Dev Confessions API - Main Entry File
 * Refactored using AI into an MVC Architecture.
 */

require('dotenv').config();
const express = require('express');
const confessionRoutes = require('./routes/confessions');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Main API Routes
app.use('/confessions', confessionRoutes);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API Target: ${process.env.API_BASE_URL}`);
});
