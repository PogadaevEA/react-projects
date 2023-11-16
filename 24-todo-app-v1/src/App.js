import { useState } from 'react'
import './App.css'
import TodoForm from './components/todos/TodoForm'
import TodoList from './components/todos/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHendler = (index) => {
    setTodos(() => todos.filter((_, i) => i !== index))
  }

  return (
    <div className="App">
      <div>
        <h1 className="app-header">Todo App</h1>
      </div>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHendler}
      />
    </div>
  )
}

export default App
