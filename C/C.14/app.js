
function encontrarSigno(fecha) {
    let arrayFecha = fecha.split("-")
    const dia = +arrayFecha[0]
    const mes = +arrayFecha[1]
    
    if ((mes == 12 && dia >= 22) || (mes == 1 && dia < 20)) {
        console.log("Eres Capricornio");
    } else if ((mes == 1 && dia >= 20) || (mes == 2 && dia < 19)) {
        console.log("Eres Acuario");
    } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia < 21)) {
        console.log("Eres Piscis");
    } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia < 20)) {
        console.log("Eres Aries");
    } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia < 21)) {
        console.log("Eres Tauro");
    } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia < 21)) {
        console.log("Eres Géminis");
    } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia < 23)) {
        console.log("Eres Cáncer");
    } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia < 23)) {
        console.log("Eres Leo");
    } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia < 23)) {
        console.log("Eres Virgo");
    } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia < 23)) {
        console.log("Eres Libra");
    } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia < 22)) {
        console.log("Eres Escorpio");
    } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia < 22)) {
        console.log("Eres Sagitario");
    } else {
        console.log("Fecha inválida");
    }
}

