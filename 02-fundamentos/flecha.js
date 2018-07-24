// función tradicional

// function sumar(a, b) {
//     return a + b;
// }

// flecha

// let sumar = (a, b) => a + b;


// console.log(sumar(10, 5));

// ejercicio
//convertir function

// function saludar() {
//     return 'Hola mundo';
// }

// let saludar = () => 'Hola mundo';

// function saludar( nombre ) {
//     return `Hola ${ nombre }`;
// }

// let saludar = nombre => `Hola ${ nombre }`;

// console.log(saludar('Pablo'));


let deadPool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return ` ${ this.nombre } ${ this.apellido } - poder: ${ this.poder }  `
    }
};

console.log(deadPool.getNombre());