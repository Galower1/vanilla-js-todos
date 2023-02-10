import { USERNAME, PASSWORD } from "./config/credentials.js";

const loginFormElement = document.querySelector(".login-form");

loginFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const { target } = event;

  console.log(target.username.value);

  if (
    target.username.value === USERNAME &&
    target.password.value === PASSWORD
  ) {
    window.location = "todos.html";
  }
});
