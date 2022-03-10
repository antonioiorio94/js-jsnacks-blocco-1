//JSSnack
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


//creazione lista invitati
const listaInvitati = ["Angela","Beatrice","Camilla","Dario","Ernesto","Fernanda","Giuseppe"];

//richiesta del nome all'utente
let nomeOspite = prompt("Buonasera, può dirmi il suo nome?").trim();

//variabile esito controllo
let esitoControllo = false;

//controllo della lista tramite ciclo for
for (let i=0; i<listaInvitati.length; i++){
  
  if(nomeOspite === listaInvitati[i]) {
    esitoControllo = true;
  }
}

//comunicazione esito
if (esitoControllo){
 console.log("Prego, si goda la festa!");
}else{
  console.log("Mi dispiace, il suo nome non è sulla lista!")

}

