// OGGETTI
// creazione tramite notazione letterale di un oggetto
const person = {
  firstName: "Stefano",
  lastName: "Miceli",
  age: 35
};

// creazione di nuove proprietà-valore
console.log(person.address);
person.address = "via dei platani 35";
console.log(person.address);

// eliminare una proprietà
delete person.age;

// selezione di una proprietà dell'oggetto, lettura del valore corrispondente
// dot notation - ci permette di accedere ad una proprietà dell'oggetto
console.log(person.lastName);

// square brackets notation - ci permette di accedere alle proprietà dell'oggetto anche in presenza di
// caratteri speciali e utilizzando valori DINAMICI

const prop1 = "last";
const prop2 = "Name";

console.log(person[prop1 + prop2]); // person["lastName"] ==> "Miceli"

const properties = Object.keys(person); //  ['firstName', 'lastName', 'address']
console.log("properties", properties);

console.log(person[properties[0]]); // person['firstName'] ==> "Stefano"
console.log(person[properties[1]]); // person['lastName'] ==> "Miceli"

// CLONARE UN OGGETTO
// ❌non va fatto direttamente con un'assegnazione diretta ❌

// quando abbiamo a che fare con primitive non c'è il problema, perché una primitiva si copia direttamente
const a = 2;
let b = a;
b = b + 5;

console.log(a, b);

//questo non è il caso quando abbiamo a che fare con REFERENCE (oggetti, array, funzioni)
// const person2 = person; // NO!!!

// questo tipo di clonazione si ferma al primo livello, e non terrà conto di sotto-reference (altri oggetti o array più annidati)
const person2 = Object.assign({}, person);
person2.address = "Via Roma 50";

// questo è un metodo di clonazione PROFONDA, clonerebbe anche le sotto-reference
const person3 = structuredClone(person);
person3.address = "Via Dei Bardi 2";

console.log(person);
console.log(person2);
console.log(person3);

// ________________________________ARRAY___________________________________________

const students = ["Filippo", "Alessia", "Federico", "Dario"];
console.log("lunghezza array", students.length);
console.log("primo studente", students[0]);
console.log("terzo studente", students[2]);

console.log("ultimo studente", students[students.length - 1]);
const numbers = [10, 11, 12, 13];
const booleans = [true, false, true, false, false];
const studentsObjs = [
  { name: "Filippo", batch: "FS0824B" },
  { name: "Alessia", batch: "FS0824B" },
  { name: "Federico", batch: "FS0824B" },
  { name: "Dario", batch: "FS0824B" }
];

console.log(studentsObjs[1].name);

studentsObjs[1].surname = "Campanile";

// studentsObjs.pop();

studentsObjs.push({ name: "Davide", batch: "FS0824B" });
console.log(studentsObjs);

const coords = [
  [45.23, 23.5],
  [58.23, 31.5],
  [18.23, 10.5]
];

console.log(coords[0][1]);

// clonare un array
const studentsCopy = students.slice(); // slice senza parametri parte dalla prima posizione e arriva sempre in fondo,
//  generando un nuovo array con gli stessi elementi
studentsCopy.pop();
studentsCopy.pop();
studentsCopy.pop();

console.log(students);
console.log(studentsCopy);
