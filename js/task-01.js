const numberEl = document.querySelector('#categories');
console.log('Number of categories:', numberEl.children.length);

const findTextEl = document.querySelectorAll('li h2');
findTextEl.forEach(el => console.log('Category:', el.textContent));

const numbersItemsEl = document.querySelectorAll('.item ul');
numbersItemsEl.forEach(el => console.log('Elements:', el.children.length));