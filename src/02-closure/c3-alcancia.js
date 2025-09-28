// function alcancia(monedas) {
//   let monedasGuardadas = 0;
//   monedasGuardadas += coins;
//   console.log(`Tienes guardado: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function alcancia() {
  let monedasGuardadas = 0;
  function contarMonedas(monedas) {
    monedasGuardadas += monedas;
    console.log(`Tienes guardado: $${monedasGuardadas}`)
  }
  return contarMonedas;
}

const myAlcancia = alcancia();
myAlcancia(5);
myAlcancia(5);
myAlcancia(15);

const alcanciaAna = alcancia();
alcanciaAna(10);
alcanciaAna(20);
alcanciaAna(5);