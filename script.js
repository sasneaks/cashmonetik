/* ============================================================
   CASHMONETIK - Premium Interactions & Animations
   GSAP + ScrollTrigger
   ============================================================ */

(function () {
    'use strict';

    // ======================== GSAP SETUP ========================
    gsap.registerPlugin(ScrollTrigger);

    // ======================== SCROLL PROGRESS ========================
    function initScrollProgress() {
        const bar = document.querySelector('.scroll-progress');
        if (!bar) return;
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (scrollTop / docHeight * 100) + '%';
        }, { passive: true });
    }

    // ======================== HEADER ========================
    function initHeader() {
        const header = document.getElementById('header');
        if (!header) return;

        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const current = window.scrollY;
            header.classList.toggle('scrolled', current > 50);
            lastScroll = current;
        }, { passive: true });
    }

    // ======================== MOBILE MENU ========================
    function initMobileMenu() {
        const toggle = document.querySelector('.mobile-toggle');
        const menu = document.querySelector('.mobile-menu');
        if (!toggle || !menu) return;

        function closeMenu() {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            menu.setAttribute('aria-hidden', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                toggle.classList.add('active');
                menu.classList.add('active');
                menu.setAttribute('aria-hidden', 'false');
                toggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            }
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // ======================== SMOOTH SCROLL ========================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const id = anchor.getAttribute('href');
                if (id === '#') return;
                const target = document.querySelector(id);
                if (!target) return;
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        });
    }

    // ======================== SCROLL ANIMATIONS ========================
    function initScrollAnimations() {
        const elements = document.querySelectorAll('[data-animate]');

        elements.forEach(el => {
            const delay = parseFloat(el.dataset.delay) || 0;
            const type = el.dataset.animate;

            if (type === 'hero-title') {
                // Hero title: stagger each line with clip-path reveal
                const lines = el.querySelectorAll('.hero-line');
                gsap.fromTo(lines,
                    { opacity: 0, y: 50, clipPath: 'inset(0 0 100% 0)' },
                    {
                        opacity: 1, y: 0,
                        clipPath: 'inset(0 0 0% 0)',
                        duration: 1.1,
                        stagger: 0.12,
                        ease: 'power4.out',
                        delay: 0.3
                    }
                );
                return;
            }

            gsap.fromTo(el,
                { opacity: 0, y: 40, scale: 0.98 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.9,
                    delay: delay,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        once: true
                    }
                }
            );
        });
    }

    // ======================== STATS COUNTER ========================
    function initStatsCounter() {
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');
        if (!statNumbers.length) return;

        statNumbers.forEach(el => {
            const target = parseInt(el.dataset.count, 10);

            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    gsap.to(el, {
                        innerText: target,
                        duration: 2,
                        ease: 'power2.out',
                        snap: { innerText: 1 },
                        onUpdate: function () {
                            el.textContent = Math.round(parseFloat(el.innerText));
                        }
                    });
                }
            });
        });
    }

    // ======================== HERO PARALLAX ========================
    function initHeroParallax() {
        const hero = document.getElementById('hero');
        if (!hero) return;

        const glows = hero.querySelectorAll('.hero-glow');
        gsap.to(glows, {
            y: -80,
            ease: 'none',
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5
            }
        });

        // Fade out hero content on scroll
        const content = hero.querySelector('.hero-content');
        if (content) {
            gsap.to(content, {
                opacity: 0,
                y: -60,
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: '60% top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        }
    }

    // ======================== CHATBOT ========================
    function initChatbot() {
        const trigger = document.querySelector('.chatbot-trigger');
        const widget = document.querySelector('.chatbot-widget');
        const close = document.querySelector('.chatbot-close');
        const messages = document.querySelector('.chatbot-messages');
        const quickReplies = document.querySelector('.chatbot-quick-replies');
        const input = document.querySelector('.chatbot-input input');
        const sendBtn = document.querySelector('.chatbot-input button');
        const badge = document.querySelector('.chatbot-badge');

        if (!trigger || !widget) return;

        const responses = {
            prix: {
                text: "Nos solutions sont disponibles en location ou a l'achat. Installation et formation incluses dans tous nos contrats.\n\nPour obtenir un devis personnalise adapte a votre activite, contactez-nous au 01 62 34 34 62 ou demandez un audit gratuit sur notre page contact !",
            },
            installation: {
                text: "L'installation se fait rapidement ! Notre processus :\n1. Livraison sur site\n2. Installation et configuration\n3. Formation de votre equipe (2h)\n4. Tests et mise en service\n\nTout est inclus dans votre contrat.",
            },
            produits: {
                text: "Notre gamme complete :\n- Caisses automatiques (monnayeurs)\n- Bornes de commande interactives\n- Caisses tactiles nouvelle generation\n- Balances professionnelles connectees\n- Robot Sparkoz (nettoyage autonome)\n\nChaque solution est personnalisable.",
            },
            contact: {
                text: "Contactez notre equipe commerciale :\n- Tel : 01 62 34 34 62\n- Email : commercial@cashmonetik.fr\n- Horaires : Lun-Ven 9h-18h\n\nOu demandez un audit gratuit sur notre page contact !",
            }
        };

        function toggleWidget() {
            const isOpen = widget.classList.contains('active');
            if (isOpen) {
                widget.classList.remove('active');
                widget.setAttribute('aria-hidden', 'true');
            } else {
                widget.classList.add('active');
                widget.setAttribute('aria-hidden', 'false');
                if (badge) badge.style.display = 'none';
            }
        }

        function addMessage(text, isBot) {
            const msg = document.createElement('div');
            msg.className = 'chatbot-message ' + (isBot ? 'chatbot-message--bot' : 'chatbot-message--user');
            msg.innerHTML = '<p>' + text.replace(/\n/g, '<br>') + '</p>';
            messages.appendChild(msg);
            messages.scrollTop = messages.scrollHeight;
        }

        function handleTopic(topic) {
            addMessage(quickReplies.querySelector('[data-topic="' + topic + '"]').textContent, false);
            setTimeout(() => {
                if (responses[topic]) {
                    addMessage(responses[topic].text, true);
                }
            }, 600);
        }

        function handleUserInput() {
            const text = input.value.trim();
            if (!text) return;
            addMessage(text, false);
            input.value = '';

            setTimeout(() => {
                const lower = text.toLowerCase();
                let matched = false;
                if (lower.match(/prix|tarif|co[uû]t|combien/)) { addMessage(responses.prix.text, true); matched = true; }
                else if (lower.match(/install|d[eé]lai|livr/)) { addMessage(responses.installation.text, true); matched = true; }
                else if (lower.match(/produit|caisse|borne|robot|balance/)) { addMessage(responses.produits.text, true); matched = true; }
                else if (lower.match(/contact|t[eé]l|mail|appel|conseiller/)) { addMessage(responses.contact.text, true); matched = true; }

                if (!matched) {
                    addMessage("Merci pour votre message. Pour une reponse personnalisee, n'hesitez pas a nous contacter au 01 62 34 34 62 ou par email a commercial@cashmonetik.fr.", true);
                }
            }, 800);
        }

        trigger.addEventListener('click', toggleWidget);
        close.addEventListener('click', toggleWidget);

        quickReplies.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => handleTopic(btn.dataset.topic));
        });

        sendBtn.addEventListener('click', handleUserInput);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleUserInput();
        });
    }

    // ======================== COOKIE BANNER ========================
    function initCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        const acceptBtn = document.getElementById('cookieAccept');
        const settingsBtn = document.getElementById('cookieSettings');

        if (!banner) return;

        if (!localStorage.getItem('cashmonetik_cookies')) {
            setTimeout(() => banner.classList.add('active'), 2000);
        }

        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('cashmonetik_cookies', 'accepted');
                banner.classList.remove('active');
            });
        }

        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                localStorage.setItem('cashmonetik_cookies', 'essential');
                banner.classList.remove('active');
            });
        }
    }

    // ======================== FAQ ACCORDION ========================
    function initFaqAccordion() {
        const items = document.querySelectorAll('.faq-item');
        if (!items.length) return;

        items.forEach(item => {
            const btn = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            if (!btn || !answer) return;

            btn.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');

                // Close all
                items.forEach(i => {
                    i.classList.remove('active');
                    const a = i.querySelector('.faq-answer');
                    if (a) a.style.maxHeight = null;
                    const b = i.querySelector('.faq-question');
                    if (b) b.setAttribute('aria-expanded', 'false');
                });

                // Open clicked if was closed
                if (!isOpen) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    btn.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }

    // ======================== ROI CALCULATOR ========================
    function initRoiCalculator() {
        const form = document.querySelector('.roi-calculator');
        if (!form) return;

        const inputs = {
            transactions: document.getElementById('transactions'),
            avgBasket: document.getElementById('avgBasket'),
            cashErrors: document.getElementById('cashErrors'),
            cashTime: document.getElementById('cashTime'),
            employeeCost: document.getElementById('employeeCost')
        };

        const outputs = {
            monthlySavings: document.getElementById('monthlySavings'),
            errorSavings: document.getElementById('errorSavings'),
            timeSavings: document.getElementById('timeSavings'),
            basketIncrease: document.getElementById('basketIncrease'),
            totalSavings: document.getElementById('totalSavings'),
            paybackPeriod: document.getElementById('paybackPeriod')
        };

        if (!inputs.transactions || !outputs.monthlySavings) return;

        function calculate() {
            const t = parseInt(inputs.transactions.value) || 0;
            const basket = parseInt(inputs.avgBasket.value) || 0;
            const errors = parseInt(inputs.cashErrors.value) || 0;
            const time = parseInt(inputs.cashTime.value) || 0;
            const cost = parseInt(inputs.employeeCost.value) || 0;

            const errorSave = errors * 5 * 4.3; // 5€ avg error * 4.3 weeks
            const timeSave = (time / 60) * cost * 30; // daily time saved * 30 days
            const basketInc = t * basket * 0.15 * 30 * 0.02; // 15% increase on 2% margin
            const total = errorSave + timeSave + basketInc;

            outputs.errorSavings.textContent = Math.round(errorSave) + '€';
            outputs.timeSavings.textContent = Math.round(timeSave) + '€';
            outputs.basketIncrease.textContent = Math.round(basketInc) + '€';
            outputs.totalSavings.textContent = Math.round(total) + '€';
            if (outputs.monthlySavings) outputs.monthlySavings.textContent = Math.round(total) + '€';
            if (outputs.paybackPeriod) outputs.paybackPeriod.textContent = '-';
        }

        Object.values(inputs).forEach(input => {
            if (input) input.addEventListener('input', calculate);
        });

        calculate(); // Initial calculation
    }

    // ======================== SHOWCASE (secteurs) ========================
    function initShowcase() {
        const navItems = document.querySelectorAll('.showcase-nav-item');
        const backgrounds = document.querySelectorAll('.showcase-bg');
        const title = document.getElementById('showcase-title');
        const desc = document.getElementById('showcase-desc');
        if (!navItems.length) return;

        const data = [
            { title: 'Cafés & Restaurants', desc: 'Solutions d\'encaissement modernes pour optimiser votre service client et sécuriser vos transactions.' },
            { title: 'Tabacs & Presse', desc: 'Équipements adaptés aux contraintes réglementaires avec traçabilité complète et sécurité renforcée.' },
            { title: 'Boulangeries', desc: 'Caisses tactiles et monnayeurs automatiques pour fluidifier le service aux heures de pointe.' }
        ];

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.dataset.index);
                navItems.forEach(n => n.classList.remove('active'));
                backgrounds.forEach(b => b.classList.remove('active'));
                item.classList.add('active');
                if (backgrounds[idx]) backgrounds[idx].classList.add('active');
                if (title && data[idx]) title.textContent = data[idx].title;
                if (desc && data[idx]) desc.textContent = data[idx].desc;
            });
        });
    }

    // ======================== TYPED.JS HERO TEXT ========================
    function initTypedText() {
        const el = document.getElementById('typed-output');
        if (!el || typeof Typed === 'undefined') return;

        new Typed('#typed-output', {
            strings: [
                'encaissements.',
                'transactions.',
                'paiements.',
                'fonds de caisse.',
                'flux monétaires.'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: false
        });
    }

    // ======================== CSS PARTICLES ========================
    function initParticles() {
        const container = document.getElementById('heroParticles');
        if (!container) return;

        const count = window.innerWidth < 768 ? 20 : 40;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (8 + Math.random() * 15) + 's';
            p.style.animationDelay = (-Math.random() * 20) + 's';
            p.style.opacity = (0.2 + Math.random() * 0.6).toString();
            container.appendChild(p);
        }
    }

    // ======================== STICKY STEPS (How it works) ========================
    function initStickySteps() {
        const section = document.getElementById('how-it-works');
        if (!section || window.innerWidth < 1024) return;

        const steps = section.querySelectorAll('.sticky-step');
        const progressBar = section.querySelector('.sticky-progress-bar');
        if (!steps.length) return;

        // Activate steps on scroll
        steps.forEach((step, i) => {
            ScrollTrigger.create({
                trigger: step,
                start: 'top 60%',
                end: 'bottom 40%',
                onEnter: () => {
                    steps.forEach(s => s.classList.remove('active'));
                    step.classList.add('active');
                    if (progressBar) {
                        progressBar.style.width = ((i + 1) / steps.length * 100) + '%';
                    }
                },
                onEnterBack: () => {
                    steps.forEach(s => s.classList.remove('active'));
                    step.classList.add('active');
                    if (progressBar) {
                        progressBar.style.width = ((i + 1) / steps.length * 100) + '%';
                    }
                }
            });
        });

        // Activate first step by default
        if (steps[0]) steps[0].classList.add('active');
    }

    // ======================== TESTIMONIAL SCROLL REVEAL ========================
    function initTestimonialScroll() {
        const slides = document.querySelectorAll('.testimonial-slide');
        if (!slides.length) return;

        slides.forEach((slide) => {
            const quote = slide.querySelector('blockquote');
            const author = slide.querySelector('.testimonial-big-author');
            const bigQuote = slide.querySelector('.testimonial-big-quote');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: slide,
                    start: 'top 70%',
                    end: 'top 20%',
                    scrub: 1,
                }
            });

            if (bigQuote) tl.fromTo(bigQuote, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 0.2, duration: 0.3 }, 0);
            if (quote) tl.fromTo(quote, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.1);
            if (author) tl.fromTo(author, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.3);
        });
    }

    // ======================== HORIZONTAL SCROLL PROBLEMS ========================
    function initHorizontalProblems() {
        const section = document.getElementById('problems');
        if (!section || window.innerWidth < 1024) return;

        const grid = section.querySelector('.problems-grid');
        if (!grid) return;

        grid.classList.add('problems-horizontal');

        // Wait for layout
        requestAnimationFrame(() => {
            const scrollWidth = grid.scrollWidth;
            const viewWidth = section.offsetWidth;

            gsap.to(grid, {
                x: -(scrollWidth - viewWidth + 48),
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 10%',
                    end: () => '+=' + (scrollWidth - viewWidth + 200),
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });
        });
    }

    // ======================== MOUSE SPOTLIGHT ========================
    function initMouseSpotlight() {
        const cards = document.querySelectorAll(
            '.solution-card, .step-card, .testimonial-card, .feature-card, .guarantee-card'
        );
        if (!cards.length) return;

        document.addEventListener('mousemove', (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        });
    }

    // ======================== MAGNETIC BUTTONS ========================
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-primary.btn-xl, .btn-primary.btn-lg');
        if (!buttons.length) return;

        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = 'translateY(-3px) translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    // ======================== STAGGERED REVEALS ========================
    function initStaggeredReveals() {
        const grids = document.querySelectorAll('.solutions-grid, .problems-grid, .sectors-grid, .features-grid, .testimonials-grid, .stats-grid');
        grids.forEach(grid => {
            const children = grid.children;
            for (let i = 0; i < children.length; i++) {
                if (!children[i].dataset.delay) {
                    children[i].dataset.delay = (i * 0.1).toFixed(1);
                }
            }
        });
    }

    // ======================== INIT ========================
    function init() {
        initScrollProgress();
        initHeader();
        initMobileMenu();
        initSmoothScroll();
        initParticles();
        initTypedText();
        initStaggeredReveals();
        initScrollAnimations();
        initStatsCounter();
        initHeroParallax();
        initStickySteps();
        initTestimonialScroll();
        initHorizontalProblems();
        initMouseSpotlight();
        initMagneticButtons();
        initChatbot();
        initCookieBanner();
        initFaqAccordion();
        initRoiCalculator();
        initShowcase();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
