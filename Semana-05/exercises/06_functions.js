console.log('---EXERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
//    el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log ('-Excercise 6.a');

var firstNumber, secondNumber;

firstNumber = Math.floor(Math.random()* 100);
secondNumber = Math.floor(Math.random()* 100);

function addition(firstNumber, secondNumber) {
    return (firstNumber + secondNumber);
}

var result = addition(firstNumber, secondNumber);

console.log(firstNumber + secondNumber + '=' + result);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
//    de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN
//    como resultado.

console.log ('-Excercise 6.b');

function addition(firstNumber, secondNumber) {
    if (typeof(firstNumber) != 'number' && typeof(secondNumber) != 'number') {
        var result = firstNumber + secondNumber;
        return result 
    }   else {
        alert('One of the provided values is not a number');
        return NaN;
    }
}

console.log(addition);

// c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un
//    número entero.

console.log ('-Excercise 6.c');

function validateInteger(firstNumber, secondNumber) {
    return Number.isInteger(firstNumber, secondNumber);
}

console.log(validateInteger(firstNumber, secondNumber));


// d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
//    números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a
//    entero (redondeado).

console.log ('-Excercise 6.d');

function addition(firstNumber, secondNumber) {
    if (typeof(firstNumber) != 'number' && typeof(secondNumber) != 'number') {
        var result = firstNumber + secondNumber;
        if (validateInteger(firstNumber) == true && validateInteger(secondNumber) == true) {
            return result; 
        } else if {
            alert('One or more of the provided values are not integers, rounding the results ' 
            Math.round(firstNumber), Math.round(secondNumber));
        } else {
            alert('One of the provided values is not a number');
            return NaN;
        }
}

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
//    que todo siga funcionando igual.

console.log ('-Excercise 6.e');

function additionValid(firstNumber, secondNumber) {
    if (typeof(firstNumber) != 'number' && typeof(secondNumber) != 'number') {
        var result = firstNumber + secondNumber;
        if (validateInteger(firstNumber) == true && validateInteger(secondNumber) == true) {
            return result; 
        } else if {
            alert('One or more of the provided values are not integers, rounding the results ' 
            Math.round(firstNumber), Math.round(secondNumber));
        } else {
            alert('One of the provided values is not a number');
            return NaN;
        }
}

var additionValid;
var = additionValid = addition(firstNumber, secondNumber);

console.log(additionValid); 