import { getTodo, getTodos } from "../../utils/endpoints.js";

const root = document.querySelector("#root");

export async function renderTodo(id) {
  const todo = await getTodo(id);

  const todosTemplate = `
    <h1>Todo</h1>
        <ul class="todos-list">
            <li>${todo.title}</li>
        </ul>
    </ul>
`;

  root.innerHTML = todosTemplate;
}

export async function renderTodos() {
  const todos = await getTodos();

  let todoListItems = "";

  for (const todo of todos) {
    todoListItems += `
        <tr>
          <td>${todo.userId}</td>
          <td>${todo.id}</td>
          <td><a href="?todoId=${todo.id}">${todo.title}</a></td>
          <td>${todo.completed}</td>
        </tr>
    `;
  }

  const todosTemplate = `
    <h1>Todos</h1>
    <table class="tg">
      <thead>
        <tr>
          <th>userId</th>
          <th>todoId</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        ${todoListItems}
      </tbody>
    </table>
    </ul>
  `;

  root.innerHTML = todosTemplate;
}
