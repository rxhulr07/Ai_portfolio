// Core functionality and DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js with circuit-themed connections
    particlesJS('particles-js', {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: '#00DDEB' },
            shape: { type: 'circle' },
            opacity: { value: 0.7 },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 100, color: '#00DDEB', opacity: 0.6, width: 1.5 },
            move: { enable: true, speed: 3, direction: 'none', random: true }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
            modes: { grab: { distance: 120, line_linked: { opacity: 0.8 } } }
        }
    });
});