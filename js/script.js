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
