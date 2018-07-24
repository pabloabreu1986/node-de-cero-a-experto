let deadPool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return ` ${ this.nombre } ${ this.apellido } - poder: ${ this.poder }  `
    }
};

//console.log(` ${ deadPool.getNombre() } `);

// PARA EXTRAER UNA PROPIEDAD DEL OBJETO deadPool Y PONERLO EN UNA VARIABLE
// forma tradicional

// let nombre = deadPool.nombre;
// let apellido = deadPool.apellido;
// let poder = deadPool.poder;

// destructuración
// nombre: otroNombre es para asignar otro nombre( otroNombre ) a esa variable( nombre )

let { nombre: nombreHeroe, apellido, poder } = deadPool;

console.log(nombreHeroe, apellido, poder);