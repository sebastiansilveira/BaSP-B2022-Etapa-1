// window.onload = function () {

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
    var firstNameInput = document.getElementById("firstName");
    if(firstNameInput = '') {
        firstNameInput.classList.add(".red-border");     
    } else {
        firstNameInput.classList.add('.green-border')
    }
}