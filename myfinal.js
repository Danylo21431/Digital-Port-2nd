document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced scroll-triggered animations for magazine pages
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                entry.target.classList.remove('out-of-view');

                // Add subtle parallax effect to page images
                const pageImage = entry.target.querySelector('.magazine-svg');
                if (pageImage) {
                    pageImage.style.transform = 'translateY(0) scale(1)';
                }
            } else {
                // Remove in-view and add out-of-view for re-triggering animations
                entry.target.classList.remove('in-view');
                entry.target.classList.add('out-of-view');
                
                // Reset transforms for re-animation
                const pageImage = entry.target.querySelector('.page-image');
                const pageInfo = entry.target.querySelector('.page-info');
                
                if (pageImage) {
                    pageImage.style.transform = '';
                    pageImage.style.opacity = '';
                }
                if (pageInfo) {
                    pageInfo.style.transform = '';
                    pageInfo.style.opacity = '';
                }
            }
        });
    }, observerOptions);

    // Observe all magazine pages
    const magazinePages = document.querySelectorAll('.magazine-page');
    magazinePages.forEach(page => {
        observer.observe(page);
    });

    // Modal functionality for SVG images
    const modal = document.getElementById('svgModal');
    const modalSvg = document.querySelector('.modal-svg');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const closeBtn = document.querySelector('.close');

    // Open modal when SVG is clicked
    const svgImages = document.querySelectorAll('.magazine-svg');
    svgImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Set the image source and display modal
            modalSvg.src = this.src;
            modalSvg.alt = this.alt;

            // Show modal with flex display
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Reset initial state for animation
            modalSvg.style.transform = 'translate(-50%, -50%) scale(0.8) rotate(5deg)';
            modalSvg.style.opacity = '0';
            modalSvg.style.filter = 'brightness(0.7) saturate(0.8)';

            // Trigger smooth entrance animation
            requestAnimationFrame(() => {
                modalSvg.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
                modalSvg.style.opacity = '1';
                modalSvg.style.filter = 'brightness(1) saturate(1)';
            });
        });
    });

    // Close modal function
    function closeModal() {
        modalSvg.style.transform = 'scale(0.8) rotate(-5deg)';
        modalSvg.style.opacity = '0';
        modalSvg.style.filter = 'brightness(0.5) saturate(0.5)';

        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Reset for next opening
            modalSvg.style.transform = 'scale(0.9) rotate(5deg)';
        }, 400);
    }

    // Close modal events
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Enhanced navbar background on scroll
    let navbarLastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');

        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }

        // Hide/show navbar on scroll
        if (scrollTop > navbarLastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        navbarLastScrollTop = scrollTop;
    });

    // Parallax effect for cover section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const coverSection = document.querySelector('.magazine-cover');
        const parallaxSpeed = 0.5;

        if (coverSection && scrolled < window.innerHeight) {
            coverSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });

    // Sequential animation for magazine pages
    function triggerSequentialAnimation() {
        const pages = document.querySelectorAll('.magazine-page');
        pages.forEach((page, index) => {
            const delay = index * 100; // 100ms delay between each page
            setTimeout(() => {
                if (page.classList.contains('in-view')) {
                    const image = page.querySelector('.page-image');
                    const info = page.querySelector('.page-info');

                    if (image) {
                        image.style.animationDelay = `${delay}ms`;
                    }
                    if (info) {
                        info.style.animationDelay = `${delay + 200}ms`;
                    }
                }
            }, delay);
        });
    }

    // Advanced scroll effects
    let ticking = false;
    function updateScrollEffects() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;

        // Update parallax for visible elements
        magazinePages.forEach((page, index) => {
            const rect = page.getBoundingClientRect();
            const isVisible = rect.top < windowHeight && rect.bottom > 0;

            if (isVisible) {
                const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
                const translateY = (scrollPercent - 0.5) * 50; // Subtle parallax

                const img = page.querySelector('.magazine-svg');
                if (img) {
                    img.style.transform = `translateY(${translateY}px)`;
                }
            }
        });

        ticking = false;
    }

    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestScrollUpdate);

    // Smooth loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';

        // Trigger cover image animation
        const coverImage = document.querySelector('.cover-main-image');
        if (coverImage) {
            setTimeout(() => {
                coverImage.style.transform = 'scale(1) translateY(0)';
                coverImage.style.opacity = '1';
            }, 500);
        }

        // Initialize page animations
        triggerSequentialAnimation();
    });

    // Set initial page state
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';


    // Enhanced hover effects for SVG images with smoother transitions
    svgImages.forEach(img => {
        // Set initial transition
        img.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08) rotate(2deg) translateY(-10px)';
            this.style.filter = 'brightness(1.15) saturate(1.3) drop-shadow(0 20px 40px rgba(0,0,0,0.2))';
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg) translateY(0px)';
            this.style.filter = 'brightness(1) saturate(1) drop-shadow(0 10px 20px rgba(0,0,0,0.1))';
        });
        
        // Add subtle floating animation on hover
        img.addEventListener('mouseenter', function() {
            this.style.animation = 'subtleFloat 3s ease-in-out infinite';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });

    // Elegant progress indicator
    function updateProgressIndicator() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.max(0, Math.min(100, (scrollTop / docHeight) * 100));

        // Create progress bar if it doesn't exist
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);
        }

        // Smooth width update
        progressBar.style.width = `${scrollPercent}%`;
    }

    window.addEventListener('scroll', updateProgressIndicator, { passive: true });

    // Initialize animations on page load
    setTimeout(() => {
        const firstPage = document.querySelector('.magazine-page[data-page="1"]');
        if (firstPage && firstPage.getBoundingClientRect().top < window.innerHeight) {
            firstPage.classList.add('in-view');
        }
    }, 1000);
});
