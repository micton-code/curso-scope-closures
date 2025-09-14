//Variables

var a; //declarando
var b = 'b'; //declaracion / asignacion
b = 'bb'; //reasignacion
var a = 'aa'; //re-declaracion

//Global Scope
var fruta = 'Manzana'; //global

function mejorFruta() {
  console.log(fruta);
}

mejorFruta();


function paises() {
  var pais = 'Colombia'; //local
  otroPais = 'Venezuela'; //global (no usa var, ni let, ni const)
  console.log(pais);
}   

paises(); //se ejecuta la función

console.log(otroPais); //se puede acceder a la variable global desde cualquier parte del código

console.log(pais); //error, no se puede acceder a la variable local desde fuera de la función
