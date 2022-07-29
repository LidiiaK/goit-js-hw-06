const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector("#ingredients");
const createLiFromArr = (array) => 
  array.map((el) => `<li class "item">${el}</li>`).join("");
const list = createLiFromArr(ingredients);
ul.insertAdjacentHTML("beforeend", list);
