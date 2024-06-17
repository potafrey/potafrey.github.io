document.addEventListener("DOMContentLoaded", function() {
  const contents = document.querySelectorAll('.content');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  contents.forEach(content => {
    observer.observe(content);
  });

  // Initial fade-in from left for #intro h1
  const introHeader = document.querySelector('#intro h1');
  introHeader.style.opacity = 1;

  // Fade-in from bottom for #intro p when it scrolls into view
  const introParagraph = document.querySelector('#intro p');
  observer.observe(introParagraph);
});

// Toggle navigation menu for mobile
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scroll({
    top: section.offsetTop - document.querySelector('.navbar').offsetHeight,
    behavior: 'smooth'
  });
}

// Get the button
var mybutton = document.getElementById("back-to-top-btn");

// Initially hide the button
mybutton.style.display = "none";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  if (window.scrollTo) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Smooth scrolling
    });
  } else {
    document.body.scrollTop = 0; // Fallback for older browsers
    document.documentElement.scrollTop = 0; // Fallback for older browsers
  }
}
