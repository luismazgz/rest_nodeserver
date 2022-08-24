//Mongoose es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones
//https://www.npmjs.com/package/mongoose

//bcrypjs
//encriptacion de contraseñas
//npm i bcryptjs

//express-validator
//https://www.npmjs.com/package/express-validator
//npm i express-validator

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();