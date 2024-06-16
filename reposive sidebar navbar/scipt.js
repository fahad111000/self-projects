let navbar = document.querySelector(".navbar");
let faBars = document.querySelector('.fa-bars');
let faxmark = document.querySelector('.fa-xmark');

faBars.addEventListener('click', () => {
    navbar.classList.toggle('active');

})

faxmark.addEventListener('click', () => {
    navbar.classList.remove('active')
})
