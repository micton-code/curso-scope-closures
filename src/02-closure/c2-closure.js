function saludar() {
  let username = 'Anthony';

  function displayUserName() {
    return `Hola ${username}`;
  }
  return displayUserName;
}

const s = saludar();
console.log(s); 
console.log(s())