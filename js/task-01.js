const numberEl = document.querySelectorAll('#categories li.item');
console.log('Number of categories:', numberEl.length);

numberEl.forEach(element => {
    console.log(`Gategory: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelector('ul').children.length}`);
});