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
let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con id: ${id}`);
    } else {
        return empleadoDB;
    }
}

//Salario
let getSalario = async(empleado) => {

    let salario = salarios.find(salario => salario.id === empleado.id);

    if (!empleado.hasOwnProperty('id')) {
        throw new Error(empleado);
    } else {

        if (!salario) {
            throw new Error(`No existe un salario para el empleado con id ${empleado.id}`);
        } else {
            let emplea = {
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salario.salario
            }
            return emplea;
        }
    }
}


let getInfo = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de $ ${resp.salario}`;

}

getInfo(2)
    .then(message => console.log(message))
    .catch(err => console.log(err))