window.onload = function () {
  let openButton = document.querySelector('.introduction .button')
  let backdrop = document.querySelector('.backdrop')
  let modal = document.querySelector('.modal')
  let confirmButton = document.querySelector('.affirmative')
  let denyButton = document.querySelector('.negative')
  let whatsappButton = document.querySelector('.float-button')

  whatsappButton.addEventListener('click', function () {
    window.location = "https://api.whatsapp.com/send?phone=55119833814821"
  })

  openButton.addEventListener('click', function () {
    backdrop.style.display = 'block'
    modal.style.display = 'block'
  })

  confirmButton.addEventListener('click', closeAll)

  denyButton.addEventListener('click', closeAll)

  backdrop.addEventListener('click', closeAll)

  function closeAll() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
  }

}
