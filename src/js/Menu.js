
const menuButton = document.querySelector('.menu');
const menuContainer = document.getElementById('menuContainer');
const closeButton = document.getElementById('closeBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.menu-nav ul li');

menuButton.addEventListener('click', () => {
  menuContainer.style.right = '0';
  menuOverlay.classList.add('show');
});

const closeMenu = () => {
  menuContainer.style.right = '-360px';
  menuOverlay.classList.remove('show');
};

closeButton.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

menuOverlay.addEventListener('click', closeMenu);
