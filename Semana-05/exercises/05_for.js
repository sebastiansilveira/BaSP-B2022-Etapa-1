console.log('---EXERCISE 5: FOR');

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
//    una alerta utilizando cada una de las palabras.

console.log ('-Excercise 5.a');

var colors = ["green", "yellow", "red", "black", "white"];
var colorsLenght = colors.length;

for (var i = 0; i < colorsLenght; i++) {
    alert(colors[i]);
    console.log(colors[i]);
}

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
//    modificada.

console.log ('-Excercise 5.b');

var colors = ["green", "yellow", "red", "black", "white"];
var colorsLenght = colors.length;
var colorsUpper = colors[i].charAt(0).toUpperCase() + colors[i].slice(1);

for (var i = 0; i < colorsLenght; i++) {
    alert(colorsUpper[i]);
    console.log(colorsUpper[i]);
}

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
//    bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
//    cadena completa.

console.log ('-Excercise 5.c');

var sentence = "";
var colors = ["green", "yellow", "red", "black", "white"];
var colorsLenght = colors.length;

for (var i = 0; i < colorsLenght; i++) {
    sentence.join(" ");
    console.log(sentence);
}

// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
//    decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
//    hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

console.log ('-Excercise 5.d');

var empty = [];

for (var i = 0; i <11; i++) {
    console.log(empty=0);
}