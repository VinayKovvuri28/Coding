function AddTodo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            aria-label="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" aria-label="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
