
const productos = 
[
    {
        "codigoDeBarra": "1234567890123",
        "nombre": "Producto 1",
        "precio": 1000.00,
        "fechaDeVencimiento": "2025-05-05"
    },

    {
        "codigoDeBarra": "4567890123456",
        "nombre": "Producto 2",
        "precio": 2000.00,
        "fechaDeVencimiento": "2025-05-12"
    },

    {
        "codigoDeBarra": "8901234567891",
        "nombre": "Producto 3",
        "precio": 3000.00,
        "fechaDeVencimiento": "2025-05-21"
    }
]

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