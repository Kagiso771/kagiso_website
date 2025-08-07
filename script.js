document.addEventListener('DOMContentLoaded', () => {
  // Select the section that should slide in
  const slideSection = document.querySelector('.slide-in-right');

  // Make sure the element exists
  if (!slideSection) return;

  // Set up the intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.1 // triggers when 10% is visible
  });

  // Start observing the element
  observer.observe(slideSection);
});

// Flip card animation for services page
function flipCard(card) {
  card.classList.toggle('flipped');
}

