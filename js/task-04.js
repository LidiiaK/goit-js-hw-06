const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let value = document.querySelector('#value');


let counterValue = 0;
const btnDecrement = () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
}

const btnIncrement = () => {
    counterValue += 1;
    value.innerHTML = counterValue;
}

decrement.addEventListener("click", btnDecrement);
increment.addEventListener("click", btnIncrement);