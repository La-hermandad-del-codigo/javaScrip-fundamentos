let jugadores = {
    jugador1: {
        nombre: "jhefry",
        vida: 70,
        fuerza: 80,
        nivel: 22
    },

    jugador2: {
        nombre: "Gustavo",
        vida: 60,
        fuerza: 60,
        nivel: 19
    }
}

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