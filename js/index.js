// CONDIZIONALI if/else

let num = 6;

if (num >= 10) {
  console.log("il numero è maggiore o uguale a 10");

  if (num < 20) {
    console.log("il numero è compreso tra 10 e 20");
  } else {
    console.log("il numero è sicuramente superiore a 20");
  }
} else if (num >= 5) {
  console.log("il numero è compreso tra 5 e 10");
} else {
  console.log("il numero era sicuramente inferiore a 10");
}

const fruit = "papaya";

// if (fruit === "apple") {
//   console.log("hai trovato una mela");
// } else if (fruit === "papaya") {
//   console.log("toh guarda una papaya!");
// } else if (fruit === "kiwi") {
//   console.log("ecco un kiwi");
// } else if (fruit === "banana") {
//   console.log("le scimmie le adorano");
// } else {
//   console.log("non è nessuno di quelli che vorresti");
// }

// _____________________________________ SWITCH ________________________________

// sintassi

// switch(valueToBeCompared){
//     case value1:
//     code to execute;
//      break;

//     case value2:
//     code to execute;
//      break;

//     case value3:
//     code to execute;
//      break;

//     default:
//         code to execute
// }

// uno switch usato in modo canonico serve a valuare il valore di una variabile su una lista definita di valori possibili per uguaglianza stretta

switch (fruit) {
  case "apple":
    console.log("hai trovato una mela");
    break;

  case "papaya":
    console.log("toh guarda una papaya!");
    break;

  case "banana":
    console.log("le scimmie le adorano");
    break;

  case "kiwi":
    console.log("ecco un kiwi");

  default:
    console.log("non è nessuno di quelli che vorresti");
}

// switch con comparazioni

const height = 165;
const hairColor = "brown";
const eyesColor = "blue";

switch (true) {
  case height >= 160 && (hairColor === "brown" || hairColor === "blonde") && (eyesColor === "green" || eyesColor === "gray"):
    console.log("primo case");
    break;
  case height >= 160 && hairColor === "brown" && (eyesColor === "blue" || eyesColor === "brown"):
    console.log("secondo case");
    break;
  default:
    console.log("default case");
}

switch (true) {
  case height > 100 && height <= 180:
    console.log("primo case");
    break;

  case height >= 180 && height <= 250:
    console.log("secondo case");
    break;

  // ecc...
  default:
    console.log("default case");
}
