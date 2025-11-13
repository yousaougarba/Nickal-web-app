// script.js
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#fff';
      link.style.background = '#337ab7';
      link.style.transition = 'all 0.3s ease-in-out';
    });

    link.addEventListener('mouseout', () => {
      link.style.color = '#337ab7';
      link.style.background = 'none';
      link.style.transition = 'all 0.3s ease-in-out';
    });
  });
});// script.js
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = 'Top';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.display = 'none';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});// script.js
const animationContainer = document.createElement('div');
animationContainer.style.position = 'fixed';
animationContainer.style.top = '0';
animationContainer.style.left = '0';
animationContainer.style.width = '100%';
animationContainer.style.height = '100%';
animationContainer.style.background = 'linear-gradient(to bottom, #337ab7, #fff)';
animationContainer.style.zIndex = '-1';
document.body.appendChild(animationContainer);

let animationFrame = 0;
function animate() {
  animationContainer.style.background = `linear-gradient(to bottom, #337ab7 ${animationFrame}%, #fff ${animationFrame + 50}%)`;
  animationFrame = (animationFrame + 1) % 100;
  requestAnimationFrame(animate);
}
animate();
