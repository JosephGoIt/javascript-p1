const BASE_URL = "https://65f2d1ae105614e6549efd32.mockapi.io/todos";
const addBtnEl = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");
const myInput = document.getElementById("myInput");

// Function to fetch all todos
const getTodos = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

// Function to add a todo
const addTodo = async (newTodo) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTodo),
        });
        if (!response.ok) {
            throw new Error('Failed to add todo');
        }
    } catch (error) {
        console.error(error);
    }
};

// Function to delete a todo
const deleteTodo = async (todoId) => {
    try {
        const response = await fetch(`${BASE_URL}/${todoId}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error('Failed to delete todo');
        }
    } catch (error) {
        console.error(error);
    }
};

// Function to update a todo
const updateTodo = async (todoId, updatedTodo) => {
    try {
        const response = await fetch(`${BASE_URL}/${todoId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedTodo),
        });
        if (!response.ok) {
            throw new Error('Failed to update todo');
        }
    } catch (error) {
        console.error(error);
    }
};