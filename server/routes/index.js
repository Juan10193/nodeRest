const express = require('express')
const app = express()

//requerir rutas
app.use(require('./usuario'))
app.use(require('./login'))



module.exports = app