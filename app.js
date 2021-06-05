
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


 crearArchivo(argv.b , argv.l , argv.m)
     .then(archivo => console.log(archivo, 'Creado'))
    .catch(err => console.log(err))
