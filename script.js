
const menuIcon = document.querySelector('nav')
const list = document.querySelector('nav ul li')
list.classList.add('not-active')

menuIcon.addEventListener("mouseenter", () => {
  
  setTimeout(() => {
    list.classList.remove('not-active')
  }, 300);
})

// menuIcon.addEventListener("mouseenter", (e) => {
//   setTimeout(() => {
//   }, 500);

//   console.log("open")
//   menuIcon.style.animation = "open-menu 0.35s ease-in forwards"
// })

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
