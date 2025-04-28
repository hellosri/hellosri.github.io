// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

// Calendly inline widget initialization
window.addEventListener('DOMContentLoaded', () => {
  if (window.Calendly) {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/hellosri/consultation',
      parentElement: document.getElementById('calendly-inline-widget'),
      prefill: {},
      utm: {}
    });
  }
});