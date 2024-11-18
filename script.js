

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 4,          // Number of items to display
      loop: true,        // Loop the carousel
      margin: 10,       // Margin between items
      autoplay: true,    // Enable autoplay
      autoplayTimeout: 55000, // Autoplay interval
      nav: true,         // Show navigation arrows
      dots: true,        // Show pagination dots
      slideBy: 4         // Scroll 4 items at a time
  });
});



//modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Auto-slide (optional)
setInterval(() => {
    plusSlides(1);
}, 5000); // Change image every 5 seconds



// nav menu

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const closeIcon = document.getElementById('close-icon');


menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Remove the active class to close the menu
});

