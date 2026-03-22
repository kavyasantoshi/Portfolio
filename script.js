document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav-menu');
    const closeBtn = document.getElementById('close-menu-btn');
    const allSections = document.querySelectorAll('section');

    // ── NAV SCROLL EFFECT ──
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ── ACTIVE LINK ON SCROLL ──
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
                    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(l => l.classList.remove('active'));
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' });
    allSections.forEach(section => sectionObserver.observe(section));

    // ── OPEN MENU ──
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
    });

    // ── CLOSE MENU — X button ──
    closeBtn.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
    });

    // ── CLOSE MENU — nav link click ──
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
        });
    });

    // ── SCROLL REVEAL + PROGRESS BARS ──
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.querySelectorAll('.progress-fill').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.progress-fill').forEach(fill => {
        fill.setAttribute('data-width', fill.style.width);
        fill.style.width = '0';
    });

    document.querySelectorAll('.fade-in').forEach(el => animationObserver.observe(el));
});