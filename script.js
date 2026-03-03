// NAV SCROLL
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// MOBILE NAV
const toggle = document.querySelector('.nav__toggle');
const mobileNav = document.getElementById('mobileNav');
if (toggle) {
  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    toggle.classList.toggle('active');
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      toggle.classList.remove('active');
    });
  });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// FADE IN ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product, .ritual__step, .bundle__grid, .story__grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});
