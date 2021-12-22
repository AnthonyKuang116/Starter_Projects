let allTodos;

let pendingTodos, completedTodos, expiredTodos;

//checks the date of the todo
function isCurrent(todo) {
  const todoDueDate = new Date(todo.dueDate);
  const now = new Date();

  return now < todoDueDate;
}

//spliting Todos in different columns of pending, completed, and expired
function splitTodos() {
  pendingTodos = allTodos.filter((pending) => {
    return (pending.isComplete == false && isCurrent(pending))
  })
  completedTodos = allTodos.filter((completed) => {
    return completed.isComplete == true
  })
  expiredTodos = allTodos.filter((expired) => {
    return (expired.isComplete == false && !isCurrent(expired))
  })
}


//creating a new element for todos 
function createElementFromTodo(todo) {
    // builds an element and returns it
    let newTodo = $('<div class="todo"></div>');
    let todoH3 = $(`<h3><span class="title">${todo.title}</span><span class="due-date">${todo.dueDate}</span></h3>`);
    newTodo.append(todoH3);
    let todoPre = $(`<pre>${todo.description}</pre>`)
    newTodo.append(todoPre);

    let todoFooter = $('<footer class="actions"></footer>');

    todo.isComplete === false && todoFooter.append($('<button class="action complete">Complete</button>'));
    let deleteButton = $('<button class="action delete">Delete</button>');
    todoFooter.append(deleteButton);

    newTodo.append(todoFooter);
    newTodo.data("todo", todo);
    return newTodo;
}

//complete button clicker that slides the element up
$('main').on('click', '.action.complete', function () {
  let parent = $(this).closest('.todo');

  let grabbedObj = parent.data("todo")
  grabbedObj["isComplete"] = true

  parent.slideUp(function(){
    todoData();
  })
});

//delete button of the clicker that deletes the information stored in that index
$('main').on('click', '.action.delete', function(){
  let parent = $(this).closest('.todo')
  let grabbedObj = parent.data("todo")
  let index = allTodos.indexOf(grabbedObj)
  allTodos.splice(index, 1)
  todoData();
})

//renders the content
function renderTodos() {
  $('main .content').empty();
  pendingTodos.forEach(function(todo){
    $('.pending-todos').append(createElementFromTodo(todo))
  })
  completedTodos.forEach(function(todo){
    $('.completed-todos').append(createElementFromTodo(todo))
  })
  expiredTodos.forEach(function(todo){
    $('.expired-todos').append(createElementFromTodo(todo))
  })
}

//left bar clicker signaling it to pop out
$('.left-drawer').click(function(){
  clickedObj = $(this);
  if(clickedObj.hasClass("left-drawer")){
    $('#app').toggleClass("drawer-open");
  }
})

//click handlers for creating new todos, removing expired and completed todos
//adds class "open"
$('.add-todo').click(function(){
  $('.modal').addClass("open");
})

$('.remove-completed').click(function(){
  let unwantedIndex = allTodos.filter((unwanted) => (unwanted.isCompelete === true))
  allTodos.splice(unwantedIndex, 1)
  todoData()
})
$('.remove-expired').click(function(){
  let nonExpiredTodos = allTodos.filter((todo) => (isCurrent(todo)))
  // console.log(removeExpiredIndex)
  // allTodos.splice(removeExpiredIndex, 1)
  allTodos = nonExpiredTodos
  todoData()
})


//modal buttons
$('.create-todo').click(function(event){
  $('.modal').removeClass("open");
  event.preventDefault();
  allTodos.unshift(createTodoFromForm())
  $(this).trigger("reset");
  todoData()
})
$('.cancel-create-todo').click(function(){
  $('.modal').removeClass("open")
})

//keys used for creating new todo
function createTodoFromForm(){
  let formObj = {}
  formObj.title = $('#todo-title').val();
  formObj.dueDate = $('#todo-due-date').val();
  formObj.description = $('#todo-description').val();
  formObj.isComplete = false;
  console.log(formObj)
  return formObj;
}

//data
function storeData(){
  localStorage.setItem("allTodos", JSON.stringify(allTodos))
}
function retrieveData(){
  const storageValue = localStorage.getItem("allTodos") ? JSON.parse(localStorage.getItem("allTodos")) : null
  if (storageValue !== null && storageValue.length > 0){
    return storageValue;
  }
  else{
    return fetchDefaultTodos()
  }
}

//default todo
function fetchDefaultTodos(){
  return basicTodos = [
    {
      title: "Use the bar on the left side to create and remove todos.", 
      description: "When you compelete a todo in the pending column, move it to the other columns by clicking the complete button",
      dueDate: "Click to expand bar",
      isComplete: true 
    }
  ]
}

function todoData(){
  storeData();
  splitTodos();
  renderTodos();
}
allTodos = retrieveData()
console.log(allTodos)
todoData();