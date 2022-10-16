const body = document.querySelector('body'),
  sidebar = body.querySelector('.sidebar'),
  modeSwitch = body.querySelector('.toggle-switch'),
  modeText = body.querySelector('.mode-text')

modeSwitch.addEventListener("click", () => {
  body.classList.toggle('dark')
})
