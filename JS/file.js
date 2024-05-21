const startEvents = () => {
  let menu = document.querySelector(".navbar__list")

  const _removeMenuOpenClass = () => menu.classList.remove("menu-open")
  const _toggleMenuOpenClass = () => menu.classList.toggle("menu-open")

  const handleMenu = (e) => {
    // If we click the menu button, it should toggle
    if (
      e.target.classList.contains("js-toggle-menu") ||
      e.target.parentElement.classList.contains("js-toggle-menu")
    ) {
      _toggleMenuOpenClass()
    } else {
      _removeMenuOpenClass()
    }
  }

  document.addEventListener("click", handleMenu)
}

window.addEventListener("load", startEvents)
