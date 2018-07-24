const argv = require('./config/yargs').argv;

const { crearArchivo, eliminarArchivo, listarArchivo} = require('./multiplicar/multiplicar');

const colors = require('colors');


/**
 * Recibir parámetros desde la consola
 */
    // let args = process.argv;
    // console.log('******************process.argv******************');
    // console.log(args);
    // console.log('*****************************************');

/**
 * Recibir parámetros usando Yargs
 */

    // console.log('******************Yargs******************');
    // console.log(argv);

/**
 * Implementación del crear usando process.argv
 */
        //let parametro = args[2];

        // let base = parametro.split('=')[1];

        // m.crearArchivo(base)
        //     .then(archivo => console.log(`Archivo creado: ${archivo}`))
        //     .catch(err => console.log(err))
            console.log('Iniciando operación ...'.magenta);
        switch (argv._[0]) {
            case 'crear':            
            console.log('Acción: ', argv._[0].toUpperCase().green);
                /**
                 * Implementación del crear usando process.argv
                 */
                    crearArchivo(argv.base)
                        .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
                        .catch(err => console.log(err))
                break;      
            case 'eliminar':
            console.log('Acción: ', argv._[0].toUpperCase().red);
                /**
                 * Implementación del eliminar usando process.argv
                 */
                    eliminarArchivo(argv.base)
                        .then(archivo => console.log(`Archivo eliminado: ${archivo.red}`))
                        .catch(err => console.log(err.red))
                break;
            case 'listar':            
            console.log('Acción: ', argv._[0].toUpperCase().magenta);
                /**
                 * Implementación del listar usando yargs
                 */
                    listarArchivo(argv.base)
                        .then(data => console.log(data.toString()))
                        .catch(err => console.log('Read ERROR: ',err))
                break;
            default:
                    console.log(`Comando "${argv._[0].red}" no reconocido`);
                break;
        }
