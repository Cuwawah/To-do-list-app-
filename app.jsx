import './App.css';
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleRemoveAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-list">
      <h1> To Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <p>Character Count: {newTodo.length}</p>
      <button className="add-btn" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button className="remove-all-btn" onClick={handleRemoveAllTodos}>
        Remove All
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              className="remove-btn"
              onClick={() => handleRemoveTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
