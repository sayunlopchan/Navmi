let header = document.getElementById("header");
let fixed = header.offsetTop;


function applySavedState() {
  const isHeaderFixed = localStorage.getItem("isHeaderFixed");
  if (isHeaderFixed === "true") {
    header.classList.add("fixed");
    header.style.backgroundColor = "#f590326e";
  } else {
    header.classList.remove("fixed");
    header.style.backgroundColor = "var(--primary)";
  }
}

function makeHeaderFixed() {
  if (window.scrollY > fixed + 1) {
    header.classList.add("fixed");
    header.style.backgroundColor = "#f590326e";
    localStorage.setItem("isHeaderFixed", "true");
  } else {
    header.classList.remove("fixed");
    header.style.backgroundColor = "var(--primary)";
    localStorage.setItem("isHeaderFixed", "false");
  }
}


applySavedState();

window.addEventListener("scroll", makeHeaderFixed);
