// Function to check when elements come into view
const fadeInElements = document.querySelectorAll('.fade-in');

const observerOptions = {
  root: null, // observe in the viewport
  threshold: 0.5 // trigger when 50% of the element is visible
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
fadeInElements.forEach(element => {
  fadeInObserver.observe(element);
});
