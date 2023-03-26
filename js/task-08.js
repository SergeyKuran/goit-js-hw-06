const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onClick);

function onClick(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const objValues = {
        email: email.value,
        password: password.value,
    };

    if (!email.value || !password.value) {
        alert('Всі поля повинні бути заповнені!')
    } else {
        console.log(objValues);
    }
    formEl.reset();
}

