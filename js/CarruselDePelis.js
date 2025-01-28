const setupCarousel = (container) => {
    const inner = container.querySelector('.movie-carousel-inner');
    const prevButton = container.querySelector('.movie-carousel-control-prev');
    const nextButton = container.querySelector('.movie-carousel-control-next');
    let scrollPosition = 0;

    const updateCarousel = (direction) => {
      const itemWidth = container.querySelector('.movie-carousel-inner').offsetWidth + 10;
      const maxScroll = inner.scrollWidth - inner.clientWidth;
      scrollPosition = Math.max(0, Math.min(scrollPosition + direction * itemWidth, maxScroll));
      inner.style.transform = `translateX(-${scrollPosition}px)`;
    };

    prevButton.addEventListener('click', () => updateCarousel(-1));
    nextButton.addEventListener('click', () => updateCarousel(1));
  };

  document.querySelectorAll('.movie-carousel').forEach(setupCarousel);