let cliente = {
    nombre: "Carlitos",
    dinero: 200,
    hambre: 60
}


function ordenarComida(cliente, comida) {
    console.log(`${cliente.nombre} pidio un(a) ${comida.nombre} el cual cuesta ${comida.precio} soles.`)
    cliente.hambre -= comida.satisfaccion;
    pagar(cliente, comida);

}
