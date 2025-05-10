import usuarios from "./MOCK_DATA.js"

// 1
const trabajos = usuarios.map((usuario) => usuario.trabajo)
console.log(trabajos)

// 2
const paises = usuarios.map(usuario => usuario.pais)
//const paises = usuarios.map(usuario => ({pais: usuario.pais}))
console.log(paises)

// 3
const chinos = usuarios.filter(usuario => usuario.pais === "China") 
console.log(chinos)

// 4
const menoresDeVeintiuno = usuarios.filter(usuario => usuario.edad < 21)
console.log(menoresDeVeintiuno)

// 5
const hombres = usuarios.filter(usuario => usuario.sexo === "Male")
console.log(hombres, `Cantidad de hombres: ${hombres.length}`)

// 6    
const mujeres = usuarios.filter(usuario => usuario.sexo === "Female")
console.log(mujeres, `Cantidad de mujeres: ${mujeres.length}`)

// 7
const nombresDeMujeres = usuarios.filter(usuario => usuario.sexo === "Female").map(mujer => mujer.nombre)
//const nombresDeMujeres = mujeres.map(mujer => mujer.nombre)
console.log(nombresDeMujeres)

// 8
const nombresDeHombres = usuarios.filter(usuario => usuario.sexo === "Male").map(hombre => hombre.nombre)
//const nombresDeHombre = hombres.map(hombre => hombre.nombre)
console.log(nombresDeHombres)

// 9 
const nombresApellidosYCiudades = usuarios.map(usuario => ({
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    ciudad: usuario.ciudad
}));
console.log(nombresApellidosYCiudades)

// 10
const nombresApellidosYCiudadesMayores35 = usuarios
.filter(usuario => usuario.edad > 35)
.map(usuario => ({
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    ciudad: usuario.ciudad
}));
console.log(nombresApellidosYCiudadesMayores35)

// 11
const promedioEdades = usuarios.reduce((anterior, siguiente) => anterior + siguiente.edad, 0) / usuarios.length
console.log(promedioEdades)

// 12
const edadesHombres = usuarios
.filter(usuario => usuario.sexo === "Male")
.reduce((anterior, siguiente) => anterior + siguiente.edad, 0) 

console.log(edadesHombres / hombres.length)

// 13
const egipcios = usuarios.filter(usuario => usuario.pais === "Egypt")
const edadesEgipcios = egipcios.reduce((anterior, siguiente) => anterior + siguiente.edad, 0)

console.log(edadesEgipcios / egipcios.length)

