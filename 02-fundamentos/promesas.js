let empleados = [{
        id: 1,
        nombre: 'Pablo'
    },
    {
        id: 2,
        nombre: 'Marian'
    },
    {
        id: 3,
        nombre: 'Romualda'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

// Empleado
let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado con id: ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

//Salario
let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salario = salarios.find(salario => salario.id === empleado.id);

        if (!empleado.hasOwnProperty('id')) {
            return reject(empleado);
        } else {

            if (!salario) {
                reject(`No existe un salario para el empleado con id ${empleado.id}`);
            } else {
                resolve({
                    id: empleado.id,
                    nombre: empleado.nombre,
                    salario: salario.salario
                });
            }
        }
    });
}


//Promesas normales
// getEmpleado(2)
//     .then((empleado) => {
//         getSalario(empleado)
//             .then((salario) => {
//                 console.log(salario);
//             }, err => console.log(err))
//     }, err => console.log(err));


//Promesas encadenadas

getEmpleado(2)
    .then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })