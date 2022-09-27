console.log('---EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula,
//    (utilizar toUpperCase).

console.log('-Excercise 2.a');

var unmarried;

unmarried = 'bachelorette';

console.log(unmarried.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
//    caracteres guardando el resultado en una nueva variable, (utilizar substring).

console.log('-Excercise 2.b');

var word;

word = 'fabrication';

console.log('The first five letters of the word fabrication are ' + word.substring(0,5));

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
//    caracteres guardando el resultado en una variable, (utilizar substring).

console.log('-Excercise 2.c');

var country, countryLetters;

country = 'Bangladesh';

countryLetters = country.substring(7,10);

console.log('The last three letters of Bangladesh are ' + countryLetters);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
//    mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable,
//    (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Excercise 2.d');

var phrase, phraseUpperLower;

phrase = 'abandonment';
phraseUpperLower = phrase.substring(0,1).toUpperCase() + phrase.substring(1).toLowerCase();

console.log(phraseUpperLower);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
//    del primer espacio en blanco y guardarla en una variable, (utilizar indexOf).

console.log('-Excercise 2.e');

var fingerprint, fingerprintSpace;

fingerprint = 'dactylogram ';
fingerprintSpace = fingerprint.indexOf(' ');

console.log('The space can be found on line ' + fingerprintSpace);

// f. Crear una variable de tipo string con al menos 2 palabras largas, (10 caracteres y algún espacio entre medio).
//    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
//    ambas palabras en mayúscula y las demás letras en minúscula,
//    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Excercise 2.f');

var places, placesIndex, placesUpper;

places = 'madagascar uzbekistan';
placesIndex = places.indexOf(' ');
placesUpper = places.toUpperCase().substring(0,1) + places.toLowerCase().substring(1, placesIndex+1) + 
places.toUpperCase().substring(placesUpper+1, placesUpper+2) + placesUpper.toLowerCase().substring(12,21);

console.log(places.Upper);