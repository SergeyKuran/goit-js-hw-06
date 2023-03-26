function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bthEL = document.querySelector('.change-color');
const divEl = document.querySelector('.widget .color');
console.log(divEl);

bthEL.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  document.body.style.backgroundColor = getRandomHexColor();
  divEl.textContent = document.body.style.backgroundColor;
}
