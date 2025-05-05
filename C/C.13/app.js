
function obtenerSumaMaxima(arr) {
    let sumaMaxima = 0
    let todosNegativos = true

    sumaMaxima = arr.reduce((acc, curr) => acc + curr, 0)

    return sumaMaxima
}

// Revisar Brute force y Kadane