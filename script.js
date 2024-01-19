const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
    hideMenuOnScroll(); // Call the function to hide menu on scroll
    showScrollToTopButton(); // Call the function to show/hide scroll-to-top button
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

function hideMenuOnScroll() {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    distance: '30px',
    duration: 2600,
    reset: true
});

sr.reveal('.home-text', { delay: 280, origin: 'bottom' });

sr.reveal('.Featured, .cta, .new, .brand, .Contact', { delay: 200, origin: 'bottom' });

// Show/hide the scroll-to-top button based on the scroll position
function showScrollToTopButton() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > header.offsetHeight || document.documentElement.scrollTop > header.offsetHeight) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
