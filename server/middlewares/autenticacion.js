const jwt = require('jsonwebtoken')

///=============================
///VERIFICAR TOKEN
///=============================

let verificaToken = (req, res, next) => {

    let token = req.get('token') // traer el header

    jwt.verify(token, process.env.SEED, (err, decode) => { //verificar token
        if (err) {
            return res.status(401).json({ //no autorizado
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }
        req.usuario = decode.usuario
        next()
    })

}

///=============================
///VERIFICAR Rol admin
///=============================

let verificaAdmon_Role = (req, res, next) => {
    let usuario = req.usuario

    if (usuario.role === 'ADMIN_ROLE') {
        next()
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }

}



module.exports = {
    verificaToken,
    verificaAdmon_Role
}