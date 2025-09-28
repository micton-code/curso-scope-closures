function sumWithClosure(firstNum) {
  // Tu código aquí 👈
  let primerNumero = firstNum;
    return function (secondNum = 0) {
        return primerNumero + secondNum;
    }
}

console.log(sumWithClosure(2)(3)); // 5
console.log(sumWithClosure(90)()); // 90



