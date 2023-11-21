import { useDispatch, useSelector } from 'react-redux'
import { setTitleFilter, setAuthorFilter, setOnlyFavorites, resetFilters, selectTitleFilter, selectAuthorFilter, selectOnlyFavoritesFilter } from '../../redux/slices/filterSlice'

import './Filter.css'
const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavorites = useSelector(selectOnlyFavoritesFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleOnlyFavoritesChange = () => {
    dispatch(setOnlyFavorites())
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={onlyFavorites}
            onChange={handleOnlyFavoritesChange}
          />
          Only Favorites
        </label>
        </div>
        <button onClick={handleResetFilters}>Reset filter</button>
      </div>
    </div>
  )
}

export default Filter
