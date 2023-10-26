
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
  
  const firstPara = document.querySelector('#first-para')
  const secondPara = document.querySelector('#second-para')
  firstPara.removeAttribute('first-para')
  secondPara.removeAttribute('second-para')
  firstPara.setAttribute('id', 'first-para-visible')
  secondPara.setAttribute('id', 'second-para-visible')
})

const paraLink = document.querySelector('.animate-me')

paraLink.addEventListener("click", () => {
  document.querySelector('#foot').scrollIntoView({ behavior: 'smooth' })

})