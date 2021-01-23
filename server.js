const http = require('http'); // import the server module
http.createServer((request, response) => { // Creating the server method
  console.log('server start!');
}).listen(8080);