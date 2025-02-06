const sliderContainer = document.querySelector('.review-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


const savedScrollPosition = localStorage.getItem('scrollPosition');
if (savedScrollPosition) {
  sliderContainer.scrollLeft = parseInt(savedScrollPosition, 10);
}

prevBtn.style.display = sliderContainer.scrollLeft > 0 ? 'block' : 'none';
const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;
nextBtn.style.display = sliderContainer.scrollLeft >= maxScrollLeft ? 'none' : 'block';

nextBtn.addEventListener('click', () => {
  const cardWidth = document.querySelector('.review-card').offsetWidth;
  sliderContainer.scrollBy({
    left: cardWidth + 20,
    behavior: 'smooth',
  });


  localStorage.setItem('scrollPosition', sliderContainer.scrollLeft + cardWidth + 20);

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


  localStorage.setItem('scrollPosition', sliderContainer.scrollLeft - (cardWidth + 20));

  if (sliderContainer.scrollLeft - cardWidth - 20 <= 0) {
    prevBtn.style.display = 'none';
  }

  nextBtn.style.display = 'block';
});


window.addEventListener('beforeunload', () => {
  localStorage.setItem('scrollPosition', sliderContainer.scrollLeft);
});
