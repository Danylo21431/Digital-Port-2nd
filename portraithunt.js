
const fullscreenContainer = document.getElementById('fullscreen');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.image-placeholder').forEach(placeholder => {
  placeholder.addEventListener('click', () => {
    fullscreenContainer.classList.add('active');
    // You can replace this with actual image source when you have images
    fullscreenImage.src = 'placeholder-image.jpg';
  });
});

closeBtn.addEventListener('click', () => {
  fullscreenContainer.classList.remove('active');
});

fullscreenContainer.addEventListener('click', (e) => {
  if (e.target === fullscreenContainer) {
    fullscreenContainer.classList.remove('active');
  }
});
