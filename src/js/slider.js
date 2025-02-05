const sliderContainer = document.querySelector('.review-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


prevBtn.style.display = 'none';

nextBtn.addEventListener('click', () => {
  const cardWidth = document.querySelector('.review-card').offsetWidth;
  sliderContainer.scrollBy({
    left: cardWidth + 20,
    behavior: 'smooth',
  });


  prevBtn.style.display = 'block';


  const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;
  if (sliderContainer.scrollLeft + cardWidth + 20 >= maxScrollLeft) {
    nextBtn.style.display = 'none';
  }
});

prevBtn.addEventListener('click', () => {
  const cardWidth = document.querySelector('.review-card').offsetWidth;
  sliderContainer.scrollBy({
    left: -(cardWidth + 20),
    behavior: 'smooth',
  });


  if (sliderContainer.scrollLeft - cardWidth - 20 <= 0) {
    prevBtn.style.display = 'none';
  }


  nextBtn.style.display = 'block';
});
