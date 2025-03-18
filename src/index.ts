// typescript form submit
const form = document.querySelector("form");
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const list = document.getElementById("todolist")!

interface Todo {
  text: string;
  completed: boolean
}

const readTodos = (): Todo[] => {
  const todoJSON = localStorage.getItem("todos");
  if (todoJSON == null) return [];
  return JSON.parse(todoJSON);
}

const createToDo = (todo: Todo) => {
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
}

const saveToDos = (): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const todos: Todo[] = readTodos();
todos.forEach(createToDo);

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newToDoText = input.value;
  const newToDo: Todo = {
    text: newToDoText,
    completed: false
  };
  createToDo(newToDo);
  todos.push(newToDo);
  saveToDos();
  input.value = "";
}

form?.addEventListener("submit", handleSubmit);