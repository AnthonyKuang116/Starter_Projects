const TODOS_URL = `https://jsonplace-univclone.herokuapp.com/todos`;

function fetchTodos() {
  return fetch(TODOS_URL)
    .then(function (result) {
      return result.json();
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetchTodos().then(function (data) {
  renderAllTodos(data);
});

function renderAllTodos(todos) {
  todos
    .filter(function (todo) {
      return todo.completed === true;
    })
    .forEach(function (todo) {
      $(".complete").append(renderTodo(todo));
    });

  todos
    .filter(function (todo) {
      return todo.completed === false;
    })
    .forEach(function (todo) {
      $(".incomplete").append(renderTodo(todo));
    });
}

function renderTodo(todo) {
    return $(`<div class="todo">
                <h3>${todo.title}</h3>
                <footer>
                    <button>${todo.completed ? "UNDO": "DONE"}</button>
                </footer>
            </div>`);
}

function bootstrap() {
  fetchTodos().then(renderAllTodos);
}
bootstrap();
