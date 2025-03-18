"use strict";
// typescript form submit
const form = document.querySelector("form");
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const list = document.getElementById("todolist");
const readTodos = () => {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON == null)
        return [];
    return JSON.parse(todoJSON);
};
const createToDo = (todo) => {
    const { text, completed } = todo;
    const newLI = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveToDos();
    });
    newLI.append(text);
    newLI.append(checkbox);
    list.append(newLI);
};
const saveToDos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const todos = readTodos();
todos.forEach(createToDo);
const handleSubmit = (e) => {
    e.preventDefault();
    const newToDoText = input.value;
    const newToDo = {
        text: newToDoText,
        completed: false
    };
    createToDo(newToDo);
    todos.push(newToDo);
    saveToDos();
    input.value = "";
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);
