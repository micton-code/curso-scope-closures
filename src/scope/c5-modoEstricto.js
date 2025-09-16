'use strict'; // Modo estricto
pi = 3.1416;
console.log(pi); // 3.1416
// Si no se declara la variable, lanza un error
// ReferenceError: pi is not defined


function myFunction() {
    'use strict'; // Modo estricto
    return pi = 3.1416; // Asignación a variable no declarada
}   
console.log(myFunction()); // ReferenceError: pi is not defined
// Si no se declara la variable, lanza un error
// ReferenceError: pi is not defined
