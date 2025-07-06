window.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('hero-title');
  const navbar = document.getElementById('navbar');

  if (!target || !navbar) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          target.classList.add('behind-navbar-highlight');
        } else {
          target.classList.remove('behind-navbar-highlight');
        }
      });
    },
    {
      root: null,
      rootMargin: `-${navbar.offsetHeight}px 0px 0px 0px`,
      threshold: 0,
    }
  );

  observer.observe(target);
});
