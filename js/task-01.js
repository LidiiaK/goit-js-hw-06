const bodyEl = document.querySelectorAll('.item');
const listEl = document.querySelectorAll('.item').length;

console.log("Number of categories: ", listEl);

for (const body of bodyEl) {
    let nameCategory = body.firstElementChild.textContent;
    let numberElements = body.querySelectorAll('li').length
    console.log('Category: ', nameCategory);
    console.log('Elements: ', numberElements);
}
