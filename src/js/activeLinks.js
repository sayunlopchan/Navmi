document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to the clicked link
      event.target.classList.add("active");
    });
  });
});
