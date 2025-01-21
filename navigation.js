// script.js
document.getElementById('nav-toggle').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    const navToggleButton = document.getElementById('nav-toggle');
    navbar.classList.toggle('active'); // Toggle the active class to show/hide the nav
    navToggleButton.classList.toggle('active'); // Toggle the active class for the button color change
});
