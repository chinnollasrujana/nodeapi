require("dotenv").config();
const http = require('http');
const hostname = '0.0.0.0';

const PORT = 3000;
const server = require('./route.js'); // imports the routing file
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

//server.listen(process.env.PORT || 3000 );