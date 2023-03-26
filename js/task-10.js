function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// щукаємо по айдішніку дів
const inputEl = document.querySelector('#controls input');
// шукаємо по дата атрибуті кнопку створення
const btnCreateEl = document.querySelector('[data-create]');
// шукаємо по дата атибуті кнопку видалення тегів
const btnDestroyEl = document.querySelector('[data-destroy]');
// по id шукаємо тег в який будемо додавати
const boxEl = document.querySelector('#boxes');

//функція, яка створює теги <div>, кількість яких буде вказана користувачем у inputi.
// При кожній наступній ітерації тег збільшує свій колір фону і розмір на 10px. 
function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const createDivEL = document.createElement('div');
      
    createDivEL.style.width = `${size}px`;
    createDivEL.style.height = `${size}px`;
    size += 10;
    createDivEL.style.backgroundColor = getRandomHexColor();
    // додаємо дітей
    boxEl.appendChild(createDivEL);
  }
};

// функція видалення тегів
function destroyBoxes() {
  boxEl.innerHTML = '';
}

// прослуховувач події на кнопці створення тегів
btnCreateEl.addEventListener('click', () => {
  inputEl.addEventListener('click', createBoxes(inputEl.value))
});

// прослуховувач події на кнопці видалення тегів
btnDestroyEl.addEventListener('click', destroyBoxes);
