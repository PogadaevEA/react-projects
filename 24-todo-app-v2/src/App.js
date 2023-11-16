import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/todos/TodoForm'
import TodoList from './components/todos/TodoList'
import TodosActions from './components/todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHendler = (id) => {
    setTodos(() => todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(() => todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo })))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const clearTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <div>
        <h1 className="app-header">Todo App</h1>
      </div>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          clearTodos={clearTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHendler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && <h2 className="appFuter">{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  )
}

export default App
