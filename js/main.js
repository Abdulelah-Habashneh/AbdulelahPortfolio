/* ============================================================
   Abdulelah Habashneh — Portfolio
   Navigation, scroll effects, and reveal animations
   ============================================================ */

(function () {
  'use strict';

  /* ---- Navbar shadow on scroll ---- */
  var navbar = document.getElementById('navbar');
  function onScrollShadow() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScrollShadow, { passive: true });
  onScrollShadow();

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* Close mobile menu when a link is clicked */
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Active link highlighting ---- */
  var sections = document.querySelectorAll('section[id]');
  var linkItems = navLinks.querySelectorAll('a[href^="#"]');

  function setActive() {
    var pos = window.scrollY + 100;
    var currentId = '';
    sections.forEach(function (section) {
      if (pos >= section.offsetTop) {
        currentId = section.id;
      }
    });
    linkItems.forEach(function (a) {
      var href = a.getAttribute('href').slice(1);
      a.classList.toggle('active', href === currentId);
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* ---- Reveal-on-scroll animations ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }
})();
