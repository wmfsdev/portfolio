
const menuIcon = document.querySelector('.menu')
const list = document.querySelector('nav ul li')
list.classList.add('not-active')

menuIcon.addEventListener("mouseenter", () => {
  setTimeout(() => {
    list.classList.remove('not-active')
  }, 300);
})

menuIcon.addEventListener("touchstart", () => {
    setTimeout(() => {
      list.classList.remove('not-active')
    }, 300);
})

const about = document.querySelector('.animate-me')
about.addEventListener("click", () => {
  
  const firstPara = document.querySelector('.first-para')
  const secondPara = document.querySelector('.second-para')
  firstPara.classList.remove('first-para')
  secondPara.classList.remove('second-para')
  firstPara.classList.add('first-para-visible')
  secondPara.classList.add('second-para-visible')
})