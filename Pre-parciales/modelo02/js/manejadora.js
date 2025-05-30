document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mostrar").addEventListener("click", mostarUsuarios)
});

const url = "https://utnfra-api-usuarios.onrender.com/usuarios"

// Punto 1
 
async function mostarUsuarios() {
    const panel = document.getElementById("panel-derecha")
    panel.innerHTML = "<div class='spinner-border text-primary' role='status'></div>"

    try {
        const res = await fetch(url) 
        const data = await res.json()
        console.log("hola")
    } catch (error) {
        alert("Error al cargar los usuarios!")
    }

    let tabla = "<table class='table table-dark table-striped'>"
    tabla += "<thead><tr><th>#</th><th>Nombre</th><th>Correo</th><th>Pais</th><th>Acciones</th></tr></thead>"
    tabla += "<tbody>"

    data.forEach(() => {
        ta
    })
}
// Punto 2 
// Punto 3 
// Punto 4 
// Punto 5 
// Punto 6 
// Punto 7   
