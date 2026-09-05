const hamburger = document.querySelector('#hamburger');
const primaryNav = document.querySelector('#primary-nav');

hamburger.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
});
