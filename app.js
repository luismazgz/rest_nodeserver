//Mongoose es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones
//https://www.npmjs.com/package/mongoose

//bcrypjs
//encriptacion de contraseñas
//npm i bcryptjs

//express-validator
//https://www.npmjs.com/package/express-validator
//npm i express-validator

//si después de subir a producción está el archivo .env, borrarlo
//git rm .env --cached rm '.env'
//git add
//git commit -m "borra env"

//varibales de entorno de heroku
//ver variables de entorno: heroku config
//crear variables de entorno: heroku config:set nombrevariable="valor" , también se puede crear desde la página en setting
//borrarla, heroku config:unset nombre

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();