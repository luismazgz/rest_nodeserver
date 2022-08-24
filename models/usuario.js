const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

//sobreescribir un método llamado getToJSON
UsuarioSchema.methods.toJSON = function(){
    //saco __v (version) y password y el resto de argumento los llamo usuario
    const {__v,password,...usuario} = this.toObject();
    return usuario
}

// poner Usuario en minúscula, Mongo le añadirá una s al final
module.exports = model('Usuario', UsuarioSchema);
