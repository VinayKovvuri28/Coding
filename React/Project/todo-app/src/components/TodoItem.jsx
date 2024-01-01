function TodoItem({ items }) {
  return (
    <div className="container">
      {items.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-6">{item.todoname}</div>
          <div className="col-4">{item.tododate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
