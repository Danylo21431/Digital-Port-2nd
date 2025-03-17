document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');

  if (hero) { // Only run hero-related code on main page
    const heroContent = document.querySelector('.hero-content');
    const heroImage = hero.querySelector('img');
    let isLocked = true;
    let hasInitialScrolled = false;

    // Prevent default scroll until animation completes
    const preventScroll = (e) => {
      if (isLocked) {
        e.preventDefault();
      }
    };

    // Add scroll prevention
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    // Handle initial scroll reveal
    const handleInitialScroll = (e) => {
      if (isLocked && e.deltaY > 0) {
        e.preventDefault();
        if (!hasInitialScrolled) {
          hasInitialScrolled = true;
          hero.classList.add('scrolled');
          heroContent.classList.add('visible');
          nav.classList.add('nav-visible');

          // Release scroll lock after animation
          setTimeout(() => {
            isLocked = false;
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
            window.removeEventListener('wheel', handleInitialScroll);
          }, 1500);
        }
      }
    };

    window.addEventListener('wheel', handleInitialScroll, { passive: false });

    // Handle scroll animations
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;

      if (scrolled > window.innerHeight / 3) {
        nav.classList.add('nav-visible');
        heroContent.style.opacity = '0';
      } else {
        nav.classList.remove('nav-visible');
        heroContent.style.opacity = '1';
      }

      if (scrolled < 50) {
        hero.classList.remove('scrolled');
        if (!isLocked) {
          isLocked = true;
          hasInitialScrolled = false;
          window.addEventListener('wheel', preventScroll, { passive: false });
          window.addEventListener('touchmove', preventScroll, { passive: false });
        }
      }
    });
  }

  // Handle section animations
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.section, .comp-section, .macro-image').forEach(el => {
      observer.observe(el);
    });
  };

  observeElements();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
