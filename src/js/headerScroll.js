let header = document.getElementById("header");
let fixed = header.offsetTop;

// Function to make the header fixed on scroll
function makeHeaderFixed() {
  if (window.scrollY > fixed + 1) {
    header.classList.add("fixed");
    header.style.backgroundColor = "#f590326e";
  } else {
    header.classList.remove("fixed");
    header.style.backgroundColor = "var(--primary)";
  }
}

// Add scroll event listener
window.addEventListener("scroll", makeHeaderFixed);
