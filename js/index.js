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

// const name1 = "Mango";
// console.log(name1.split(""));

// const redFruits = ["apple", "strawberry", "cherry"];

// const Fruit = "strawberry";

// if (redFruits.includes(Fruit)) {
//     console.log(`${Fruit} is a red fruit.`);
// }

// const avenger = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Antman", "Spiderman", "Doctor Strange", "Wanda", "Black Panther", "Vision"];
// console.log(avenger.slice(avenger.indexOf("Captain America"), avenger.indexOf("Black Panther")));
// console.log(avenger.slice(1,10));
// console.log(avenger);

// const bookShelf = {
//     books: ["Last Kingdom", "Kingdom", "Three Kingdom"],
//     getBooks() {
//         console.log(this);
//     },
// };
// bookShelf.getBooks();

// for (key in bookShelf) {
//     console.log(key);
// }

// console.log(bookShelf.books.length);

// let lastWeekTemps = [14, 25, 13];
// const currentWeekTemps = [15 ,25, 14];
// const concatTemps = lastWeekTemps.concat(currentWeekTemps);
// console.log(concatTemps);
// lastWeekTemps.splice(2,1,30)
// console.log(lastWeekTemps[2]);

// const adds = (...args) => { for (const arg of args) {console.log(arg)};};
// adds(2,3,4,5,7);

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// class Job {
//     constructor(jobclass, level, hp, mp, atk, mag, gender) {
//         this.jobclass = jobclass;
//         this.level = level;
//         this.hp = hp;
//         this.mp = mp;
//         this.atk = atk;
//         this.mag = mag;
//         this.gender = gender;
//     }
// }

// const mage = new Job ("wizard", 1, 100, 20, 10, 30, "male");
// const support = new Job ("priest", 1, 100, 20, 15, 20, "male");
// console.log(mage);
// console.log(support);

// console.log(document);
// const body = document.body;
// console.log(body);

// const list = document.querySelector(".list");
// console.log(list);

// const firstItem = list.firstElementChild;
// console.log(firstItem);

// const textEl = document.querySelector(".article-text");
// console.log(textEl.textContent); // text inside p.article-text

// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = "Welcome to the Philippines";

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//    event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
  
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${this.login.value}, Password: ${this.password.value}`);
//   form.reset();
// }
