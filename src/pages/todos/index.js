import { renderTodo, renderTodos } from "./templates.js";

const currentURLPath = new URL(window.location.href);

const todoQuery = currentURLPath.searchParams.get("todoId");

if (todoQuery) {
  renderTodo(todoQuery);
} else {
  renderTodos();
}
