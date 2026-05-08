const cards = document.querySelectorAll(
  '.skill-card, .project-card, .about-box, .contact-box'
);

cards.forEach((card) => {

  card.addEventListener('mousemove', (e) => {

    const x = e.offsetX;
    const y = e.offsetY;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(255,255,255,0.2),
      rgba(255,255,255,0.08))
    `;
  });

  card.addEventListener('mouseleave', () => {

    card.style.background =
    'rgba(255,255,255,0.08)';

  });

});