// Crea un objeto 'cliente' con propiedades: nombre, dinero, hambre. Crea una función 'ordenarComida' que reciba el objeto y modifique sus propiedades.
let cliente = {
    nombre: "jhefry",
    dinero:100,
    hambre: 30
}
let plato = {
    nombre:"ceviche",
    precio: 30,
    sacear:50
}

function ordenarComida(cli, pla) {
    console.log(`el cliente ${cli.nombre} ordeno ${pla.nombre} que le costo ${pla.precio}, antes tenia ${cli.dinero} de dinero y ahora le queda ${cli.dinero-pla.precio}, antes tenia ${cli.hambre} puntos de hambre, y ahora ${cli.hambre-pla.sacear}`)
}

ordenarComida(cliente, plato)