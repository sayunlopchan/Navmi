let header = document.getElementById("header");
let fixed = header.offsetTop;

function makeHeaderFixed() {
  if (window.scrollY > fixed + 1) {
    header.classList.add("fixed");
    header.style.backgroundColor = "#f590326e"; // Fixed background color
  } else {
    header.classList.remove("fixed");
    header.style.backgroundColor = "var(--primary)"; // Static background color
  }
}

window.addEventListener("scroll", makeHeaderFixed);
