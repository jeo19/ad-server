const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js'); // import database
const route = require('./route.js');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'html'));
db(); // The database running
app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);
// Error handle
app.listen(8080, () => {
    console.log('Express App on port 8080!');
});
