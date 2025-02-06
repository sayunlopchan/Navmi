
const openPopupBtns = document.querySelectorAll('.open-popup-btn');
const closePopupBtn = document.querySelector('.close-btn');
const popupContainer = document.querySelector('.popup-container');
const popupOverlay = document.getElementById('popupOverlay');

openPopupBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupContainer.classList.add('show');
    popupOverlay.classList.add('show');
  });
});

const closePopup = () => {
  popupContainer.classList.remove('show');
  popupOverlay.classList.remove('show');
};

closePopupBtn.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);
