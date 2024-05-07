const toggleMenuClass = () => {
  let menu = document.querySelector(".navbar__list")
  menu.classList.toggle("menu-open")
}

const startEvents = () => {
  let button = document.querySelector(".js-toggle-menu")
  button.addEventListener("click", toggleMenuClass)
}

window.addEventListener("load", startEvents)
