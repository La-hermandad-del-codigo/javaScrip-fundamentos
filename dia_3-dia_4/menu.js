export let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 3 },
    { nombre: "Ceviche", precio: 15, stock: 5 },
    { nombre: "Chaufa", precio: 20, stock: 3 }
];

export function obtenerResumenMenu(array) {
    return array.map(m => `${m.nombre} - S/. ${m.precio}`)
}

export function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Aji de gallina", precio: 12, stock: 4 };
    menu.push(nuevoPlato);
}