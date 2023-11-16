import styles from './Todo.module.css'
import { RiTodoFill } from 'react-icons/ri'

function Todo(props) {
  const { text, index, deleteTodo } = props

  return (
    <div
      className={styles.todo}
      onDoubleClick={() => deleteTodo(index)}
    >
      <RiTodoFill className={styles.todoIcon}/>
      <div className={styles.todoText}>{text}</div>
    </div>
  )
}

export default Todo
