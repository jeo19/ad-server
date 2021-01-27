const express = require('express');
const path = require('path');
const app = express();
const route = require('./route.js');
app.use('/', route);
app.use((req, res, next) => {
    res.status(404).send(`Doesn't correspondence address`);
});
app.use((err, req, res, next) => {
    console.error(err.stack); //Display the errors
    res.status(500).send('Error at a server');
});
app.listen(8080, () => {
    console.log('Express App on port 8080!');
});
