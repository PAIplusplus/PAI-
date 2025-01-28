const inner = document.getElementById('carouselInner');
const indicators = document.querySelectorAll('.carousel-indicators button');
let currentIndex = 0;

function updateCarousel(index) {
  inner.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

document.getElementById('prevButton').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
  updateCarousel(currentIndex);
});

document.getElementById('nextButton').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % indicators.length;
  updateCarousel(currentIndex);
});

indicators.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel(currentIndex);
  });
});