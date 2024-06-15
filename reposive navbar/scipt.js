let navbar = document.querySelector(".navbar");
let icnos = document.querySelector('.fa-bars');

icnos.addEventListener('click', () => {
    icnos.classList.toggle('fa-xmark')
    navbar.classList.toggle('active');
})