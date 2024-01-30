const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

function onInputChange(event) {
    if (event.currentTarget.value.trim() === "") {
        text.textContent = "Anonymous";
    } else {
        text.textContent = event.currentTarget.value;
    }

}

input.addEventListener('input', onInputChange);