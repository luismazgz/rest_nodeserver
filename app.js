//Mongoose es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones
//https://www.npmjs.com/package/mongoose

//bcrypjs
//encriptacion de contraseñas
//npm i bcryptjs

//express-validator
//https://www.npmjs.com/package/express-validator
//npm i express-validator

//git status para confirmar que no hay commits pendientes
//si después de subir a producción está el archivo .env, borrarlo
//git rm .env --cached rm '.env'
//git add
//git commit -m "borra env"

//varibales de entorno de heroku
//ver variables de entorno: heroku config
//crear variables de entorno: heroku config:set nombrevariable="valor" , también se puede crear desde la página en setting
//borrarla, heroku config:unset nombre

/**
 * A los que no les conectaba su conexión de Heroku en fase "Producción" a través de Postman ( Ejemplo método GET: retornaba un error por HTML en vez de el listado de usuarios ) y sí les funcionaba su conexión de forma local la solución es que:

1) Deben ingresar a "MongoDB Atlas (desde el navegador).
2) Una vez que se hayan logueado con sus datos deben ir a su proyecto cargado en MongoDB (la BD de la cafetería).
3) En las opciones que aparecen en el lado izquierdo deben ir a la opción de "Security" -> "Network Access".
4) Modifican el "IP Access List", la IP que aparezca lo más seguro es que sea la de ustedes (por lo que tendría acceso restringido). En esa IP, al lado derecho, deben hacer clic en el botón de "edit". Cuando se abra el recuadro aparecerá un botón arriba que indicará que dan acceso de conexión desde cualquier lugar ( cambiando el IP Address a: 0.0.0.0/0 de forma automática ).
5) Esperan a que Atlas procese la solicitud y se dirigen a Heroku.
6) Deben resetear la conexión de Heroku al lado del botón que dice "Open App". En el botón que dice "More" -> "Restart all dynos".
7) Una vez reiniciado el servicio, prueben en Postman sus métodos en fase "Producción" con su URL de Heroku.

 */

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();