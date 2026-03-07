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

function contarPlatos() {
    return `<p>En el menú hay un total de ${menu.length} platos</p>`;
}

