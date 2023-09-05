import { useState } from "react";

const TodoAdd = ({ onAddTodo }) => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  const addClick = () => {
    if (todoData.title === "" || todoData.description === "") {
      alert("All Fields are Required!!");
      return;
    }

    // onAddTodo is a prop received from a parent component, this line invokes the addTodo function that is passed as a prop with the todoData object as an argument. It effectively adds the new todo represented by todoData to the list of todos.

    onAddTodo(todoData);

    //clears the input fields and resets the status for a new task to be added.

    setTodoData({
      title: "",
      description: "",
      status: "pending",
    });
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "5px",
    width: "100%",
    fontSize: "1rem",
  };

  const buttonStyle = {
    marginTop: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  };

  return (
    <div>
      <label htmlFor="title">Title:</label>
      <br />
      <input
        onChange={(e) => {
          setTodoData({ ...todoData, title: e.target.value });
        }}
        type="text"
        id="todoTitle"
        name="title"
        value={todoData.title}
        style={inputStyle}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <br />
      <textarea
        onChange={(e) => {
          setTodoData({ ...todoData, description: e.target.value });
        }}
        name="description"
        id="todoDescription"
        cols="30"
        rows="5"
        value={todoData.description}
        style={inputStyle}
      ></textarea>
      <br />
      <label>Status:</label>
      <br />
      <input
        type="radio"
        name="status"
        value="pending"
        checked={todoData.status === "pending"}
        onChange={(e) => {
          setTodoData({ ...todoData, status: e.target.value });
        }}
      />
      <label htmlFor="pending">Pending</label>

      <input
        type="radio"
        name="status"
        value="completed"
        checked={todoData.status === "completed"}
        onChange={(e) => {
          setTodoData({ ...todoData, status: e.target.value });
        }}
      />
      <label htmlFor="completed">Completed</label>
      <br />
      <button onClick={addClick} style={buttonStyle}>
        Add Todo
      </button>
    </div>
  );
};

//TodoAdd.jsx is responsible for handling user input and adding new todos, 
export default TodoAdd;
