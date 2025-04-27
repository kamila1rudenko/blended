const alertButton = document.getElementById('alertButton');
const alertInput = document.getElementById('alertInput');

alertButton.addEventListener('click', () => {
  const inputValue = alertInput.value;
  alert(inputValue); 
});


const swapButton = document.getElementById('swapButton');
const leftInput = document.getElementById('leftSwapInput');
const rightInput = document.getElementById('rightSwapInput');

swapButton.addEventListener('click', () => {
  const temp = leftInput.value;
  leftInput.value = rightInput.value;
  rightInput.value = temp;
});

const paragraphs = document.querySelectorAll('p');
const chngButton = document.getElementById('chngButton');
chngButton.addEventListener('click', () => {
    paragraphs.forEach((paragraph, index) => { paragraph.textContent = index + 1; });
});