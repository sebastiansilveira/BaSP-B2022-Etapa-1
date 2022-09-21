console.log('---EXERCISE 3: ARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
//    "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('-Excercise 3.a');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];

console.log(months [4] + ' ' + months [10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Excercise 3.b');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];

console.log(months.sort());

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Excercise 3.c');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];

months.unshift('Beggining');
months.push('End');

console.log(months);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Excercise 3.d');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];

firstElement = months.shift();
lastElement = months.pop();

console.log(months);

// e. Invertir el orden del array (utilizar reverse).

console.log('-Excercise 3.e');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];

months = months.reverse();

console.log(months);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
//    (utilizar join).

console.log('-Excercise 3.f');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];

console.log(months.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
 
console.log('-Excercise 3.g');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];

console.log(months.slice(4,11));