const toggleMenuClass = () => {
  let menu = document.querySelector(".navbar__list")
  menu.classList.toggle("menu-open");

  let search = document. querySelector(".icon--search")
  search.classList.toggle("search-active");
}

const startEvents = () => {
  let button = document.querySelector(".js-toggle-menu")
  button.addEventListener("click", toggleMenuClass)
}

window.addEventListener("load", startEvents)
