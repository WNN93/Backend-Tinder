const {Router} = require('express')
const router = Router()
const { holaMundo, insertarCliente, obtenerClientes } = require("../controllers/controllers")


router.get('/', holaMundo)
router.post('/cliente', insertarCliente)
router.get('/clientes', obtenerClientes)


module.exports = router;

