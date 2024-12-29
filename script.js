// script.js

// Anime.js Animations for Elements
document.addEventListener('DOMContentLoaded', () => {
    // Fade in content on load
    anime({
        targets: 'section, aside, footer, .worker-image',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(150) // Stagger animation
    });

    // Scroll to Top Button Animation
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        anime({
            targets: 'html, body',
            scrollTop: 0,
            duration: 700,
            easing: 'easeOutCubic'
        });
    });
});
