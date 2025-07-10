// Custom JavaScript for My Tailwind Website

document.addEventListener('DOMContentLoaded', function () {
  // Example: Show an alert when the Get Started button is clicked
  const getStartedBtn = document.querySelector('a[href="#features"]');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function (e) {
      // e.preventDefault(); // Uncomment to prevent default navigation
      alert('Welcome to the Features section!');
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Contact cards scroll-in animation
  function revealCards() {
    const cards = document.querySelectorAll('.contact-card');
    const triggerBottom = window.innerHeight * 0.9;
    cards.forEach((card, i) => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom) {
        setTimeout(() => {
          card.classList.add('opacity-100', 'translate-x-0');
          card.classList.remove('opacity-0', '-translate-x-10');
        }, i * 150); // stagger animation
      }
    });
  }
  window.addEventListener('scroll', revealCards);
  revealCards(); 

   // Simple parallax effect for hero background
   window.addEventListener('scroll', function() {
    const parallax = document.getElementById('parallax-bg');
    if (parallax) {
      let offset = window.scrollY * 0.4;
      parallax.style.transform = `translateY(${offset}px) scale(1.1)`;
    }
  });
});