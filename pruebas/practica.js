// 3 platos, con nombre, precio, stock, plato nuevo y mostrar
let menu = [
    {plato: "ceviche", precio: 20, stock: 5},
    {plato: "papa huancaina", precio: 20, stock: 3},
    {plato: "arroz con pollo", precio: 20, stock: 8},
]

function nuevo(nom, pre ,sto) {
    menu.push({plato:nom, precio:pre, stock:sto })
}

function mostrar(menu) {
    menu.forEach(plato => console.log(plato));
    console.log(menu)
}

nuevo("broster", 5, 3)
mostrar(menu);

let mayor = menu.filter(mayor => mayor.stock>= 5)
console.log(mayor);

let nombre = menu.map(nombre => nombre.plato);
console.log(nombre);

let buscar = menu.find(buscar=> buscar.plato === "ceviche")
console.log(buscar);
