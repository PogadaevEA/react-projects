import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import './BookList.css'
import { removeBook, toggleFavorite, selectBooks } from '../../redux/slices/bookSlice'
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoritesFilter } from '../../redux/slices/filterSlice'

function filterByTitleAndAuthor(books, titleFilter, authorFilter, onlyFavorites) {
  return books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(titleFilter.toLowerCase())
    const authorMatch = book.author.toLowerCase().includes(authorFilter.toLowerCase())
    const onlyFavoritesMatch = book.isFavorite === onlyFavorites
    return titleMatch && authorMatch && onlyFavoritesMatch
  })
}

const BookList = () => {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavorites = useSelector(selectOnlyFavoritesFilter)
  const filteredBooks = filterByTitleAndAuthor(books, titleFilter, authorFilter, onlyFavorites)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const highlightMatch = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')

    return text.split(regex).map((substring, index) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span
            key={index}
            className="highlight"
          >
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length ? (
        <ul>
          {filteredBooks.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {highlightMatch(book.title, titleFilter)} by <strong>{highlightMatch(book.author, authorFilter)}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>{book.isFavorite ? <BsBookmarkStarFill className="star-icon" /> : <BsBookmarkStar className="star-icon" />}</span>
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
