const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve the frontend (static files)
app.use(express.static(path.join(__dirname)));

// Example API route
app.get('/api/react', (req, res) => {
    const { cookie, link, react } = req.query;
    res.json({
        message: `Reaction: ${react} to post ${link} with cookie ${cookie}`,
    });
});

// Fallback to index.html for other routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});