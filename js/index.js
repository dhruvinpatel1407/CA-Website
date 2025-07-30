// main.js - Enhanced JavaScript for K.G. Bhut & Associates Website

// Add 'js-enabled' class to <html> to trigger JS-dependent CSS
document.documentElement.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', function () {
  try {
    // GSAP and ScrollTrigger check and registration
    if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    } else {
      console.warn('GSAP not loaded, animations disabled');
      // Optionally remove js-enabled to show all content
      document.documentElement.classList.remove('js-enabled');
      document.body.style.opacity = '1';
      return;
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      // Close mobile menu when a link inside it is clicked
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }

    // Cache header elements
    const header = document.getElementById('main-header');
    const brand = document.getElementById('brand');
    const navMenu = document.getElementById('nav-menu');

    // Scroll handler sets header background and nav link colors
    function handleScroll() {
      if (window.scrollY > 100) {
        if (header) {
          header.classList.add('bg-white', 'shadow-lg');
          header.classList.remove('bg-transparent');
        }
        if (brand) brand.classList.add('text-gray-900');
        if (navMenu) {
          navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.classList.add('text-gray-900');
            link.classList.remove('text-white');
          });
        }
      } else {
        if (header) {
          header.classList.remove('bg-white', 'shadow-lg');
          header.classList.add('bg-transparent');
        }
        if (brand) brand.classList.remove('text-gray-900');
        if (navMenu) {
          navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('text-gray-900');
            link.classList.add('text-white');
          });
        }
      }
    }

    // Attach scroll event and run once on page load
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    // Hero content fade-in animation (for pages with .hero-content)
    if (document.querySelector('.hero-content')) {
      gsap.to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
    }

    // Homepage specific animations
    if (document.querySelector('.hero-section')) {
      const tl = gsap.timeline();

      tl.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
        .to('.hero-subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5")
        .to('.hero-buttons', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.3");

      if (document.querySelector('.about-preview')) {
        gsap.to('.about-preview', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.about-preview',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
      if (document.querySelector('.services-preview')) {
        gsap.to('.service-card', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.services-preview',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
      if (document.querySelector('.case-study-section')) {
        gsap.to('.case-study-card', {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.case-study-section',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
    }

    // About page animations
    if (window.location.pathname.includes('about.html')) {
      if (document.querySelector('.company-overview')) {
        gsap.to('.company-overview', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.company-overview',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
      if (document.querySelector('.industry-expertise')) {
        gsap.to('.industry-expertise', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.industry-expertise',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
    }

    // Services page animations
    if (window.location.pathname.includes('services.html')) {
      if (document.querySelector('.industry-card')) {
        gsap.to('.industry-card', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.industry-card',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
    }

    // Contact page animations
    if (window.location.pathname.includes('contact.html')) {
      if (document.querySelector('.contact-card')) {
        gsap.to('.contact-card', {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.contact-card',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // FAQ toggle functionality
      document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function () {
          const answer = this.nextElementSibling;
          const icon = this.querySelector('svg');
          if (answer && answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            if (icon) icon.style.transform = 'rotate(180deg)';
          } else if (answer) {
            answer.classList.add('hidden');
            if (icon) icon.style.transform = 'rotate(0deg)';
          }
        });
      });
    }

    // Parallax effect for hero backgrounds
    if (document.querySelector('#parallax-bg')) {
      gsap.to('#parallax-bg', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: '#parallax-bg',
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Counter animations
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
      counters.forEach(counter => {
        const finalValue = parseInt(counter.textContent);
        if (!isNaN(finalValue)) {
          gsap.fromTo(counter, { textContent: 0 }, {
            textContent: finalValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    }

    // Card hover animations (move up slightly on mouse enter)
    document.querySelectorAll('.service-card, .feature-card, .location-card, .contact-card, .industry-card, .pricing-card').forEach(card => {
      card.addEventListener('mouseenter', function () {
        gsap.to(this, { y: -10, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', function () {
        gsap.to(this, { y: 0, duration: 0.3, ease: "power2.out" });
      });
    });

  } catch (error) {
    console.error('JavaScript error:', error);
    // Fallback: show all content if JS fails
    document.documentElement.classList.remove('js-enabled');
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
  }
});

// Page load animation
window.addEventListener('load', function () {
  try {
    if (typeof gsap !== 'undefined') {
      gsap.from('body', { opacity: 0, duration: 0.5, ease: "power2.out" });
    }
  } catch (error) {
    console.error('Load animation error:', error);
    document.body.style.opacity = '1';
  }
});

// GSAP loading fallback
window.addEventListener('error', function (e) {
  if (e.filename && e.filename.includes('gsap')) {
    console.warn('GSAP failed to load, showing content without animations');
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
    document.documentElement.classList.remove('js-enabled');
  }
});
