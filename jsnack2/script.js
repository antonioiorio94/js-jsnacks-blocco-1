//JSSnack2
//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

let elencoNumeriDispari = [];

//Crea un loop per contare fino a 6

for(let i=0; i<6; i++){

  //Chiedi all'utente un numero

  let numeroUtente= parseInt(prompt("Digita un numero"));
  
  //if con controllo resto 
    if(numeroUtente % 2 === 1){
      //push nell'array
      elencoNumeriDispari.push(numeroUtente);
    }
   
}

console.log(elencoNumeriDispari);


