let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: false
})

sr.reveal('.project', {
    delay: 50,
    origin: 'left'
})
sr.reveal('.container, .social', {
    delay: 200,
    origin: 'left'
})
sr.reveal('header', {
    delay: 50,
    origin: 'top'
})

console.log("JavaScript succesfully loaded!");