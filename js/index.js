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
});
