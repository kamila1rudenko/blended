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


const passwordInput = document.getElementById('passwordInput');
const passwordButton = document.getElementById('passwordButton');

passwordButton.addEventListener('click', () => {
  if (passwordInput.type === 'text') {
    passwordInput.type = 'password';
    passwordButton.textContent = 'Розкрити';
  } else {
    passwordInput.type = 'text';
    passwordButton.textContent = 'Приховати';
  }
});


const box = document.getElementById('box');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', () => {
  const currentWidth = box.offsetWidth;
  const currentHeight = box.offsetHeight;
  box.style.width = currentWidth + 10 + 'px';
  box.style.height = currentHeight + 10 + 'px';
});

decreaseBtn.addEventListener('click', () => {
  const currentWidth = box.offsetWidth;
  const currentHeight = box.offsetHeight;
  
  if (currentWidth > 10 && currentHeight > 10) {
    box.style.width = currentWidth - 10 + 'px';
    box.style.height = currentHeight - 10 + 'px';
  }
});


//TODO: № 7 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази


//TODO: № 9 ==============================================
// Напишіть інтерфейс, щоб створити список
// Для кожного пункту:
// Запитуйте вміст у користувача за допомогою promt
// створювати пункт та додавати його до списку
// процес припиняється коли користувач натискає ESC
// усі елементи мають створюватись динамічно