const optiones = {

    base: {
        //   demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', optiones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', optiones)
    .help()
    .argv;

module.exports = {
    argv
}