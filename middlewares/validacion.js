
const { validationResult } = require('express-validator');
/**
 * 
 * Ejecutar cualquier código.Realizar cambios en la solicitud y los objetos de respuesta.Finalizar el ciclo de solicitud/respuestas.Invocar la siguiente función de middleware en la pila.
https://expressjs.com/es/guide/using-middleware.html
 */
//los middlewares tienes como argumentos req,res y next, next es un argumento que indica que si pasa el ete middleware sigue con el siguiente
//el nex pasa del check a check
const validaciones = (req, res, next) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}
//si meto llaves en validacione me da error
module.exports = validaciones;