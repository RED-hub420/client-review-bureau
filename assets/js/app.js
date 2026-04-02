document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.top-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });
  }

  document.querySelectorAll('.demo-form button').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.type === 'button') {
        button.blur();
      }
    });
  });
});
