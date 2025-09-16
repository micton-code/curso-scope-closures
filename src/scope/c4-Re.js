var firstName; // Declaracion de variable (undefined)
firstName = "John";
console.log(firstName);

var lastName = "Utrera"; // Declaracion/ asignacion
lastName = "Smith"; // Reasignacion
console.log(lastName);

var secondName = "David"; // Declaracion / asignacion
var secondName = "Ana"; // Redeclaracion
console.log(secondName);


//Let
let fruit = "Apple"; // Declaracion / asignacion
fruit = "Kiwi"; // Reasignacion
console.log(fruit);

let fruit = "Banana"; // Error: Redeclaracion no permitida


//Const
const animal = "Dog"; // Declaracion / asignacion
animal = "Cat"; // Error: Reasignacion no permitida
console.log(animal);



const vehiculos = []; // Declaracion / asignacion
vehiculos.push("Carro"); // Modificacion del contenido del array
console.log(vehiculos);

vehiculos.pop(); // Modificacion del contenido del array
console.log(vehiculos);