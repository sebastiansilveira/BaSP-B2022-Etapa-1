window.onload = function () {

    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById('lastNameInput');
    var idInput = document.getElementById('id');
    var dateOfBirthInput = document.getElementById('dateOfBirth');
    var phoneNumberInput = document.getElementById('phoneNumber');
    var addressInput = document.getElementById('address');
    var locationInput = document.getElementById('location');
    var zipCodeInput = document.getElementById('zipCode');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var retypePasswordInput = document.getElementById('retypePassword');
    var createInput = document.getElementById('create');

    firstNameInput.onblur = function() {
        if (firstNameInput.value.match('')) {
            firstNameInput.classList.add('green-border');
        } else {
            firstNameInput.classList.add('red-border');
            firstNameInput.innerHTML = 'This is a required field'
        }
    }

    firstNameInput.onblur = function() {
        if (firstNameInput.length <4) {
            firstNameInput.classList.add('red-border');
        } else {
            firstNameInput.innerHTML = 'Invalid name'
    }
    }

    firstNameInput.onblur = function() {
        if (firstNameInput.typeof('number','symbol')) {
            firstNameInput.classList.add('red-border');
            firstNameInput.innerHTML = 'Invalid name'
        } else {
            firstNameInput.classList.add('green-border');
        }
    }

    emailInput.onblur = function() {
        if (emailInput.value.match(validEmail)) {
            emailInput.classList.add('green-border');
            } else {
                emailInput.classList.add('red-border');
                emailInput.innerHTML = 'This is not a valid email'
            }
        }

        emailInput.onblur = function() {
            if (emailInput.value.match('')) {
                emailInput.classList.add('red-border');
                emailInput.innerHTML = 'This is a required field'
            } else {
                emailInput.classList.add('green-border');
            }
        }

        emailInput.onblur = function() {
            if (emailInput.length <4) {
                emailInput.classList.add('red-border');
                emailInput.innerHTML = 'Invalid email'
            } else {
                emailInput.classList.add('green-border');
            }
        }

        passwordInput.onblur = function() {
            if (passwordInput.value.match('')) {
                passwordInput.classList.add('red-border');
                passwordInput.innerHTML = 'This is a required field'
            } else {
                passwordInput.classList.add('green-border');
            }
        }

        passwordInput.onblur = function() {
            if (passwordInput.length <8 && passwordInput.typeof == 'symbol') {
                passwordInput.classList.add('red-border');
                passwordInput.innerHTML = 'The value provided does not meet the format requirements'
            } else {
                passwordInput.classList.add('green-border');
            }
        }
}
