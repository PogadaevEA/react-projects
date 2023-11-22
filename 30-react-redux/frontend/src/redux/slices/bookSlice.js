import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithId'

const initialState = []

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },
})


export const { addBook, removeBook, toggleFavorite } = booksSlice.actions
export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:4000/random-book')
    if (res?.data?.title && res?.data?.author) {
      dispatch(addBook(createBookWithId(res.data, 'api')))
    }
  } catch (error) {
    console.log('Error fetching random book: ', error.message || error)
  }
}
export const selectBooks = (state) => state.books
export default booksSlice.reducer
