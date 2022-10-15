const numeri = [1, 2, 3, 4, 5, 6];
const bottone = document.getElementById("btn");


// 1. creare un estrattore casuale di numeri che prenderà all'interno degli array

// 2. estrarre il numero e stamparlo in html



//funbzione copiata dall'esercizio del prof perchè ho dimenticato la logica e l'operazione da effettuare
bottone.addEventListener('click', function() {
  const min = 0;
  const max = numeri.length - 1;
  const random = Math.floor(Math.random() * (max - min + 1) - min);

  console.log(random);
  document.querySelector('.x').innerHTML = numeri[random];
})
