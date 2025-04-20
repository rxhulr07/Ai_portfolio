// Event listeners and interactivity
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.innerHTML = mobileMenu.classList.contains('hidden') ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetId, offsetY: 80 },
            ease: 'power3.out'
        });

        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('hidden', window.scrollY < 300);
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power3.out' });
});