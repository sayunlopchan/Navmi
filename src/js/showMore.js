document.getElementById('toggle-button').addEventListener('click', function () {
  const extraParagraph = document.getElementById('extra-paragraph');
  const ellipsis = document.getElementById('ellipsis');
  const button = this;

  if (extraParagraph.style.display === 'none' || extraParagraph.style.display === '') {
    extraParagraph.style.display = 'block';
    ellipsis.style.display = 'none'; // Hide the "......" when the full content is revealed
    button.innerHTML = `Show Less <img src="src/assets/SVG files/big-arrow.svg" alt="right-arrow">`;
  } else {
    extraParagraph.style.display = 'none';
    ellipsis.style.display = 'inline'; // Show the "......" when the content is hidden
    button.innerHTML = `Learn More <img src="src/assets/SVG files/big-arrow.svg" alt="right-arrow">`;
  }
});
