document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENÚ MÓVIL ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('active');
    }));

    // --- 2. EFECTO DE ESCRITURA (ACTUALIZADO) ---
    const typingText = document.querySelector('.typing-text');
    const phrases = ['Hola, soy Javier', 'Desarrollador Web Full Stack.']; // <-- CAMBIO AQUÍ
    let i = 0, j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    function loop() {
        isEnd = false;
        typingText.innerHTML = currentPhrase.join('');

        if (!isDeleting && i <= phrases[j].length) {
            currentPhrase.push(phrases[j][i]);
            i++;
            setTimeout(loop, 100);
        } else if (isDeleting && i <= phrases[j].length) {
            currentPhrase.pop(phrases[j][i]);
            i--;
            setTimeout(loop, 50);
        } else if (i == phrases[j].length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(loop, 2000);
        } else if (isDeleting && i == 0) {
            isDeleting = false;
            j = (j + 1) % phrases.length;
            setTimeout(loop, 500);
        }
    }
    loop();

    // --- 3. ANIMACIÓN DE APARICIÓN (REVEAL) ---
    const reveals = document.querySelectorAll('.reveal');
    const handleReveal = () => {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', handleReveal);
    handleReveal();

    // --- 4. ANIMACIÓN DE BARRAS DE HABILIDADES ---
    const skillBars = document.querySelectorAll('.skill-progress');
    const showSkillBars = () => {
        skillBars.forEach(bar => {
            const skillLevel = bar.getAttribute('data-skill');
            const barPosition = bar.getBoundingClientRect().top;
            if (barPosition < window.innerHeight - 100) {
                bar.style.width = skillLevel + '%';
            }
        });
    };
    window.addEventListener('scroll', showSkillBars);
    showSkillBars();

    // --- 5. NAVEGACIÓN SUAVE Y EFECTO 3D EN TARJETAS ---
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const cards = document.querySelectorAll('.skill-card, .project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});