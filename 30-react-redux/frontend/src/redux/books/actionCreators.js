import * as actionTypes from './actionTypes'

export const addBook = (newBook) => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  }
}

export const removeBook = (id) => {
  return {
    type: actionTypes.REMOVE_BOOK,
    payload: id,
  }
}

export const toogleFavorite = (id) => {
  return {
    type: actionTypes.TOOGLE_FAVORITE,
    payload: id,
  }
}
