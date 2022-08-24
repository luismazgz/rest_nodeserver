//con response y require require muestra los métodos para res y req, se pude usar sin eto pero facilita la vista en la previsualización
const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');


const usuariosGet = async (req = request, res = response) => {
    // const { nombre = "sin nombre", edad = 0 } = req.query;
    //para mostrar todos los usuarios
    // const usuarios = await Usuario.find();
    //limit, el número máximo de registros a mostrar
    //skip, a patir del registro n incluido
    //localhost:8080/api/usuarios?limite=5&origen=6
    // muestra todos los usuarios, await Usuario.find()
    // muestra todos los usuarios, await Usuario.find({estado:true})
    //cuenta todos usuararios, Usuario.countDocuments();
    //Usuario.countDocuments();
    const { limite = 4, origen = 0 } = req.query;
    const query = { estado: true };
    /*
    //esta forma de devolver las promesas es bloqueante, hasta que no se resulve una no ejecunta la otra
    const usuarios = await Usuario.find(query)
    .skip(Number(origen))
    .limit(Number(limite));

    const total = await Usuario.countDocuments(query);
   */
    //la siguiente forma es para ejecutar varias promesas a la vez, tarda casi la mitad de tiempo
    // destructuración de un array [total, usuarios]
    const [usuarios, total] = await Promise.all([
        Usuario.find(query)
            .skip(Number(origen))
            .limit(Number(limite)),
        Usuario.countDocuments(query)

    ]);

    res.json({
        total,
        usuarios
    });
}
//creación de usuario
const usuariosPost = async (req, res = response) => {
    //validaciones
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    //encriptacion
    //el argumento por defecto es 10 vueltas, se puede modificar a más vueltas más tarda
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    //guarda en DB
    usuario.save();
    //devuelve el usuario grabado
    //esta método está sobre escrito en el modelo usuario
    res.json({
        msg: 'post API-post',
        usuario

    })
}
//actualzación usuario
const usuariosPut = async (req = request, res = response) => {
    const { id } = req.params;
    //desestructuro el objeto y obtengo el resto que son los si voy a actualizar
    const { _id, password, google, correo, ...resto } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password, salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({ usuario })
}
const usuariosDelete = async (req, res = response) => {

    const {id} = req.params;

    //borrar fisicamente
    //const usuario = await Usuario.findByIdAndDelete(id);

    //marcar como borrado
    const usuario = await Usuario.findByIdAndUpdate(id,{estado:false});

    res.json({
        usuario
    })
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'get API-controlador'
    })
}

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch }