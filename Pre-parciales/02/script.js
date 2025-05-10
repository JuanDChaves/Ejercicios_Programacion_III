const menu = document.getElementById("menu")
const menu_title = document.getElementById("menu_title")
const menu_items = document.querySelectorAll(".menu_item")

menu_title.addEventListener("click", () => activateDeactivateMenu())

function activateDeactivateMenu() {
    menu_items.forEach(item => item.classList.toggle("active")) 
}

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) {
       menu_items.forEach(item => item.classList.remove("active"))
    }})
        
menu_items.forEach(item => {
    item.addEventListener("click", event => selectItem(event.target))
})

function selectItem(item) {
    menu_items.forEach(item => item.classList.remove("selected"))
    menu_title.textContent = item.textContent 
    item.classList.add("selected")
}
