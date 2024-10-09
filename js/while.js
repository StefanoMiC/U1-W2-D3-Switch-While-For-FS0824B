// CICLI
// sono strutture in grado di ripetere un blocco di codice fin tanto che una condizione rimane vera

// WHILE
// il ciclo while ci permette di eseguire un blocco di codice anche un numero INDEFINITO di volte
// (quando non sappiamo quante volte sia necessario eseguire qualcosa per raggiugnere un obiettivo)

// while(condizione) {
//      blocco di codice da eseguire (una o più volte)
// }

let counter = 0;

while (counter <= 10) {
  console.log("numero", counter);
  //   counter = counter + 1
  //   counter += 1
  if (counter === 10) {
    break;
  }

  counter++;
}

console.log("outer", counter);

// ESEMPIO CON NUMERO DI ITERAZIONI INDEFINITO E VARIABILE

// memoria a "lungo" termine per il peso aggiunto sulla nostra bilancia virtuale
let weight = 0;
// memoria che registra il numero di iterazioni svolte dal while loop, sarà potenzialmente sempre diverso e mai predefinito.
let iterationCount = 0;

while (weight < 1000) {
  // chiedo all'utente di inserire un valore numerico di peso
  const userInput = prompt("quanto peso hai aggiunto?");
  // converto la stringa contenente il numero, a numero
  const addedWeight = parseInt(userInput);
  // visualizzo il valore di peso aggiunto
  console.log("peso aggiunto", addedWeight);

  // aggiungo l'ultimo valore di peso fornito dall'utente al peso complessivo (variabile weight esterna)
  weight += addedWeight;
  console.log("peso attuale", weight);

  // incremento il counter per tenere traccia del numero di esecuzioni fatte di questo codice da parte del while loop
  iterationCount++;
}

console.log("abbiamo raggiunto il peso massimo, che è", weight);
console.log("sono state necessarie " + iterationCount + " iterazioni per raggiungere il peso limite");

let num = 100;

do {
  // questo console log lo vediamo almeno una volta anche se la condizione non è mai verificata
  console.log("ultimo while");
  num++;
} while (num < 100);
