const sliderContainer = document.querySelector('.review-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', () => {
  const cardWidth = document.querySelector('.review-card').offsetWidth;
  sliderContainer.scrollBy({
    left: cardWidth + 20, // 20px gap
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  const cardWidth = document.querySelector('.review-card').offsetWidth;
  sliderContainer.scrollBy({
    left: -(cardWidth + 20), // 20px gap
    behavior: 'smooth'
  });
});