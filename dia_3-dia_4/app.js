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
    let clase = "";
    let estado = "";
    for (let i = 0; i < menu.length; i++) {

        const plato = menu[i];

        if (plato.stock >= 1 && plato.stock <= 3) {
            estado = "Stock bajo"
            clase = "bajo"
        } else if (plato.stock == 0) {
            estado = "Agotado"
            clase = "agotado"
        } else {
            estado = "Normal"
            clase = "normal"
        }

        html += `<li class=${clase}>${plato.nombre.toUpperCase()}</li>`;
        html += `<p>S/ ${plato.precio}</p>`;
        html += `<p>Stock: ${plato.stock}</p>`;
        html += `<p>Estado: ${estado}</p>`;

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

function venderPlato(nombre, cantidad) {
    let plato = menu.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());

    if (!plato) {
        alert("Plato no encontrado")

    } else if (plato.stock < cantidad) {
        alert("No disponible")

    } else {
        plato.stock -= cantidad;
        alert("Compra realizada")
    }

}

function verificarEstadoGeneral(menu) {

    let disponible = (menu.filter(agotados => agotados.stock >= 1).length);
    let bajo = (menu.filter(bajo => bajo.stock >= 1 && bajo.stock <= 3).length);
    let agotado = (menu.filter(agotado => agotado.stock <= 1).length);

    const output = document.getElementById("output");

    let html = "<br>"
    html += `<table border="1">`;
    html += `<tr><td>Disponibles</td> <td>  ${disponible}  </td></tr>`;
    html += `<tr><td>Tienen un stock bajo</td> <td>  ${bajo}  </td></tr>`;
    html += `<tr><td>Cantidad de platos agotados</td> <td>  ${agotado}  </td></tr>`;
    html += "</table>";
    output.innerHTML += html;
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
    verificarEstadoGeneral(menu)
});

document.getElementById("btnComprar").addEventListener("click", () => {
    let nombrePlatoC = document.getElementById("comprarPlato").value;
    let cantidadPlatoC = document.getElementById("cantidadPlato").value;

    let compra = []
    compra.push(venderPlato(nombrePlatoC, cantidadPlatoC));
    renderMenu();
})