//require para una validación personalizada
const Role = require('../models/role');
const Usuario = require('../models/usuario');


//comprobar que el rol existe en la DB
const validarRolDB = async (rol = "") => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`el rol ${rol} no es admitido en la DB`);
    }
}

//comprobar que el correo existe
//https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
//{correo:correo} es igual a {correo}
//devuelve null, se valida como false
//400 Bad Request Server didn't understand the URL you gave it.


const existeEmailDB = async (correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`el correo ${correo} ya existe en la DB`);

    }
}

const existeUsuarioIdDB = async (id) => {
    const existeUsuId = await Usuario.findById(id);
    if (!existeUsuId) {
        throw new Error(`el id: ${id} NO existe en la DB`);

    }
}



module.exports = { validarRolDB, existeEmailDB, existeUsuarioIdDB };