import { useEffect, useState } from "react";
import TodoAdd from "../../components/todo/TodoAdd";
import TodoList from "../../components/todo/TodoList";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (newTodo) => {

    // Update the state with the newTodo
    // creates a new array updatedTodos by spreading the existing todos array and appending newTodo to it. This updated array represents the current list of todos.
     const updatedTodos = [...todos, newTodo];

    //  updates the state variable todos
    setTodos(updatedTodos);
    
    // Save the updatedTodos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  
  const deleteHistory = () => {
    localStorage.setItem("todos", JSON.stringify([]));
    setTodos([]);
    alert("History Cleared!");
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
    <>

      {/* This line renders the TodoAdd component and passes the addTodo function as a prop named onAddTodo. This enables the TodoAdd component to call addTodo when the user clicks the "Add Todo" button. */}
      <TodoAdd onAddTodo={addTodo} />

      <button onClick={deleteHistory} style={buttonStyle}>Delete All</button>

      <TodoList todos={todos} />
    </>
  );
};

export default TodoWrapper;

//Wrapper.jsx manages the state of the todo list and persists it to local storage. 