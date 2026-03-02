// gustavo
let nombreHeroe1 = "All Might";
let poderHeroe1 = 89;
let nivelEnergiaHeroe1 = 50;
let daño1 = 6;
let defensaHeroe1 = 4;

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

function ataque(nombre1, nombre2, ataque, energia) {
    console.log(`${nombre2} ataco a ${nombre1}`)
    defender(nombre1, nombre2, ataque, energia)
}

function defender(nombre1, nombre2, ataque, energia) {
    energiaActual = energia - ataque
    console.log(`${nombre1} recibio ${ataque} de daño por parte de ${nombre2}, le queda ${energiaActual} puntos de energia`)
    recargarEnergia(nombre1, energiaActual)
}

function recargarEnergia(nombre, energia) {
    curacion = (Math.floor(Math.random() * 10) + 1);
    console.log(`${nombre} recargo su energia en ${curacion}, actualmente tiene ${energia + curacion}`)
}

//creacion funcion especial - gustavo
function superAtaque(nombre1, nombre2,) {
    console.log(`${nombre1} realizo su super ataque ${nombreAtaque} a ${nombre2}`);
    escudoMagico(nombre1, nombre2)
}

function escudoMagico(nom1, nom2) {
    console.log(`${nom2} uso su escudo magico para anular el super ataque de ${nom1}`)

}

ataque(nombreHeroe1, nombreHeroe2, daño2, nivelEnergiaHeroe1)
superAtaque(nombreHeroe1, nombreHeroe2);