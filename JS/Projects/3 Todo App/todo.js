let todoInput = document.querySelector('#todo-input');
let todoDate = document.querySelector('#todo-date');
let todoList = [];
// const today = new Date();
// let yyyy = today.getFullYear();
// let mm = today.getMonth() + 1; // Months start at 0!
// let dd = today.getDate();
// if (dd < 10) dd = '0' + dd;
// if (mm < 10) mm = '0' + mm;
// let currentDate = `${dd}-${mm}-${yyyy}`;

// Load todoList from localStorage on page load
window.onload =function() {
  let storedTodoList = localStorage.getItem('todoList');
  if (storedTodoList) {
    todoList = JSON.parse(storedTodoList);
    displayItems();
  }
};

function addTodo() {
  let todoInputValue = todoInput.value;
  let todoDateValue = todoDate.value;
  // console.log(todoInputValue);
  // console.log(todoDateValue);
  let newTodo = {item : todoInputValue, dueDate : todoDateValue};
  todoList.push(newTodo);
  // console.log(todoList.length);
  // for(let i=0; i < todoList.length; i++ ) {
  //   console.log(todoList[i]);
  // }

  // Save updated todoList to localStorage
  localStorage.setItem('todoList', JSON.stringify(todoList));

  todoInput.value = '';
  todoDate.value = '';

  displayItems();
}

function deleteTodo(index){
  // console.log(todoList[index]);
  todoList.splice(index, 1);
  // console.log(todoList);

  // Save updated todoList to localStorage
  localStorage.setItem('todoList', JSON.stringify(todoList));

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('#todoList-container');
  let newHtml = '';
  for(let i=0; i < todoList.length; i++ ) {
    // console.log(todoList[i]);
    let {item, dueDate} = todoList[i];
    let formattedDueDate = formatDate(dueDate);
    newHtml += `
    <div class="row grid-container todo-container">
      <div class="col-md-1">
        <output class="form-control">${i+1}.</output>
      </div>
      <div class="col-md-5">
        <output class="form-control">${item}</output>
      </div>
      <div class="col-md-4">
        <output class="form-control">${formattedDueDate}</output>
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-danger btn-todo" onclick="deleteTodo(${i})">
          Delete
        </button>
      </div>
    </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}

function resetTodo() {
  // Clear todoList and remove from localStorage
  todoList = [];
  localStorage.removeItem('todoList');
  displayItems();
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${day}-${month}-${year}`;
}

