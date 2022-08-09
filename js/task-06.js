const textInput = document.querySelector("#validation-input");
const numbersInput = Number(textInput.getAttribute("data-length"));

console.log(textInput);
console.log(numbersInput);

textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === numbersInput) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
})