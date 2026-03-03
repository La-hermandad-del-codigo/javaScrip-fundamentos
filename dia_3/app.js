// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Ceviche", precio: 15, stock: 5 },
    { nombre: "Chaufa", precio: 20, stock: 6 }
];

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = ""; // limpiar

    // crear una lista HTML simple
    let html = "<ul>";

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
    }

    html += "</ul>";
    output.innerHTML = html;
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Aji de gallina", precio: 12, stock: 4 };
    menu.push(nuevoPlato);
}

function contarPlatos() {
    for (let i = 0; i <= menu.length; i++) {
        if (i == menu.length) {
            console.log(`Hay un total de ${i} platos`);
        }
    }
}

//4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
    renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
    agregarPlatoDemo();
    renderMenu();
});


contarPlatos()
