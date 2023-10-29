
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

// const portfolio = document.querySelector('')
const about = document.querySelector('.animate-me')

if (window.screen.width < 420) {
  about.addEventListener("touchstart", () => {
    const firstPara = document.querySelector('#first-para')
    const secondPara = document.querySelector('#second-para')
    firstPara.removeAttribute('first-para')
    secondPara.removeAttribute('second-para')
    firstPara.setAttribute('id', 'first-para-visible')
    secondPara.setAttribute('id', 'second-para-visible')    
})
} else {

  about.addEventListener("click", () => { 
     console.log("desktop")
    const firstPara = document.querySelector('#first-para')
    const secondPara = document.querySelector('#second-para')
    firstPara.removeAttribute('first-para')
    secondPara.removeAttribute('second-para')
    firstPara.setAttribute('id', 'first-para-visible')
    secondPara.setAttribute('id', 'second-para-visible')
  })
}

about.addEventListener("click", function scroll() {
  document.querySelector('#scroll-to').scrollIntoView({ behavior: 'smooth' })
})

about.addEventListener("touchstart", () => {
  document.querySelector('#scroll-to').scrollIntoView({ behavior: 'smooth' })
})