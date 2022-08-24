//esquema y modelo
const { Schema,model } = require("mongoose");
//se hace la validación
const RoleSchema = Schema({
    rol:{
        type:String,
        required:[true,'El rol es obligatorio']
    }
});
//se exporta con el nombre role
module.exports = model('Role', RoleSchema);