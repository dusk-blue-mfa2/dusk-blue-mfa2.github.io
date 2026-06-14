// 点击图片放大（lightbox）
// 适用于作品页里 .project-main-image 和 .project-thumb 中的图片。
document.addEventListener('DOMContentLoaded', () => {

  // 1. 动态创建一个全屏遮罩层，塞进 <body>，省得每个页面都手写一遍。
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');

  // 2. 打开：把被点的图地址放进大图，再显示遮罩。
  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
  }

  // 3. 关闭：去掉 open，遮罩重新隐藏。
  function closeLightbox() {
    lightbox.classList.remove('open');
  }

  // 4. 给主图和缩略图里的每张 img 绑定点击事件。
  const images = document.querySelectorAll('.project-main-image img, .project-thumb img');
  images.forEach(img => {
    img.style.cursor = 'zoom-in';        // 鼠标移上去显示放大镜光标
    img.addEventListener('click', () => openLightbox(img.src));
  });

  // 5. 点遮罩任意处关闭。
  lightbox.addEventListener('click', closeLightbox);

  // 6. 按 Esc 键也能关闭。
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});
