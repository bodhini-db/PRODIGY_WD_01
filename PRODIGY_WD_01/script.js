// JavaScript for responsive menu toggle
const menu = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
