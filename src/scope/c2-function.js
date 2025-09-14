function saludo() {
  let nombreDeUsuario = 'Juan';
  console.log(nombreDeUsuario);

  if (nombreDeUsuario === 'Juan') {
    console.log(`Hola ${nombreDeUsuario}!`);
  }
}

saludo(); 
console.log(nombreDeUsuario); // Error: nombreDeUsuario is not defined  // No se puede acceder a la variable local desde fuera de la función    