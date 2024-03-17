import { getTodos } from "./api.js";

const addBtnEl = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");
const myInput = document.getElementById("myInput");

function createLi (text, isDone=false, id){
    let li = document.createElement("li");
    li.innerText = text;
    myUL.appendChild(li);
}

function fillTodoList() {
    getTodos().then((todos) => {
        todos.forEach(({text, isDone, id}) => createLi(text, isDone, id));
    });
}

window.addEventListener('DOMContentLoaded', fillTodoList);