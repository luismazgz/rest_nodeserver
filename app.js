//https://www.npmjs.com/package/cors
//protección del servidor
//se añade a express
//npm install cors

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();