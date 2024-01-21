
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
    hideMenuOnScroll(); 
    showScrollToTopButton(); 
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







document.addEventListener("DOMContentLoaded", function () {
  var currentIndex = 0;
  var sections = document.querySelectorAll(".last-word");
  var dots = document.querySelectorAll(".dot");

  // Show the initial section and corresponding dot
  sections[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");

  function showSection(index) {
    // Hide the current section and dot
    sections[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    // Show the selected section and dot
    currentIndex = index;
    sections[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  // Assign click event to each dot
  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      showSection(index);
    });
  });
});


