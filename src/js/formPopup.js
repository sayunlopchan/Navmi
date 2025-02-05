// Get elements
const openPopupBtns = document.querySelectorAll('.open-popup-btn');
const closePopupBtn = document.querySelector('.close-btn');
const popupContainer = document.querySelector('.popup-container');
const formoverlay = document.querySelector('.overlay');

// Open popup for multiple buttons
openPopupBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupContainer.classList.add('show');
    overlay.classList.add('show');
  });
});

// Close popup
const closePopup = () => {
  popupContainer.classList.remove('show');
  overlay.classList.remove('show');
};

closePopupBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);