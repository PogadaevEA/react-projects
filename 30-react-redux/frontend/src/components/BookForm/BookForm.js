import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './BookForm.css'
import { addBook, fetchBook } from '../../redux/slices/bookSlice'
import books from '../../data/books.json'
import createBookWithId from '../../utils/createBookWithId'
import { setError } from '../../redux/slices/errorSlice'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author }, 'manual')))

      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('Please fill title and author fields'))
    }
  }

  const handleAddRandomBookFromFile = () => {
    const randomIndex = Math.floor(Math.random() * books.length)

    dispatch(addBook(createBookWithId({ ...books[randomIndex] }, 'random')))
  }

  const handleAddRandomBookViaApi = () => dispatch(fetchBook())

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
          <button onClick={handleAddRandomBookFromFile}>Add random from json file</button>
          <button onClick={handleAddRandomBookViaApi}>Add random via API</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
