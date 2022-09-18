console.log('---EXERCISE 1: VARIABLES AND OPERATORS');

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números
//    en una tercera variable.

console.log ('-Excercise 1.a');

var liquidSalary, bonus, fullSalary;

liquidSalary = 20000;
bonus = 5000;
fullSalary = liquidSalary + bonus;

console.log(fullSalary);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una tercera variable.

console.log ('-Excercise 1.b');

var firstName, lastName, fullName;

firstName = 'Sebastian ';
lastName = 'Silveira';
fullName = firstName + lastName;

console.log('The full name of the student is ' + firstName + lastName);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string),
//    guardando el resultado de la suma en una tercera variable, (utilizar lenght).

console.log ('-Excercise 1.c');

var food, drink, numberOfLetters;

food = 'Hamburger';
drink = 'Beer';
numberOfLetters = food.length + drink.length;

console.log('The number of letters of the two strings combined is ' + numberOfLetters);
