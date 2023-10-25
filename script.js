
const menuIcon = document.querySelector('.menu')
const list = document.querySelector('nav ul li')
list.classList.add('not-active')

menuIcon.addEventListener("mouseenter", () => {
//  menuIcon.style.animation = "shake 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
  setTimeout(() => {
    list.classList.remove('not-active')
  }, 300);
})

menuIcon.addEventListener("touchstart", () => {
  //  menuIcon.style.animation = "shake 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
    setTimeout(() => {
      list.classList.remove('not-active')
    }, 300);
  })


// const menu = document.querySelector('nav ul')
// menu.addEventListener("mouseleave", () => {
//   console.log("close")
//   menuIcon.style.animation = "close-menu 0.35s ease-in none"
// })

// const header = document.querySelector('header')
// header.addEventListener("mouseover", () => {
//   console.log("header")
//   menuIcon.style.animation = "close-menu 0.5s ease-in forwards"
// })


// document.addEventListener("scroll", (e) => {
//   console.log(e)
// })