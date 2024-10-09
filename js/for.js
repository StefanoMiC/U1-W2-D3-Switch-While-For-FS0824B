// CICLO FOR
// si utilizza in genere per eseguire un blocco di codice un numero FINITO di volte
// è tipicamente utilizzato in combinazione con gli array per attraversarli dall'inizio alla fine

// sintassi:

// for(definizione del contatore; condizione da valutare; incremento del contatore) {
//      codice da eseguire
// }

// la variabile di contatore è disponibile SOLO all'interno del contesto del for loop
for (let i = 0; i < 10; i += 2) {
  console.log("siamo all'interno di un ciclo for:", i);
}

for (let i = 100; i > 0; i--) {
  console.log("siamo all'interno di un ciclo for:", i);
}
// console.log(i);

const myArr = [];

for (let i = 0; i < 100; i++) {
  myArr.push(i + 1);
}
// anche il ciclo for è bloccante, in questo caso vedremmo il console log solamente dopo che il ciclo sarà completamente terminato
console.log(myArr);

// Ciclo for usato in combinazione con gli array (molto comune)

const students = ["Filippo", "Alessia", "Federico", "Dario"];

// console.log(students[0]); // "Filippo"
// console.log(students[1]); // "Alessia"
// console.log(students[2]); // "Federico"
// console.log(students[3]); // "Dario"

// console.log(students[4]); // undefined

const studentsLowerCase = [];

for (let i = 0; i < students.length; i++) {
  const student = students[i];

  //   metodo 1) per saltare federico
  //   if (student !== "Federico") {
  //     studentsLowerCase.push(student.toLowerCase());
  //   }

  // metodo 2) per saltare federico
  if (student === "Federico") {
    continue;
    // qualsiasi istruzione dopo un continue verrebbe ignorata, se siamo finiti in questo blocco
  }

  studentsLowerCase.push(student.toLowerCase());
}

console.log("students in minuscolo", studentsLowerCase);

for (let i = 0; i < students.length; i++) {
  const student = students[i];

  // metodo per rompere l'esecuzione del ciclo completamente
  if (student.startsWith("A")) {
    break;
    // con il break, quando eseguito, si esce completamente dall'esecuzione di un ciclo for, anche se abbiamo altri elementi nell'array
  }
  console.log("student", student);
}

const animalsArr = [
  { name: "Goldy", species: "fish", age: 1, colors: ["orange", "black", "white"] },
  { name: "Fuffy", species: "dog", age: 6, colors: ["brown", "black", "white"] },
  { name: "Bam Bam", species: "rabbit", age: 0.5, colors: ["white", "red"] },
  { name: "Furia", species: "horse", age: 5, colors: ["brown", "black", "white"] }
];

const animalsObj = {};
const onlyNamesAndSpecies = [];

for (let i = 0; i < animalsArr.length; i++) {
  const animalObj = animalsArr[i];
  const animalName = animalObj.name;
  const animalSpecies = animalObj.species;

  console.log("il nome è", animalName);
  console.log("la specie è", animalSpecies);
  console.log("____________________________");

  //   uso i dati di animalsArr per creare un nuovo array di elementi modificati/semplificati
  onlyNamesAndSpecies.push({ nome: animalName, specie: animalSpecies });

  //  inserisco tutti gli oggetti in un unico oggetto esterno, rimuovendo la proprietà name da ognuno di loro prima di inserirlo
  delete animalObj.name;
  animalsObj[animalName] = animalObj;
  //   animalsObj sarà un oggetto con i nomi degli animali come proprietà e l'oggetto dell'animale (senza nome) inserito all'interno
}

console.log(animalsObj);
console.log(onlyNamesAndSpecies);
