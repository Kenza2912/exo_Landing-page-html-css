
const menuBurger = document.querySelector(".menu-burger")
console.log(menuBurger)

const nav = document.querySelector(".nav")
console.log(nav)

menuBurger.addEventListener("click", ()=> {
    menuBurger.classList.toggle("active")
    nav.classList.toggle("active")
  
})
nav.addEventListener("click", function(){
    nav.classList.toggle("active")
    menuBurger.classList.toggle("active")
})
