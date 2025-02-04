let header = document.getElementById("header");
let fixed = header.offsetTop;

function makeHeaderFixed() {
  if (window.scrollY > fixed + 1) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

window.addEventListener("scroll", makeHeaderFixed);
