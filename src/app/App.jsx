import { useState } from 'react'
import { TodoHeader } from '../components/TodoHeader'
import { TodoBrand } from '../components/TodoBrand'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoForm } from '../components/TodoForm'
import { useTodos } from './useTodos';
import './App.css'

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodos,
    setOpenModal,
    sincronizeTodos,
  } = useTodos();

return (
    <>
      <TodoHeader>
        <TodoBrand />
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <TodoEmpty />}>
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodos(todo.text);
            }}
            onDelete={() => {
              deleteTodos(todo.text);
            }}
          />
        )}
      </TodoList>



      {!!openModal && (
        <TodoForm addTodos={addTodos} setOpenModal={setOpenModal} />
      )}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
    </>
  )
}

export default App
