// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 3 },
    { nombre: "Ceviche", precio: 15, stock: 5 },
    { nombre: "Chaufa", precio: 20, stock: 3 }
];

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = ""; // limpiar
    // crear una lista HTML simple
    let html = contarPlatos();
    html += "<ul>";
    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        html += `<li>${plato.nombre.toUpperCase()}</li>`;
        html += `<p>S/ ${plato.precio}</p>`;
        html += `<p>Stock: ${plato.stock}</p>`;
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
    return `<p>En el menú hay un total de ${menu.length} platos</p>`;
}

function buscarPlatoPorNombre(nombrePlato) {
    let plato = menu.find(m => m.nombre.toLowerCase() === nombrePlato.toLowerCase());
    if (!plato) {
        return "No encontrado";
    }
    return `${plato.nombre} - S/. ${plato.precio} - Stock: ${plato.stock}`;
}

function filtrarStockBajo() {
    return menu.filter(m => m.stock <= 3)
}

function obtenerResumenMenu(array) {
    return array.map(m => `${m.nombre} - S/. ${m.precio}`)
}

function renderLista(titulo, array) {
    const output = document.getElementById("output");
    output.innerHTML = "";

    let html = `${titulo}`
    html += "<ul>"
    for (let i = 0; i < array.length; i++) {
        html += `<li>${array[i]}</li>`
    }
    html += "</ul>";
    output.innerHTML = html;
}


//4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
    renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
    agregarPlatoDemo();
    renderMenu();
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    let nombrePlato = document.getElementById("inputBuscar").value;
    let resultado = [];
    resultado.push(buscarPlatoPorNombre(nombrePlato));
    renderLista("Elementos encontrados", resultado)
});

document.getElementById("btnStockBajo").addEventListener("click", () => {
    let filtrado = obtenerResumenMenu(filtrarStockBajo())
    renderLista("Producto con stock menor a 3", filtrado)
});

document.getElementById("btnResumen").addEventListener("click", () => {
    let resumen = obtenerResumenMenu(menu);
    renderLista("Resumen del menu", resumen);
});
