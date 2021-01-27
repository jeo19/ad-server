const express = require('express');
const path = require('path');
const router = express.Router(); // Separation a route
router.get('/', (req, res) => {
    // Connect to a route instead an app
    res.sendFile(path.join(__dirname, 'html', 'main.html'));
});
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'about.html'));
});
module.exports = router; // Make a moudle
