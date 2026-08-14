/* ========================================
   ArtifactConservationHK - JavaScript
   ======================================== */

(function () {
    'use strict';

    // ===== Language Toggle =====
    const langToggle = document.getElementById('langToggle');
    const body = document.body;

    // Default language: Chinese (zh)
    let currentLang = 'zh';
    body.classList.add('lang-zh');

    function updateLangLabels() {
        // Update toggle button label
        const label = langToggle.querySelector('.lang-label');
        label.textContent = currentLang === 'zh' ? 'EN' : '中';

        // Update document language attribute
        document.documentElement.lang = currentLang === 'zh' ? 'zh-HK' : 'en';

        // Update elements with data-zh and data-en attributes
        document.querySelectorAll('[data-zh]').forEach(el => {
            el.textContent = currentLang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
        });
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        body.classList.remove('lang-zh', 'lang-en');
        body.classList.add('lang-' + currentLang);
        updateLangLabels();
    });

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===== Mobile Menu Toggle =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Contact Form =====
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        // Simulate sending
        btn.innerHTML = currentLang === 'zh'
            ? '<span class="zh">發送中...</span><span class="en">Sending...</span>'
            : '<span class="en">Sending...</span><span class="zh">發送中...</span>';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = currentLang === 'zh'
                ? '<span class="zh">✓ 已發送！</span><span class="en">✓ Sent!</span>'
                : '<span class="en">✓ Sent!</span><span class="zh">✓ 已發送！</span>';
            btn.style.background = '#2D6B4A';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        }, 1500);
    });

    // ===== Intersection Observer for Animations =====
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // ===== Resource Cards: Add target="_blank" for external links =====
    document.querySelectorAll('.resource-card').forEach(card => {
        card.setAttribute('rel', 'noopener noreferrer');
    });

})();
