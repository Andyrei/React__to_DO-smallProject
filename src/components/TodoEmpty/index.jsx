import React from 'react';
import './TodoEmpty.css';

function TodoEmpty() {
  return (
    <div className='emptyTodo'>
      <p>There are no ToDo's in here :|</p>
      <p>Write it down to not forget it, what are you waiting for !!</p>
    </div>
  );
}

export { TodoEmpty };
