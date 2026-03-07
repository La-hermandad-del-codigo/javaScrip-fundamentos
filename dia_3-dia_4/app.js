// 1) VARIABLES + OBJETOS + ARRAYS


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
    verificarEstadoGeneral(menu)
});

document.getElementById("btnComprar").addEventListener("click", () => {
    let nombrePlatoC = document.getElementById("comprarPlato").value;
    let cantidadPlatoC = document.getElementById("cantidadPlato").value;

    let compra = []
    compra.push(venderPlato(nombrePlatoC, cantidadPlatoC));
    renderMenu();
})