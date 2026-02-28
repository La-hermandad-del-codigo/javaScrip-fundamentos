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
