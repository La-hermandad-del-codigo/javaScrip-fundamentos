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

function pagar(cliente, comida) {
    console.log(`${cliente.nombre} tiene que pagar ${comida.precio} soles, pero lo hace con ${cliente.dinero} soles.`)
    cliente.dinero -= comida.precio;
    mostrarEstado(cliente)
}

function mostrarEstado(cliente) {
    console.log(`${cliente.nombre} se quedo con ${cliente.dinero} soles y con ${cliente.hambre} de hambre.`)
}
