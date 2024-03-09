// Higer-order function
function registerGuest(name, callback1, callback2) {
    console.log(`Registering guest ${name}.`);
    callback1(name);
    callback2(name);
  }
// Regular function, cab be used in callback
function greet(name) {
    return console.log(`Welcome ${name}.`);
}
// Regular function, cab be used in callback
function notify(name) {
    return console.log(`Dear ${name}, your room will be available in 30 minutes.`);
}
// Calling high-order function, as we can see the 2nd and 3rd arguement are functions
registerGuest("Mango", greet, notify);

// This is normal function syntax
const numbers = [5, 10, 15, 20, 25];
numbers.forEach(function (number, index) {
    console.log(`Index : ${index}, the element value is ${number}.`);
});

// This is arrow function syntax
const numero = [5,10,15,20,25];
numero.forEach((num, ind) => {
    console.log(`Ang index ${ind} ay naglalaman ng numero ${num}.`);
});

// map and flatMap
const students = [
    { name: "Mango", courses: ["mathematics", "physics"] },
    { name: "Poly", courses: ["informatics", "mathematics"] },
    { name: "Kiwi", courses: ["physics", "biology"] },
];
// map
const checkMap = students.map(student => student.courses);
console.log(checkMap);
// flatMap
const checkFlat = students.flatMap(student => student.courses);
console.log(checkFlat);

// filter
const unique = checkFlat.filter(
    (course, index, array) => array.indexOf(course) === index
);
console.log(unique);

// filtering array of object
const lowScore = 50;
const highScore = 80;
const studyante = [
    {name: "Mango", score: 83},
    {name: "Poly", score: 59},
    {name: "Ajax", score: 37},
    {name: "Kiwi", score: 94},
    {name: "Houston", score: 64},
];
console.log("Test Score");
console.log(studyante);
// high
const best = studyante.filter(
    stud => stud.score >= highScore
);
console.log(`High Score: ${highScore}`);
console.log(best);
// low
const worse = studyante.filter(
    stud => stud.score <= lowScore
);
console.log(`Low Score: ${lowScore}`);
console.log(worse);
// average
const ave = studyante.filter (
    ({score}) => score >= lowScore && score < highScore
);
console.log(`Average Scores`);
console.log(ave);

// DOM Traversal
// adding li to ul
const myUL = document.querySelector(".modules");
const addedLi = document.createElement("li");
addedLi.textContent = "DOM Traversal";
myUL.append(addedLi);

// try to add value based on object or arrays
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const markup = technologies
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join("");
// innherhtml will remove replace everything
// myUL.innerHTML = markup;
const newUL = document.createElement("ul");
newUL.innerHTML = markup;
// const cont = document.querySelector(".cont");
// cont.append(newUL);
myUL.insertAdjacentElement("afterend", newUL);