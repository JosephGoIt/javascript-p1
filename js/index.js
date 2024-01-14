console.log("Test");
// const taas = prompt("Ano ang taas?");
// const lapad = prompt("Ano ang lapad?");
// const haba = prompt("Ano ang haba?");
// const messa = 'Ang area na may taas na ${taas} at lapad na ${lapad}  ay :';
// console.log(messa);

// const taas = 5;
// const lapad = 4;
// const haba = 3;
// const messa = 'Ang area na may taas na  ${taas}  at lapad na  ${lapad}  ay : ';
// console.log(messa, taas * lapad);

// const clients = ["Mango", "Banana", "Strawberry", "Cherry"];
// const checkFruit = prompt("What fruit you are look for?");
// for (let i=0; i<clients.length; i++){
//     if(checkFruit === clients[i]) {
//         console.log(`Fruit ${checkFruit} is available`);
//         break;
//     }
//     else {console.log(`Fruit ${checkFruit} is not available`)}
// }

// console.log("--------method-------");
// let message = "hello";
// console.log(message.split(""));

// const string = "Welcome to the future";
// let words = string.split("");
// console.log(words);
// for (let i=words.length - 1; i>=0; i--) {
//     console.log(words[i]);
// }


// function sum(nums) {
//     let total = 0;
//     for(let i = 0; i < nums.length; i++) {
//         total =+ nums[i];
//     }
//     return total;
// }

// console.log(sum([5,6,7,8,9]));


// function nFib(n) {
//     for (let i=0; i<n; i++) {
//         if (i>1){
//             valueToPrint = valueToPrint + 
//         }
//     }
// }

// function slugify(title) {
//     // Change code below this line
//     let newtitle;
//     newtitle = title.toLowerCase();
//     newtitle = newtitle.split(" ");
//     newtitle = newtitle.join("-");
//     return newtitle;
//     // Change code above this line
//   }

// console.log(slugify('Arrays for begginers'));

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let newArray;
//   newArray = firstArray.concat(secondArray);
//   if ((newArray.length-1) <= maxLength) {
//     return newArray;
//   }
//   return newArray.slice(0, maxLength);
//     // Change code above this line
//   }

//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//   console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
//   console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));