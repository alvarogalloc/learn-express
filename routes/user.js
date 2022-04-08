const { Router } = require('express')
const {newUsuario}   = require('../controllers/user')

const router = Router()

router.get('/register', newUsuario)


module.exports = router