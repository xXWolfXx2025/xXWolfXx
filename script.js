// Button click feedback
document.querySelector('.button').addEventListener('click', () => {
  console.log('Explore button clicked');
});

// Scroll reveal for intro section
window.addEventListener('scroll', () => {
  const intro = document.querySelector('.intro');
  const rect = intro.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    intro.style.opacity = 1;
    intro.style.transform = 'translateY(0)';
  }
});

// Initial hidden state for intro
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.intro');
  intro.style.opacity = 0;
  intro.style.transform = 'translateY(50px)';
  intro.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});
