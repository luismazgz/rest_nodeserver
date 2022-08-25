// Router es una función del paquete express
const {Router} = require('express');
const {check} = require('express-validator');
//si pongo llaves en validación me da error
const  validacion  = require("../middlewares/validacion");
const { validarRolDB, existeEmailDB, existeUsuarioIdDB } = require('../helpers/validaciones_db');

const { usuariosGet, usuariosPost, usuariosDelete, usuariosPatch, usuariosPut } = require('../controllers/usuarios.controller');


const router = Router();


//el segundo argumento es el middleware, i se manda 2 reconoce al segundo argumento como el controlador
//el segundo puede ser uno o más, si es más hay que enviarlos como un array 
//si existen errores se cargan en errors que es comprobado cuando entra en el controlador
router.get('/',usuariosGet);

//para verificar el id mongo tiene una función que comprueba que es un id de mongo isMongoId
router.put('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioIdDB),
    check('rol').custom(validarRolDB),
    validacion
],usuariosPut);
//cada check se encarga de validar y mandar a las lista de errores los errores si estos existen
//para validar los roles, en mongo, en usuarios, se crea directamente una nueva colección (create collection)
//nombre: roles y entrar en roles (add data > insert Document: "rol":"ADMIN_ROLE")  (add data > insert Document: "rol":"USER_ROLE") (add data > insert Document: "rol":"VENTAS_ROLE")
//el check custom es una validación personalizada
//busca rol en la db pero si se quiere simplicar re puede poner así
//check('rol','No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe ser más de 6 letras').isLength({min:6}),
    check('correo','el correo no es válido').isEmail(),
    check('correo').custom(existeEmailDB),
    check('rol').custom(validarRolDB),
    validacion
],usuariosPost);

router.delete('/:id',[
    check('id','No es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioIdDB),
        validacion
    ],usuariosDelete);

router.patch('/',usuariosPatch);

module.exports=router;