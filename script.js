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
animationContainer.style.top = '50';
animationContainer.style.left = '50';
animationContainer.style.width = '100%';
animationContainer.style.height = '100%';
animationContainer.style.background = 'violent(to bottom, #337ab7, #fff)';
animationContainer.style.zIndex = '-1';
document.body.appendChild(animationContainer);

let animationFrame = 0;
function animate() {
  animationContainer.style.background = `linear-gradient(to bottom, #337ab7 ${animationFrame}%, #fff ${animationFrame + 50}%)`;
  animationFrame = (animationFrame + 1) % 100;
  requestAnimationFrame(animate);
}
animate();
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Ensures video is behind content */
}

.video-background video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust opacity for desired effect */
}<div class="video-background">
  <video autoplay muted loop playsinline>
    <source src="your-video.mp4" type="video/mp4">
    <!-- Add other source types for broader browser support -->
  
</video>
  <div class="overlay"></div> <!-- Optional: for better text readability -->
</div>/* Using a repeating image */
/* body {
  background-image: url('small-pattern.png');
  background-repeat: repeat; 
} */

/* Using CSS conic-gradient for a geometric pattern */
body {
  background-image: conic-gradient(from 45deg at 50% 50%, #f0f0f0 0% 25%, #e0e0e0 25% 50%, #f0f0f0 50% 75%, #e0e0e0 75% 100%);
  background-size: 50px 50px; /* Adjust size of pattern units */
}body {
  background-image: url('your-image.jpg'); /* Replace with your image path */
  background-repeat: no-repeat; /* Prevents image from repeating */
  background-size: cover; /* Ensures image covers the entire element */
  background-position: center; /* Centers the image */
  background-attachment: fixed; /* Keeps image fixed during scroll */
}
