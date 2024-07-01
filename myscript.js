// for accordion
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-button');

  accordions.forEach(accordion => {
      accordion.addEventListener('click', () => {
          const content = accordion.nextElementSibling;
          const isOpen = accordion.getAttribute('aria-expanded') === 'true';

          accordion.setAttribute('aria-expanded', !isOpen);
          content.classList.toggle('open');
      });
  });
});

