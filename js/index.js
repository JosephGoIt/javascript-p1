console.log("Test");
// const taas = prompt("Ano ang taas?");
// const lapad = prompt("Ano ang lapad?");
// const haba = prompt("Ano ang haba?");
// const messa = 'Ang area na may taas na ${taas} at lapad na ${lapad}  ay :';
// console.log(messa);

const taas = 5;
const lapad = 4;
const haba = 3;
const messa = 'Ang area na may taas na  ${taas}  at lapad na  ${lapad}  ay : ';
console.log(messa, taas * lapad);

// const clients = ["Mango", "Banana", "Strawberry", "Cherry"];
// const checkFruit = prompt("What fruit you are look for?");
// for (let i=0; i<clients.length; i++){
//     if(checkFruit === clients[i]) {
//         console.log(`Fruit ${checkFruit} is available`);
//         break;
//     }
//     else {console.log(`Fruit ${checkFruit} is not available`)}
// }

console.log("--------method-------");
let message = "hello";
console.log(message.split(""));

const string = "Welcome to the future";
let words = string.split("");
console.log(words);
for (let i=words.length - 1; i>=0; i--) {
    console.log(words[i]);
}


