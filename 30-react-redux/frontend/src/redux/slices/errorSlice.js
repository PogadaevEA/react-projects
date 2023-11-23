import { createSlice } from '@reduxjs/toolkit'
import { fetchBook } from './bookSlice'

const initialState = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (action) => {
      return action.payload
    },
    clearError: () => {
      return initialState
    },
  },
})

export const { setError, clearError } = errorSlice.actions

export const selectError = (state) => state.error

export default errorSlice.reducer
