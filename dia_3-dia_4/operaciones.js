import { menu } from "./menu.js";

export function verificarEstadoGeneral(menu) {
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

export function buscarPlatoPorNombre(nombrePlato) {
    let plato = menu.find(m => m.nombre.toLowerCase() === nombrePlato.toLowerCase());
    if (!plato) {
        return "No encontrado";
    }
    return `${plato.nombre} - S/. ${plato.precio} - Stock: ${plato.stock}`;
}

export function filtrarStockBajo() {
    return menu.filter(m => m.stock <= 3)
}

export function venderPlato(nombre, cantidad) {
    let plato = menu.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
    let mensaje = {
        ok:false,
        mensaje
    };
    if (!plato) {
        mensaje.ok=false;
        mensaje.mensaje="EL plato no existe";

    } else if (plato.stock < cantidad) {
        mensaje.ok=false;
        mensaje.mensaje="Cantidad invalida";

    } else {
        plato.stock -= cantidad;
        mensaje.ok=true;
        mensaje.mensaje="Venta";
    }

}

export function contarPlatos() {
    return `<p>En el menú hay un total de ${menu.length} platos</p>`;
}

export function simularRespuestaServidor(resultado) {
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     const falla = Math.random() < 0.3;
     if (falla) {
       reject("Error del servidor simulado.");
     } else {
       resolve(resultado);
     }
   }, 2000);
 });
}

export async function venderPlatoAsync(nombre, cantidad) {
 const resultado = venderPlato(nombre, cantidad);

 if (!resultado.ok) {
   throw new Error(resultado.mensaje);
 }

 const respuesta = await simularRespuestaServidor(resultado.mensaje);
 return respuesta;
}