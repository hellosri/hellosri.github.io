// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form') || document.querySelector('form[action*="formspree"]');
  const sendBtn = document.getElementById('send-btn');
  const consent = document.getElementById('consent-info');
  const phoneInput = form ? form.querySelector('input[name="phone"]') : null;

  function validateForm() {
    const valid = form.checkValidity() && consent.checked;
    sendBtn.disabled = !valid;
  }

  // Auto-format phone number as (123) 456-7890
  function formatPhoneNumber(value) {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    const len = digits.length;
    if (len === 0) return '';
    if (len < 4) return digits;
    if (len < 7) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6,10)}`;
  }

  if (form && sendBtn && consent) {
    form.addEventListener('input', validateForm);
    form.addEventListener('change', validateForm);
    validateForm();

    if (phoneInput) {
      phoneInput.addEventListener('input', function (e) {
        const cursor = phoneInput.selectionStart;
        const formatted = formatPhoneNumber(phoneInput.value);
        phoneInput.value = formatted;
        // Try to keep cursor at the end for best UX
        phoneInput.setSelectionRange(formatted.length, formatted.length);
      });
    }
  }
});
  
// Calendly inline widget initialization
/* window.addEventListener('DOMContentLoaded', () => {
  if (window.Calendly) {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/hellosri/consultation',
      parentElement: document.getElementById('calendly-inline-widget'),
      prefill: {},
      utm: {}
    });
  }
}); */
