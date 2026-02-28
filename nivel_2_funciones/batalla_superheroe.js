//jhefry
let nombreHeroe2 = "Frieren";
let poderHeroe2 = 85;
let nivelEnergiaHeroe2 = 98;
let daño2 = 6;
let defensaHeroe2 = 3;

//Declaracion de variables
let energiaActual = 0;
let nombreAtaque = "PLUS ULTRA";
let curacion = 0;

function ataque(nombre1, nombre2, ataque, energia, recuperacion) {
    console.log(`${nombre2} ataco a ${nombre1}`)
    defender(nombre1, nombre2, ataque, energia, recuperacion)
}

function defender(nombre1, nombre2, ataque, energia, recuperacion) {
    energiaActual = energia - ataque
    console.log(`${nombre1} recibio ${ataque} de daño por parte de ${nombre2}, le queda ${energiaActual} puntos de energia`)
    recargarEnergia(nombre1, energiaActual, recuperacion)
}


function escudoMagico(nom1, nom2) {
    console.log(`${nom2} uso su escudo magico para anular el super ataque de ${nom1}`)

}