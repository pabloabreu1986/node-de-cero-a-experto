// setTimeout(() => {
//     console.log('Hola setTimeout');
// }, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Pablo',
        id
    };

    if (id === 20) {
        callback(`El usuario con id ${ id } no existe`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('Usuario de base de datos', usuario);
    }
});