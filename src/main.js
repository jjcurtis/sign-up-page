const password = document.querySelector('#password');
const confirmation = document.querySelector('#confirmation');
const confirmLabel = document.querySelector('label[for="confirmation"]')
const submit = document.querySelector('.account button');

submit.addEventListener('click', (e) => {
    if (password.value === confirmation.value) {
        confirmation.setCustomValidation('');
    } else {
        e.preventDefault();
        confirmLabel.classList.add('no-match');
        setTimeout(() => {
            confirmLabel.classList.remove('no-match');
        }, 2000)
    }
})
