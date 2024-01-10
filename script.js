const header = document.querySelector("header");

window.addEventListener("scroll" , function() {
    header.classList.toggle("sticky" , window.scrollY > 0);
    
});



// Show/hide the scroll-to-top button based on the scroll position
window.onscroll = function () {
    showScrollToTopButton();
  };

  function showScrollToTopButton() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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