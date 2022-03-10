//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

const numeroUtente = parseInt(prompt('Inserisci un numero di 4 cifre'));
let output = [];

if (numeroUtente.length = 4) {

  let numeroSingolo = numeroUtente.toString().split('');
  output.push (numeroSingolo);
  
  console.log(output);


};

/*let somma = parseInt(output.reduce(function(a, b){
  return a + b;
},0));

console.log(somma);*/

somma = 0;

for (let i = 0; i < output.length; i++) {
  somma += output[i];
}

console.log(somma);