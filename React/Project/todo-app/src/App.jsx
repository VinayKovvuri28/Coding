import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
function App() {
  let todoList = [
    { todoname: "Buy Milk", tododate: "26/12/2023" },
    { todoname: "Send Email", tododate: "31/12/2023" },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem items={todoList} />
      </center>
    </>
  );
}

export default App;
