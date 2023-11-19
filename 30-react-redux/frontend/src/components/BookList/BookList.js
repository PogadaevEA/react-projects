import { useSelector } from 'react-redux'
import './BookList.css'
import state from '../../redux/store'

const BookList = () => {
  const books = useSelector((state) => state.books)

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books in Library</p>
      )}
    </div>
  )
}

export default BookList
