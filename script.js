// script.js - Smooth Scroll and Interactivity
document.querySelectorAll('nav a, .btn').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
console.log("MD Shahria Portfolio Initialized!");
