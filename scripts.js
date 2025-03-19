document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  // Tableau des 3 photos de mariage à afficher dans la section Portfolio
  const weddingImages = [
    'images/wedding_confetti.jpg',
    'images/wedding_mr_mrs.jpg',
    'images/wedding_laetitia_steve.jpg'
  ];

  weddingImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.style.margin = '10px';
    gallery.appendChild(img);
  });
});
