import { TODOS_URL } from "../config/credentials.js";

export function getTodos() {
  return fetch(TODOS_URL).then((response) => response.json());
}

export function getTodo(id) {
  return fetch(TODOS_URL + id).then((response) => response.json());
}
