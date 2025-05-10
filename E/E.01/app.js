import jotasones from "./jotasones.js"

const botonGenerar = document.getElementById("generarBtn")
const lista = document.getElementById("lista_jsones")

botonGenerar.addEventListener("click",  () => agregarJotasones(jotasones))

function agregarJotasones(jotas) {
    lista.innerHTML = ""
    const headers = Object.keys(jotas[0])   
    const tr = document.createElement("tr")
    lista.appendChild(tr)

    headers.forEach(header => {
        const th = document.createElement("th")
        th.textContent = header
        tr.appendChild(th)
    })

    jotas.forEach(jota => {
        const tr = document.createElement("tr")
        headers.forEach(header => {
            const td = document.createElement("td")
            td.textContent = jota[header]
            tr.appendChild(td)
        })
        lista.appendChild(tr)
    })
}
