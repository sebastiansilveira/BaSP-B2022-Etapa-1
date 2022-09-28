window.onload = function () {


    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var loginInputInput = document.getElementById('login');
    var validEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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

