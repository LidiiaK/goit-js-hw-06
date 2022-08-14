function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
console.log(input);
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const collection = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

const arr = [];
function createBoxes(amount) {
  let a = 30;
  let b = 10;
  amount = input.value;
  console.log('amount=', amount);
  for (let i = 1; i <= amount; i += 1){
    let c = a + "px";
    console.log('c:', c);
    let div = document.createElement("div");
    div.style.width = c;
    div.style.height = c;
    div.style.backgroundColor = getRandomHexColor();
    arr.push(div);
    a += b;
  }
  collection.append(...arr);
}

function destroyBoxes() {
  for (let i = 0; i < arr.length; i += 1){
    arr[i].remove();
  }
  arr.length = 0;
  input.value = "";
}