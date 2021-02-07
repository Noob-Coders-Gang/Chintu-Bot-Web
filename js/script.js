const navbarNav = document.querySelector('.navbar-nav');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

navbarNav.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});