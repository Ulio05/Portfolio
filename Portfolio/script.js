let scrollProgress = 0;
let ticking = false;

function updateScrollEffect() {
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = scrollTop / documentHeight;
    
    // Effet de parallaxe et de déplacement des nuages vers la droite
    const cloudsLayer = document.getElementById('cloudsLayer');
    const translateX = scrollProgress * 150; // Déplacement horizontal vers la droite
    const scale = 1 + scrollProgress * 0.5; // Effet de zoom
    
    cloudsLayer.style.transform = `translateX(${translateX}px) scale(${scale})`;
    
    // Barre de progression
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = (scrollProgress * 100) + '%';
    
    // Masquer l'indicateur de scroll après un certain point
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (scrollProgress > 0.1) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffect);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Intersection Observer pour les animations d'apparition
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer toutes les sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Smooth scrolling pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});

// Animation initiale
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.section').classList.add('visible');
    }, 500);
});

// Effet de parallaxe supplémentaire pour les nuages individuels
window.addEventListener('scroll', () => {
    const clouds = document.querySelectorAll('.cloud');
    const scrolled = window.pageYOffset;
    
    clouds.forEach((cloud, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed * 0.2);
        const xPos = scrolled * speed * 0.4; // Déplacement vers la droite
        cloud.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    });
});