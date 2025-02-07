document.getElementById('toggle-button').addEventListener('click', function () {
  const extraParagraphs = document.querySelectorAll('.extra-paragraph');
  const ellipsis = document.getElementById('ellipsis');
  const button = this;

  const isHidden = extraParagraphs[0].style.display === 'none' || extraParagraphs[0].style.display === '';

  if (isHidden) {
    extraParagraphs.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });
    ellipsis.style.display = 'none';

    button.innerHTML = `Show Less <img src="src/assets/SVG files/big-arrow.svg" alt="right-arrow">`;
  } else {

    extraParagraphs.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });
    ellipsis.style.display = 'inline';

    button.innerHTML = `Learn More <img src="src/assets/SVG files/big-arrow.svg" alt="right-arrow">`;
  }
});
