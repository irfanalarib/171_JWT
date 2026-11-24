const express = require('express');
const connectDatabase = require('./config/db');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', require('./routes/api'));

// Start Server
async function startServer() {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();