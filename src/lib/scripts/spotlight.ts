// This script adds a spotlight effect to elements with the class 'spotlight-card'.
// It listens for mouse movements to update the position of the spotlight effect,
const cards = document.querySelectorAll('.spotlight-card');

cards.forEach((card) => {
  const element = card as HTMLElement;
  const spotlight = element.querySelector('.spotlight') as HTMLElement | null;
  if (!spotlight) return;

  element.addEventListener('mousemove', (e: MouseEvent) => {
    const { left, top } = element.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    spotlight.style.setProperty('--x', `${x}px`);
    spotlight.style.setProperty('--y', `${y}px`);
  });

  element.addEventListener('mouseleave', () => {
    spotlight.style.setProperty('--x', `50%`);
    spotlight.style.setProperty('--y', `50%`);
  });
});
