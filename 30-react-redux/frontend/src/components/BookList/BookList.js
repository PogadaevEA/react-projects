import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import './BookList.css'
import { removeBook, toogleFavorite } from '../../redux/books/actionCreators'
import { selectTitleFilter } from '../../redux/slices/filterSlice'

const BookList = () => {
  const books = useSelector((state) => state.books)
  const titleFilter = useSelector(selectTitleFilter)
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(titleFilter.toLowerCase()))
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id))
  }

  const handleToogleFavorite = (id) => {
    dispatch(toogleFavorite(id))
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length ? (
        <ul>
          {filteredBooks.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToogleFavorite(book.id)}>{book.isFavorite ? <BsBookmarkStarFill className="star-icon" /> : <BsBookmarkStar className="star-icon" />}</span>
                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
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
