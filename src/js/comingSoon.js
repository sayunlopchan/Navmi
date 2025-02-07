const specialLinks = document.querySelectorAll(".coming-soon");
const popup = document.querySelector(".coming-soon-popup");
const closePopupButton = document.querySelector(".close-popup");


specialLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("hidden");
  });
});


closePopupButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.add("hidden");
  }
});
