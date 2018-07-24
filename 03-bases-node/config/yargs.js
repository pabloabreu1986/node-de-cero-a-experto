const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
            .command('listar','Imprime en consola la tabla de multiplicar', opts)
            .command('crear','Crea la tabla de multiplicar', opts)
            .command('eliminar','Elimina una tabla de multiplicar', opts)
            .help()
            .argv;

module.exports = {
    argv
}