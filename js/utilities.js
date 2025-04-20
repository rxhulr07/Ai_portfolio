// Helper functions and utilities
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ScrollReveal
ScrollReveal().reveal('.skill-card, .project-card, .experience-card, .education-card, .certificate-card, .achievement-card', {
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});