let jugadores = {
    jugador1: {
        nombre: "jhefry",
        vida: 70,
        fuerza: 70,
        nivel: 22,
        defensa: 50
    },

    jugador2: {
        nombre: "Gustavo",
        vida: 65,
        fuerza: 60,
        nivel: 19,
        defensa: 50
    }
}

let aumentoFuerza = 0;
let disminucionVida = 0;
let disminucionFuerza = 0;
let daño = 0;
let dañoRecibido = 0;


function entrenamiento(jugador) {
    jugador.vida += 1;
    aumentoFuerza = Math.floor(Math.random() * 5) + 1;
    jugador.fuerza += aumentoFuerza;
    console.log(`El jugador ${jugador.nombre} aumento su fuerza en ${aumentoFuerza}, ahora tiene ${jugador.fuerza} en total y su vida aumento en 1, ahora tiene ${jugador.vida} en total`);
}

function lesion(jugador) {
    disminucionVida = Math.floor(Math.random() * 15) + 1;
    disminucionFuerza = Math.floor(Math.random() * 10) + 1;
    jugador.vida -= disminucionVida;
    jugador.fuerza -= disminucionFuerza;
    console.log(`El jugador ${jugador.nombre} ha sufrido una lesión, lo que disminuyo su vida en ${disminucionVida} y ahora tiene ${jugador.vida}, tambien su fuerza disminuyo en ${disminucionFuerza} y ahora tiene ${jugador.fuerza}`)
}

function ataque(jugador1, jugador2) {
    daño = jugador2.fuerza + jugador2.nivel;
    console.log(`${jugador2.nombre} ataco a ${jugador1.nombre} con un ataque de ${daño} poder.`)
    defender(jugador1, jugador2, daño)
}


function defender(jugador1, jugador2, daño) {
    dañoRecibido = (jugador1.defensa - daño) * -1;
    jugador1.vida -= dañoRecibido;
    console.log(`El jugador ${jugador1.nombre} recibio ${dañoRecibido} de daño de parte de ${jugador2.nombre} y ahora tiene ${jugador1.vida} de vida.`);
}

const { jugador1, jugador2 } = jugadores;


console.log(`Presentacion de jugadores:`);
console.log(`El primer jugador es ${jugador1.nombre}, esta en el nivel ${jugador1.nivel}, con un total de ${jugador1.vida} puntos de vida,\nademás cuenta con ${jugador1.fuerza} puntos de fuerza, y tiene ${jugador1.defensa} puntos de defensa\n`)
console.log(`El segundo jugador es ${jugador2.nombre}, esta en el nivel ${jugador2.nivel}, con un total de ${jugador2.vida} puntos de vida,\nademás cuenta con ${jugador2.fuerza} puntos de fuerza, y tiene ${jugador2.defensa} puntos de defensa`)

console.log(`\nEntrenamiento de jugadores:`);

entrenamiento(jugador1)
entrenamiento(jugador2)
entrenamiento(jugador1)
entrenamiento(jugador2)

console.log(`\nLesiones de jugadores:`);
lesion(jugador1)
lesion(jugador2)

console.log(`\nataque de jugadores:`);
ataque(jugador1, jugador2)
console.log("");
ataque(jugador2, jugador1)