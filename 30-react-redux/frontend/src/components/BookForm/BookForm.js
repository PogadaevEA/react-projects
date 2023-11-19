import { useState } from 'react'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title && author) {
        // dispacth action
        console.log(title, author)
        setTitle('')
        setAuthor('')
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label htmlFor="author">
            Author:
            <input
              type="text"
              id="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </label>
          <button type="submit">Add book</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
