document.addEventListener("DOMContentLoaded", function() {
  // Initial fade-in for intro text
  const introHeader = document.querySelector('#intro h1');
  introHeader.style.opacity = 1;

  // Toggle navigation menu for mobile
  window.toggleMenu = function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  // Smooth scroll to sections
  window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    window.scroll({
      top: section.offsetTop - document.querySelector('.navbar').offsetHeight,
      behavior: 'smooth'
    });
  }

  // Get the button
  const mybutton = document.getElementById("back-to-top-btn");

  // Initially hide the button
  mybutton.style.display = "none";

  // When the user scrolls, show the button
  window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document smoothly
  window.topFunction = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Toggle job description
  window.toggleDescription = function(jobElement) {
    const descriptionElement = jobElement.querySelector('.job-description');
    jobElement.classList.toggle('active');
    descriptionElement.style.display = descriptionElement.style.display === 'block' ? 'none' : 'block';
  }

  window.toggleEducationDescription = function(timelineItem) {
    const descriptionElement = timelineItem.querySelector('.education-description');
    timelineItem.classList.toggle('active');
  
    // Toggle max-height to show or hide description
    if (timelineItem.classList.contains('active')) {
      descriptionElement.style.maxHeight = descriptionElement.scrollHeight + 'px';
    } else {
      descriptionElement.style.maxHeight = '0';
    }
  }
  
  
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

window.addEventListener('load', () => {
  // Ensure the About section is visible immediately on page load
  const aboutSection = document.getElementById('about');
  aboutSection.classList.add('visible');
});

window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const skillsPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.7;

  if (skillsPosition < screenPosition) {
    skillsSection.classList.add('visible');
  } else {
    skillsSection.classList.remove('visible');
  }
});
