const carousel = document.querySelector('[data-carousel]');

if (carousel) {
  const slides = Array.from(carousel.children);
  const nextButton = document.querySelector('[data-next]');
  const prevButton = document.querySelector('[data-prev]');

  if (slides.length) {
    slides[0].classList.add('active');

    let activeIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === index);
      });
    };

    nextButton?.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % slides.length;
      showSlide(activeIndex);
    });

    prevButton?.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + slides.length) % slides.length;
      showSlide(activeIndex);
    });
  }
}
