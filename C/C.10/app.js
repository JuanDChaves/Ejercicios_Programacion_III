
const estilos = ["Jazz", "Blues"]
console.log(estilos.reduce((acc, curr) => acc + "," + curr))

estilos.push("Rock'n'Roll")
console.log(estilos.reduce((acc, curr) => acc + "," + curr))

if (estilos.length % 2 == 1) {
    estilos[Math.floor(estilos.length/2)] = "Heavy Metal"
}
console.log(estilos.reduce((acc, curr) => acc + "," + curr))

estilos.shift()
console.log(estilos.reduce((acc, curr) => acc + "," + curr))

estilos.unshift("Rap", "Reggae")
console.log(estilos.reduce((acc, curr) => acc + "," + curr))