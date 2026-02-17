// Sticky nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 50);
});

// Smooth scroll for nav links (already handled by CSS scroll-behavior,
// but this adds active state tracking)
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id], .nsfw-showcase');

function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  let current = '';
  sections.forEach(section => {
    if (section.offsetTop <= scrollY) {
      current = section.id || '';
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('nav__link--active');
    const href = link.getAttribute('href');
    if (href === '#flux' && (current === 'flux' || current === 'anime' || current === 'lora')) {
      link.classList.add('nav__link--active');
    } else if (href === '#video' && current === 'video') {
      link.classList.add('nav__link--active');
    } else if (href === '#skills' && current === 'skills') {
      link.classList.add('nav__link--active');
    } else if (href === '#about' && current === 'about') {
      link.classList.add('nav__link--active');
    } else if (href === '#contact' && current === 'contact') {
      link.classList.add('nav__link--active');
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// Mobile hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('nav__hamburger--open');
  mobileMenu.classList.toggle('mobile-menu--open');
  document.body.style.overflow = mobileMenu.classList.contains('mobile-menu--open') ? 'hidden' : '';
});

// Close mobile menu when a link is tapped
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('nav__hamburger--open');
    mobileMenu.classList.remove('mobile-menu--open');
    document.body.style.overflow = '';
  });
});

