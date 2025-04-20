
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

for (mes in meses) {
    console.log(mes)
}

for(let i = 0; i < meses.length; i++) {
    console.log(`${meses[i]} es el mes numero ${i + 1}`)
}