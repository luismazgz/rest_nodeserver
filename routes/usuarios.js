// Router es una función del paquete express
const {Router} = require('express');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPatch, usuariosPut } = require('../controllers/usuarios.controller');
const router = Router();

router.get('/',usuariosGet);

router.put('/:id',usuariosPost);

router.post('/',usuariosDelete);

router.delete('/',usuariosPatch);

router.patch('/',usuariosPut);


module.exports=router;