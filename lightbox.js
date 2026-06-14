document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
  }

  const images = document.querySelectorAll('.project-main-image img, .project-thumb img');
  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src));
  });

  lightbox.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});
