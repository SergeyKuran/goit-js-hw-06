let counterValue = 0;

const counterEl = document.querySelector('#counter');
const valueIdEl = document.querySelector('#value');
const decrementBthEl = document.querySelector('[data-action="decrement"]');
const incrementBrhEL = document.querySelector('[data-action="increment"]');

decrementBthEl.addEventListener('click', () => {
    counterValue--;
    valueIdEl.textContent = counterValue;
});

incrementBrhEL.addEventListener('click', () => {
    counterValue++;
    valueIdEl.textContent = counterValue;
});

