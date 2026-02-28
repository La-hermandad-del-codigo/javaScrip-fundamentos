let jugadores = {
    jugador1: {
        nombre: "jhefry",
        vida: 70,
        fuerza: 80,
        nivel: 22
    },

    jugador2: {
        nombre: "Gustavo",
        vida: 70,
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