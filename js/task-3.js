const input = document.querySelector('#name-input')
const text = document.querySelector('#name-output')

function onInputChange(event) {
    text.textContent = event.currentTarget.value;
}

input.addEventListener('input', onInputChange);