// 3 platos, con nombre, precio, stock, plato nuevo y mostrar
let menu = [
    {plato: "ceviche", precio: 20, stock: 5},
    {plato: "papa huancaina", precio: 30, stock: 3},
    {plato: "arroz con pollo", precio: 10, stock: 8},
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

console.log("/ metodos")

function filtrar(menu) {
    let filtro = menu.filter(filtro => filtro.precio >= 20)
    console.log(filtro)
}

function buscando(menu) {
    let buscar = menu.find(buscar => buscar.plato === "ceviche")
    console.log(buscar)
}

function mapear(menu) {
    
    let mapeo = menu.map(mapeo => `El plato ${mapeo.plato} cuesta ${mapeo.precio} y hay ${mapeo.stock}`)
    console.log(mapeo)
}

filtrar(menu);

buscando(menu);

mapear(menu);