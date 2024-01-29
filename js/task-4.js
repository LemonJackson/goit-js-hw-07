const form = document.querySelector('.login-form');
const userData = {};

function onFormSubmit(event) {
    event.preventDefault()

    const { elements: { email, password }, } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('All form fields must be filled in');
    } else {
        userData['email'] = email.value;
        userData['password'] = password.value;
        console.log(userData);
        event.currentTarget.reset();
    }
}

form.addEventListener('submit', onFormSubmit);
