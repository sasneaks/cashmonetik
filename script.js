// ========================================
// CASHMONETIK - GSAP Premium Animations
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initHeroAnimations();
    initShowcaseAnimations();
    initCatalogueAnimations();
    initSectorsAnimations();
    initStatsAnimations();
    initAdvantagesAnimations();
    initClientsAnimations();
    initContactAnimations();
    initContactForm();
});

// ========================================
// HEADER
// ========================================
function initHeader() {
    const header = document.getElementById('header');

    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            if (self.scroll() > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: targetPosition, autoKill: false },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ========================================
// HERO ANIMATIONS
// ========================================
function initHeroAnimations() {
    const heroIcons = document.querySelectorAll('.hero-icons img');

    // Animate hero icons with stagger
    gsap.fromTo(heroIcons,
        {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        {
            opacity: 0.8,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            delay: 1.2,
            ease: 'back.out(1.7)'
        }
    );

}

// ========================================
// CATALOGUE ANIMATIONS - Horizontal Scroll
// ========================================
function initCatalogueAnimations() {
    const catalogue = document.querySelector('.catalogue');
    const track = document.querySelector('.catalogue-track');
    const items = document.querySelectorAll('.catalogue-item');
    const progressBar = document.querySelector('.catalogue-progress-bar');
    const header = document.querySelector('.catalogue-header');

    if (!catalogue || !track || items.length === 0) return;

    // Header animation
    if (header) {
        gsap.fromTo(header,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: catalogue,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }

    // Calculate how far we need to scroll
    const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth + 80);
    };

    // Horizontal scroll animation
    const horizontalScroll = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
            trigger: catalogue,
            start: 'top top',
            end: () => `+=${track.scrollWidth - window.innerWidth + 80}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                // Update progress bar
                if (progressBar) {
                    gsap.to(progressBar, {
                        width: `${self.progress * 100}%`,
                        duration: 0.1,
                        ease: 'none'
                    });
                }
            }
        }
    });

    // Items entrance animation
    items.forEach((item, index) => {
        const image = item.querySelector('.catalogue-item-image');
        const content = item.querySelector('.catalogue-item-content');

        // Set initial state
        gsap.set(item, { opacity: 0.3, scale: 0.9 });

        // Create animation for each item based on scroll position
        gsap.to(item, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                containerAnimation: horizontalScroll,
                start: 'left 80%',
                end: 'left 20%',
                scrub: 1,
            }
        });

        // Parallax effect on images
        if (image) {
            gsap.fromTo(image.querySelector('img'),
                { scale: 1.2 },
                {
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: item,
                        containerAnimation: horizontalScroll,
                        start: 'left right',
                        end: 'right left',
                        scrub: true,
                    }
                }
            );
        }
    });

    // Recalculate on resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });
}

// ========================================
// SECTORS ANIMATIONS - Flip Cards
// ========================================
function initSectorsAnimations() {
    const sectorCards = document.querySelectorAll('.sector-card');
    const sectionHeader = document.querySelector('.sectors .section-header');

    // Header animation
    if (sectionHeader) {
        gsap.fromTo(sectionHeader,
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionHeader,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }

    // Sector cards with stagger - entrance animation
    gsap.fromTo(sectorCards,
        {
            y: 120,
            opacity: 0,
            rotateX: -15
        },
        {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.sectors-grid',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // Icon glow animation on hover
    sectorCards.forEach(card => {
        const icon = card.querySelector('.sector-icon');
        const hint = card.querySelector('.sector-hint');

        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.1,
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(hint, {
                opacity: 0,
                y: -10,
                duration: 0.2
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                boxShadow: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(hint, {
                opacity: 0.6,
                y: 0,
                duration: 0.3
            });
        });
    });
}

// ========================================
// SHOWCASE ANIMATIONS - Scroll triggered gallery
// ========================================
function initShowcaseAnimations() {
    const showcase = document.querySelector('.showcase');
    if (!showcase) return;

    const backgrounds = document.querySelectorAll('.showcase-bg');
    const navItems = document.querySelectorAll('.showcase-nav-item');
    const titleEl = document.getElementById('showcase-title');
    const descEl = document.getElementById('showcase-desc');

    // Data for each slide
    const slidesData = [
        {
            title: "Cafés & Restaurants",
            desc: "Solutions d'encaissement modernes pour optimiser votre service client et sécuriser vos transactions."
        },
        {
            title: "Tabacs & Presse",
            desc: "Équipements adaptés aux contraintes réglementaires avec traçabilité complète et sécurité renforcée."
        },
        {
            title: "Boulangeries",
            desc: "Caisses tactiles et monnayeurs automatiques pour un service rapide et sans erreur."
        }
    ];

    let currentIndex = 0;
    const totalSlides = backgrounds.length;

    // Function to change slide
    function changeSlide(index) {
        if (index === currentIndex) return;

        // Update backgrounds
        backgrounds.forEach((bg, i) => {
            if (i === index) {
                bg.classList.add('active');
            } else {
                bg.classList.remove('active');
            }
        });

        // Update nav items
        navItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
                gsap.to(item, { opacity: 1, x: 0, duration: 0.4 });
            } else {
                item.classList.remove('active');
                gsap.to(item, { opacity: 0.4, x: 20, duration: 0.4 });
            }
        });

        // Animate title and description
        gsap.to([titleEl, descEl], {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                titleEl.textContent = slidesData[index].title;
                descEl.textContent = slidesData[index].desc;
                gsap.to([titleEl, descEl], {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1
                });
            }
        });

        currentIndex = index;
    }

    // Click on nav items
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            changeSlide(index);
        });
    });

    // ScrollTrigger for each slide
    ScrollTrigger.create({
        trigger: showcase,
        start: 'top top',
        end: `+=${totalSlides * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(Math.floor(progress * totalSlides), totalSlides - 1);
            if (newIndex !== currentIndex) {
                changeSlide(newIndex);
            }
        }
    });

    // Initial animation
    gsap.fromTo('.showcase-info',
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out',
            scrollTrigger: {
                trigger: showcase,
                start: 'top 80%'
            }
        }
    );

    gsap.fromTo(navItems,
        { opacity: 0, x: 50 },
        { opacity: 0.4, x: 20, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: {
                trigger: showcase,
                start: 'top 80%'
            }
        }
    );

    // Set first item as active
    gsap.set(navItems[0], { opacity: 1, x: 0 });
}

// ========================================
// STATS ANIMATIONS
// ========================================
function initStatsAnimations() {
    const statItems = document.querySelectorAll('.stat-item');
    const counters = document.querySelectorAll('.stat-number');

    // Initial state
    gsap.set(statItems, { opacity: 0, y: 50 });

    ScrollTrigger.create({
        trigger: '.stats',
        start: 'top 70%',
        onEnter: () => {
            // Animate stat items
            gsap.to(statItems, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(1.7)'
            });

            // Animate counters
            counters.forEach((counter, index) => {
                const target = parseInt(counter.getAttribute('data-target'));
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    delay: index * 0.15,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out'
                });
            });
        },
        once: true
    });
}

// ========================================
// ADVANTAGES ANIMATIONS
// ========================================
function initAdvantagesAnimations() {
    const advantageItems = document.querySelectorAll('.advantage-item');
    const sectionHeader = document.querySelector('.advantages .section-header');

    if (sectionHeader) {
        gsap.fromTo(sectionHeader,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionHeader,
                    start: 'top 80%'
                }
            }
        );
    }

    gsap.fromTo(advantageItems,
        { y: 80, opacity: 0, scale: 0.8 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: '.advantages-list',
                start: 'top 75%'
            }
        }
    );
}

// ========================================
// CLIENTS ANIMATIONS
// ========================================
function initClientsAnimations() {
    const clientLogos = document.querySelectorAll('.client-logo');
    const sectionHeader = document.querySelector('.clients .section-header');

    if (sectionHeader) {
        gsap.fromTo(sectionHeader,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionHeader,
                    start: 'top 80%'
                }
            }
        );
    }

    gsap.fromTo(clientLogos,
        { opacity: 0, scale: 0.5, rotation: -10 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.clients-grid',
                start: 'top 80%'
            }
        }
    );
}

// ========================================
// CONTACT ANIMATIONS
// ========================================
function initContactAnimations() {
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form-wrapper');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 70%'
        }
    });

    if (contactInfo) {
        tl.fromTo(contactInfo,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
    }

    if (contactForm) {
        tl.fromTo(contactForm,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
            '-=0.7'
        );
    }

    // Form fields animation
    const formGroups = document.querySelectorAll('.form-group');
    gsap.fromTo(formGroups,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%'
            }
        }
    );
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            if (!data.name || !data.email || !data.sector || !data.message) {
                // Shake animation for error
                gsap.to(form, {
                    x: [-10, 10, -10, 10, 0],
                    duration: 0.4,
                    ease: 'power2.inOut'
                });
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                gsap.to(form, {
                    x: [-10, 10, -10, 10, 0],
                    duration: 0.4,
                    ease: 'power2.inOut'
                });
                alert('Veuillez entrer une adresse email valide.');
                return;
            }

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Envoi en cours...';
            submitBtn.disabled = true;

            // Success animation
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                form.reset();

                // Success feedback
                gsap.fromTo(form,
                    { scale: 1 },
                    { scale: 1.02, duration: 0.2, yoyo: true, repeat: 1, ease: 'power2.inOut' }
                );

                alert('Votre message a été envoyé avec succès !');
            }, 1500);
        });
    }
}
