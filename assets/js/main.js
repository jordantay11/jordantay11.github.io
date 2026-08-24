document.querySelectorAll('.mobile-toggle').forEach(btn => {
  const navList = btn.parentElement.querySelector('nav ul');
  if (!navList) return;

  btn.setAttribute('aria-expanded', 'false');

  btn.addEventListener('click', () => {
    navList.classList.toggle('open');
    btn.setAttribute('aria-expanded', navList.classList.contains('open') ? 'true' : 'false');
  });

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960) {
        navList.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
      navList.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
