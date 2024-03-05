
let menu = document.querySelector(".menu__hamburger")
let menuItems = document.querySelector(".lista-menu")

menu.addEventListener("click", clicar)

function clicar(){
  if (menuItems.style.display == "block"){
    menuItems.style.display = "none"
  } else {
    menuItems.style.display = "block"
  }
}