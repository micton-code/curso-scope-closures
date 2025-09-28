function frutas() {
  if (true) {
    var fruta1 = 'manzana'; // Variable global o de función (dependiendo del contexto)
    let fruta2 = 'kiwi';       // Variable de bloque
    const fruta3 = 'banana';   // Variable de bloque
    }
    
    console.log(fruta1); // 'manzana'
    console.log(fruta2); // ReferenceError: fruta2 is not defined
    console.log(fruta3); // ReferenceError: fruta3 is not defined
}  

frutas();