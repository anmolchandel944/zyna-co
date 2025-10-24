 // Smooth Scroll to Product Section
document.querySelector('.explore-btn').addEventListener('click', () => {
  document.getElementById('productSection').scrollIntoView({ behavior: 'smooth' });
});

// Cart Message
const cartButtons = document.querySelectorAll('.cart');
const cartMessage = document.getElementById('cartMessage');

cartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartMessage.style.display = 'block';
    setTimeout(() => cartMessage.style.display = 'none', 2000);
  });
});

// Hamburger Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');

  if (hamburger.classList.contains('open')) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
