import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodos, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(newTodoValue);
    setOpenModal(false);
  };

  return (
    <div className="TodoForm-mainContainer">
      <form onSubmit={onSubmit}>
        <label>Write down what you have To Do!</label>
        <input type="text" value={newTodoValue} onChange={onChange} placeholder='Write your task here' />
        <div className='TodoForm-buttonContainer'>
          <button type='button' className='TodoForm-button TodoForm-button-cancel' onClick={onCancel}>
            Discard
          </button>
          <button className='TodoForm-button TodoForm-button-add'>
            Add it
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
