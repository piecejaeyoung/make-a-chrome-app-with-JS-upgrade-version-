const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login-input");
const greetings = document.querySelector(".greetings");

const todoForm1 = document.querySelector(".todo");
const todoInput1 = document.querySelector(".todo-input");
const todoList1 = document.querySelector(".todolist");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName";

function sayHello(USERNAME_KEY) {
  loginInput.classList.add(HIDDEN_CLASS);
  greetings.classList.remove(HIDDEN_CLASS);
  greetings.textContent = `HELLO, ${USERNAME_KEY}`;

  todoForm1.classList.remove(HIDDEN_CLASS);
  todoInput1.classList.remove(HIDDEN_CLASS);
  todoList1.classList.remove(HIDDEN_CLASS);
}

function userNameSubmit(event) {
  event.preventDefault();
  const userNameValue = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userNameValue);
  sayHello(userNameValue);
}

if (localStorage.getItem(USERNAME_KEY)) {
  sayHello(localStorage.getItem(USERNAME_KEY));
}

loginForm.addEventListener("submit", userNameSubmit);
