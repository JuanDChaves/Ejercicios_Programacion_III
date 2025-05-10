
const producto = {
    "codigoDeBarra": "1234567890123",
    "nombre": "Producto 1",
    "precio": 1000.00,
    "fechaDeVencimiento": "2025-05-05"
}

function mostrarPropiedades(object) {
    Object.entries(object).forEach(
        ([key, value]) => {
            console.log(`${key}: ${value}`)
        }
    )
}

mostrarPropiedades(producto)