window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        const matchingLink = document.querySelector(`nav a[href="#${id}"]`);

        if (entry.isIntersecting && matchingLink) {
          navLinks.forEach((el) => {
            el.classList.remove('text-emerald-400');
            el.classList.add('text-white');
          });

          matchingLink.classList.remove('text-white');
          matchingLink.classList.add('text-emerald-400');
        }
      });
    },
    {
      rootMargin: '-60px 0px 0px 0px',
      threshold: 0.5,
    }
  );

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});
