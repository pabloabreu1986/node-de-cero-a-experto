/**
 * Async-await
 */

/**
 * Ejemplo de async
 */
let getNombre = async() => {
    //Descomentar para disparar error de javascript
    //undefined.nombre;
    //Descomentar para disparar error
    //throw new Error('Error proporcionado por el usuario');
    return 'Pablo';
}

getNombre()
    .then(nombre => {
        console.log(nombre);
    })
    /**
     * Cualquier error de esta función dispara el catch sin tener que declararlo
     * Los throw new error tambien van al catch
     */
    .catch(err => {
        console.log('Error en getNombre():', err);
    })

/**
 * Ejemplo de async - await
 */
let getIdea = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve('Estudiar música');

        }, 3000)
    });

}
let getMoreIdeas = async() => {
    setTimeout(() => {
        return `Estudiar musica`;
    })
}


let evaluarIdeas = async() => {

    let ideas = await getIdea();

    return `${ideas} es una gran idea`;
}

evaluarIdeas()
    .then(mensaje => {
        console.log(mensaje);
    })