const { response } = require('express')


const newUsuario = async (req, res = response) => {
    try {
        
        res.status(200).json({
            ok: true,
            msg: 'Nuevo Usuario'
        })
    } catch (error) {
        console.warn(error)
    }
}
module.exports ={
    newUsuario
}