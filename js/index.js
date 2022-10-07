const hamburger = document.querySelector('.hamburger')
const container = document.querySelector('main')

hamburger.addEventListener('click',()=>{
    container.classList.toggle('main-active')
})