console.log('---EXERCISE 4: IF ELSE');

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
//    mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

console.log('-Excercise 4.a');

var randomNumber;

randomNumber = Math.random(2);

if(randomNumber <= 0.5) {
    console.log(randomNumber + ' ' + 'Lower than 0.5');
}
else{
    console.log(randomNumber + ' ' + 'Greater than 0.5');
}

// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// i.   “Bebe” si la edad es menor a 2 años;
// ii.  “Niño” si la edad es entre 2 y 12 años;
// iii. “Adolescente” entre 13 y 19 años;
// iv.  “Joven” entre 20 y 30 años;
// v.   “Adulto” entre 31 y 60 años;
// vi.  “Adulto mayor” entre 61 y 75 años;
// vii. “Anciano” si es mayor a 75 años.

console.log ('-Excercise 4.b');

var age;

age = Math.floor(Math.random() * 100);

if(age < 2) {
    console.log(age + ' ' + 'Baby');
}
else if ((age >= 2) && (age < 13)) {
    console.log(age + ' ' + 'Child');
}
else if ((age >= 13) && (age < 20)) {
    console.log(age + ' ' + 'Teenager');
}
else if ((age >= 20) && (age < 31)) {
    console.log(age + ' ' + 'Young Adult');
}
else if ((age >= 31) && (age < 61)) {
    console.log(age + ' ' + 'Adult');
}
else if ((age >= 61) && (age < 76)) {
    console.log(age + ' ' + 'Elderly');
}
else{
    console.log(age + ' ' + 'Elder');
} 