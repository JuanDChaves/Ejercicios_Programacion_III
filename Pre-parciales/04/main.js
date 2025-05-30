
const texto_nueva_tarea = document.getElementById("texto_nueva_tarea")
const btn_agregar_tarea = document.getElementById("btn_agregar_tarea")
const lista_tareas = document.getElementById("lista_tareas")
let tareas = []

btn_agregar_tarea.addEventListener("click", event => agregarTarea(event))

async function cargarTareas() {
    try {
        const response = await fetch("./tareas.json")
        const tareas = await response.json()
        mostrarTareas(tareas)
    } catch {
        console.log("error", error)
    } 
}

cargarTareas()

function mostrarTareas(tareas) {
    tareas.forEach(
        tarea => {
            const item_tarea = document.createElement("li")
            const btn_eliminar = document.createElement("button")
            const btn_completar = document.createElement("button")
            const div_tarea = document.createElement("div")
            const texto_tarea = document.createElement("span")
            
            item_tarea.classList.add("tarea")
            btn_completar.classList.add("btn_completar")
            btn_eliminar.classList.add("btn_eliminar")

            if (tarea["completada"]) {
                item_tarea.classList.add("completada")
            }

            btn_completar.textContent = `${tarea["completada"] ? "✅" : "🔘" }`
            texto_tarea.textContent = `${tarea["texto"]}`
            btn_eliminar.textContent = "🗑️"
            
            lista_tareas.appendChild(item_tarea)
            item_tarea.appendChild(div_tarea)
            div_tarea.appendChild(btn_completar)
            div_tarea.appendChild(texto_tarea)
            div_tarea.appendChild(btn_eliminar)


            document.querySelectorAll(".btn_completar").forEach(btn => {
                addEventListener("click", event => marcarComoCompletada(event))
            })
            document.querySelectorAll(".btn_eliminar").forEach(btn => {
                addEventListener("click", event => eliminarTarea(event))
            })
        }
    )
}

function agregarTarea(event) {
    event.preventDefault()

    const nueva_tarea = texto_nueva_tarea.value.trim()
    console.log(nueva_tarea)
    if (!nueva_tarea) {
        alert("Ingrese una tarea.");
        return;
    }
} 

function marcarComoCompletada(event) {
    event.preventDefault() 

    console.log(tareas)
}

function eliminarTarea(event)  {
    event.preventDefault()
}