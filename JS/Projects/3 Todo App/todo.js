let todoInput = document.querySelector('#todo-input');
let todoDate = document.querySelector('#todo-date');
// let todoList = [];
const today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
let currentDate = `${dd}-${mm}-${yyyy}`;
let todoList = [
  {
    item: 'Buy Milk',
    dueDate: currentDate
  },
  {
    item: 'Go to College',
    dueDate: currentDate
  }
];

displayItems();

function addTodo() {
  let todoInputValue = todoInput.value;
  let todoDateValue = todoDate.value;
  // console.log(todoInputValue);
  // console.log(todoDateValue);
  todoList.push({item : todoInputValue, dueDate : todoDateValue});
  // console.log(todoList.length);
  // for(let i=0; i < todoList.length; i++ ) {
  //   console.log(todoList[i]);
  // }
  todoInput.value = '';
  todoDate.value = '';
  displayItems();
}

function deleteTodo(index){
  // console.log(todoList[index]);
  todoList.splice(index, 1);
  // console.log(todoList);
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('#todoList-container');
  let newHtml = '';
  for(let i=0; i < todoList.length; i++ ) {
    // console.log(todoList[i]);
    let {item, dueDate} = todoList[i];
    newHtml += `
    <div class="row grid-container todo-container">
      <div class="col-md-1">
        <output class="form-control">${i+1}.</output>
      </div>
      <div class="col-md-5">
        <output class="form-control">${item}</output>
      </div>
      <div class="col-md-4">
        <output class="form-control">${dueDate}</output>
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

}
