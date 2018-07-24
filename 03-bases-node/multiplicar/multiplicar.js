const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ( ${ base } ) no es un número`);
            return;
        }
        let tabla2 = '';

        for (let i = 1; i < 11; i++) {
            tabla2 += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`files/TABLA-${base}.txt`, tabla2, (err) => {
            if (err)
                reject(err);
            else
                resolve(`TABLA-${base}.txt`);
        });
    });
}

let listarArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`La base no es un número`);
        }else{
            fs.readFile(`files/TABLA-${base}.txt`, (err, data) => {
                if (err) reject(`Error leyendo archivo`);
                resolve(data);
              });
        }
    });
}

let eliminarArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`La base no es un número`);
        }else{
            fs.unlink(`files/TABLA-${base}.txt`, (err) => {
                if (err) reject(`Error eliminado el archivo`);
                resolve(`TABLA-${base}.txt`);
              });
        }
    });
}

module.exports = {
    crearArchivo,
    listarArchivo,
    eliminarArchivo
}