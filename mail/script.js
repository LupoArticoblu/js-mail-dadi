const mailConsentite = [
  'spadino1@boolean.it', 
  'terrorescontato66@boolean.it', 
  'poldino03@boolean.it'
];
const bottone = document.getElementById('y');

//il valore scritto dall'utente
const indexInput = document.querySelector('.x');

alert("Bentornato!");
//il valore che riporta il calcolatore (voglio restituire un alert che avvisi l'utente di una possibile verifica)


bottone.addEventListener('click', function(){
  let indexOutputTrue = false; 
  for (let i = 0; i < mailConsentite.length; i++){
    if (indexInput.value === mailConsentite[i]) {
      indexOutputTrue = true;
    }
  }
  
  if(indexOutputTrue){
    alert(`Bentornato ${indexInput.value} =3`)
  }else{
    alert(`Spiacente ${indexInput.value}, non sei un utente riconosciuto`)
  }
  indexInput.value = "";
})
