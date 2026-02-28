let cliente = {
    nombre: "Carlitos",
    dinero: 200,
    hambre: 60
}

let comida = {
    nombre: "Plancha de Makis",
    precio: 150,
    satisfaccion: 50
}

function ordenarComida(cliente, comida) {
    console.log(`${cliente.nombre} pidio un(a) ${comida.nombre} el cual cuesta ${comida.precio} soles.`)
    cliente.hambre -= comida.satisfaccion;
    pagar(cliente, comida);

}

function mostrarEstado(cliente) {
    console.log(`${cliente.nombre} se quedo con ${cliente.dinero} soles y con ${cliente.hambre} de hambre.`)
}
