import productos from "../D.02/productos.js"

for (let producto of productos) {
    if (producto["precio"] % 2 === 0) {
        producto["moneda"] = "USD"
    } else {
        delete producto.fechaDeVencimiento
    }
}

function mostrarPropiedades(productos) {
    for (let producto of productos) {
        console.log("*******")
        Object.entries(producto).forEach(
            ([key, value]) => {
            console.log(`${key}: ${value}`)
            }
        )       
    }
}

mostrarPropiedades(productos)
