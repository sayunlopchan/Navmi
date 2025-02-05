// Select the menu elements
const menuButton = document.querySelector('.menu');
const menuContainer = document.getElementById('menuContainer');
const closeButton = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.menu-nav ul li');

// Add click event to open the menu
menuButton.addEventListener('click', () => {
  menuContainer.style.right = '0';
  overlay.classList.add('show'); // Show the overlay
});


closeButton.addEventListener('click', () => {
  menuContainer.style.right = '-360px';
  overlay.classList.remove('show'); // Hide the overlay
});

// Add click event to close the menu when a link or list item is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuContainer.style.right = '-360px';
    overlay.classList.remove('show');
  });
});
