// Crea 3 funciones: ataque(), defender() y recargarEnergia(). Cada función debe modificar una variable global 'energia' y mostrar el resultado con console.log
const nombre = "heroe1"
let vida = 100
let poder = 70
const defensa = 20
let energía = 80
const ciudad = "ciudad1"
const enemigo = "enemigo1"
let daño=0

function ataque(poder) {
     vida -= poder

    console.log(`el ${nombre} recibio daño y le queda ${vida}`)        
}

function defender(poder, defensa, vida) {
    daño = (defensa - poder)*-1
    vida -= daño
    console.log(`el ${nombre} fue atacado pero se defendio y recibio ${daño} de daño y ahora le queda ${vida} de vida`)
}

function recargarEnergia(ener) {
    energía+= ener
    console.log(`El ${nombre} se concentro y cargo su energia, ahora tiene ${energía}`)
}

ataque(poder)
defender(50, defensa, vida)
recargarEnergia(10)