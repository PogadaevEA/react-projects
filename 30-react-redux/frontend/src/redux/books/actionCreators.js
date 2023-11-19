import * as actionTypes from './actionTypes'

export const addBook = (newBook) => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  }
}

export const removeBook = (bookId) => {
  return {
    type: actionTypes.REMOVE_BOOK,
    payload: bookId,
  }
}
