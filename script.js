const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');

const emailWarning = document.getElementById('input-email-warning');
const passWarning = document.getElementById('input-password-warning');

function checkForErrors(inputValue, warningElement) {

    let error = false;

    if(inputValue === '') {
        warningElement.innerHTML = 'This field is required';
        error = true;
    } else if (inputValue.length < 6) {
        warningElement.innerHTML = 'Must be at least 6 characters';
        error = true;
    } else {
        warningElement.innerHTML = '';
    }

    return error;

}

function login() {
    const emailError = checkForErrors(inputEmail.value, emailWarning);
    const passError = checkForErrors(inputPassword.value, passWarning);

    if(!emailError && !passError) {
        location.href = location.href + 'success.html';
    }
}