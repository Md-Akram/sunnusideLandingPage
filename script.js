const nav = document.querySelector('nav')
const hamImg = document.querySelector('.ham-img')

hamImg.addEventListener('click', (e) => {
  nav.classList.toggle('block')
})
