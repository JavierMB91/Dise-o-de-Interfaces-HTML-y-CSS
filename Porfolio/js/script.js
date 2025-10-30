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

    // --- 2. EFECTO DE ESCRITURA ---
    const typingText = document.querySelector('.typing-text');
    const phrases = ['console.log("Hola, soy Javier");', 'Desarrollador Web Full Stack.'];
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

    // --- 5. NAVEGACIÓN SUAVE Y FIABLE (CORREGIDA) ---
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el salto instantáneo del anchor
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Usamos scrollIntoView para un scroll suave y fiable.
                // El CSS (scroll-margin-top) se encargará del offset del header.
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});