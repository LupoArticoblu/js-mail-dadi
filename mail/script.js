const mailConsentite = [
  'spadino1@boolean.it', 
  'terrorescontato66@boolean.it', 
  'poldino03@boolean.it'
];
const bottone = document.getElementById('y');

//il valore scritto dall'utente
let indexInput = document.querySelector('.x');

//il valore che riporta il calcolatore (voglio restituire un alert che avvisi l'utente di una possibile verifica)
let indexOutputTrue = alert("Bentornato!");

//valori del array
min = 0;
max = mailConsentite.length - 1;

bottone.addEventListener('click', function(){

  for (let i = 0; i < max; i++){
    if ( indexInput === mailConsentite[i]) {
      (indexOutputTrue)
    }
  }
  
  if(indexOutputTrue){
    alert(`Bentornato ${indexInput} =3`)
  }else{
    alert(`Spiacente ${indexInput}, non sei un utente riconosciuto`)
  }
})
