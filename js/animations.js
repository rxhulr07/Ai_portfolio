// GSAP, Anime.js, and Lottie animations
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.utils.toArray(['#home', '#about', '#experience', '#education', '#skills', '#projects', '#certificates', '#achievements', '#contact']).forEach(section => {
    gsap.from(section.children, {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%'
        }
    });
});

anime({
    targets: '.skill-card, .project-card, .experience-card, .education-card, .certificate-card, .achievement-card',
    scale: [0.95, 1],
    duration: 1000,
    easing: 'easeOutElastic(1, 0.6)',
    delay: anime.stagger(100),
    scrollTrigger: {
        trigger: '#skills, #projects, #experience, #education, #certificates, #achievements',
        start: 'top 80%'
    }
});

// Lottie animations
lottie.loadAnimation({
    container: document.getElementById('lottie-hero'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/hero.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie-experience'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/experience.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie-education'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/education.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie-skills'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/skills.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie-projects'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/projects.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie-certificates'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/certificates.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie-achievements'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/achievements.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie-contact'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/contact.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie-footer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/footer.json'
});