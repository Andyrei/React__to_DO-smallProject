import React from 'react';
import './TodoList.css';

export const TodoList = (props) => {
  const { error, loading, onError, onLoading, onEmptyTodos} = props;

  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {!loading && onEmptyTodos()}
    </section>
  );
};
