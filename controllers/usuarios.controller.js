//con response y require require muestra los métodos para res y req, se pude usar sin eto pero facilita la vista en la previsualización
const {response,request} = require('express');


const usuariosGet = (req=request,res=response)=>{
    const {nombre="sin nombre",edad=0} =req.query;
    res.json({
        msg:'get API-get',
       nombre,
       edad
    })
}
const usuariosPost = (req,res=response)=>{

    const {nombre,edad} = req.body;

    res.json({
        msg:'get API-post',
        nombre,
        edad
    })
}
const usuariosPut = (req,res=response)=>{
    const {id} = req.params;
    res.json({
        msg:'get API-controlador',
        id
    })
}
const usuariosDelete = (req,res=response)=>{
    res.json({
        msg:'get API-controlador'
    })
}
const usuariosPatch = (req,res=response)=>{
    res.json({
        msg:'get API-controlador'
    })
}

module.exports = {usuariosGet,usuariosPost,usuariosPut,usuariosDelete,usuariosPatch}