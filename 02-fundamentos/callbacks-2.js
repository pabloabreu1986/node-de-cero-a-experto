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


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe el empleado con id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    salario = salarios.find(salario => salario.id === empleado.id);

    if (!salario) {
        callback(`El empleado con id ${empleado.id} no tiene salario`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salario.salario,
            id: empleado.id
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);;
    } else {
        getSalario(empleado, (err, resp) => {
            if (err) {
                return console.log(err);;
            } else {
                return console.log(resp);
            }
        });
    }
});