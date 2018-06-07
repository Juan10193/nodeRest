///===================
///Puerto
///===================
process.env.PORT = process.env.PORT || 3000

///===================
///Entorno
///===================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

///===================
///Vencimiento del token
///===================
// 60 segundos
//60 minutos
//24 horas
//60 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

///===================
///SEED de autenticación
///===================

process.env.SEED = process.env.SEED || 'seed-de-desarrollo'


///===================
///Base de datos
///===================

let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB

///===================
///Google Client ID
///===================

process.env.CLIENT_ID = process.env.CLIENT_ID || "654349897956-u6rl85jgaedv1jaa3on6tqept6gvha5i.apps.googleusercontent.com"