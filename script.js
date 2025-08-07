// Flicker effect for neon text
document.querySelectorAll('.glow-text').forEach(el => {
  el.classList.add('flicker');
});
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Navigating to ${link.textContent}`);
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation (basic)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    if (!email.value || !message.value) {
      e.preventDefault();
      alert('Please fill out all fields before submitting.');
    }
  });
}

// Gallery lightbox (optional enhancement)
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '90%';
    fullImg.style.border = '2px solid #00ffff';
    fullImg.style.borderRadius = '10px';

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});
